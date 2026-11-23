import { Link } from 'react-router-dom';
import { Icon, type IconName } from './Icon';
import { profile } from '../data/profile';
import avatar from '../assets/profile-cutout.webp';

type DockItem =
  | { kind: 'route'; to: string; label: string; icon: IconName; current?: boolean }
  | { kind: 'avatar'; to: string; label: string }
  | { kind: 'external'; href: string; label: string; icon: IconName; newTab?: boolean; download?: string };

const ITEMS: DockItem[] = [
  { kind: 'route', to: '/', label: '홈', icon: 'home', current: true },
  { kind: 'route', to: '/projects', label: '프로젝트', icon: 'terminal' },
  { kind: 'route', to: '/extras', label: '프로젝트 외 자잘한 것들', icon: 'box' },
  { kind: 'avatar', to: '/about', label: '소개' },
  // public/resume.pdf — 원본은 resume/resume.html, `npm run resume`으로 다시 만든다.
  {
    kind: 'external',
    href: `${import.meta.env.BASE_URL}resume.pdf`,
    label: '이력서 다운로드',
    icon: 'file-text',
    download: '안현석_이력서.pdf',
  },
  { kind: 'external', href: profile.github, label: 'GitHub', icon: 'github', newTab: true },
  { kind: 'external', href: `mailto:${profile.email}`, label: '메일 보내기', icon: 'arrow-up-right-circle' },
];

/** 홈 히어로 제목 바로 아래의 아이콘 바로가기. 라벨은 접근 가능한 이름이자 hover/focus 툴팁이다. */
export function HeroDock() {
  return (
    <nav className="dock" aria-label="바로가기">
      <ul className="dock__list">
        {ITEMS.map((item) => (
          <li key={item.label}>
            {item.kind === 'external' ? (
              <a
                className="dock__btn"
                href={item.href}
                download={item.download}
                {...(item.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <Icon name={item.icon} size={22} />
                <span className="dock__label">
                  {item.label}
                  {item.newTab && <span className="sr-only"> (새 창)</span>}
                </span>
              </a>
            ) : (
              <Link
                className={item.kind === 'avatar' ? 'dock__btn dock__btn--avatar' : 'dock__btn'}
                to={item.to}
                aria-current={item.kind === 'route' && item.current ? 'page' : undefined}
              >
                {item.kind === 'avatar' ? (
                  <span className="dock__avatar"><img src={avatar} alt="" width="898" height="1200" /></span>
                ) : (
                  <Icon name={item.icon} size={22} />
                )}
                <span className="dock__label">{item.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
