'use client'

import Link from 'next/link'

interface QuadrantGridProps {
  highlighted?: string[]
  annotation?: string
  clickable?: boolean
}

const quadrants = [
  { id: 'Q7', name: 'Proxy', row: 0, col: 0 },
  { id: 'Q8', name: 'Int. Proxy', row: 0, col: 1 },
  { id: 'Q9', name: 'Orchestrator', row: 0, col: 2 },
  { id: 'Q4', name: 'Co-Create', row: 1, col: 0 },
  { id: 'Q5', name: 'Curator', row: 1, col: 1 },
  { id: 'Q6', name: 'Partner', row: 1, col: 2 },
  { id: 'Q1', name: 'Basic', row: 2, col: 0 },
  { id: 'Q2', name: 'Smart', row: 2, col: 1 },
  { id: 'Q3', name: 'Intelligent', row: 2, col: 2 },
]

const rowLabels = ['Adapt', 'Augment', 'Assist']
const colLabels = ['Static', 'Adaptive', 'Autonomous']

export function QuadrantGrid({
  highlighted = [],
  annotation,
  clickable = true
}: QuadrantGridProps) {
  return (
    <div className="my-8">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          {/* Column headers */}
          <div className="grid grid-cols-4 gap-1 mb-1">
            <div className="p-2" /> {/* Empty corner */}
            {colLabels.map((label) => (
              <div
                key={label}
                className="p-2 text-center text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                {label}
              </div>
            ))}
          </div>

          {/* Grid rows */}
          {[0, 1, 2].map((rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-4 gap-1 mb-1">
              {/* Row label */}
              <div className="p-2 flex items-center justify-end pr-4">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {rowLabels[rowIndex]}
                </span>
              </div>

              {/* Quadrant cells */}
              {[0, 1, 2].map((colIndex) => {
                const quadrant = quadrants.find(
                  (q) => q.row === rowIndex && q.col === colIndex
                )!
                const isHighlighted = highlighted.includes(quadrant.id)

                const cellContent = (
                  <div
                    className={`
                      p-4 rounded-lg border-2 transition-all
                      ${isHighlighted
                        ? 'bg-teal-100 dark:bg-teal-900/30 border-teal-500'
                        : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                      }
                      ${clickable ? 'hover:border-teal-400 hover:shadow-md cursor-pointer' : ''}
                    `}
                  >
                    <div className={`
                      text-lg font-bold mb-1
                      ${isHighlighted ? 'text-teal-700 dark:text-teal-300' : 'text-gray-700 dark:text-gray-300'}
                    `}>
                      {quadrant.id}
                    </div>
                    <div className={`
                      text-sm
                      ${isHighlighted ? 'text-teal-600 dark:text-teal-400' : 'text-gray-500 dark:text-gray-400'}
                    `}>
                      {quadrant.name}
                    </div>
                  </div>
                )

                return clickable ? (
                  <Link
                    key={quadrant.id}
                    href="/frameworks/9q/quadrants"
                    className="no-underline"
                  >
                    {cellContent}
                  </Link>
                ) : (
                  <div key={quadrant.id}>{cellContent}</div>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Annotation */}
      {annotation && (
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic text-center">
          {annotation}
        </p>
      )}

      {/* Legend */}
      {highlighted.length > 0 && (
        <div className="mt-4 flex items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-teal-100 dark:bg-teal-900/30 border-2 border-teal-500" />
            <span className="text-gray-600 dark:text-gray-400">Highlighted</span>
          </div>
        </div>
      )}
    </div>
  )
}
