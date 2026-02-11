import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { getDroneBySlug, getDroneCategory, getDronesForCategory } from "../data/droneCatalog";

function DroneHero({ image, label }) {
  if (image) {
    return (
      <div className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden bg-white border border-zinc-200 dark:border-white/10 shadow-lg dark:shadow-none">
        <img 
          src={image} 
          alt={label} 
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x675?text=Image+Not+Found'; }}
        />
      </div>
    );
  }

  return (
    <div className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden bg-zinc-100 dark:bg-gradient-to-br dark:from-white/10 dark:via-white/5 dark:to-transparent flex items-center justify-center border border-zinc-200 dark:border-none">
      <span className="text-zinc-400 dark:text-white/20 font-black tracking-widest uppercase text-lg">
        {label}
      </span>
    </div>
  );
}

export default function DroneDetail() {
  const { categorySlug, droneSlug } = useParams();
  const { t } = useTranslation();

  const drone = useMemo(() => getDroneBySlug(categorySlug, droneSlug), [categorySlug, droneSlug]);
  const category = useMemo(() => getDroneCategory(categorySlug), [categorySlug]);
  const categoryDrones = useMemo(() => getDronesForCategory(categorySlug), [categorySlug]);

  if (!drone || !category) {
    return (
      <PageTransition>
        <div className="pt-32 pb-20 bg-white dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-white px-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-black uppercase mb-4">{t("drones_category.not_found.title")}</h1>
            <p className="text-zinc-500 dark:text-zinc-400 mb-8">{t("drones_category.not_found.desc")}</p>
            <Link to="/drones" className="text-blue-600 dark:text-blue-500 font-bold uppercase text-xs tracking-widest hover:underline">
              ← {t("drones_category.back")}
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const name = t(`drones_catalog.items.${drone.key}.name`, { defaultValue: drone.slug });
  const shortLabel = t(`drones_catalog.items.${drone.key}.short_label`, { defaultValue: name });

  return (
    <PageTransition>
      <SEO title={name} description={t(drone.description).slice(0, 160)} path={`/drones/${categorySlug}/${droneSlug}`} />
      
      <div className="pt-32 pb-20 bg-white dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-white transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-sm mb-8">
            <Link to="/drones" className="text-blue-600 dark:text-blue-500 hover:opacity-70 transition uppercase tracking-widest font-bold">
              {t("nav.drones")}
            </Link>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            <Link to={`/drones/${categorySlug}`} className="text-blue-600 dark:text-blue-500 hover:opacity-70 transition uppercase tracking-widest font-bold">
              {t(category.titleKey)}
            </Link>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            <span className="text-zinc-400 dark:text-zinc-500">{shortLabel}</span>
          </nav>

          <DroneHero image={drone.image} label={shortLabel} />

          <h1 className="mt-8 text-4xl md:text-5xl font-black uppercase tracking-tighter">
            {name}
          </h1>
          {drone.tagline && (
            <p className="mt-2 text-xl text-blue-700 dark:text-blue-400 font-bold uppercase tracking-wide">
              {t(drone.tagline)}
            </p>
          )}

          {/* Description */}
          <div className="mt-10 prose dark:prose-invert max-w-none">
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">{t(drone.description)}</p>
          </div>

          {/* Highlights */}
          {drone.highlights && drone.highlights.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-black uppercase text-blue-800 dark:text-blue-700 mb-6 border-b border-zinc-100 dark:border-white/5 pb-2">
                {t("drones_detail.highlights")}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {drone.highlights.map((itemKey, idx) => (
                  <li key={idx} className="flex gap-3 text-zinc-700 dark:text-zinc-300 items-start">
                    <span className="text-blue-600 dark:text-blue-500 mt-1">▶</span>
                    <span className="font-medium">{t(itemKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Specs Table */}
          {drone.specs && drone.specs.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-black uppercase text-blue-800 dark:text-blue-700 mb-6">
                {t("drones_detail.specs")}
              </h2>
              <div className="border border-zinc-200 dark:border-white/10 rounded-xl overflow-hidden bg-zinc-50/50 dark:bg-transparent shadow-sm">
                <table className="w-full text-left">
                  <tbody>
                    {drone.specs.map((row, idx) => (
                      <tr key={idx} className="border-b border-zinc-200 dark:border-white/10 last:border-0 hover:bg-white dark:hover:bg-white/5 transition-colors">
                        <td className="py-4 px-6 text-zinc-500 dark:text-zinc-400 font-semibold w-1/3 text-sm uppercase tracking-wider">
                          {t(row.label)}
                        </td>
                        <td className="py-4 px-6 text-zinc-900 dark:text-white font-medium italic sm:not-italic">{t(row.value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* CTA Actions */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="flex-1 text-center px-8 py-4 rounded-xl bg-blue-700 dark:bg-blue-800 text-white hover:bg-blue-600 dark:hover:bg-blue-700 transition font-black uppercase text-sm tracking-[0.2em] shadow-lg shadow-blue-500/20">
              {t("drones_detail.contact_us")}
            </Link>
          </div>

          {/* Related Items */}
          {categoryDrones.length > 1 && (
            <div className="mt-24 pt-12 border-t border-zinc-200 dark:border-white/10">
              <h2 className="text-sm font-black uppercase text-zinc-400 dark:text-zinc-500 mb-8 tracking-[0.3em]">
                {t("drones_detail.other_in_category")}
              </h2>
              <div className="flex flex-wrap gap-3">
                {categoryDrones.filter((d) => d.slug !== droneSlug).map((d) => (
                  <Link key={d.slug} to={`/drones/${categorySlug}/${d.slug}`} className="px-5 py-2 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 text-xs font-bold uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition">
                    {t(`drones_catalog.items.${d.key}.short_label`, { defaultValue: d.key })}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12">
            <Link to={`/drones/${categorySlug}`} className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-500 font-bold uppercase text-xs tracking-widest hover:gap-4 transition-all">
              ← {t("drones_detail.back_to_category")}
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}