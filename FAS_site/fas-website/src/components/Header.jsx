import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center px-10 py-5 text-white backdrop-blur-md border-b border-white/10">
      
      {/* Left Section */}
      <div className="flex-1 flex justify-start">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <img src="ForpostLogo.jpg" alt="Logo" className="h-8 w-auto md:h-10"/>
          <span className="text-xl md:text-2xl font-bold tracking-tighter whitespace-nowrap">
            FORPOST AERO SERVICE
          </span>
        </Link>
      </div>

      {/* Center Section */}
      <ul className="hidden md:flex gap-10 text-sm font-medium uppercase tracking-[0.2em]">
        <li className="hover:text-blue-500 transition-colors"> 
          <Link to="/drones">{t('nav.drones')}</Link>
        </li>
        <li className="hover:text-blue-500 transition-colors">
          <Link to="/service">{t('nav.service')}</Link>
        </li>
        <li className="hover:text-blue-500 transition-colors">
          <Link to="/contact">{t('nav.contact')}</Link>
        </li>
      </ul>

      {/* Right Section */}
      <div className="flex-1 flex justify-end">
        <div className="flex gap-4 text-[10px] font-bold">
          {['en', 'ru', 'kk'].map((lng) => (
            <button 
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              className={`hover:text-white uppercase transition-colors ${
                i18n.language === lng ? 'text-blue-500' : 'text-zinc-500'
              }`}
            >
              {lng === 'kk' ? 'KZ' : lng}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}