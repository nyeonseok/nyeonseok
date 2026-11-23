import type { ReactNode } from 'react';

export type IconName =
  | 'arrow-right' | 'arrow-left' | 'arrow-up-right' | 'arrow-up-right-circle'
  | 'check' | 'medal' | 'info'
  | 'home' | 'terminal' | 'box' | 'file-text' | 'github';

const PATHS: Record<IconName, ReactNode> = {
  'arrow-up-right-circle': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m9.5 14.5 5-5M10 9.5h4.5V14" />
    </>
  ),
  home: (
    <>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M6 9.5V20h12V9.5M9.5 16h5" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="m7.5 9.5 3 2.5-3 2.5M12.5 15h4" />
    </>
  ),
  box: (
    <>
      <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9z" />
      <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
    </>
  ),
  'file-text': (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  github: (
    <>
      <path d="M15 21v-3.5a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.6a5.1 5.1 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.7 12.7 0 0 0-6.6 0C5.8.8 4.7 1.1 4.7 1.1a4.8 4.8 0 0 0-.1 3.6 5.1 5.1 0 0 0-1.4 3.6c0 5.1 3.1 6.3 6.1 6.6a3.4 3.4 0 0 0-.9 2.6V21" />
      <path d="M9 18.5c-3.5 1-4.5-1.5-6-2" />
    </>
  ),
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-left': <path d="M19 12H5M11 6l-6 6 6 6" />,
  'arrow-up-right': <path d="M7 17 17 7M8 7h9v9" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  medal: (
    <>
      <circle cx="12" cy="15" r="5.5" />
      <path d="M8.6 10.4 6 3h4l2 4.5M15.4 10.4 18 3h-4l-2 4.5" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

/** 장식용 아이콘. 의미는 항상 옆의 텍스트가 전달한다. */
export function Icon({ name, size = 16, className }: IconProps) {
  return (
    <svg
      className={className ? `icon ${className}` : 'icon'}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
