import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';

export default function NotFound() {
  return (
    <header className="page-hero page-hero--center">
      <div className="container">
        <title>페이지를 찾을 수 없습니다 — 안현석</title>
        <p className="kicker">404</p>
        <h1 className="page-hero__title">페이지를 찾을 수 없습니다</h1>
        <p className="page-hero__lead">주소가 바뀌었거나 삭제된 페이지입니다.</p>
        <p className="page-hero__actions">
          <Link to="/" className="button button--primary">
            Home으로 <Icon name="arrow-right" size={16} />
          </Link>
        </p>
      </div>
    </header>
  );
}
