export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <div className="footer-name">안현석 · An Hyeon-seok</div>
                    <div className="footer-sub">
                        © 2025 안현석. All rights reserved.
                    </div>
                </div>
                <div className="footer-links">
                    <a
                        href="mailto:aragorn2358@naver.com"
                        className="footer-link"
                    >
                        <span>✉️</span>
                        aragorn2358@naver.com
                    </a>
                    <a
                        href="https://github.com/nyeonseok"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <span>🐙</span>
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
