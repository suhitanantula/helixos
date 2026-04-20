import { createMcpHandler } from 'agents/mcp';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

type FrameworkRecord = {
  slug: string;
  name?: string;
  title?: string;
  summary?: string;
  concepts?: string[];
  memorablePhrases?: string[];
  path?: string;
};

type BookChapterRecord = {
  slug: string;
  title: string;
  part?: string | null;
  summary?: string;
  concepts?: string[];
  path?: string;
};

type BookRecord = {
  slug: string;
  title: string;
  chapterCount: number;
  summary?: string;
  themes?: string[];
  knowledgeKernelPath?: string;
  chapters?: BookChapterRecord[];
};

type FrameworkCatalog = {
  frameworks: FrameworkRecord[];
};

type BookCatalog = {
  books: BookRecord[];
};

type AxisLabel = 'assist' | 'augment' | 'adapt' | 'structured' | 'dynamic' | 'complex';

type DiagnosticCell = {
  quadrant: string;
  label: string;
  agency: AxisLabel;
  work: AxisLabel;
  explanation: string;
  nextMove: string;
};

const DEFAULT_BASE_URL = 'https://os.suhitanantula.com/api';

const CELL_MAP: Record<string, DiagnosticCell> = {
  'assist:structured': {
    quadrant: 'Q1',
    label: 'The Operator',
    agency: 'assist',
    work: 'structured',
    explanation: 'AI is helping with clearly defined work. The shape of the task stays stable and humans still own the decisions.',
    nextMove: 'Push for repeatability, clear guardrails, and strong human skill retention before moving up the grid.',
  },
  'augment:structured': {
    quadrant: 'Q2',
    label: 'The Tactician',
    agency: 'augment',
    work: 'structured',
    explanation: 'AI narrows the option space inside a fixed process, but a human still clears the decision.',
    nextMove: 'Strengthen independent human judgment so the team does not drift into rubber-stamping recommendations.',
  },
  'adapt:structured': {
    quadrant: 'Q3',
    label: 'The Automator',
    agency: 'adapt',
    work: 'structured',
    explanation: 'AI is effectively automating structured work while humans govern exceptions and outcomes.',
    nextMove: 'Invest in governance, drift detection, and exception review, because this cell is often over-sold as transformation.',
  },
  'assist:dynamic': {
    quadrant: 'Q4',
    label: 'The Weaver',
    agency: 'assist',
    work: 'dynamic',
    explanation: 'AI is contributing threads into live human work, but the human voice and sequencing still dominate.',
    nextMove: 'Use AI to widen exploration without letting the system flatten voice, sequencing, or judgment.',
  },
  'augment:dynamic': {
    quadrant: 'Q5',
    label: 'The Partner',
    agency: 'augment',
    work: 'dynamic',
    explanation: 'Human and AI are in genuine mutual iteration. The result depends on repeated back-and-forth, not just one-sided assistance.',
    nextMove: 'Turn the collaboration into a durable operating pattern with memory, review loops, and explicit quality gates.',
  },
  'adapt:dynamic': {
    quadrant: 'Q6',
    label: 'The Optimiser',
    agency: 'adapt',
    work: 'dynamic',
    explanation: 'AI is making many fast decisions inside an adaptive system, while humans mostly manage objectives and constraints.',
    nextMove: 'Audit what is being optimised and what is being ignored; governance failures at this level compound very quickly.',
  },
  'assist:complex': {
    quadrant: 'Q7',
    label: 'The Navigator',
    agency: 'assist',
    work: 'complex',
    explanation: 'AI is increasing legibility in an ambiguous environment, but humans still make the meaningful calls.',
    nextMove: 'Use AI for telemetry and synthesis, then protect space for human interpretation and situational judgment.',
  },
  'augment:complex': {
    quadrant: 'Q8',
    label: 'The Explorer',
    agency: 'augment',
    work: 'complex',
    explanation: 'AI is expanding the search space in uncertain terrain, helping humans explore patterns and possibilities they could not cover alone.',
    nextMove: 'Capture what the team is learning so exploration turns into usable doctrine instead of transient insight.',
  },
  'adapt:complex': {
    quadrant: 'Q9',
    label: 'The Conductor',
    agency: 'adapt',
    work: 'complex',
    explanation: 'AI is operating as part of a high-agency, high-complexity orchestration model with humans steering at the system level.',
    nextMove: 'Treat this as an orchestration problem: shared context, authority boundaries, and trust capital matter more than raw model power.',
  },
};

const AGENCY_KEYWORDS: Record<AxisLabel, string[]> = {
  assist: ['assist', 'support', 'copilot', 'draft', 'suggest', 'helper', 'human approves', 'human review', 'human decides'],
  augment: ['augment', 'partner', 'collaborate', 'shared', 'iterate', 'co-create', 'co-create', 'co-intelligence', 'human in the loop'],
  adapt: ['adapt', 'autonomous', 'automatic', 'automate', 'optimise', 'optimize', 'self-serve', 'system decides', 'agentic'],
  structured: [],
  dynamic: [],
  complex: [],
};

const WORK_KEYWORDS: Record<AxisLabel, string[]> = {
  assist: [],
  augment: [],
  adapt: [],
  structured: ['structured', 'repeatable', 'stable', 'defined', 'workflow', 'rule', 'process', 'routine', 'predictable'],
  dynamic: ['dynamic', 'iterative', 'changing', 'loop', 'feedback', 'conversation', 'ongoing', 'adaptive'],
  complex: ['complex', 'ambiguous', 'uncertain', 'emergent', 'strategic', 'crisis', 'novel', 'explore', 'discovery'],
};

function createServer() {
  const server = new McpServer({
    name: 'helixos-mcp',
    version: '1.0.0',
  });

  server.tool(
    'list_frameworks',
    'List the Helix OS frameworks available in the framework catalog.',
    {},
    async () => {
      const catalog = await loadFrameworkCatalog();
      const frameworks = catalog.frameworks.map((framework) => ({
        slug: framework.slug,
        name: framework.name ?? framework.title ?? framework.slug,
        summary: framework.summary ?? '',
        concepts: framework.concepts ?? [],
      }));

      return jsonToolResult({
        count: frameworks.length,
        frameworks,
      });
    },
  );

  server.tool(
    'get_framework',
    'Fetch a single framework by title, slug, or close name match.',
    { name: z.string().min(1) },
    async ({ name }) => {
      const catalog = await loadFrameworkCatalog();
      const framework = findFramework(catalog.frameworks, name);

      if (!framework) {
        return jsonToolResult({
          found: false,
          query: name,
          message: `No framework matched "${name}".`,
        });
      }

      return jsonToolResult({
        found: true,
        framework,
      });
    },
  );

  server.tool(
    'list_books',
    'List the Helix OS books, their chapter counts, themes, and kernel paths.',
    {},
    async () => {
      const catalog = await loadBookCatalog();
      return jsonToolResult({
        count: catalog.books.length,
        books: catalog.books.map((book) => ({
          slug: book.slug,
          title: book.title,
          chapterCount: book.chapterCount,
          summary: book.summary ?? '',
          themes: book.themes ?? [],
          knowledgeKernelPath: book.knowledgeKernelPath ?? null,
        })),
      });
    },
  );

  server.tool(
    'run_9q_diagnostic',
    'Classify freeform answers onto the 9Q Grid and return the likely cell, rationale, and next move.',
    { answers: z.record(z.string(), z.string()) },
    async ({ answers }) => {
      const diagnostic = await run9QDiagnostic(answers);
      return jsonToolResult(diagnostic);
    },
  );

  return server;
}

async function loadFrameworkCatalog(): Promise<FrameworkCatalog> {
  return fetchCatalog<FrameworkCatalog>('frameworks.json');
}

async function loadBookCatalog(): Promise<BookCatalog> {
  return fetchCatalog<BookCatalog>('books.json');
}

async function fetchCatalog<T>(fileName: string): Promise<T> {
  const baseUrl = DEFAULT_BASE_URL.replace(/\/+$/, '');
  const response = await fetch(`${baseUrl}/${fileName}`, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Unable to load ${fileName} from ${baseUrl}: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}

function findFramework(frameworks: FrameworkRecord[], query: string) {
  const normalizedQuery = normalize(query);
  const exact = frameworks.find((framework) => {
    const candidates = [framework.slug, framework.name, framework.title].filter(Boolean) as string[];
    return candidates.some((candidate) => normalize(candidate) === normalizedQuery);
  });

  if (exact) {
    return exact;
  }

  return frameworks.find((framework) => {
    const candidates = [framework.slug, framework.name, framework.title].filter(Boolean) as string[];
    return candidates.some((candidate) => normalize(candidate).includes(normalizedQuery) || normalizedQuery.includes(normalize(candidate)));
  });
}

async function run9QDiagnostic(answers: Record<string, string>) {
  const flattened = Object.entries(answers)
    .map(([key, value]) => `${key}: ${value}`)
    .join(' \n ')
    .toLowerCase();

  const agencyScores = scoreAxis(flattened, AGENCY_KEYWORDS, ['assist', 'augment', 'adapt']);
  const workScores = scoreAxis(flattened, WORK_KEYWORDS, ['structured', 'dynamic', 'complex']);

  const agency = highestScore(agencyScores);
  const work = highestScore(workScores);
  const cell = CELL_MAP[`${agency}:${work}`];
  const confidence = diagnosticConfidence(agencyScores, workScores);
  const relevant = await relevantReading(cell);

  return {
    quadrant: cell.quadrant,
    label: cell.label,
    agency,
    work,
    confidence,
    explanation: cell.explanation,
    nextMove: cell.nextMove,
    scoring: {
      agency: agencyScores,
      work: workScores,
    },
    matchedSignals: extractSignals(flattened),
    recommendedReading: relevant,
  };
}

function scoreAxis(
  source: string,
  keywordMap: Record<AxisLabel, string[]>,
  labels: AxisLabel[],
): Record<string, number> {
  const scores: Record<string, number> = {};

  for (const label of labels) {
    scores[label] = keywordMap[label].reduce((score, keyword) => {
      return score + countOccurrences(source, keyword);
    }, 0);
  }

  if (Object.values(scores).every((value) => value === 0)) {
    for (const label of labels) {
      scores[label] = 1;
    }
  }

  return scores;
}

function highestScore(scores: Record<string, number>): AxisLabel {
  return Object.entries(scores)
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))[0][0] as AxisLabel;
}

function diagnosticConfidence(agencyScores: Record<string, number>, workScores: Record<string, number>) {
  const agency = topTwoGap(agencyScores);
  const work = topTwoGap(workScores);
  return Number((((agency + work) / 2) * 100).toFixed(1));
}

function topTwoGap(scores: Record<string, number>) {
  const ordered = Object.values(scores).sort((left, right) => right - left);
  const top = ordered[0] ?? 0;
  const next = ordered[1] ?? 0;

  if (top === 0) {
    return 0;
  }

  return Math.min(1, (top - next + 1) / (top + 1));
}

function countOccurrences(source: string, needle: string) {
  const regex = new RegExp(`\\b${escapeRegex(needle.toLowerCase())}\\b`, 'g');
  return [...source.matchAll(regex)].length;
}

function extractSignals(flattened: string) {
  const signals = [
    ...Object.values(AGENCY_KEYWORDS).flat(),
    ...Object.values(WORK_KEYWORDS).flat(),
  ].filter(Boolean);

  return signals.filter((signal) => flattened.includes(signal)).slice(0, 12);
}

async function relevantReading(cell: DiagnosticCell) {
  const [frameworkCatalog, bookCatalog] = await Promise.all([
    loadFrameworkCatalog(),
    loadBookCatalog(),
  ]);

  const frameworkHits = frameworkCatalog.frameworks
    .filter((framework) => {
      const haystack = normalize([
        framework.slug,
        framework.name,
        framework.title,
        framework.summary,
        ...(framework.concepts || []),
      ].filter(Boolean).join(' '));

      return (
        haystack.includes(normalize(cell.label)) ||
        haystack.includes(normalize(cell.quadrant)) ||
        haystack.includes(normalize(cell.agency)) ||
        haystack.includes(normalize(cell.work)) ||
        haystack.includes('helix')
      );
    })
    .slice(0, 3)
    .map((framework) => ({
      slug: framework.slug,
      title: framework.title ?? framework.name ?? framework.slug,
      summary: framework.summary ?? '',
    }));

  const bookHits = bookCatalog.books
    .map((book) => ({
      slug: book.slug,
      title: book.title,
      chapterCount: book.chapterCount,
      summary: book.summary ?? '',
      matchingChapters: (book.chapters || [])
        .filter((chapter) => {
          const haystack = normalize([
            chapter.title,
            chapter.summary,
            ...(chapter.concepts || []),
          ].filter(Boolean).join(' '));
          return haystack.includes(normalize(cell.label)) || haystack.includes(normalize(cell.quadrant)) || haystack.includes(normalize(cell.work));
        })
        .slice(0, 3)
        .map((chapter) => chapter.title),
    }))
    .slice(0, 2);

  return {
    frameworks: frameworkHits,
    books: bookHits,
  };
}

function jsonToolResult<T extends Record<string, unknown>>(payload: T) {
  const text = JSON.stringify(payload, null, 2);
  return {
    content: [{ type: 'text' as const, text }],
    structuredContent: payload,
  };
}

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const mcpHandler = (request: Request, env: unknown, ctx: ExecutionContext) =>
  createMcpHandler(createServer())(request, env, ctx);

export default {
  async fetch(request: Request, env: unknown, ctx: ExecutionContext) {
    const url = new URL(request.url);

    if (url.pathname === '/mcp') {
      return mcpHandler(request, env, ctx);
    }

    if (url.pathname === '/health') {
      return Response.json({ ok: true });
    }

    return Response.json({
      name: 'helixos-mcp',
      endpoint: '/mcp',
      tools: ['list_frameworks', 'get_framework', 'list_books', 'run_9q_diagnostic'],
    });
  },
};
