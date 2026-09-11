import { useEffect, useState } from 'react'

/** Tracks which of the given section ids is currently most visible. */
export function useActiveSection(ids: string[], fallback = ids[0]) {
  const [active, setActive] = useState(fallback)

  useEffect(() => {
    const elements = ids.map(id => document.getElementById(id)).filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') return

    const ratios = new Map<string, number>()
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        let best = fallback
        let bestRatio = 0
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            best = id
            bestRatio = ratio
          }
        }
        if (bestRatio > 0) setActive(best)
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    )
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, fallback])

  return active
}
