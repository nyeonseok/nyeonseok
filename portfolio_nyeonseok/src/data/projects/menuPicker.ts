import type { SmallProject } from '../types';

const menuPicker: SmallProject = {
  slug: 'menu-picker',
  name: 'MenuPicker',
  tone: 'orange',
  tagline: 'Gemini API 기반 식당 추천 Serverless PWA',
  period: '2025.09.07 – 2025.10.01',
  org: '개인 프로젝트',
  role: '기획 · Frontend · Serverless · PWA',
  stack: ['React', 'PWA', 'Vercel Serverless', 'Gemini API', 'debounce'],
  problem: '검색창의 onChange마다 API를 호출하면서 같은 검색어에서도 요청이 반복되는 문제를 발견했습니다.',
  actions: [
    'debounce를 적용해 입력이 멈춘 뒤 일정 시간이 지난 후 API 호출',
    'Vercel Serverless Function으로 Gemini API 연동',
    'PWA와 QR을 이용한 모바일 접근',
  ],
  results: [
    { value: '24 → 3회', label: '동일 검색어 API 호출 (87.5% 감소)' },
    { value: '65 → 24ms', label: 'INP' },
  ],
  note: 'Backend 서버 없이 Serverless + PWA 구조로 구현했습니다.',
  links: [
    { label: 'GitHub', href: 'https://github.com/MenuPicker/MenuPicker_FE' },
    { label: '서비스', href: 'https://menu-picker-fe.vercel.app' },
  ],
  captions: {
    'cover/cover.webp': 'MenuPicker 추천 결과 화면',
    'screens/01-main.webp': '메인 화면',
    'screens/02-search.webp': '위치 검색 — debounce 적용',
    'screens/03-result.webp': '추천 결과 — AI 선택 이유와 카카오맵 연동',
  },
};

export default menuPicker;
