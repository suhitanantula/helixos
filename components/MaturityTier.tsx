import Link from 'next/link'

interface MaturityTierProps {
  tier: 'assist' | 'augment' | 'adapt'
  current?: boolean
  progress?: number // 0-100
}

const tierData = {
  assist: {
    name: 'Assist',
    level: 1,
    description: 'AI as a tool',
    color: 'blue',
    href: '/frameworks/aaa/assist'
  },
  augment: {
    name: 'Augment',
    level: 2,
    description: 'AI as a collaborator',
    color: 'teal',
    href: '/frameworks/aaa/augment'
  },
  adapt: {
    name: 'Adapt',
    level: 3,
    description: 'AI as an agent',
    color: 'purple',
    href: '/frameworks/aaa/adapt'
  }
}

export function MaturityTier({ tier, current = false, progress }: MaturityTierProps) {
  const data = tierData[tier]

  return (
    <Link href={data.href} className="block no-underline group">
      <div className={`
        p-4 rounded-lg border-2 transition-all
        ${current
          ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20'
          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
        }
        hover:border-teal-400 hover:shadow-md
      `}>
        <div className="flex items-center gap-3 mb-2">
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
            ${current
              ? 'bg-teal-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
            }
          `}>
            {data.level}
          </div>
          <div>
            <h4 className={`
              font-bold
              ${current
                ? 'text-teal-700 dark:text-teal-300'
                : 'text-gray-700 dark:text-gray-300'
              }
            `}>
              {data.name}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {data.description}
            </p>
          </div>
        </div>

        {progress !== undefined && (
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-500 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
