import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
    <nav className="fixed top-0 w-full z-50 py-1 text-white backdrop-blur-md border-b border-white/10"> 

      <div className="flex items-center justify-between px-6 py-4 md:px-10 md:py-5">
        
        {/* Left Section: Logo + Text */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img src="/ForpostLogo.jpg" alt="Logo" className="h-8 w-auto md:h-10 shrink-0"/>
            {/* Hidden on mobile, visible on tablet/desktop to prevent overlap */}
            <span className="hidden sm:block text-lg md:text-2xl font-bold tracking-tighter whitespace-nowrap text-white">
              FORPOST AERO SERVICE
            </span>
          </Link>
        </div>

        {/* Center Section: Desktop Menu */}
        <ul className="hidden lg:flex gap-10 text-sm font-medium uppercase tracking-[0.2em] text-white">
          <li className="hover:text-blue-500 transition-colors"> 
            <Link to="/drones">{t('nav.drones')}</Link>
          </li>
          <li className="hover:text-blue-500 transition-colors">
            <Link to="/service">{t('nav.service')}</Link>
          </li>
          <li className="hover:text-blue-500 transition-colors">
            <Link to="/education">{t('nav.education')}</Link>
          </li>
          <li className="hover:text-blue-500 transition-colors">
            <Link to="/contact">{t('nav.contact')}</Link>
          </li>
        </ul>

        {/* Right Section: Languages + Mobile Toggle */}
        <div className="flex items-center gap-6">
          <div className="flex gap-3 text-[10px] font-bold">
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

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-white/10 px-6 py-6 transition-all">
          <ul className="flex flex-col gap-6 text-sm font-medium uppercase tracking-[0.2em] text-white">
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/drones" className="block py-2">{t('nav.drones')}</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/service" className="block py-2">{t('nav.service')}</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/contact" className="block py-2">{t('nav.contact')}</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}