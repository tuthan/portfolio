import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  icon?: LucideIcon
  aside?: ReactNode
}

export function SectionHeading({ eyebrow, title, description, icon: Icon, aside }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="eyebrow mb-3 flex items-center gap-2 text-primary-deep dark:text-primary">
          {Icon && <Icon size={14} aria-hidden="true" />}
          {eyebrow}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>}
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </div>
  )
}
