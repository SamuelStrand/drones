import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from "../components/PageTransition";
import SEO from '../components/SEO';

const droneCategories = [
  { id: 1, key: "cat_evtol", slug: "evtol", img: "EVTOL.png" },
  { id: 2, key: "cat_multirotor", slug: "multirotor", img: "Multi-rotor.jpg" },
];

export default function Drones() {
  const { t } = useTranslation();
  
  // Helper to get array from translations safely
  const gogglesList = t('drones_page.goggles_list', { returnObjects: true }) || [];
  const controllersList = t('drones_page.controllers_list', { returnObjects: true }) || [];

  return (
    <PageTransition>
      <SEO title={t('seo.drones.title')} description={t('seo.drones.description')} path="/drones" />
      
      <div className="pt-32 pb-20 bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-10">
            
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-black text-blue-700 dark:text-blue-800 uppercase mb-4 tracking-tighter">
              {t('nav.drones')}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg mb-12">
              {t('drones_page.desc')}
            </p>
          </motion.div>
          
          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {droneCategories.map((drone) => (
              <Link
                key={drone.id}
                to={`/drones/${drone.slug}`}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 overflow-hidden group hover:border-blue-700 dark:hover:border-blue-800 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-500 rounded-sm"
              >
                <div className="overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={drone.img}
                    alt={t(`drones_page.${drone.key}.name`)}
                    className="w-full h-72 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
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

          {/* New FPV Solutions Section (From Image) */}
          <div className="border-t border-zinc-200 dark:border-white/10 pt-20">
            <div className="text-center md:text-left mb-16">
              <h1 className="text-3xl md:text-4xl font-black text-blue-800 uppercase tracking-tighter mb-4">
                {t('drones_page.solutions')}
            </h1>
              <h2 className="text-3xl md:text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-4">
                {t('drones_page.solutions_title')}
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-4xl text-lg leading-relaxed">
                {t('drones_page.solutions_subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Goggles Section */}
              <div>
                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-500 uppercase tracking-widest mb-8 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-blue-700 dark:bg-blue-500" />
                  {t('drones_page.fpv_goggles')}
                </h3>
                <ul className="space-y-4">
                  {gogglesList.map((item, i) => (
                    <li key={i} className="flex gap-4 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed border-l border-zinc-200 dark:border-zinc-800 pl-6">
                      <span className="opacity-50">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Controllers Section */}
              <div>
                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-500 uppercase tracking-widest mb-8 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-blue-700 dark:bg-blue-500" />
                  {t('drones_page.controllers')}
                </h3>
                <ul className="space-y-4">
                  {controllersList.map((item, i) => (
                    <li key={i} className="flex gap-4 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed border-l border-zinc-200 dark:border-zinc-800 pl-6">
                      <span className="opacity-50">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}