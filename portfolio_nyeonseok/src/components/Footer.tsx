import { profile } from '../data/profile';
import { Icon } from './Icon';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__name">
            <span className="wordmark__mark" aria-hidden="true" />
            {profile.name}
            <span className="site-footer__en" lang="en">
              {profile.nameEn}
            </span>
          </p>
          
        </div>
        <ul className="site-footer__actions">
          <li>
            <a href={`mailto:${profile.email}`} className="button button--sm">
              {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="button button--sm">
              GitHub
              <Icon name="arrow-up-right" size={15} />
              <span className="sr-only"> (새 창)</span>
            </a>
          </li>
        </ul>
      </div>
      <p className="container site-footer__copy">© 2026 {profile.name}</p>
    </footer>
  );
}

