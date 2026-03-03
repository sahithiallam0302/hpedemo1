import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Cpu, Globe2, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/* ─── Scroll Fade-Up ─── */
const FadeUp = ({ children, className = '', delay = 0 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
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

const Divider = ({ isDark }) => (
    <div className={`max-w-7xl mx-auto px-8 md:px-16 border-t ${isDark ? 'border-white/[0.07]' : 'border-slate-200'}`} />
);

const contentBlocks = [
    { icon: Users, color: 'text-orange-400', borderColor: 'border-orange-400/25', label: 'Workforce Depth', title: 'Institutional-Grade Human Capital', body: ['HPE IT Solutions operates a structured, multi-tier workforce across all delivery verticals. From senior governance executives to field-level technical specialists, every role is defined within a clear accountability hierarchy.', 'Our workforce development model is built around continuous skill advancement, cross-functional deployment capability, and governance-aligned performance management — enabling consistently high delivery standards.'] },
    { icon: Cpu, color: 'text-blue-400', borderColor: 'border-blue-400/25', label: 'Technical Capability', title: 'Engineering Excellence Across Domains', body: ['Our technical teams maintain expertise across infrastructure build-out, network modernization, digital systems integration, and enterprise IT consolidation. This multi-domain proficiency allows us to manage complex, interdependent project components.', 'We deploy structured engineering protocols, technology-specific compliance standards, and performance benchmarking systems that ensure every technical deliverable meets institutional accountability requirements.'] },
    { icon: Globe2, color: 'text-teal-400', borderColor: 'border-teal-400/25', label: 'Infrastructure Reach', title: 'National-Scale Delivery Footprint', body: ['With active operations spanning 20 Indian states and over 500 concurrent sites under management, HPE IT Solutions maintains one of the most extensive infrastructure delivery footprints in the enterprise IT sector.', 'This architecture enables us to scale delivery rapidly in response to project expansions, new mandates, or urgent mobilization requirements — while maintaining full operational coherence, financial accountability, and compliance governance.'] },
    { icon: ShieldCheck, color: 'text-indigo-400', borderColor: 'border-indigo-400/25', label: 'Governance & Management', title: 'Structured Oversight at Every Level', body: ['Our governance architecture integrates ISO-certified audit frameworks, structured reporting protocols, and multi-layer approval mechanisms that ensure total operational transparency.', 'Senior management visibility into every project lifecycle — from initiation through closure — ensures that strategic intent is translated accurately into field execution. Our institutional governance culture is the foundation of our reliability.'] },
];


const Strength = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <article className={`transition-colors duration-500 overflow-x-hidden font-sans ${isDark ? 'bg-[#0a0f1e] text-white' : 'bg-[#f8fafc] text-slate-900'}`}>

            {/* TOP INTRO */}
            <section className="px-8 md:px-16 pt-20 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 items-end">
                        <FadeUp className="lg:col-span-6 space-y-6">
                            <Label text="Organisational Strength" color="text-orange-400" isDark={isDark} />
                            <h1 className={`text-2xl md:text-3xl font-bold uppercase tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                Capability. Scale. <br />
                                <span className={isDark ? 'text-white/40' : 'text-slate-400'}>Institutional Depth.</span>
                            </h1>
                            <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full" />
                        </FadeUp>

                        <FadeUp delay={0.15} className="lg:col-span-6 space-y-5">
                            <p className={`text-lg font-medium leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                                HPE IT Solutions has built an institutional-grade organisational structure capable of managing large-scale, multi-vertical enterprise mandates with precision.
                            </p>
                            <p className={`text-[15px] font-medium leading-relaxed ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
                                Formed through 70+ strategic integrations, our workforce capability, technical depth, and governance architecture represent a singular competitive advantage.
                            </p>
                            <Link to="/contact" className={`inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest transition-all group/link ${isDark ? 'text-white/50 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                Engage With Leadership
                                <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </FadeUp>
                    </div>
                </div>
            </section>

            <Divider isDark={isDark} />

            {/* MAIN VIDEO — FULL WIDTH EXPERIENTIAL SECTION */}
            <section className="relative w-full overflow-hidden">
                <FadeUp delay={0.12}>
                    <div className={`relative w-full h-[80vh] min-h-[680px] transition-all duration-500 ${isDark ? 'border-y border-white/10' : 'border-y border-slate-200 shadow-sm'}`}>
                        <video autoPlay loop muted playsInline className={`absolute inset-0 w-full h-full object-cover ${isDark ? 'opacity-90' : 'opacity-100'}`}>
                            <source src="https://player.vimeo.com/external/494251034.hd.mp4?s=34a873f1d3e144a1e944b3604929c2bcc5d36e05&profile_id=174" type="video/mp4" />
                        </video>

                        {/* Dynamic Overlays */}
                        <div className={`absolute inset-0 transition-opacity duration-700 ${isDark ? 'bg-[#0a0f1e]/40' : 'bg-slate-900/10'}`} />
                        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent ${isDark ? 'to-[#0a0f1e]' : 'to-[#f8fafc]'} pointer-events-none`} />

                        {/* Centered High-Impact Content Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="space-y-8 max-w-4xl"
                            >
                                <div className="space-y-4">
                                    <Label text="Enterprise in Motion" color="text-orange-400" isDark={isDark} />
                                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white drop-shadow-2xl leading-[0.9]">
                                        How We <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">Execute</span> at Scale
                                    </h2>
                                </div>

                                <p className="text-base md:text-lg text-white font-medium max-w-2xl mx-auto drop-shadow-md leading-relaxed opacity-90">
                                    HPE IT Solutions leverages a unified institutional-grade workforce to drive precision delivery and strategic excellence across 500+ active enterprise environments.
                                </p>

                                <div className="pt-6">
                                    <div className="inline-block backdrop-blur-xl bg-white/10 border border-white/20 rounded-[2rem] px-10 py-5 transition-transform hover:scale-105 duration-500">
                                        <p className="text-[11px] font-black uppercase tracking-[0.45em] text-white">
                                            Integrated Workforce · Scalable Execution · National Reach
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </FadeUp>
            </section>

            <Divider isDark={isDark} />

            {/* WORKFORCE DEPTH BLOCK */}
            <section id="workforce" className="px-8 md:px-16 py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        <FadeUp className="lg:col-span-5 space-y-5">
                            <div className={`pl-5 border-l-2 space-y-3 transition-colors duration-500 ${isDark ? contentBlocks[0].borderColor : contentBlocks[0].borderColor.replace('25', '100')}`}>
                                <Label text={contentBlocks[0].label} color={contentBlocks[0].color} isDark={isDark} />
                                <h2 className={`text-xl font-semibold uppercase tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    {contentBlocks[0].title}
                                </h2>
                            </div>
                            <div className="flex items-center gap-4 pt-2">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${isDark ? 'bg-white/[0.06] border-white/10 text-orange-400' : 'bg-slate-50 border-slate-200 text-orange-600'}`}>
                                    <Users size={20} strokeWidth={1.5} />
                                </div>
                                <p className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-slate-400'}`}>
                                    Multi-tier · Pan-India · Governance-aligned
                                </p>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.15} className={`lg:col-span-7 space-y-5 text-[15px] leading-[1.9] font-medium transition-colors duration-500 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                            {contentBlocks[0].body.map((p, i) => <p key={i}>{p}</p>)}
                        </FadeUp>
                    </div>
                </div>
            </section>


            {/* TECHNICAL CAPABILITY + INFRA REACH */}
            <section id="technical-capability" className="px-8 md:px-16 py-24">
                <div className="max-w-7xl mx-auto space-y-24">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        <FadeUp className={`lg:col-span-7 space-y-5 text-[15px] leading-[1.9] font-medium order-last lg:order-first ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                            {contentBlocks[1].body.map((p, i) => <p key={i}>{p}</p>)}
                        </FadeUp>
                        <FadeUp className="lg:col-span-5 space-y-5">
                            <div className={`pl-5 border-l-2 space-y-3 transition-colors duration-500 ${isDark ? contentBlocks[1].borderColor : contentBlocks[1].borderColor.replace('25', '100')}`}>
                                <Label text={contentBlocks[1].label} color={contentBlocks[1].color} isDark={isDark} />
                                <h2 className={`text-xl font-semibold uppercase tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    {contentBlocks[1].title}
                                </h2>
                            </div>
                            <div className="flex items-center gap-4 pt-2">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${isDark ? 'bg-white/[0.06] border-white/10 text-blue-400' : 'bg-slate-50 border-slate-200 text-blue-600'}`}>
                                    <Cpu size={20} strokeWidth={1.5} />
                                </div>
                                <p className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-slate-400'}`}>
                                    Multi-domain · ISO-aligned · Zero sub-contracting
                                </p>
                            </div>
                        </FadeUp>
                    </div>

                    <div className={`border-t transition-colors ${isDark ? 'border-white/[0.07]' : 'border-slate-100'}`} />

                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        <FadeUp className="lg:col-span-5 space-y-5">
                            <div className={`pl-5 border-l-2 space-y-3 transition-colors duration-500 ${isDark ? contentBlocks[2].borderColor : contentBlocks[2].borderColor.replace('25', '100')}`}>
                                <Label text={contentBlocks[2].label} color={contentBlocks[2].color} isDark={isDark} />
                                <h2 className={`text-xl font-semibold uppercase tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    {contentBlocks[2].title}
                                </h2>
                            </div>
                            <div className="flex items-center gap-4 pt-2">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${isDark ? 'bg-white/[0.06] border-white/10 text-teal-400' : 'bg-slate-50 border-slate-200 text-teal-600'}`}>
                                    <Globe2 size={20} strokeWidth={1.5} />
                                </div>
                                <p className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-slate-400'}`}>
                                    20 States · 500+ Sites · Rapid Mobilisation
                                </p>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.15} className={`lg:col-span-7 space-y-5 text-[15px] leading-[1.9] font-medium transition-colors ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                            {contentBlocks[2].body.map((p, i) => <p key={i}>{p}</p>)}
                        </FadeUp>
                    </div>
                </div>
            </section>

            <Divider isDark={isDark} />

            {/* GOVERNANCE BLOCK */}
            <section id="governance" className="px-8 md:px-16 py-24">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-stretch">
                    <FadeUp className="lg:col-span-7 space-y-8">
                        <div className={`pl-5 border-l-2 space-y-3 transition-colors duration-500 ${isDark ? contentBlocks[3].borderColor : contentBlocks[3].borderColor.replace('25', '100')}`}>
                            <Label text={contentBlocks[3].label} color={contentBlocks[3].color} isDark={isDark} />
                            <h2 className={`text-2xl font-semibold uppercase tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                {contentBlocks[3].title}
                            </h2>
                        </div>
                        <div className={`space-y-5 text-[15px] leading-[1.9] font-medium transition-all ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                            {contentBlocks[3].body.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                        <div className={`grid grid-cols-3 gap-0 border rounded-xl overflow-hidden mt-4 shadow-sm transition-all duration-500 ${isDark ? 'border-white/10' : 'border-slate-200 bg-white'}`}>
                            {[
                                { label: 'ISO Certified', desc: 'Audit-ready frameworks', col: 'text-indigo-400' },
                                { label: 'Full Visibility', desc: 'Executive-level reporting', col: 'text-blue-400' },
                                { label: 'Zero Tolerance', desc: 'Governance breach protocols', col: 'text-teal-400' },
                            ].map((item, i) => (
                                <div key={i} className={`p-5 space-y-1.5 transition-colors ${i < 2 ? (isDark ? 'border-r border-white/10' : 'border-r border-slate-100') : ''}`}>
                                    <p className={`text-[10px] font-black uppercase tracking-widest ${isDark ? item.col : item.col.replace('400', '600')}`}>{item.label}</p>
                                    <p className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.18} className="lg:col-span-5">
                        <div className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 h-full min-h-[360px] ${isDark ? 'border-white/10' : 'border-slate-200 shadow-xl'}`}>
                            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069" alt="Governance teams" className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 grayscale-[0.15] ${isDark ? 'opacity-55 hover:opacity-75' : 'opacity-90'}`} />
                            <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-gradient-to-t from-[#0a0f1e]/80 via-[#0a0f1e]/10 to-transparent' : 'bg-gradient-to-t from-black/40 via-transparent to-transparent'}`} />
                            <div className="absolute bottom-6 left-6">
                                <p className={`text-xs font-black uppercase tracking-widest ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Governance Architecture</p>
                                <p className="text-white text-sm font-semibold mt-0.5">Institutional oversight in action</p>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* CTA */}
            <section className="px-8 md:px-16 pb-40">
                <FadeUp className="max-w-5xl mx-auto">
                    <div className={`relative py-16 px-10 md:px-16 rounded-[2rem] border overflow-hidden transition-all duration-500 ${isDark ? 'border-white/10 bg-white/[0.02]' : 'border-slate-200 bg-white shadow-2xl'}`}>
                        {isDark ? (
                            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/[0.06] blur-[120px] rounded-full pointer-events-none" />
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white pointer-events-none" />
                        )}
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="space-y-3 lg:max-w-lg">
                                <h2 className={`text-lg md:text-xl font-bold uppercase tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    Partner With an Organisation<br />
                                    <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">Built for Enterprise Scale</span>
                                </h2>
                                <p className={`text-sm font-medium leading-relaxed max-w-md ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                                    Engage with HPE IT Solutions to access institutional-grade workforce depth, technical capability, and national infrastructure reach.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                                <Link to="/contact" className="px-10 py-4 bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-xl shadow-blue-600/20 text-center">Begin Engagement</Link>
                                <Link to="/vision-mission" className={`px-10 py-4 font-black uppercase tracking-widest text-[10px] rounded-xl transition-all text-center border ${isDark ? 'bg-white/[0.06] border-white/10 text-white hover:bg-white/[0.11]' : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'}`}>View Vision & Mission</Link>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </section>

        </article>
    );
};

export default Strength;
