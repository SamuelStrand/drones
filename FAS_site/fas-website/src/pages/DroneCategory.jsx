import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { DRONE_CATEGORIES, getDroneCategory, getDronesForCategory } from "../data/droneCatalog";

function PlaceholderImage({ label }) {
    return (
        <div className="relative h-44 w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
            {/* animated glow */}
            <div className="drone-glow-layer absolute inset-0" />

            {/* glass lens */}
            <div className="drone-glass-layer absolute inset-0 pointer-events-none" />

            {/* shine sweep */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="drone-shine-layer absolute inset-y-[-40%] left-[-60%] w-[60%]" />
            </div>

            <div className="h-full w-full flex items-center justify-center px-4">
        <span className="text-white/20 font-black tracking-widest uppercase text-sm text-center transition duration-300 group-hover:text-white/70">
          {label}
        </span>
            </div>
        </div>
    );
}

export default function DroneCategory() {
    const { categorySlug } = useParams();
    const { t } = useTranslation();

    const category = useMemo(() => getDroneCategory(categorySlug), [categorySlug]);
    const drones = useMemo(() => getDronesForCategory(categorySlug), [categorySlug]);

    if (!category) {
        return (
            <PageTransition>
                <SEO
                    title={t("drones_category.not_found.title")}
                    description={t("drones_category.not_found.desc")}
                    path={`/drones/${categorySlug}`}
                    noindex
                />
                <div className="pt-32 pb-20 bg-zinc-950 min-h-screen text-white px-10">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-black uppercase mb-4">
                            {t("drones_category.not_found.title")}
                        </h1>
                        <p className="text-zinc-400 mb-8">{t("drones_category.not_found.desc")}</p>

                        <Link
                            to="/drones"
                            className="inline-flex items-center gap-2 text-blue-500 font-bold uppercase text-xs tracking-widest hover:text-white transition"
                        >
                            ← {t("drones_category.back")}
                        </Link>
                    </div>
                </div>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <SEO
                title={t("seo.drones_category.title")}
                description={t("seo.drones_category.description")}
                path={`/drones/${categorySlug}`}
            />

            <div className="pt-32 pb-20 bg-zinc-950 min-h-screen text-white">
                <div className="max-w-7xl mx-auto px-10">
                    <div className="flex items-center justify-between gap-6 flex-wrap">
                        <div>
                            <Link
                                to="/drones"
                                className="inline-flex items-center gap-2 text-blue-500 font-bold uppercase text-xs tracking-widest hover:text-white transition"
                            >
                                ← {t("drones_category.back")}
                            </Link>

                            <h1 className="mt-6 text-6xl font-black uppercase">
                                <span className="text-blue-800">{t(category.titleKey)}</span>
                            </h1>

                            <p className="text-zinc-400 max-w-2xl text-lg mt-4">{t(category.descKey)}</p>
                        </div>

                        <div className="flex items-center gap-3">
                            {DRONE_CATEGORIES.map((tab) => (
                                <Link
                                    key={tab.slug}
                                    to={`/drones/${tab.slug}`}
                                    className={
                                        tab.slug === categorySlug
                                            ? "px-4 py-2 rounded-full bg-blue-800 text-white text-xs font-bold uppercase tracking-widest"
                                            : "px-4 py-2 rounded-full border border-white/10 text-zinc-300 text-xs font-bold uppercase tracking-widest hover:text-white hover:border-blue-800 transition"
                                    }
                                >
                                    {t(tab.titleKey)}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {drones.map((drone) => {
                            const name = t(`drones_catalog.items.${drone.key}.name`);
                            const shortLabel = t(`drones_catalog.items.${drone.key}.short_label`, {
                                defaultValue: name,
                            });

                            const highlights = t(`drones_catalog.items.${drone.key}.highlights`, {
                                returnObjects: true,
                            });
                            const highlightList = Array.isArray(highlights) ? highlights : [];

                            return (
                                <Link
                                    key={drone.key}
                                    to={`/drones/${categorySlug}/${drone.slug}`}
                                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-blue-800 transition block"
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-800/20 via-transparent to-transparent" />

                                    <div className="relative p-6 flex flex-col h-full">
                                        <PlaceholderImage label={shortLabel} />

                                        <h3 className="mt-6 text-xl font-black uppercase">{name}</h3>

                                        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                                            {highlightList.slice(0, 3).map((text, idx) => (
                                                <li key={idx} className="flex gap-2">
                                                    <span className="text-blue-500">•</span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-6 flex-1" />

                                        <span className="inline-flex items-center gap-2 text-blue-500 font-bold uppercase text-xs tracking-widest group-hover:text-white transition">
                      {t("drones_category.learn_more")} →
                    </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
