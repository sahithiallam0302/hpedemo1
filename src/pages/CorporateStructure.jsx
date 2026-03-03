import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Users2, Globe2, Cpu, Building2, Network } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/* ─── Scroll Fade-Up ─── */
const FadeUp = ({ children, className = '', delay = 0 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const Label = ({ text, color = 'text-orange-400' }) => (
    <span className={`inline-block text-[10px] font-black uppercase tracking-[0.55em] ${color}`}>
        {text}
    </span>
);

const Divider = ({ isDark }) => (
    <div className={`max-w-7xl mx-auto px-8 md:px-16 border-t ${isDark ? 'border-white/[0.07]' : 'border-black/[0.1]'}`} />
);

/* ─── Governance grid data ─── */
const govItems = [
    { icon: Building2, color: 'text-orange-400', borderColor: 'border-orange-400/20', label: 'Board Level Governance', body: 'The Board of Directors exercises supreme oversight over strategic direction, capital allocation, risk governance, and enterprise-wide compliance mandates.' },
    { icon: BarChart3, color: 'text-blue-400', borderColor: 'border-blue-400/20', label: 'Executive Management', body: 'Senior executive leadership translates board-level mandates into operational policy, resource strategy, and cross-vertical governance protocols.' },
    { icon: Globe2, color: 'text-teal-400', borderColor: 'border-teal-400/20', label: 'Regional Operations', body: 'Regional directors manage pan-India delivery hubs across Hyderabad, Mumbai, Bangalore, Chennai, and Delhi under centralised governance.' },
    { icon: Cpu, color: 'text-indigo-400', borderColor: 'border-indigo-400/20', label: 'Technical Divisions', body: 'Specialised divisions oversee infrastructure engineering, digital integration, network architecture, and IT consolidation verticals.' },
    { icon: Users2, color: 'text-amber-400', borderColor: 'border-amber-400/20', label: 'Workforce & HR', body: 'Institutional workforce management governs talent acquisition, capability development, structured performance reviews, and cross-functional deployment.' },
    { icon: Network, color: 'text-rose-400', borderColor: 'border-rose-400/20', label: 'Compliance & Audit', body: 'An independent compliance and internal audit framework operates across all verticals with ISO-certified protocols ensuring financial integrity.' },
];

const CorporateStructure = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <article className={`transition-colors duration-500 overflow-x-hidden font-sans ${isDark ? 'bg-[#0a0f1e] text-white' : 'bg-[#f8fafc] text-slate-900'}`}>

            {/* 1) INTRO SECTION */}
            <section id="leadership" className="px-8 md:px-16 py-24">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-end">
                    <FadeUp className="lg:col-span-6 space-y-6">
                        <Label text="Corporate Architecture" color={isDark ? 'text-orange-400' : 'text-orange-600'} />
                        <h1 className={`text-2xl md:text-3xl font-bold uppercase tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            Corporate <br /><span className={isDark ? 'text-white/40' : 'text-slate-400'}>Structure</span>
                        </h1>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full" />
                    </FadeUp>
                    <FadeUp delay={0.15} className="lg:col-span-6 space-y-5">
                        <p className={`text-lg font-medium leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                            HPE IT Solutions operates through a disciplined institutional hierarchy — integrating board-level governance, executive leadership, and four specialised business divisions.
                        </p>
                        <p className={`text-[15px] font-medium leading-relaxed ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
                            Strategic coherence from the boardroom to field-level execution across every vertical, geography, and engagement type we manage.
                        </p>
                        <Link to="/contact" className={`inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest transition-colors group/link ${isDark ? 'text-white/45 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                            Speak With Leadership <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </FadeUp>
                </div>
            </section>

            <Divider isDark={isDark} />

            {/* 2) ORG CHART SECTION */}
            <section id="org-chart" className="px-8 md:px-16 py-24">
                <div className="max-w-7xl mx-auto space-y-16">
                    <FadeUp className="space-y-3 text-center">
                        <Label text="Governance Architecture" color={isDark ? 'text-blue-400' : 'text-blue-600'} />
                        <h2 className={`text-lg md:text-xl font-semibold uppercase tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            Organisational Chart
                        </h2>
                        <p className={`text-sm font-medium max-w-lg mx-auto ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
                            Structured accountability from board to divisions — every tier operates within a defined governance mandate.
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.14}>
                        <div className={`rounded-3xl border transition-all duration-500 p-10 md:p-16 overflow-x-auto ${isDark ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200 bg-white shadow-xl'}`}>
                            <div className="min-w-[1000px] flex flex-col items-center">
                                {/* Tier 1 - Board of Directors */}
                                <div className={`px-12 py-6 rounded-2xl border text-center w-[400px] transition-colors shadow-lg ${isDark ? 'border-orange-400/50 bg-orange-400/[0.09]' : 'border-orange-200 bg-orange-50'}`}>
                                    <p className={`text-[11px] font-black uppercase tracking-[0.5em] mb-2 ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>Tier 1</p>
                                    <p className={`font-extrabold text-xl ${isDark ? 'text-white' : 'text-slate-900'}`}>Board of Directors</p>
                                    <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${isDark ? 'text-orange-300/60' : 'text-orange-700/60'}`}>Supreme Governance</p>
                                </div>
                                <div className={`w-px h-12 ${isDark ? 'bg-white/30' : 'bg-slate-300'}`} />

                                {/* Tier 2 - CEO */}
                                <div className={`px-12 py-6 rounded-2xl border text-center w-[400px] transition-colors shadow-lg ${isDark ? 'border-blue-400/50 bg-blue-400/[0.09]' : 'border-blue-200 bg-blue-50'}`}>
                                    <p className={`text-[11px] font-black uppercase tracking-[0.5em] mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Tier 2 · Executive</p>
                                    <p className={`font-extrabold text-xl ${isDark ? 'text-white' : 'text-slate-900'}`}>Chief Executive Officer (CEO)</p>
                                    <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${isDark ? 'text-blue-300/60' : 'text-blue-700/60'}`}>Group Strategy & Policy</p>
                                </div>

                                <div className={`w-px h-12 ${isDark ? 'bg-white/30' : 'bg-slate-300'}`} />
                                <div className={`w-full max-w-[900px] h-px ${isDark ? 'bg-white/30' : 'bg-slate-300'}`} />

                                {/* Tier 3 - C-Suite Officers */}
                                <div className="w-full max-w-[1000px] grid grid-cols-4 gap-3">
                                    {['COO', 'CTO', 'CFO', 'CHRO'].map((abbr, i) => (
                                        <div key={abbr} className="flex flex-col items-center">
                                            <div className={`w-px h-10 ${isDark ? 'bg-white/30' : 'bg-slate-300'}`} />
                                            <div className={`w-full px-4 py-5 rounded-xl border text-center transition-all shadow-md group ${isDark ? 'border-white/20 bg-white/5 hover:bg-white/10' : 'border-slate-200 bg-white hover:bg-slate-50'}`}>
                                                <p className={`font-black tracking-widest text-[13px] mb-1 ${isDark ? 'text-[#a5b4fc]' : 'text-indigo-600'}`}>{abbr}</p>
                                                <p className={`font-bold text-[10px] uppercase tracking-tighter ${isDark ? 'text-white/60' : 'text-slate-500'}`}>Executive Office</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            <Divider isDark={isDark} />

            {/* 3) LEADERSHIP OVERVIEW */}
            <section id="executive-leadership" className="px-8 md:px-16 py-24">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <FadeUp className={`group relative overflow-hidden rounded-2xl border transition-colors ${isDark ? 'border-white/10' : 'border-slate-200 shadow-lg'} min-h-[400px]`}>
                        <img
                            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069"
                            alt="Leadership"
                            className={`absolute inset-0 w-full h-full object-cover grayscale-[0.1] group-hover:scale-[1.03] transition-all duration-700 ${isDark ? 'opacity-60 group-hover:opacity-75' : 'opacity-90'}`}
                        />
                        <div className={`absolute inset-0 transition-colors ${isDark ? 'bg-gradient-to-t from-[#0a0f1e]/80 via-[#0a0f1e]/10 to-transparent' : 'bg-gradient-to-t from-white/40 via-transparent to-transparent'}`} />
                    </FadeUp>
                    <FadeUp delay={0.15} className="flex flex-col justify-center space-y-8">
                        <div className="space-y-5">
                            <Label text="Leadership Structure" color={isDark ? 'text-orange-400' : 'text-orange-600'} />
                            <h2 className={`text-xl font-semibold uppercase tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                Board-Driven<br /><span className={isDark ? 'text-white/40' : 'text-slate-400'}>Institutional Leadership</span>
                            </h2>
                        </div>
                        <div className={`space-y-5 text-[15px] leading-[1.9] font-medium ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                            <p>Anchor-based governance provided by our Board of Directors ensures strategic oversight and fiduciary accountability across all verticals.</p>
                            <p>This institutional framework reduces operational ambiguity and ensures consistent delivery quality across all client engagements.</p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            <Divider isDark={isDark} />

            {/* 4) OPERATIONS SECTION */}
            <section id="operations" className="px-8 md:px-16 py-24">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <FadeUp className="flex flex-col justify-center space-y-8 lg:order-1 order-2">
                        <div className="space-y-5">
                            <Label text="Operational Model" color={isDark ? 'text-teal-400' : 'text-teal-600'} />
                            <h2 className={`text-xl font-semibold uppercase tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                Decentralised Execution<br /><span className={isDark ? 'text-white/40' : 'text-slate-400'}>Centralised Oversight</span>
                            </h2>
                        </div>
                        <div className={`space-y-5 text-[15px] leading-[1.9] font-medium ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                            <p>Five major operational hubs HEADQUARTERED IN HYDERABAD function as autonomous execution centres under centralised strategic governance.</p>
                        </div>
                        <div className={`grid grid-cols-3 gap-0 border rounded-xl overflow-hidden transition-colors ${isDark ? 'border-white/10' : 'border-slate-200 shadow-sm'}`}>
                            {[{ num: '5', label: 'Hubs' }, { num: '20', label: 'States' }, { num: '500+', label: 'Sites' }].map((item, i) => (
                                <div key={i} className={`p-5 text-center transition-colors ${i < 2 ? (isDark ? 'border-r border-white/10' : 'border-r border-slate-200') : ''}`}>
                                    <p className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.num}</p>
                                    <p className={`text-[9px] font-black uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.15} className={`group relative overflow-hidden rounded-2xl border transition-colors ${isDark ? 'border-white/10' : 'border-slate-200 shadow-lg'} min-h-[400px] lg:order-2 order-1`}>
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
                            alt="Operations"
                            className={`absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700 ${isDark ? 'opacity-60' : 'opacity-90'}`}
                        />
                        <div className={`absolute inset-0 transition-colors ${isDark ? 'bg-gradient-to-t from-[#0a0f1e]/80 via-[#0a0f1e]/10 to-transparent' : 'bg-gradient-to-t from-white/20 via-transparent to-transparent'}`} />
                    </FadeUp>
                </div>
            </section>

            <Divider isDark={isDark} />

            {/* 5) GOVERNANCE GRID */}
            <section id="governance-model" className="px-8 md:px-16 py-24">
                <div className="max-w-7xl mx-auto space-y-16">
                    <FadeUp className="space-y-5">
                        <Label text="Governance Architecture" color={isDark ? 'text-indigo-400' : 'text-indigo-600'} />
                        <h2 className={`text-xl font-semibold uppercase tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            Structured Accountability<br /><span className={isDark ? 'text-white/40' : 'text-slate-400'}>Across Every Division</span>
                        </h2>
                    </FadeUp>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {govItems.map((item, i) => (
                            <FadeUp key={i} delay={i * 0.08}>
                                <div className={`group h-full p-8 rounded-2xl border transition-all duration-300 ${isDark ? 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]' : 'border-slate-200 bg-white shadow-sm hover:shadow-md'}`}>
                                    <div className={`w-10 h-10 rounded-lg mb-5 flex items-center justify-center border transition-colors ${isDark ? 'bg-white/[0.05] border-white/10' : 'bg-slate-50 border-slate-100'} ${item.borderColor.replace('20', '50')} ${item.color}`}>
                                        <item.icon size={18} strokeWidth={1.5} />
                                    </div>
                                    <h3 className={`text-[11px] font-black uppercase tracking-[0.4em] mb-3 ${isDark ? item.color : item.color.replace('400', '600')}`}>{item.label}</h3>
                                    <p className={`text-sm leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{item.body}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            <Divider isDark={isDark} />

            {/* 6) GOVERNANCE TABLE */}
            <section id="scale" className="px-8 md:px-16 py-24">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
                    <FadeUp className="lg:col-span-12 space-y-6 text-center">
                        <Label text="Institutional Design" color={isDark ? 'text-blue-400' : 'text-blue-600'} />
                        <h2 className={`text-2xl font-semibold uppercase tracking-tight leading-tight text-center w-full ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            An Architecture Built to Scale
                        </h2>
                    </FadeUp>
                    <FadeUp delay={0.15} className="lg:col-span-12">
                        <div className={`border rounded-2xl overflow-hidden transition-colors ${isDark ? 'border-white/10 bg-white/[0.01]' : 'border-slate-200 bg-white shadow-sm'}`}>
                            {[
                                { label: 'Governance Review Cycle', value: 'Quarterly Board & Executive Review' },
                                { label: 'Audit Framework', value: 'ISO-Certified Internal Audit' },
                                { label: 'Reporting Structure', value: 'Unified Executive Reporting Chain' },
                                { label: 'Compliance Protocol', value: 'Multi-layer Regulatory Oversight' },
                                { label: 'Regional Accountability', value: 'Director-Level Hub Governance' },
                            ].map((row, i) => (
                                <div key={i} className={`flex items-center justify-between px-8 py-5 transition-colors ${i < 4 ? (isDark ? 'border-b border-white/[0.07]' : 'border-b border-slate-100') : ''} ${isDark ? 'hover:bg-white/[0.03]' : 'hover:bg-slate-50'}`}>
                                    <p className={`text-[11px] font-black uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>{row.label}</p>
                                    <p className={`text-sm font-semibold ${isDark ? 'text-white/80' : 'text-slate-700'}`}>{row.value}</p>
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                </div>
            </section>

            <Divider isDark={isDark} />

            {/* 7) CTA SECTION */}
            <section className="px-8 md:px-16 pt-20 pb-48">
                <FadeUp className="max-w-7xl mx-auto">
                    <div className={`relative py-20 px-10 md:px-20 rounded-3xl border overflow-hidden transition-all duration-500 ${isDark ? 'border-white/10 bg-white/[0.02]' : 'border-slate-200 bg-white shadow-xl'}`}>
                        {isDark && <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-blue-500/[0.05] blur-[120px] rounded-full pointer-events-none" />}
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
                            <div className="space-y-4 lg:max-w-2xl">
                                <h2 className={`text-xl md:text-2xl font-bold uppercase tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    Engage With a Governance-Ready <br />
                                    <span className="bg-gradient-to-r from-orange-400 to-blue-600 bg-clip-text text-transparent">Enterprise Partner</span>
                                </h2>
                                <p className={`text-lg font-medium leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                                    Access institutional corporate structure and national delivery capability for your next enterprise mandate.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-xl shadow-blue-600/20">
                                    Initiate Engagement
                                </Link>
                                <Link to="/strength" className={`px-10 py-5 border font-black uppercase tracking-widest text-[11px] rounded-2xl transition-all ${isDark ? 'bg-white/[0.06] border-white/10 text-white hover:bg-white/[0.11]' : 'bg-slate-100 border-slate-200 text-slate-900 hover:bg-slate-200'}`}>
                                    View Org Strength
                                </Link>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </section>

        </article>
    );
};

export default CorporateStructure;
