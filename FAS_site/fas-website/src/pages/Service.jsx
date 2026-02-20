import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import PageTransition from "../components/PageTransition";
import SEO from '../components/SEO';

export default function Service() {
  const { t } = useTranslation();

  const services = [
    { id: 'photo', image: '/Picture1.png' },
    { id: 'thermal', image: '/Picture2.png' },
    { id: 'model3d', image: '/Picture3.png' }
  ];

  return (
    <PageTransition>
      <SEO title={t('seo.service.title')} description={t('seo.service.description')} path="/service" />

      <div className="relative min-h-screen bg-black overflow-hidden">
        <div className="flex flex-col md:flex-row h-screen w-full">
          {services.map((item, idx) => (
            <div 
              key={idx}
              className="relative flex-1 group overflow-hidden border-r border-white/10 last:border-none transition-all duration-700 ease-in-out hover:flex-[1.2]"
            >
              {/* Background with subtle parallax */}
              <motion.div 
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000"
                style={{ backgroundImage: `url(${item.image})` }}
                whileHover={{ scale: 1.1 }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />

              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-16">
                  <div className="relative overflow-hidden w-full max-w-[90%] md:max-w-full">
                    <motion.h2 
                      className="text-1xl md:text-2xl lg:text-3xl font-black text-white uppercase mb-4 tracking-tighter leading-none break-words"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {t(`service.${item.id}.title`)}
                    </motion.h2>

                    {/* New Detail Button with Round Edges */}
                    <Link 
                      to={`/service/${item.id}`}
                      className="inline-flex items-center gap-4 bg-white text-black px-6 py-3 rounded-full font-bold uppercase text-[10px] md:text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300 transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 shadow-lg"
                    >
                      {t('common.details')}
                      <span className="text-lg">→</span>
                    </Link>             
                  </div> 
                <div className="mt-8 w-12 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-700" />
              
              </div>

              <span className="absolute top-10 right-10 text-8xl font-black text-white/5 pointer-events-none italic">
                0{idx + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}