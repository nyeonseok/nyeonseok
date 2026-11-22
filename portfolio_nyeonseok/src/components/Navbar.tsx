import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/about', label: 'About' },
  { to: '/extras', label: '프로젝트 외 자잘한 것들' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  const links = navItems.map((item) => (
    <li key={item.to}>
      <NavLink to={item.to} end={item.end} className="nav__link" onClick={close}>
        {item.label}
      </NavLink>
    </li>
  ));

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="wordmark" onClick={close}>
          <span className="wordmark__mark" aria-hidden="true" />
          안현석
        </Link>

        <nav className="nav nav--desktop" aria-label="주요 메뉴">
          <ul>{links}</ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle__icon" aria-hidden="true" data-open={open} />
          {open ? '닫기' : '메뉴'}
        </button>
      </div>

      <nav id="mobile-nav" className="nav nav--mobile" aria-label="주요 메뉴" hidden={!open}>
        <ul className="container">{links}</ul>
      </nav>
    </header>
  );
}
