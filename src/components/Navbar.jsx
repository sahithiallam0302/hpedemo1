import { Link, useLocation } from 'react-router-dom';
import {
    Sun, Moon, Menu, X, ChevronDown, ArrowRight,
    Building2, Users, LayoutGrid, Shield,
    Headphones, Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';

function Navbar() {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMega, setActiveMega] = useState(null);
    const [hoveredName, setHoveredName] = useState(null);
    const [expandedAccordion, setExpandedAccordion] = useState(null);

    // Close menus on route change & handle scroll to hash
    useEffect(() => {
        setMenuOpen(false);
        setActiveMega(null);
        setExpandedAccordion(null);
        setHoveredName(null);

        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location.pathname, location.hash]);

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about', mega: 'about' },
        { name: 'SERVICES', path: '/services', mega: 'services' },
        { name: 'PROJECTS', path: '/projects', mega: 'projects' },
        { name: 'CERTIFICATIONS', path: '/certifications' },
        { name: 'CONTACT', path: '/contact' },
    ];

    const megaContent = {
        about: {
            intro: {
                title: "About HPE IT Solutions",
                desc: "India's leading integrated enterprise IT and infrastructure conglomerate, governed by absolute transparency and national scale execution.",
                cta: "Our Heritage",
                path: "/about"
            },
            columns: [
                {
                    title: "Strategy & Purpose",
                    path: "/about#overview",
                    links: [
                        { name: "Company Overview", path: "/about#overview" },
                        { name: "Vision & Mission", path: "/vision-mission" },
                        { name: "Organizational Strength", path: "/strength" },
                        { name: "Corporate Structure", path: "/corporate-structure#org-chart" },
                    ]
                },
                {
                    title: "Governance & Operations",
                    path: "/corporate-structure#governance-model",
                    links: [
                        { name: "Governance Model", path: "/corporate-structure#governance-model" },
                        { name: "Executive Leadership", path: "/corporate-structure#executive-leadership" },
                        { name: "National Footprint", path: "/about#footprint" },
                    ]
                }
            ]
        },
        services: {
            intro: {
                title: "Strategic Service Divisions",
                desc: "HPE IT Solutions operates across three specialized divisions, providing integrated technology and infrastructure excellence at national scale.",
                cta: "Strategic Overview",
                path: "/services"
            },
            columns: [
                {
                    title: "Core Divisions",
                    links: [
                        { name: "Enterprise IT Services", path: "/services/enterprise", icon: <LayoutGrid className="w-3.5 h-3.5" /> },
                        { name: "Infrastructure & Brick Services", path: "/services/infrastructure", icon: <Building2 className="w-3.5 h-3.5" /> },
                        { name: "Workforce & Managed Services", path: "/services/workforce", icon: <Users className="w-3.5 h-3.5" /> },
                    ]
                },
                {
                    title: "Service Excellence",
                    links: [
                        { name: "National Support Network", path: "/services#support", icon: <Headphones className="w-3.5 h-3.5" /> },
                        { name: "Annual Maintenance (AMC)", path: "/services#amc", icon: <Shield className="w-3.5 h-3.5" /> },
                        { name: "Consulting & Strategy", path: "/services#consulting", icon: <Activity className="w-3.5 h-3.5" /> },
                    ]
                }
            ],
            featured: {
                title: "Nationwide Delivery",
                label: "Operational Excellence",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
                path: "/services"
            }
        },
        projects: {
            intro: {
                title: "HPE Portfolio",
                desc: "A comprehensive look at our enterprise IT and infrastructure delivery across the Indian landscape.",
                cta: "View Strategy",
                path: "/projects"
            },
            columns: [
                {
                    title: "Case Deep-Dives (Group 1)",
                    path: "/projects/group-1",
                    links: [
                        { name: "Real Estate ERP Implementation", path: "/projects/group-1#project-1" },
                        { name: "SmartSite Monitoring System", path: "/projects/group-1#project-2" },
                        { name: "Govt. Infrastructure Digitization", path: "/projects/group-1#project-3" },
                    ]
                },
                {
                    title: "Operational Systems (Group 2)",
                    path: "/projects/group-2",
                    links: [
                        { name: "Vendor Automation Platform", path: "/projects/group-2#project-4" },
                        { name: "Workforce Deployment Project", path: "/projects/group-2#project-5" },
                        { name: "Cost Control & Billing", path: "/projects/group-2#project-6" },
                        { name: "Housing Project Management", path: "/projects/group-2#project-7" },
                    ]
                },
                {
                    title: "National Infrastructure (Group 3)",
                    path: "/projects/group-3",
                    links: [
                        { name: "Warehouse & Logistics", path: "/projects/group-3#project-8" },
                        { name: "Corporate IT Setup", path: "/projects/group-3#project-9" },
                        { name: "Pan-India AMC & Support", path: "/projects/group-3#project-10" },
                    ]
                }
            ]
        },
    };

    const isAboutActive = location.pathname.startsWith('/about') ||
        ['/vision-mission', '/strength', '/corporate-structure'].includes(location.pathname);
    const isProjectsActive = location.pathname.startsWith('/projects');
    const isServicesActive = location.pathname.startsWith('/services');

    const isMegaActive = (megaKey) => {
        if (megaKey === 'about') return isAboutActive;
        if (megaKey === 'projects') return isProjectsActive;
        if (megaKey === 'services') return isServicesActive;
        return false;
    };

    return (
        <>
            <nav className="bg-[#011b26] border-b border-white/10 px-6 h-20 fixed w-full top-0 z-[9999] transition-colors duration-500">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between h-full relative">

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center h-full group overflow-hidden">
                        <img
                            src="/HPE LOGO.png"
                            alt="HPE IT Solutions"
                            className="h-full scale-125 w-auto object-contain transition-all duration-300 group-hover:scale-135 group-hover:brightness-110"
                        />
                    </Link>

                    {/* Desktop Nav Links */}
                    <ul className="hidden lg:flex items-center space-x-8 h-full">
                        {navLinks.map((link) => {
                            const isActiveItem = location.pathname === link.path || (link.mega && isMegaActive(link.mega));
                            const isInteracting = (hoveredName === link.name) || (link.mega && activeMega === link.mega);
                            const showLine = isInteracting || (isActiveItem && !hoveredName && !activeMega);

                            return (
                                <li
                                    key={link.name}
                                    className="h-full flex items-center group"
                                    onMouseEnter={() => {
                                        if (link.mega) setActiveMega(link.mega);
                                        setHoveredName(link.name);
                                    }}
                                    onMouseLeave={() => {
                                        setActiveMega(null);
                                        setHoveredName(null);
                                    }}
                                >
                                    <div className="relative py-1 flex items-center gap-1.5">
                                        <Link
                                            to={link.path}
                                            className={`flex items-center gap-1.5 text-xs font-black tracking-widest transition-colors duration-200 cursor-pointer outline-none ${isActiveItem || isInteracting
                                                ? 'text-[#00b0d4]'
                                                : 'text-white hover:text-[#00b0d4]'
                                                }`}
                                        >
                                            {link.name}
                                            {link.mega && (
                                                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMega === link.mega ? 'rotate-180' : ''}`} />
                                            )}
                                        </Link>
                                        {showLine && (
                                            <motion.div
                                                layoutId="nav-underline"
                                                initial={false}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-[#ff8d00] shadow-[0_0_8px_rgba(255,141,0,0.5)] z-10"
                                            />
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Right Controls */}
                    <div className="flex items-center space-x-4">
                        {/* CTA (Desktop Only) */}
                        <Link
                            to="/contact"
                            className="hidden lg:inline-flex bg-[#ff8d00] hover:bg-[#e67e00] text-white px-8 py-3 rounded-full text-xs font-black tracking-widest transition-all transform active:scale-95 shadow-lg shadow-orange-500/20"
                        >
                            GET STARTED
                        </Link>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white group cursor-pointer"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-4 h-4 text-[#ff8d00] group-hover:rotate-45 transition-transform" />
                            ) : (
                                <Moon className="w-4 h-4 text-[#00b0d4] group-hover:-rotate-12 transition-transform" />
                            )}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden p-2 text-white relative z-[100] cursor-pointer"
                        >
                            <AnimatePresence mode="wait">
                                {menuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                    >
                                        <X className="w-7 h-7 text-[#ff8d00]" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                    >
                                        <Menu className="w-7 h-7 text-[#00b0d4]" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                    {activeMega && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.22, ease: 'easeOut' }}
                            onMouseEnter={() => setActiveMega(activeMega)}
                            onMouseLeave={() => setActiveMega(null)}
                            className="absolute top-20 left-0 w-full bg-[#011b26] border-t border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.7)] z-[90] hidden lg:block"
                        >
                            <div className="max-w-[1400px] mx-auto px-12 py-12 grid grid-cols-12 gap-10">

                                {/* Col 1 — Intro */}
                                <div className="col-span-3 space-y-5 pr-4 border-r border-white/5">
                                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#00b0d4]/60">
                                        {megaContent[activeMega].intro.title}
                                    </p>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {megaContent[activeMega].intro.desc}
                                    </p>
                                    <Link
                                        to={megaContent[activeMega].intro.path}
                                        onClick={() => setActiveMega(null)}
                                        className="inline-flex items-center gap-2 text-[11px] font-black text-[#ff8d00] hover:text-[#00b0d4] uppercase tracking-widest transition-colors group"
                                    >
                                        {megaContent[activeMega].intro.cta}
                                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                {/* Col 2+ — Link Columns & Featured */}
                                <div className={`${megaContent[activeMega].featured ? 'col-span-9 grid grid-cols-12 gap-10' : 'col-span-9 grid grid-cols-3 gap-10'}`}>
                                    <div className={`${megaContent[activeMega].featured ? 'col-span-8 grid grid-cols-2 gap-10' : 'col-span-12 grid grid-cols-3 gap-10'}`}>
                                        {megaContent[activeMega].columns.map((col, idx) => (
                                            <div key={idx} className="space-y-5">
                                                {col.path ? (
                                                    <Link
                                                        to={col.path}
                                                        onClick={() => setActiveMega(null)}
                                                        className="inline-block text-[10px] font-black uppercase tracking-[0.35em] text-[#00b0d4]/60 hover:text-[#ff8d00] transition-colors"
                                                    >
                                                        {col.title}
                                                    </Link>
                                                ) : (
                                                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/30">
                                                        {col.title}
                                                    </p>
                                                )}
                                                <div className="flex flex-col gap-1">
                                                    {col.links.map((link) => (
                                                        <Link
                                                            key={link.name}
                                                            to={link.path}
                                                            onClick={() => setActiveMega(null)}
                                                            className="group flex items-center gap-2.5 py-1.5 text-white/75 hover:text-[#00b0d4] transition-colors"
                                                        >
                                                            {link.icon && (
                                                                <span className="text-white/30 group-hover:text-[#ff8d00] transition-colors">
                                                                    {link.icon}
                                                                </span>
                                                            )}
                                                            <span className="text-[13px] font-semibold leading-snug group-hover:translate-x-1 transition-transform">
                                                                {link.name}
                                                            </span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Featured Column */}
                                    {megaContent[activeMega].featured && (
                                        <div className="col-span-4 pl-4 border-l border-white/5">
                                            <div className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3]">
                                                <img
                                                    src={megaContent[activeMega].featured.image}
                                                    alt={megaContent[activeMega].featured.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#011b26] via-[#011b26]/20 to-transparent" />
                                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                                    <div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                                        <p className="text-[9px] font-black uppercase tracking-widest text-[#00b0d4]">
                                                            {megaContent[activeMega].featured.label}
                                                        </p>
                                                        <p className="text-lg font-black uppercase tracking-tight text-white leading-tight">
                                                            {megaContent[activeMega].featured.title}
                                                        </p>
                                                    </div>
                                                </div>
                                                <Link
                                                    to={megaContent[activeMega].featured.path}
                                                    onClick={() => setActiveMega(null)}
                                                    className="absolute inset-0 z-10"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                        className="fixed inset-0 z-[90] bg-[#011b26] flex flex-col items-center h-screen pt-20 overflow-y-auto"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00b0d4]/10 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff8d00]/10 blur-[100px] rounded-full pointer-events-none" />

                        <ul className="list-none flex flex-col gap-4 items-center w-full px-8 py-10 z-10">
                            {navLinks.map((nav, index) => {
                                const isActive = location.pathname === nav.path || (nav.mega && isMegaActive(nav.mega));
                                const isExpanded = expandedAccordion === nav.name;

                                if (nav.mega) {
                                    return (
                                        <li key={nav.name} className="w-full">
                                            <div className="flex items-center justify-center gap-4 py-4 border-b border-white/5 mx-auto w-fit">
                                                <Link
                                                    to={nav.path}
                                                    onClick={() => setMenuOpen(false)}
                                                    className={`font-black text-3xl uppercase tracking-wider transition-colors duration-300 ${isActive
                                                        ? 'text-[#00b0d4]'
                                                        : 'text-white/60 hover:text-white'
                                                        }`}
                                                >
                                                    {nav.name}
                                                </Link>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setExpandedAccordion(isExpanded ? null : nav.name);
                                                    }}
                                                    className="p-2 bg-white/5 rounded-full border border-white/10"
                                                    aria-label={`Toggle ${nav.name} details`}
                                                >
                                                    <ChevronDown className={`w-6 h-6 text-white/50 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                                </button>
                                            </div>
                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden flex flex-col gap-6 py-8 px-8 bg-white/5 rounded-3xl mt-2 mx-4"
                                                    >
                                                        {/* Section Intro / Overview Link */}
                                                        <div className="text-center pb-4 border-b border-white/5">
                                                            <Link
                                                                to={nav.path}
                                                                onClick={() => setMenuOpen(false)}
                                                                className="text-sm font-black text-[#ff8d00] uppercase tracking-[0.3em] inline-flex items-center gap-2 group"
                                                            >
                                                                Go to {nav.name} Overview
                                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                            </Link>
                                                        </div>

                                                        {megaContent[nav.mega].columns.map((col) => (
                                                            <div key={col.title} className="flex flex-col gap-3">
                                                                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.35em] text-center">{col.title}</span>
                                                                <div className="flex flex-col gap-2">
                                                                    {col.links.map((subLink) => (
                                                                        <Link
                                                                            key={subLink.name}
                                                                            to={subLink.path}
                                                                            onClick={() => setMenuOpen(false)}
                                                                            className="text-lg font-bold text-white/70 hover:text-[#00b0d4] transition-colors py-1 text-center"
                                                                        >
                                                                            {subLink.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </li>
                                    );
                                }

                                return (
                                    <motion.li
                                        key={nav.name}
                                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index + 0.2 }}
                                        className={`font-black text-4xl uppercase tracking-wider text-center w-full ${isActive
                                            ? 'text-[#00b0d4]'
                                            : 'text-white/60 hover:text-white transition-colors duration-300'
                                            }`}
                                    >
                                        <Link
                                            to={nav.path}
                                            className="block py-4 w-full text-center tracking-widest leading-none outline-none"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {nav.name}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="w-full pb-16 pt-8 flex flex-col items-center gap-6 z-10 border-t border-white/10 mt-auto"
                        >
                            <Link
                                to="/contact"
                                onClick={() => setMenuOpen(false)}
                                className="bg-[#ff8d00] hover:bg-white hover:text-[#011b26] text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-xl shadow-orange-900/20 active:scale-95"
                            >
                                Get Started
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;