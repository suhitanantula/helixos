import Link from 'next/link'

interface FrameworkCardProps {
  name: string
  question: string
  description?: string
  href: string
  tags?: string[]
}

export function FrameworkCard({
  name,
  question,
  description,
  href,
  tags = []
}: FrameworkCardProps) {
  return (
    <Link
      href={href}
      className="block no-underline group"
    >
      <div className="p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700
                      bg-white dark:bg-gray-800
                      hover:border-teal-400 hover:shadow-lg
                      transition-all duration-200">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100
                       group-hover:text-teal-600 dark:group-hover:text-teal-400
                       mb-2">
          {name}
        </h3>

        <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">
          {question}
        </p>

        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {description}
          </p>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full
                           bg-gray-100 dark:bg-gray-700
                           text-gray-600 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
