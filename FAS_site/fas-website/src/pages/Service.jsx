import { useTranslation } from 'react-i18next';
import PageTransition from "../components/PageTransition";
import SEO from '../components/SEO';
import { Link } from "react-router-dom";

export default function Service() {
  const { t } = useTranslation();
  
  return (
    <PageTransition>
      <SEO title={t('seo.service.title')} description={t('seo.service.description')} path="/service" />
      
      <div className="pt-32 pb-20 bg-white dark:bg-black min-h-screen text-zinc-900 dark:text-white px-10 transition-colors duration-500">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-16 leading-tight tracking-tighter">
            {t('service.title_main')} <br/>
            <span className="text-blue-700 dark:text-blue-800">{t('service.title_sub')}</span>
          </h1>

          <div className="space-y-16">
            {[
              { 
                title: 'maint_title', 
                desc: 'maint_desc', 
                lightBorder: 'border-zinc-200', 
                darkBorder: 'dark:border-zinc-800' 
              },
              { 
                title: 'pilot_title', 
                desc: 'pilot_desc', 
                lightBorder: 'border-zinc-300', 
                darkBorder: 'dark:border-zinc-700' 
              },
              { 
                title: 'consult_title', 
                desc: 'consult_desc', 
                lightBorder: 'border-zinc-400', 
                darkBorder: 'dark:border-zinc-600' 
              }
            ].map((item, idx) => (
              <div key={idx} className={`border-l-4 ${item.lightBorder} ${item.darkBorder} pl-8 transition-colors`}>
                <h2 className="text-2xl font-bold uppercase tracking-tight">
                  {t(`service.${item.title}`)}
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 mt-3 text-lg leading-relaxed max-w-2xl">
                  {t(`service.${item.desc}`)}
                </p>
              </div>
            ))}

            {/* Contact CTA Link */}
            <div className="border-l-4 border-zinc-200 dark:border-zinc-500 pl-8 hover:border-blue-700 dark:hover:border-blue-800 transition-all duration-300">
              <Link 
                to="/contact" 
                className="text-2xl font-bold uppercase text-zinc-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-800 transition-colors inline-flex items-center gap-2"
              >
                {t('service.btn_contact')} <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}