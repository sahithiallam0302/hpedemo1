
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import {
    HardHat, ShoppingCart, Building2, Wifi, DollarSign,
    CheckCircle2, ChevronRight, ArrowRight,
    MapPin, LayoutDashboard, Clock, FileText,
    UserCheck, Package, CreditCard, TrendingDown,
    Home, BarChart2, Layers, MonitorSmartphone,
    Users, Activity, Eye, ShieldCheck,
    PieChart, Banknote, Receipt, LineChart
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

/* ─── Bullet Item ─── */
const Bullet = ({ text, isDark, accentColor = 'bg-hpe-orange' }) => (
    <li className="flex items-start gap-3">
        <span className={`mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full ${accentColor}`} />
        <span className={`text-sm font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {text}
        </span>
    </li>
);

/* ─── Service Module Card ─── */
const ServiceModule = ({ icon, title, label, bullets, result, isDark, index, accentBg, accentText, bulletColor }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
            <Glass isDark={isDark} className="p-8 md:p-10 h-full group hover:scale-[1.01] hover:shadow-2xl transition-all duration-500">
                {/* Icon + Label Row */}
                <div className="flex items-start gap-5 mb-6">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${accentBg} group-hover:scale-110 transition-transform duration-500`}>
                        {React.cloneElement(icon, { className: 'w-7 h-7 text-white', strokeWidth: 1.5 })}
                    </div>
                    <div>
                        <Label text={label} color={accentText} />
                        <h3 className={`text-xl font-black uppercase tracking-tight mt-1 ${isDark ? 'text-white' : 'text-[#011b26]'}`}>
                            {title}
                        </h3>
                    </div>
                </div>

                {/* Divider */}
                <div className={`w-full h-px mb-6 ${isDark ? 'bg-white/10' : 'bg-slate-100'}`} />

                {/* Bullets */}
                <ul className="space-y-3 mb-6">
                    {bullets.map((b, i) => (
                        <Bullet key={i} text={b} isDark={isDark} accentColor={bulletColor} />
                    ))}
                </ul>

                {/* Result Tag */}
                {result && (
                    <div className={`mt-auto pt-4 border-t flex items-start gap-3 ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
                        <CheckCircle2 className="w-4 h-4 text-hpe-orange flex-shrink-0 mt-0.5" />
                        <p className={`text-xs font-semibold leading-snug ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            {result}
                        </p>
                    </div>
                )}
            </Glass>
        </motion.div>
    );
};

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════ */
const InfraBrickServices = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const modules = [
        {
            icon: <HardHat />,
            label: 'Project Digitization',
            title: 'Construction Project Digitization',
            accentBg: 'bg-hpe-orange',
            accentText: 'text-hpe-orange',
            bulletColor: 'bg-hpe-orange',
            bullets: [
                'Multi-Site Progress Tracking',
                'Centralized Project Dashboards',
                'Milestone & Timeline Monitoring',
                'Structured Reporting Protocols',
            ],
            result: 'Executive oversight across 120+ sites and multi-state infrastructure programs.',
        },
        {
            icon: <ShoppingCart />,
            label: 'Procurement Automation',
            title: 'Vendor & Procurement Automation',
            accentBg: 'bg-hpe-cyan',
            accentText: 'text-hpe-cyan',
            bulletColor: 'bg-hpe-cyan',
            bullets: [
                'Vendor Onboarding & Compliance Verification',
                'Material Requisition & Approval Workflows',
                'Invoice Processing & Billing Automation',
                'Centralized Financial Monitoring',
            ],
            result: 'Transparent procurement governance and reduced manual intervention.',
        },
        {
            icon: <Building2 />,
            label: 'Real Estate ERP',
            title: 'Real Estate ERP Systems',
            accentBg: 'bg-indigo-500',
            accentText: 'text-indigo-400',
            bulletColor: 'bg-indigo-400',
            bullets: [
                'Site Billing Modules',
                'Inventory & Material Tracking',
                'Cost Allocation & Multi-Project Consolidation',
                'Residential Unit Progress Monitoring',
            ],
            result: 'Designed to support high-volume housing and commercial developments.',
        },
        {
            icon: <Wifi />,
            label: 'IoT Monitoring',
            title: 'IoT-Based Site Monitoring Systems',
            accentBg: 'bg-emerald-500',
            accentText: 'text-emerald-400',
            bulletColor: 'bg-emerald-400',
            bullets: [
                'Workforce Attendance Tracking',
                'Productivity Analysis',
                'Remote Site Supervision',
                'Project Progress Validation',
            ],
            result: 'Digitally verifiable site execution with real-time transparency.',
        },
        {
            icon: <DollarSign />,
            label: 'Cost Control',
            title: 'Cost Control Platforms',
            accentBg: 'bg-amber-500',
            accentText: 'text-amber-400',
            bulletColor: 'bg-amber-400',
            bullets: [
                'Real-Time Material Usage Tracking',
                'Budget Variance Monitoring',
                'Vendor Payment Oversight',
                'Project-Level Cost Analytics',
            ],
            result: 'Ensuring disciplined capital deployment across infrastructure projects.',
        },
    ];

    const capabilities = [
        { icon: <MapPin className="w-5 h-5" />, label: 'Multi-Site Tracking' },
        { icon: <UserCheck className="w-5 h-5" />, label: 'Vendor Compliance' },
        { icon: <Package className="w-5 h-5" />, label: 'Material Management' },
        { icon: <Home className="w-5 h-5" />, label: 'Real Estate ERP' },
        { icon: <Wifi className="w-5 h-5" />, label: 'IoT Site Monitoring' },
        { icon: <PieChart className="w-5 h-5" />, label: 'Budget Variance Analytics' },
        { icon: <Eye className="w-5 h-5" />, label: 'Remote Supervision' },
        { icon: <Receipt className="w-5 h-5" />, label: 'Invoice Automation' },
    ];

    const stats = [
        { value: '120+', label: 'Sites Monitored', accent: 'text-hpe-orange' },
        { value: '100%', label: 'Digital Oversight', accent: 'text-hpe-cyan' },
        { value: 'Real-Time', label: 'Site Intelligence', accent: 'text-indigo-400' },
        { value: 'Zero', label: 'Manual Intervention', accent: 'text-emerald-400' },
    ];

    return (
        <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#011b26] text-white' : 'bg-slate-50 text-slate-900'}`}>

            {/* ──────────────────────────────────────────
                HERO
            ────────────────────────────────────────── */}
            <section className="relative min-h-[80vh] flex items-center pt-20 pb-28 overflow-hidden bg-[#011b26]">
                {/* Background glow orbs */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-hpe-orange/10 rounded-full blur-[160px] -translate-y-1/3 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-hpe-cyan/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
                    {/* Subtle grid */}
                    <div className="absolute inset-0 opacity-[0.04]"
                        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                </div>

                {/* Floating animated ring (right side) */}
                <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block z-0 pointer-events-none">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                        className="w-96 h-96 border-2 border-dashed border-hpe-orange/15 rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-8 border border-hpe-cyan/10 rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Building2 className="w-20 h-20 text-hpe-orange/30" strokeWidth={1} />
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
                            <span className="hover:text-hpe-orange transition-colors cursor-pointer">Home</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="hover:text-hpe-orange transition-colors cursor-pointer">Services</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-hpe-orange">Infrastructure & Brick</span>
                        </motion.nav>

                        {/* Division Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hpe-orange/10 border border-hpe-orange/20 mb-8"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-hpe-orange animate-pulse" />
                            <span className="text-[10px] font-black tracking-[0.3em] text-hpe-orange uppercase">Division 02 · Infrastructure & Brick-Oriented Services</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.05] text-white mb-6"
                        >
                            Digitally Governed <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hpe-orange via-amber-300 to-hpe-cyan">
                                Infrastructure
                            </span><br />
                            <span className="text-white">Execution</span>
                        </motion.h1>

                        {/* Sub-description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-base md:text-lg text-slate-400 font-medium max-w-xl leading-relaxed border-l-2 border-hpe-orange/40 pl-5 mb-12"
                        >
                            This division integrates digital systems with physical infrastructure operations to create centrally monitored, performance-controlled environments.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button className="px-8 py-4 bg-hpe-orange text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-full shadow-xl shadow-hpe-orange/25 hover:bg-white hover:text-[#011b26] transition-all duration-300 active:scale-95 flex items-center gap-2 group">
                                Explore Capabilities
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 border border-white/20 text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-full hover:border-hpe-orange/60 hover:text-hpe-orange transition-all duration-300">
                                Contact Team
                            </button>
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
                        {stats.map((stat, i) => (
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
                CAPABILITY BADGES STRIP
            ────────────────────────────────────────── */}
            <section className={`py-10 ${isDark ? 'bg-[#011b26]/50' : 'bg-slate-50'}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {capabilities.map((cap, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06, duration: 0.5 }}
                                className={`flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300 group cursor-default ${isDark
                                    ? 'border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] hover:border-hpe-orange/30'
                                    : 'border-slate-100 bg-white hover:border-hpe-orange/40 hover:shadow-md'
                                    }`}
                            >
                                <span className="text-hpe-orange group-hover:text-hpe-cyan transition-colors duration-300">
                                    {cap.icon}
                                </span>
                                <span className={`text-[11px] font-black uppercase tracking-wide ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                    {cap.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────────────────────────────────────
                SERVICE MODULES (5 cards — 2+2+1 grid)
            ────────────────────────────────────────── */}
            <section className="py-28 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <FadeUp delay={0}>
                        <div className="mb-16 max-w-2xl">
                            <Label text="Five Core Capabilities" color="text-hpe-orange" />
                            <h2 className={`text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mt-3 mb-4 ${isDark ? 'text-white' : 'text-[#011b26]'}`}>
                                Digitizing Every Dimension of Physical Infrastructure
                            </h2>
                            <div className="w-16 h-1.5 bg-hpe-orange rounded-full" />
                        </div>
                    </FadeUp>

                    {/* First row: 2 columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {modules.slice(0, 2).map((mod, i) => (
                            <ServiceModule key={i} index={i} isDark={isDark} {...mod} />
                        ))}
                    </div>

                    {/* Second row: 2 columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {modules.slice(2, 4).map((mod, i) => (
                            <ServiceModule key={i} index={i + 2} isDark={isDark} {...mod} />
                        ))}
                    </div>

                    {/* Third row: 1 centered card */}
                    <div className="max-w-2xl mx-auto">
                        <ServiceModule index={4} isDark={isDark} {...modules[4]} />
                    </div>
                </div>
            </section>

            {/* ──────────────────────────────────────────
                WHY CHOOSE THIS DIVISION — Split
            ────────────────────────────────────────── */}
            <section className={`py-28 px-6 relative ${isDark ? 'bg-white/[0.02] border-y border-white/5' : 'bg-slate-100/60'}`}>
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute left-0 top-0 w-1/2 h-full bg-hpe-orange/5 blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left: Content */}
                        <FadeUp delay={0}>
                            <div className="space-y-8">
                                <div>
                                    <Label text="Operational Intelligence" color="text-hpe-cyan" />
                                    <h2 className={`text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight mt-3 ${isDark ? 'text-white' : 'text-[#011b26]'}`}>
                                        Why HPE Infrastructure & Brick Services?
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { heading: 'Centralized Command', desc: 'Monitor 120+ active sites from a single digital command centre with real-time dashboards.' },
                                        { heading: 'IoT-Enabled Transparency', desc: 'Workforce attendance, productivity analysis, and remote supervision powered by smart sensor networks.' },
                                        { heading: 'Procurement Accountability', desc: 'Fully automated vendor onboarding, invoice processing and approval workflows eliminate revenue leakage.' },
                                        { heading: 'Real Estate ERP', desc: 'Specialized systems for billing, inventory, and residential unit progress built for high-volume developments.' },
                                        { heading: 'Disciplined Capital Deployment', desc: 'Budget variance monitoring and cost analytics ensure no project exceeds its financial mandate.' },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.08, duration: 0.6 }}
                                            className={`flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 group cursor-default ${isDark
                                                ? 'border-white/[0.07] hover:bg-white/[0.05] hover:border-hpe-orange/20'
                                                : 'border-slate-100 hover:bg-white hover:border-hpe-orange/30 bg-white/60'
                                                }`}
                                        >
                                            <span className="mt-1 flex-shrink-0">
                                                <CheckCircle2 className="w-5 h-5 text-hpe-orange" />
                                            </span>
                                            <div>
                                                <p className={`text-sm font-black uppercase tracking-wide ${isDark ? 'text-white' : 'text-[#011b26]'}`}>{item.heading}</p>
                                                <p className={`text-sm font-medium mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>

                        {/* Right: Visual */}
                        <FadeUp delay={0.15}>
                            <div className="relative">
                                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
                                        alt="Infrastructure Site"
                                        className="w-full h-full object-cover scale-[1.02] hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#011b26] via-transparent to-transparent opacity-60" />
                                </div>

                                {/* Floating Stat Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20, y: 20 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.7 }}
                                    className={`absolute -bottom-6 -right-6 p-5 rounded-2xl border shadow-2xl ${isDark
                                        ? 'bg-[#011b26]/90 border-white/10 backdrop-blur-xl'
                                        : 'bg-white border-slate-200'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-hpe-orange/20 flex items-center justify-center">
                                            <MapPin className="w-5 h-5 text-hpe-orange" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-black text-hpe-orange leading-none">120+</p>
                                            <p className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Active Sites</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </FadeUp>
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
                        {/* Glow accents */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-hpe-orange/15 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-hpe-cyan/15 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative z-10 space-y-6">
                            <Label text="Scale With Precision" color="text-hpe-orange" />
                            <h2 className={`text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight ${isDark ? 'text-white' : 'text-[#011b26]'}`}>
                                Ready to Digitize Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-hpe-orange to-hpe-cyan">
                                    Physical Infrastructure?
                                </span>
                            </h2>
                            <p className={`text-base md:text-lg font-medium max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                Partner with HPE IT Solutions to build a centrally governed, digitally monitored infrastructure at national scale.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                                <button className="w-full sm:w-auto px-10 py-4 bg-hpe-orange text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-full shadow-xl shadow-hpe-orange/20 hover:bg-white hover:text-[#011b26] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group">
                                    Start Your Engagement
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className={`w-full sm:w-auto px-10 py-4 border-2 font-black text-[11px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 ${isDark
                                    ? 'border-white/20 text-white hover:border-hpe-orange hover:text-hpe-orange'
                                    : 'border-slate-200 text-slate-600 hover:border-hpe-orange hover:text-hpe-orange hover:bg-hpe-orange/5'
                                    }`}>
                                    Download Brochure
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default InfraBrickServices;
