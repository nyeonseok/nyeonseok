import { profile } from '../data/profile';
import { Icon } from './Icon';
export default function Footer() {
  return <footer className="studio-footer">
    <div className="container studio-contact"><div><p>Contact</p><h2>함께 이야기해요.</h2><a href={`mailto:${profile.email}`}>{profile.email}</a></div><a className="contact-orb" href={`mailto:${profile.email}`}>메일 보내기<Icon name="arrow-up-right" size={22} /></a></div>
    <div className="container studio-signature"><div><span>개발자 안현석</span><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗<span className="sr-only"> (새 창)</span></a></div><p aria-hidden="true">Hyeonseok.</p><small>© 2026 안현석</small></div>
  </footer>;
}
