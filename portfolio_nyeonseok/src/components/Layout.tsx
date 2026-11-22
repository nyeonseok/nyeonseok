import { useEffect, useRef, type MouseEvent } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

/** 프로그램으로 포커스를 옮길 때 대상이 포커스를 받을 수 있게 한다. */
function focusElement(el: HTMLElement | null) {
  if (!el) return;
  if (!el.hasAttribute('tabindex') && !/^(A|BUTTON|INPUT|SELECT|TEXTAREA)$/.test(el.tagName)) {
    el.setAttribute('tabindex', '-1');
  }
  el.focus({ preventScroll: true });
}

/**
 * 키보드·스크린리더 사용자를 위한 포커스 관리
 * - #앵커가 있으면 해당 섹션으로 포커스 (스크롤은 ScrollRestoration이 처리)
 * - 그 밖의 페이지 이동은 새 페이지의 main으로 포커스
 */
function useFocusOnNavigate() {
  const { pathname, hash } = useLocation();
  const isFirst = useRef(true);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    const samePage = prevPath.current === pathname;
    prevPath.current = pathname;

    const anchor = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (anchor) focusElement(anchor);
    else if (!samePage) focusElement(document.getElementById('main'));
  }, [pathname, hash]);
}

/** 기록(history)을 건드리지 않는 본문 건너뛰기 */
function skipToMain(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const main = document.getElementById('main');
  focusElement(main);
  main?.scrollIntoView();
}

export default function Layout() {
  const { pathname } = useLocation();
  useFocusOnNavigate();

  return (
    <>
      <a href="#main" className="skip-link" onClick={skipToMain}>
        본문으로 건너뛰기
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <div key={pathname} className="page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
