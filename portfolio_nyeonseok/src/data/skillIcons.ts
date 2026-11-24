/**
 * 기술 이름 → 로고 파일(src/assets/skills/<파일>).
 * 여기에 없는 기술은 아이콘 없이 텍스트 칩으로 표시된다.
 * 로고 출처: devicon(MIT) · simple-icons(CC0). 어두운 배경에서 보이지 않는 로고는 흰색/밝은 색으로 바꿔 두었다.
 */
const files = import.meta.glob<string>('../assets/skills/*.{svg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const ICON_FILE: Record<string, string> = {
  'Spring Boot': 'springboot.svg',
  Java: 'java.svg',
  'Spring Security': 'springsecurity.svg',
  JWT: 'jwt.svg',
  Python: 'python.svg',
  'FastAPI 연동': 'fastapi.svg',
  PostgreSQL: 'postgresql.svg',
  MySQL: 'mysql.svg',
  Flyway: 'flyway.svg',
  DataGrip: 'datagrip.svg',
  JUnit: 'junit.svg',
  LangGraph: 'langgraph.svg',
  'Custom MCP': 'mcp.svg',
  'Hugging Face': 'huggingface.svg',
  'Qwen2.5-VL': 'qwen.svg',
  PyTorch: 'pytorch.svg',
  AWS: 'aws.svg',
  Docker: 'docker.svg',
  Linux: 'linux.svg',
  Nginx: 'nginx.svg',
  k3s: 'k3s.svg',
  Prometheus: 'prometheus.svg',
  Grafana: 'grafana.svg',
  Loki: 'loki.svg',
  React: 'react.svg',
  TypeScript: 'typescript.svg',
  JavaScript: 'javascript.svg',
  HTML: 'html.svg',
  CSS: 'css.svg',
  Zustand: 'zustand.webp',
  Git: 'git.svg',
  GitHub: 'github.svg',
  GitLab: 'gitlab.svg',
  Jira: 'jira.svg',
  Notion: 'notion.svg',
};

export function skillIcon(name: string): string | undefined {
  const file = ICON_FILE[name];
  return file ? files[`../assets/skills/${file}`] : undefined;
}
