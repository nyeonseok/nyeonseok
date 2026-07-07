import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import profileImg from "../assets/profile.jpg";

const strengths = [
  {
    icon: "🛡️",
    title: "보안·인증 시스템 설계",
    desc: "공공 서비스 운영 경험 및 보안 공모전에서 JWT 이중 저장, XSS 방어 등 실제 환경에서의 보안 로직 설계 경험을 보유하고 있습니다.",
  },
  {
    icon: "⚡",
    title: "성능 최적화 및 운영",
    desc: "debounce 전략으로 불필요한 API 호출을 87.5% 감소시켰으며, PWA 및 FSD 아키텍처 도입으로 최적의 웹 성능을 달성했습니다.",
  },
  {
    icon: "🧩",
    title: "책임 분리 및 재사용성 설계",
    desc: "FSD(Feature-Sliced Design)를 기반으로 UI/API/Hook을 도메인별로 분리하여 코드의 책임 영역을 명확히 하고, 컴포넌트 재사용성을 극대화했습니다.",
  },
  {
    icon: "🔍",
    title: "장애 대응 및 데이터 정합성",
    desc: "라이선스 만료 등 실무 장애를 모니터링으로 선제 대응하고, DataGrip을 활용한 데이터 재정합성 확보를 통해 운영 안정성을 증명했습니다.",
  },
  {
    icon: "🤝",

    title: "애자일 프로젝트 리딩",

    desc: "Jira/Notion 기반 일정 관리 및 기획·타 부서와의 유기적인 소통을 통해 서비스 성과(비즈니스 수치 개선) 도출",
  },
];

const certs = [
  { icon: "💻", name: "정보처리기사", date: "2024.09.10" },
  { icon: "🗃️", name: "SQL개발자 (SQLD)", date: "2023.12.15" },
  { icon: "📊", name: "데이터분석 준전문가 (ADsP)", date: "2024.11.29" },
  { icon: "🏗️", name: "데이터아키텍처 준전문가 (DAsP)", date: "2024.10.25" },
  {
    icon: "🗣️",
    name: "TOEIC Speaking Intermediate High (150)",
    date: "2025.11.20",
  },
  { icon: "⌨️", name: "컴퓨터활용능력 1급", date: "2023.04.21" },
];

const workStyles = [
  {
    emoji: "📋",
    text: "<strong>문서화 중시</strong> — Jira, GitHub 이슈를 통한 체계적인 작업 관리와 애자일 협업을 선호합니다.",
  },
  {
    emoji: "🔍",
    text: "<strong>원인 분석 우선</strong> — 데이터 로그 분석을 통해 장애 원인을 파악하고 근본 해결책을 수립합니다.",
  },
  {
    emoji: "💬",
    text: "<strong>적극적 커뮤니케이션</strong> — 기획·타 부서와의 요구사항 협의 경험을 바탕으로 명확한 소통을 실천합니다.",
  },
  {
    emoji: "🌱",
    text: "<strong>지속적 학습</strong> — 새로운 기술과 도구를 두려워하지 않고 공식 문서를 기반으로 빠르게 습득합니다.",
  },
];

export default function About() {
  useScrollReveal();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <div className="container">
        {/* Profile */}
        <div className="about-profile">
          <img
            src={profileImg}
            alt="안현석 프로필 사진"
            className="about-avatar"
          />
          <div className="about-info">
            <h1>안현석</h1>
            <div className="role-badge">⚛️ 풀스택 개발자</div>
            <p
              style={{
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "var(--accent)",
                margin: "6px 0 16px",
              }}
            >
              "나날이 새롭게 — 할 수 있는 모든 것에 도전한다"
            </p>
            <p className="about-bio">
              <strong>
                "기능 구현을 넘어, 운영 안정성과 비즈니스 가치를 고민하는
                개발자"
              </strong>
              <br />
              <br />
              프론트엔드부터 실무 DB/서버 운영, 보안 인증 시스템 설계까지 폭넓은
              기술 스택을 바탕으로 사용자에게 최적화된 경험을 제공합니다. 특히
              대구경북 교통카드 시스템과 LG SHOPTIME 유지보수 실무를 통해, 실제
              운영 환경에서의 트래픽 관리, 장애 대응, 데이터 정합성 유지의
              중요성을 체득했습니다.
              <br />
              <br />
              SSAFY 최종 관통 프로젝트에서 FSD 아키텍처를 도입하여 도메인별 책임
              분리를 실현하고, 프로젝트 전반의 UI/UX 및 아키텍처를 리딩하며
              1500명 규모의 해커톤 상위 6% 성적을 거둔 경험이 있습니다.
              <br />
              <br />
              단순한 개발에 머물지 않고, 기술적 근거를 바탕으로 문제를 분석하고
              해결책을 제시하며 팀의 성과를 이끌어내는 개발자로 성장하겠습니다.
            </p>
            <div className="about-contact-list">
              <div className="about-contact-item">
                <div className="contact-icon">✉️</div>
                <a href="mailto:aragorn2358@naver.com">aragorn2358@naver.com</a>
              </div>
              <div className="about-contact-item">
                <div className="contact-icon">🐙</div>
                <a
                  href="https://github.com/nyeonseok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/nyeonseok
                </a>
              </div>
              <div className="about-contact-item">
                <div className="contact-icon">📍</div>
                <span>대구광역시</span>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths */}
        <div className="about-section reveal">
          <h2 className="about-section-title">개발자로서의 강점</h2>
          <div className="strength-grid">
            {strengths.map((s, i) => (
              <div key={i} className="strength-card">
                {/* <div className="strength-icon">{s.icon}</div> */}
                <div className="strength-title">{s.title}</div>
                <div className="strength-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Style */}
        <div className="about-section reveal">
          <h2 className="about-section-title">일하는 방식</h2>
          <div className="workstyle-list">
            {workStyles.map((w, i) => (
              <div key={i} className="workstyle-item">
                {/* <span className="workstyle-emoji">
                                    {w.emoji}
                                </span> */}
                <p
                  className="workstyle-text"
                  dangerouslySetInnerHTML={{ __html: w.text }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="about-section reveal">
          <h2 className="about-section-title">자격증</h2>
          <div className="cert-list">
            {certs.map((c, i) => (
              <div key={i} className="cert-item">
                {/* <div className="cert-icon">{c.icon}</div> */}
                <div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-date">{c.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="about-section reveal"
          style={{
            borderTop: "none",
            marginTop: 0,
            paddingTop: 0,
            paddingBottom: 80,
          }}
        >
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:ynustudy1357@gmail.com" className="btn btn-primary">
              연락하기 ✉️
            </a>
            <Link to="/projects" className="btn btn-secondary">
              프로젝트 보기 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
