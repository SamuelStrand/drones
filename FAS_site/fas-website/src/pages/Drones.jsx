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

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {droneCategories.map((drone) => (
              <Link
                key={drone.id}
                to={`/drones/${drone.slug}`}
                className="bg-zinc-900 border border-white/10 overflow-hidden group hover:border-blue-800 transition-all"
              >
                <img
                  src={drone.img}
                  alt={t(`drones_page.${drone.key}.name`)}
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white uppercase">{t(`drones_page.${drone.key}.name`)}</h3>
                  <p className="text-zinc-500 text-sm mt-2">{t(`drones_page.${drone.key}.specs`)}</p>

                  <span className="inline-block mt-6 text-blue-500 font-bold uppercase text-xs tracking-widest group-hover:text-white transition">
                    {t('drones_page.view')} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
