import { useTranslation } from 'react-i18next';
import PageTransition from "../components/PageTransition";
import SEO from '../components/SEO';
import { Link } from "react-router-dom";

export default function Service() {
  const { t } = useTranslation();
  return (
    <PageTransition>
      <SEO title={t('seo.service.title')} description={t('seo.service.description')} path="/service" />
      <div className="pt-32 pb-20 bg-black min-h-screen text-white px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-black uppercase mb-12">{t('service.title_main')} <span className="text-blue-800">{t('service.title_sub')}</span></h1>
          <div className="space-y-12">
            {[
              { title: 'maint_title', desc: 'maint_desc', border: 'border-zinc-800' },
              { title: 'pilot_title', desc: 'pilot_desc', border: 'border-zinc-700' },
              { title: 'consult_title', desc: 'consult_desc', border: 'border-zinc-600' }
            ].map((item, idx) => (
              <div key={idx} className={`border-l-4 ${item.border} pl-8`}>
                <h2 className="text-2xl font-bold uppercase">{t(`service.${item.title}`)}</h2>
                <p className="text-zinc-400 mt-2">{t(`service.${item.desc}`)}</p>
              </div>
            ))}
            <div className="border-l-4 border-zinc-500 pl-8 hover:border-blue-800 transition">
              <Link to="/contact" className="text-2xl font-bold uppercase hover:text-blue-800 transition">{t('service.btn_contact')} ↗</Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}