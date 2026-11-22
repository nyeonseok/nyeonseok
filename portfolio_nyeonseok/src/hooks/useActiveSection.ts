import { useEffect, useState } from 'react';

/**
 * 화면 위쪽에 걸쳐 있는 섹션의 id를 돌려준다 (목차의 현재 위치 표시용).
 * @param ids 문서 순서대로의 섹션 id
 * @param topOffset 고정 헤더 등으로 가려지는 위쪽 높이(px)
 */
export function useActiveSection(ids: string[], topOffset = 96) {
  const [active, setActive] = useState<string | undefined>(ids[0]);
  const key = ids.join('|');

  useEffect(() => {
    const sectionIds = key.split('|');
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const first = sectionIds.find((id) => visible.has(id));
        if (first) {
          setActive(first);
        } else if (elements[0].getBoundingClientRect().top > window.innerHeight * 0.45) {
          // 첫 섹션보다 위(페이지 상단)에 있으면 첫 항목을 표시한다.
          setActive(sectionIds[0]);
        }
      },
      { rootMargin: `-${topOffset}px 0px -55% 0px` },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key, topOffset]);

  return active;
}
