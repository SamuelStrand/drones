import { useTranslation } from "react-i18next";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";

export default function Education() {
  const { t } = useTranslation();

  const groupLessons = t('education.group.items', { returnObjects: true }) || [];
  const individualLessons = t('education.individual.items', { returnObjects: true }) || [];

  return (
    <PageTransition>
      <SEO 
        title={`${t('education.title')} - FORPOST`} 
        description={t('seo.education.description')} 
      />
      
      <div className="pt-32 pb-20 bg-zinc-950 min-h-screen text-white">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-8">
              {t('education.title')}
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div> {/* Visual Accent */}
            <p className="text-zinc-400 max-w-4xl mx-auto leading-relaxed text-sm md:text-base">
              {t('education.description')}
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Group Training */}
            <div className="flex flex-col h-full space-y-6">
              <div className="text-center md:text-left px-2">
                <h2 className="text-xl md:text-2xl font-normal mb-2">
                  {t('education.group.title')}
                </h2>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">
                  {t('education.group.price')}
                </p>
              </div>
              
              <div className="relative flex-grow overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 p-8 hover:border-blue-500/30 transition-colors duration-500">
                {/* Subtle Gradient Glow instead of Image */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 blur-[80px] pointer-events-none" />
                
                <ul className="relative z-10 space-y-4 text-sm text-zinc-300">
                  {groupLessons.map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <span className="text-blue-500 font-bold">0{idx + 1}</span>
                      <span className="border-l border-white/10 pl-4">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Individual Training */}
            <div className="flex flex-col h-full space-y-6">
              <div className="text-center md:text-left px-2">
                <h2 className="text-xl md:text-2xl font-normal mb-2">
                  {t('education.individual.title')}
                </h2>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">
                  {t('education.individual.price')}
                </p>
              </div>

              <div className="relative flex-grow overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 p-8 hover:border-blue-500/30 transition-colors duration-500">
                 {/* Subtle Gradient Glow instead of Image */}
                 <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-900/10 blur-[80px] pointer-events-none" />
                
                <ul className="relative z-10 space-y-4 text-sm text-zinc-300">
                  {individualLessons.map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <span className="text-blue-500 font-bold">0{idx + 1}</span>
                      <span className="border-l border-white/10 pl-4">{item}</span>
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