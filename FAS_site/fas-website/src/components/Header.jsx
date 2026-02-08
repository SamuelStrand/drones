import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <nav className="fixed top-0 w-full z-50 py-1 transition-all duration-300 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-zinc-200 dark:border-white/10"> 

      <div className="flex items-center justify-between px-6 py-4 md:px-10 md:py-5">
        
        {/* Left Section: Logo + Text */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img 
              src="/ForpostLogo.jpg" 
              alt="Logo" 
              className="h-8 w-auto md:h-10 shrink-0 rounded-sm"
            />
            <span className="hidden sm:block text-lg md:text-2xl font-bold tracking-tighter whitespace-nowrap text-zinc-900 dark:text-white">
              FORPOST AERO SERVICE
            </span>
          </Link>
        </div>
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