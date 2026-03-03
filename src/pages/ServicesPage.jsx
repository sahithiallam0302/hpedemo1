import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import {
    Database, Building2, Users,
    CheckCircle2, ArrowRight, ChevronRight,
    Code2, Cloud, BarChart3,
    HardHat, Wifi, DollarSign,
    Wrench, FileText, Settings
} from 'lucide-react';

/* ─── Scroll Animation Wrapper ─── */
const FadeUp = ({ children, className = '', delay = 0 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/* ─── Section Label ─── */
const Label = ({ text, color = 'text-hpe-orange' }) => (
    <span className={`inline-block text-[10px] font-black uppercase tracking-[0.55em] ${color}`}>
        {text}
    </span>
);

/* ─── Glass Panel ─── */
const Glass = ({ children, className = '', isDark }) => (
    <div className={`rounded-3xl transition-all duration-500 ${isDark
        ? 'bg-white/[0.05] backdrop-blur-2xl border border-white/[0.10] shadow-[0_8px_32px_rgba(0,0,0,0.35)]'
        : 'bg-white border border-slate-200 shadow-xl'
        } ${className}`}>
        {children}
    </div>
);

/* ─── Service Division Card ─── */
const DivisionCard = ({
    divisionNo, route, Icon, label, title, tagline, description,
    highlights, accentFrom, accentTo, glowColor, isDark, index
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
            <Link to={route} className="block group h-full">
                <Glass isDark={isDark} className="p-8 md:p-10 h-full relative overflow-hidden hover:scale-[1.015] hover:shadow-2xl transition-all duration-500 cursor-pointer">

                    {/* Glow blob on hover */}
                    <div className={`absolute -top-20 -right-24 w-64 h-64 ${glowColor} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                    {/* Top Row: Division No + Icon */}
                    <div className="flex items-start justify-between mb-7 relative z-10">
                        <div>
                            <Label text={`Division ${divisionNo}`} color="text-slate-500" />
                            <h3 className={`text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight mt-2 ${isDark ? 'text-white' : 'text-[#011b26]'}`}>
                                {title}
                            </h3>
                        </div>
                        <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${accentFrom} ${accentTo} group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                            <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Tag pill */}
                    <div className="mb-5 relative z-10">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black tracking-[0.25em] uppercase ${isDark
                            ? 'bg-white/[0.06] text-slate-400 border border-white/10'
                            : 'bg-slate-100 text-slate-500 border border-slate-200'
                            }`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-hpe-cyan inline-block animate-pulse" />
                            {label}
                        </span>
                    </div>

                    {/* Tagline */}
                    <p className={`text-sm font-black uppercase tracking-wide mb-3 relative z-10 ${isDark ? 'text-hpe-cyan' : 'text-hpe-cyan-dark'}`}>
                        {tagline}
                    </p>

                    {/* Description */}
                    <p className={`text-sm font-medium leading-relaxed mb-7 relative z-10 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {description}
                    </p>

                    {/* Divider */}
                    <div className={`w-full h-px mb-6 relative z-10 ${isDark ? 'bg-white/10' : 'bg-slate-100'}`} />

                    {/* Highlights */}
                    <ul className="space-y-2.5 mb-8 relative z-10">
                        {highlights.map((h, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="w-4 h-4 text-hpe-cyan flex-shrink-0" />
                                <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{h}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Link */}
                    <div className="relative z-10">
                        <span className={`inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-hpe-orange group-hover:gap-3 transition-all duration-300`}>
                            Explore Division
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${accentFrom} ${accentTo} group-hover:w-full transition-all duration-700 rounded-b-3xl`} />
                </Glass>
            </Link>
        </motion.div>
    );
};

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════ */
const ServicesPage = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const divisions = [
        {
            divisionNo: '01',
            route: '/services/enterprise',
            Icon: Database,
            label: 'Enterprise IT Services',
            title: 'Enterprise Architecture, Automation & Digital Governance',
            tagline: 'ERP · Cloud · Analytics · App Development',
            description: 'The Enterprise IT Division designs, develops, and manages secure, scalable enterprise ecosystems supporting multi-entity and multi-location operations — from centralized ERP frameworks to real-time executive intelligence.',
            highlights: [
                'ERP & Workflow Automation across procurement, finance & compliance',
                'Enterprise Application Development for construction & infrastructure',
                'Cloud & Infrastructure Management with disaster recovery frameworks',
                'Data & Analytics — executive dashboards and KPI monitoring systems',
            ],
            accentFrom: 'from-hpe-cyan',
            accentTo: 'to-indigo-500',
            glowColor: 'bg-hpe-cyan/20',
        },
        {
            divisionNo: '02',
            route: '/services/infrastructure',
            Icon: Building2,
            label: 'Infrastructure & Brick Services',
            title: 'Digitally Governed Infrastructure Execution',
            tagline: 'Construction · Procurement · Real Estate ERP · IoT',
            description: 'This division integrates digital systems with physical infrastructure operations to create centrally monitored, performance-controlled environments across 120+ active sites and multi-state programs.',
            highlights: [
                'Construction Project Digitization with centralized dashboards for 120+ sites',
                'Vendor & Procurement Automation — onboarding, invoicing, billing',
                'Real Estate ERP for housing & commercial development management',
                'IoT-Based Site Monitoring — attendance, productivity & remote supervision',
            ],
            accentFrom: 'from-hpe-orange',
            accentTo: 'to-amber-400',
            glowColor: 'bg-hpe-orange/20',
        },
        {
            divisionNo: '03',
            route: '/services/workforce',
            Icon: Users,
            label: 'Workforce & Managed Services',
            title: 'Structured National Execution & Operational Support',
            tagline: 'Manpower · Field Engineering · Compliance · AMC',
            description: 'With 2000+ employees deployed across India, HPE IT Solutions operates a centralized workforce governance framework — managing field engineers, technical teams, back-office operations and 24/7 AMC programs.',
            highlights: [
                'Pan-India Manpower Deployment across 45+ active infrastructure zones',
                'Field Engineering & ERP deployment support under formal service protocols',
                'Back-Office & Compliance — documentation, contracts & regulatory monitoring',
                'Annual Maintenance Contracts (AMC) — 24/7 uptime for ERP, cloud & IT systems',
            ],
            accentFrom: 'from-hpe-cyan',
            accentTo: 'to-emerald-400',
            glowColor: 'bg-emerald-400/20',
        },
    ];

    const globalStats = [
        { value: '2000+', label: 'Professionals', accent: 'text-hpe-cyan' },
        { value: '120+', label: 'Sites Monitored', accent: 'text-hpe-orange' },
        { value: '45+', label: 'Active Zones', accent: 'text-indigo-400' },
        { value: '3', label: 'Service Divisions', accent: 'text-emerald-400' },
    ];

    return (
        <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#011b26] text-white' : 'bg-slate-50 text-slate-900'}`}>

            {/* ──────────────────────────────────────────
                HERO
            ────────────────────────────────────────── */}
            <section className="relative min-h-[72vh] flex items-center pt-20 pb-24 overflow-hidden bg-[#011b26]">
                {/* Background glows */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-hpe-cyan/8 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-hpe-orange/8 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
                    <div className="absolute inset-0 opacity-[0.04]"
                        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                </div>

                {/* Right-side floating ring trio */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center z-0 pointer-events-none">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                        className="w-[420px] h-[420px] border border-dashed border-white/[0.07] rounded-full absolute" />
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                        className="w-80 h-80 border border-hpe-cyan/10 rounded-full absolute" />
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                        className="w-48 h-48 border border-dashed border-hpe-orange/10 rounded-full absolute" />
                    {/* Centre icons */}
                    <div className="relative flex flex-col items-center gap-3 z-10">
                        <Database className="w-8 h-8 text-hpe-cyan/30" strokeWidth={1} />
                        <Building2 className="w-8 h-8 text-hpe-orange/30" strokeWidth={1} />
                        <Users className="w-8 h-8 text-emerald-400/30" strokeWidth={1} />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-3xl">
                        {/* Breadcrumb */}
                        <motion.nav
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-2 text-[10px] font-black tracking-[0.35em] uppercase text-slate-500 mb-10"
                        >
                            <span className="hover:text-hpe-cyan transition-colors cursor-pointer">Home</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-hpe-cyan">Services</span>
                        </motion.nav>

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hpe-cyan/10 border border-hpe-cyan/20 mb-8"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-hpe-cyan animate-pulse" />
                            <span className="text-[10px] font-black tracking-[0.3em] text-hpe-cyan uppercase">3 Service Divisions · Full Spectrum Delivery</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.05] text-white mb-6"
                        >
                            Our Service <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hpe-cyan via-white/70 to-hpe-orange">
                                Divisions
                            </span>
                        </motion.h1>

                        {/* Sub */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-base md:text-lg text-slate-400 font-medium max-w-2xl leading-relaxed border-l-2 border-hpe-cyan/40 pl-5 mb-10"
                        >
                            HPE IT Solutions operates three integrated service divisions — delivering enterprise technology, infrastructure digitization, and national workforce governance as a unified, governance-ready ecosystem.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a href="#divisions" className="px-8 py-4 bg-hpe-orange text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-full shadow-xl shadow-hpe-orange/20 hover:bg-white hover:text-[#011b26] transition-all duration-300 active:scale-95 flex items-center gap-2 group">
                                Explore Divisions
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <Link to="/contact" className="px-8 py-4 border border-white/20 text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-full hover:border-hpe-cyan/60 hover:text-hpe-cyan transition-all duration-300">
                                Contact Us
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ──────────────────────────────────────────
                STATS STRIP
            ────────────────────────────────────────── */}
            <section className={`py-12 border-y ${isDark ? 'border-white/5 bg-white/[0.02]' : 'border-slate-100 bg-white'}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {globalStats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="text-center"
                            >
                                <p className={`text-3xl md:text-4xl font-black ${stat.accent}`}>{stat.value}</p>
                                <p className={`text-[11px] font-black uppercase tracking-widest mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────────────────────────────────────
                THREE DIVISION CARDS
            ────────────────────────────────────────── */}
            <section id="divisions" className="py-28 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Section Header */}
                    <FadeUp delay={0}>
                        <div className="mb-16 max-w-2xl">
                            <Label text="Service Architecture" color="text-hpe-orange" />
                            <h2 className={`text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mt-3 mb-4 ${isDark ? 'text-white' : 'text-[#011b26]'}`}>
                                Three Divisions. One Integrated Vision.
                            </h2>
                            <div className="w-16 h-1.5 bg-hpe-cyan rounded-full" />
                        </div>
                    </FadeUp>

                    {/* Division cards grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {divisions.map((div, i) => (
                            <DivisionCard key={i} index={i} isDark={isDark} {...div} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────────────────────────────────────
                INTEGRATION SECTION — How they work together
            ────────────────────────────────────────── */}
            <section className={`py-28 px-6 relative ${isDark ? 'bg-white/[0.02] border-y border-white/5' : 'bg-slate-100/60'}`}>
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-hpe-cyan/5 blur-[120px]" />
                    <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-hpe-orange/5 blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeUp delay={0}>
                        <div className="text-center mb-16">
                            <Label text="Integrated Delivery" color="text-hpe-cyan" />
                            <h2 className={`text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mt-3 ${isDark ? 'text-white' : 'text-[#011b26]'}`}>
                                How Our Divisions Work Together
                            </h2>
                        </div>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Database className="w-8 h-8" />,
                                step: '01',
                                title: 'Digital Systems',
                                desc: 'Enterprise IT builds the ERP backbone — centralizing data, automating approvals, and creating the intelligence layer for the entire operation.',
                                accent: 'text-hpe-cyan',
                                border: 'border-hpe-cyan/20',
                                bg: 'bg-hpe-cyan/10',
                            },
                            {
                                icon: <Building2 className="w-8 h-8" />,
                                step: '02',
                                title: 'Physical Execution',
                                desc: 'Infrastructure & Brick connects those digital systems to real-world sites — digitizing procurement, site monitoring, and cost control across 120+ locations.',
                                accent: 'text-hpe-orange',
                                border: 'border-hpe-orange/20',
                                bg: 'bg-hpe-orange/10',
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                step: '03',
                                title: 'Workforce & Continuity',
                                desc: 'Workforce & Managed Services deploys 2000+ professionals to operate within those systems and environments — maintaining continuity through 24/7 AMC programs.',
                                accent: 'text-emerald-400',
                                border: 'border-emerald-400/20',
                                bg: 'bg-emerald-400/10',
                            },
                        ].map((item, i) => (
                            <FadeUp key={i} delay={i * 0.15}>
                                <div className={`relative p-8 rounded-3xl border ${item.border} ${isDark ? 'bg-white/[0.03]' : 'bg-white'} h-full group hover:scale-[1.015] transition-all duration-500`}>
                                    {/* Step number */}
                                    <p className={`text-[10px] font-black tracking-[0.5em] uppercase mb-5 ${item.accent}`}>Step {item.step}</p>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6 ${item.accent} group-hover:scale-110 transition-transform duration-500`}>
                                        {item.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className={`text-xl font-black uppercase tracking-tight mb-3 ${isDark ? 'text-white' : 'text-[#011b26]'}`}>{item.title}</h3>
                                    <p className={`text-sm font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>

                                    {/* connector arrow — hidden on last item */}
                                    {i < 2 && (
                                        <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                                            <ChevronRight className={`w-8 h-8 ${item.accent} opacity-30`} />
                                        </div>
                                    )}
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────────────────────────────────────
                CTA
            ────────────────────────────────────────── */}
            <section className="py-28 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className={`relative overflow-hidden rounded-[3rem] border p-12 md:p-20 text-center ${isDark
                            ? 'bg-white/[0.03] border-white/10'
                            : 'bg-white border-slate-200 shadow-2xl'
                            }`}
                    >
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-hpe-cyan/15 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-hpe-orange/15 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative z-10 space-y-6">
                            <Label text="Partner With Us" color="text-hpe-orange" />
                            <h2 className={`text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight ${isDark ? 'text-white' : 'text-[#011b26]'}`}>
                                Ready to Build With <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-hpe-cyan to-hpe-orange">
                                    HPE IT Solutions?
                                </span>
                            </h2>
                            <p className={`text-base md:text-lg font-medium max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                Whether you need enterprise systems, on-ground infrastructure digitization, or a governed national workforce — we deliver end-to-end.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                                <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-hpe-orange text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-full shadow-xl shadow-hpe-orange/20 hover:bg-white hover:text-[#011b26] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group">
                                    Start a Conversation
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/about" className={`w-full sm:w-auto px-10 py-4 border-2 font-black text-[11px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 ${isDark
                                    ? 'border-white/20 text-white hover:border-hpe-cyan hover:text-hpe-cyan'
                                    : 'border-slate-200 text-slate-600 hover:border-hpe-cyan hover:text-hpe-cyan hover:bg-hpe-cyan/5'
                                    }`}>
                                    About HPE IT
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default ServicesPage;
