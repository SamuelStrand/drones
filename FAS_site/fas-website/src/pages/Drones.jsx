import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PageTransition from "../components/PageTransition";
import SEO from '../components/SEO';

const droneCategories = [
  {
    id: 1,
    key: "cat_evtol",
    slug: "evtol",
    img: "EVTOL.png",
  },
  {
    id: 2,
    key: "cat_multirotor",
    slug: "multirotor",
    img: "Multi-rotor.jpg",
  },
];

export default function Drones() {
  const { t } = useTranslation();
  return (
    <PageTransition>
      <SEO title={t('seo.drones.title')} description={t('seo.drones.description')} path="/drones" />
      
      
      <div className="pt-32 pb-20 bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-10">
            
          {/* Header */}
          <h1 className="text-5xl md:text-6xl font-black text-blue-700 dark:text-blue-800 uppercase mb-4 tracking-tighter">
            {t('nav.drones')}
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg mb-12">
            {t('drones_page.desc')}
          </p>

          {/* Solutions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
              {t('drones_page.solutions')}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-3xl text-lg">
              {t('drones_page.solutions_desc')}
            </p>
          </div>
          
          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {droneCategories.map((drone) => (
              <Link
                key={drone.id}
                to={`/drones/${drone.slug}`}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 overflow-hidden group hover:border-blue-700 dark:hover:border-blue-800 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-500 rounded-sm"
              >
                {/* Image Container */}
                <div className="overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={drone.img}
                    alt={t(`drones_page.${drone.key}.name`)}
                    className="w-full h-72 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white uppercase tracking-tight">
                    {t(`drones_page.${drone.key}.name`)}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-500 text-sm mt-3 leading-relaxed">
                    {t(`drones_page.${drone.key}.specs`)}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-blue-600 dark:text-blue-500 font-bold uppercase text-xs tracking-[0.2em] group-hover:gap-4 transition-all">
                    <span>{t('drones_page.view')}</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
      </div>
      
    </PageTransition>
  );
}