import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Shield, Cpu, Box, Network,
    CheckCircle2, ArrowRight, Target, PlayCircle
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/* ─── Scroll Animation Wrapper ─── */
const FadeUp = ({ children, className = '', delay = 0 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const Label = ({ text, color = 'text-orange-400', isDark }) => (
    <span className={`inline-block text-[10px] font-black uppercase tracking-[0.55em] ${isDark ? color : color.replace('400', '600')}`}>
        {text}
    </span>
);

/* ─── Frosted Glass Panel ─── */
const Glass = ({ children, className = '', isDark }) => (
    <div className={`transition-all duration-500 rounded-3xl ${isDark
        ? 'bg-white/[0.07] backdrop-blur-2xl border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
        : 'bg-white border border-slate-200 shadow-xl'
        } ${className}`}>
        {children}
    </div>
);

/* ─── Stat Card ─── */
const StatCard = ({ value, label, delay, isDark }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`backdrop-blur-xl border rounded-2xl p-3 md:p-4 flex flex-col items-center text-center transition-all duration-300 ${isDark
            ? 'bg-white/[0.08] border-white/[0.12] hover:bg-white/[0.13]'
            : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
            }`}
    >
        <span className={`text-xl md:text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</span>
        <span className={`mt-1 text-[8px] uppercase font-black tracking-[0.2em] ${isDark ? 'text-white/40' : 'text-slate-400'}`}>{label}</span>
    </motion.div>
);

/* ─── Structure Card ─── */
const StructCard = ({ icon: Icon, title, body, delay, isDark }) => (
    <FadeUp delay={delay}>
        <div className={`backdrop-blur-2xl border rounded-3xl p-6 md:p-7 group transition-all duration-400 ${isDark
            ? 'bg-white/[0.07] border-white/[0.12] hover:bg-white/[0.12] hover:border-white/20 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]'
            : 'bg-white border-slate-200 shadow-sm hover:shadow-lg'
            }`}>
            <div className={`w-10 h-10 rounded-xl mb-5 flex items-center justify-center transition-all duration-300 ${isDark ? 'bg-white/[0.08] text-orange-400 border border-white/10 group-hover:bg-orange-400 group-hover:text-[#0a0f1e]' : 'bg-slate-50 text-orange-600 border border-slate-200 group-hover:bg-orange-600 group-hover:text-white'}`}>
                <Icon size={20} strokeWidth={1.5} />
            </div>
            <h3 className={`text-[13px] font-black uppercase tracking-tight mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
            <p className={`text-xs leading-relaxed font-medium ${isDark ? 'text-white/45' : 'text-slate-500'}`}>{body}</p>
        </div>
    </FadeUp>
);

/* ═══════════════════════════════════════════ */

const About = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const stats = [
        { value: '70+', label: 'Strategic Integrations' },
        { value: '20', label: 'Pan-India States' },
        { value: '500+', label: 'Active Sites' },
        { value: 'ISO', label: 'Governance Framework' },
    ];

    const structure = [
        { icon: Shield, title: 'Centralized Governance', body: 'Unified strategic oversight with financial discipline and compliance protocols across all verticals.' },
        { icon: Network, title: 'Regional Execution Units', body: 'Decentralized delivery hubs enabling precision execution at the national field level.' },
        { icon: Box, title: 'Regulatory Framework', body: 'ISO-certified audit infrastructure ensuring accountability and transparency at every layer.' },
        { icon: Cpu, title: 'Digital Oversight Systems', body: 'Real-time performance tracking and intelligent lifecycle management across multi-site deployments.' },
    ];

    const footprintPoints = [
        'Headquartered in Hyderabad with major hubs in Mumbai, Bangalore, Chennai, and Delhi.',
        'Structured presence across 20 Indian states under a unified governance mandate.',
        'Centralized strategic oversight combined with agile, decentralized field execution.',
        'Complex multi-site infrastructure deployments governed by compliance-driven accountability.',
    ];

    const media = [
        { src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070', label: 'Data Grid Infrastructure' },
        { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070', label: 'Digital Oversight Systems' },
        { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069', label: 'Operations Hub' },
    ];

    return (
        <article className={`relative transition-colors duration-500 overflow-x-hidden font-sans ${isDark ? 'bg-[#0a0f1e] text-white' : 'bg-[#f8fafc] text-slate-900'}`}>

            {/* HERO SECTION — simple, in-flow, no fixed positioning */}
            <section className="w-full bg-[#011b26] pt-28 pb-20 flex items-center justify-center overflow-hidden relative">

                {/* Soft ambient glow */}
                <div className="absolute top-0 left-1/4 w-96 h-64 bg-blue-600/15 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-80 h-52 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 w-full max-w-4xl mx-auto px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center gap-5"
                    >
                        {/* Eyebrow */}
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-400">
                            Institutional Multi-Vertical Enterprise
                        </span>

                        {/* Heading */}
                        <h1 className="font-black uppercase leading-tight tracking-tight text-white">
                            <span className="block text-5xl md:text-6xl lg:text-7xl">About</span>
                            <span className="block text-4xl md:text-5xl lg:text-6xl mt-2 bg-gradient-to-r from-orange-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                                HPE IT Solutions
                            </span>
                        </h1>

                        {/* Accent line */}
                        <motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="w-20 h-[3px] bg-gradient-to-r from-orange-400 to-blue-500 rounded-full origin-center"
                        />

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 w-full max-w-2xl">
                            {stats.map((s, i) => (
                                <StatCard key={s.label} value={s.value} label={s.label} delay={0.4 + i * 0.1} isDark={true} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>



            <main className={`relative z-10 ${isDark ? 'bg-[#0a0f1e]' : 'bg-white'} space-y-28 pb-40 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]`}>

                {/* OVERVIEW */}
                <section id="overview" className="px-8 md:px-16 pt-20">
                    <div className="max-w-[1600px] mx-auto">
                        <FadeUp>
                            <Glass className="p-10 md:p-24" isDark={isDark}>
                                <div className="grid lg:grid-cols-12 gap-20 items-start">
                                    <div className="lg:col-span-4 space-y-10">
                                        <Label text="Strategic Overview" color="text-orange-400" isDark={isDark} />
                                        <h2 className={`text-2xl md:text-4xl font-black uppercase tracking-tight leading-[0.9] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                            Structured <br />
                                            <span className={isDark ? 'text-white/40' : 'text-slate-400'}>Governance</span><br />
                                            at Scale
                                        </h2>
                                        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full" />
                                        <div className="space-y-4 pt-4">
                                            {['IT Services', 'Infrastructure Modernization', 'Workforce Enablement', 'Enterprise Governance'].map(tag => (
                                                <div key={tag} className={`flex items-center gap-4 text-lg font-bold ${isDark ? 'text-white/70' : 'text-slate-700'}`}>
                                                    <CheckCircle2 size={18} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                                                    {tag}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <FadeUp delay={0.18} className="lg:col-span-8 space-y-12">
                                        <p className={`text-xl md:text-3xl font-black leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                            HPE IT Solutions is a multi-vertical enterprise delivering structured IT services, infrastructure modernization, and workforce enablement across the Indian subcontinent.
                                        </p>
                                        <div className={`space-y-8 text-lg md:text-xl leading-relaxed font-medium ${isDark ? 'text-white/50' : 'text-slate-600'}`}>
                                            <p>Formed through 70+ strategic mergers and integrations, the organization operates under a unified governance model that ensures operational consistency, financial discipline, and execution excellence across all verticals.</p>
                                            <p>Headquartered in Hyderabad, with major operational hubs in Mumbai, Bangalore, Chennai, and Delhi, we combine centralized strategic oversight with decentralized field execution — enabling precision delivery at scale.</p>
                                        </div>
                                        <div className="pt-8">
                                            <Link to="/contact"
                                                className={`inline-flex items-center gap-4 px-12 py-6 text-[11px] font-black uppercase tracking-widest transition-all rounded-2xl border ${isDark ? 'text-white bg-white/[0.08] border-white/15 hover:bg-white/[0.15]' : 'text-slate-900 bg-slate-100 border-slate-200 hover:bg-slate-200'} shadow-2xl`}>
                                                Request Executive Briefing
                                                <ArrowRight size={16} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                                            </Link>
                                        </div>
                                    </FadeUp>
                                </div>
                            </Glass>
                        </FadeUp>
                    </div>
                </section>

                {/* ENTERPRISE STRUCTURE */}
                <section id="structure" className="px-8 md:px-16">
                    <div className="max-w-[1600px] mx-auto space-y-20">
                        <FadeUp className="text-center space-y-6">
                            <Label text="Operational Framework" color="text-blue-400" isDark={isDark} />
                            <h2 className={`text-3xl md:text-5xl font-black uppercase tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                Enterprise <span className={isDark ? 'text-white/30' : 'text-slate-300'}>Architecture</span>
                            </h2>
                            <div className="w-32 h-1 bg-blue-600 mx-auto rounded-full" />
                        </FadeUp>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {structure.map((s, i) => (
                                <StructCard key={s.title} icon={s.icon} title={s.title} body={s.body} delay={i * 0.1} isDark={isDark} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* INFRASTRUCTURE FOOTPRINT */}
                <section id="footprint" className="px-8 md:px-16 pt-10">
                    <div className="max-w-[1600px] mx-auto">
                        <FadeUp>
                            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-stretch">
                                <div className={`relative overflow-hidden rounded-3xl min-h-[380px] group border transition-colors duration-500 ${isDark ? 'border-white/10' : 'border-slate-200 shadow-lg'}`}>
                                    <img
                                        src="/about.png"
                                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 grayscale-[0.25] group-hover:scale-105 ${isDark ? 'opacity-100' : 'opacity-90'}`}
                                        alt="National Infrastructure"
                                    />
                                    <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-gradient-to-t from-[#0a0f1e]/80 via-[#0a0f1e]/10 to-transparent' : 'bg-gradient-to-t from-black/40 via-transparent to-transparent'}`} />
                                    <div className="absolute bottom-6 left-6">
                                        <div className={`backdrop-blur-xl border rounded-2xl px-5 py-3 transition-all duration-500 ${isDark ? 'bg-white/[0.10] border-white/15' : 'bg-white/80 border-slate-200 shadow-xl'}`}>
                                            <div className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>20+ States</div>
                                            <div className={`text-[8px] uppercase font-black tracking-widest mt-1 ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>Sovereign Delivery Footprint</div>
                                        </div>
                                    </div>
                                </div>

                                <Glass className="p-8 md:p-16 flex flex-col justify-center gap-10" isDark={isDark}>
                                    <div className="space-y-4">
                                        <Label text="Geographic Scale" color="text-blue-400" isDark={isDark} />
                                        <h2 className={`text-2xl md:text-4xl font-black uppercase tracking-tight leading-[1] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                            Precision Delivery <br />
                                            <span className={isDark ? 'text-white/35' : 'text-slate-400'}>National Footprint</span>
                                        </h2>
                                    </div>
                                    <div className="space-y-5">
                                        {footprintPoints.map((pt, i) => (
                                            <div key={i} className="flex gap-4 group/pt">
                                                <div className={`mt-2 w-2 h-2 rounded-full shrink-0 transition-colors ${isDark ? 'bg-orange-400 group-hover/pt:bg-blue-400' : 'bg-orange-600 group-hover/pt:bg-blue-600'}`} />
                                                <p className={`text-base md:text-lg font-bold leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>{pt}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <Link to="/strength"
                                        className={`self-start inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-widest transition-colors group/link ${isDark ? 'text-white/45 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`}>
                                        View Organisational Strength
                                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </Glass>
                            </div>
                        </FadeUp>
                    </div>
                </section>


                {/* 100% WIDTH MINIMALIST QUOTE CTA */}
                <section className="w-full">
                    <FadeUp className="w-full overflow-hidden bg-[#020817] border-y border-white/5 relative">
                        {/* Subtle background glow */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                        <div className="relative z-10 py-28 md:py-36 px-8 text-center space-y-12">
                            <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-white leading-[1.1] tracking-tight uppercase max-w-6xl mx-auto">
                                “Where technology meets execution — <br />
                                <span className="text-white/40">let’s create impact together.”</span>
                            </h2>

                            <div className="flex justify-center">
                                <Link to="/contact"
                                    className="inline-flex items-center gap-4 px-12 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-[#00e5ff] hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-blue-600/10 group">
                                    Connect with us
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </FadeUp>
                </section>

            </main>
        </article>
    );
};

export default About;
