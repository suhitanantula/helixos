interface CaseStudyCardProps {
  company: string
  quadrant?: string
  sector?: string
  insight: string
  href?: string
}

export function CaseStudyCard({
  company,
  quadrant,
  sector,
  insight,
  href
}: CaseStudyCardProps) {
  const content = (
    <div className="p-5 rounded-lg border-2 border-gray-200 dark:border-gray-700
                    bg-white dark:bg-gray-800
                    hover:border-teal-400 hover:shadow-md
                    transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-bold text-gray-900 dark:text-gray-100">
          {company}
        </h4>
        {quadrant && (
          <span className="px-2 py-1 text-xs font-medium rounded
                          bg-teal-100 dark:bg-teal-900/30
                          text-teal-700 dark:text-teal-300">
            {quadrant}
          </span>
        )}
      </div>

      {sector && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
          {sector}
        </p>
      )}

      <p className="text-sm text-gray-600 dark:text-gray-400">
        {insight}
      </p>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block no-underline">
        {content}
      </a>
    )
  }

  return content
}
