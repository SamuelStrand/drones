import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"; // Ensure framer-motion is installed
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Items appear one by one
      delayChildren: 0.3
    }
  }
};

// Animation variants for individual items
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Education() {
  const { t } = useTranslation();

  const groupLessons = t('education.group.items', { returnObjects: true }) || [];
  const individualLessons = t('education.individual.items', { returnObjects: true }) || [];

  return (
    <PageTransition>
      <SEO title={`${t('education.title')} - FORPOST`} description={t('seo.education.description')} />
      
      <div className="pt-32 pb-20 bg-white dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-white transition-colors duration-700">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header Section with Fade In */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-8">
              {t('education.title')}
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 96 }} // 24rem
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-blue-600 mx-auto mb-8"
            />
            <p className="text-zinc-500 dark:text-zinc-400 max-w-4xl mx-auto leading-relaxed text-sm md:text-base">
              {t('education.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-8">
            
            {/* Card Component Template */}
            {[
              { title: 'group', lessons: groupLessons },
              { title: 'individual', lessons: individualLessons }
            ].map((section, sectionIdx) => (
              <motion.div 
                key={section.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="flex flex-col h-full space-y-6 group"
              >
                <div className="text-center md:text-left px-2">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2 tracking-tight">
                    {t(`education.${section.title}.title`)}
                  </h2>
                  <p className="text-blue-600 dark:text-blue-500 text-sm uppercase tracking-widest font-bold">
                    {t(`education.${section.title}.price`)}
                  </p>
                </div>
                
                <motion.div 
                  whileHover={{ y: -5 }} // Smooth lift on hover
                  className="relative flex-grow overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-zinc-50/50 dark:bg-zinc-900/30 p-8 shadow-sm transition-shadow duration-500 hover:shadow-xl dark:hover:shadow-blue-900/10"
                >
                  {/* Decorative Glow */}
                  <div className={`absolute ${sectionIdx === 0 ? '-top-24 -right-24' : '-bottom-24 -left-24'} w-48 h-48 bg-blue-600/10 blur-[80px] pointer-events-none`} />
                  
                  <ul className="relative z-10 space-y-6 text-sm text-zinc-600 dark:text-zinc-300">
                    {section.lessons.map((item, idx) => (
                      <motion.li 
                        key={idx} 
                        variants={itemVariants}
                        className="flex gap-4 items-start"
                      >
                        <span className="text-blue-600 dark:text-blue-500 font-bold tabular-nums">0{idx + 1}</span>
                        <span className="border-l border-zinc-200 dark:border-white/10 pl-4 leading-snug">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </PageTransition>
  );
}