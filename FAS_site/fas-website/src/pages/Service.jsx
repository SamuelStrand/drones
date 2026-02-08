import { useTranslation } from 'react-i18next';
import PageTransition from "../components/PageTransition";
import SEO from '../components/SEO';

export default function Service() {
  const { t } = useTranslation();

  const services = [
    {
      id: 'photo',
      image: '/Picture1.png',
    },
    {
      id: 'thermal',
      image: '/Picture2.png', 
    },
    {
      id: 'model3d',
      image: '/Picture3.png', 
    }
  ];

  return (
    <PageTransition>
      <SEO title={t('seo.service.title')} description={t('seo.service.description')} path="/service" />

      <div className="relative min-h-screen bg-black overflow-hidden">

        {/* Diagonal Service Grid */}
        <div className="flex flex-col md:flex-row h-screen w-full">
          {services.map((item, idx) => (
            <div 
              key={idx}
              className="relative flex-1 group overflow-hidden border-r border-white/10 last:border-none transition-all duration-700 ease-in-out hover:flex-[1.5]"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10" />

              {/* Content Container */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12 transform transition-transform duration-500">
                <div className="max-w-md">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase leading-tight tracking-tight border-b-2 border-white/20 pb-4 inline-block">
                    {t(`service.${item.id}.title`)}
                  </h2>
                  
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    {t(`service.${item.id}.desc`)}
                  </p>

                  <div className="mt-8 w-12 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-700" />
                </div>
              </div>

              {/* Decorative Number for background */}
              <span className="absolute top-10 right-10 text-9xl font-black text-white/5 pointer-events-none">
                0{idx + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}