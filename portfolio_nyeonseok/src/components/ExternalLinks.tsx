import type { ExternalLink } from '../data/types';
import { Icon } from './Icon';

export function ExternalLinks({ links }: { links: ExternalLink[] }) {
  if (links.length === 0) return null;

  return (
    <ul className="ext-links">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noopener noreferrer" className="button button--sm">
            {link.label}
            <Icon name="arrow-up-right" size={15} />
            <span className="sr-only"> (새 창)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
