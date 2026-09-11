import { ArrowUpRight, Github, Package, Store } from 'lucide-react'
import type { LinkKind } from '../data/portfolio'

export function LinkIcon({ kind, size = 14 }: { kind: LinkKind; size?: number }) {
  switch (kind) {
    case 'github':
      return <Github size={size} aria-hidden="true" />
    case 'marketplace':
      return <Store size={size} aria-hidden="true" />
    case 'registry':
      return <Package size={size} aria-hidden="true" />
    default:
      return <ArrowUpRight size={size} aria-hidden="true" />
  }
}
