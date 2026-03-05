// import { Link } from 'react-router-dom';
// import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// function Footer() {
//     const currentYear = new Date().getFullYear();

//     return (
//         <footer className="relative z-10 bg-white dark:bg-[#0a0f1e] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/5 pt-20 pb-12 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
//             <div className="max-w-[1400px] mx-auto px-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
//                     {/* Brand Info */}
//                     <div className="space-y-8">
//                         <Link to="/" className="flex items-center space-x-3 group">
//                             <div className="w-10 h-8 bg-white transition-transform group-hover:scale-110"></div>
//                             <div className="flex flex-col leading-none">
//                                 <span className="text-white font-black text-xl tracking-tighter">HPE</span>
//                                 <span className="text-brand-orange font-bold text-[8px] tracking-widest uppercase">IT SOLUTIONS</span>
//                             </div>
//                         </Link>
//                         <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
//                             At HPE IT Solutions, we empower businesses with cutting-edge technology and innovative digital strategies. Leading the future of enterprise excellence with dedication.
//                         </p>
//                         <div className="flex space-x-5">
//                             {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
//                                 <a key={i} href="#" className="text-gray-500 hover:text-brand-orange transition-all transform hover:-translate-y-1">
//                                     <Icon size={20} />
//                                 </a>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Quick Explore */}
//                     <div>
//                         <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-10 relative">
//                             Explore
//                             <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-orange"></span>
//                         </h4>
//                         <ul className="space-y-4">
//                             {['HOME', 'ABOUT', 'SERVICES', 'PROJECTS', 'CERTIFICATIONS', 'CONTACT'].map((link) => (
//                                 <li key={link}>
//                                     <Link
//                                         to={link === 'HOME' ? '/' : `/${link.toLowerCase()}`}
//                                         className="text-gray-400 hover:text-brand-cyan text-xs font-bold tracking-widest transition-colors flex items-center group"
//                                     >
//                                         <span className="w-0 overflow-hidden group-hover:w-4 transition-all text-brand-orange">→</span>
//                                         {link}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Specializations */}
//                     <div>
//                         <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-10 relative">
//                             Expertise
//                             <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-cyan"></span>
//                         </h4>
//                         <ul className="space-y-4">
//                             {['Cloud Integration', 'Cybersecurity', 'AI & Automation', 'Enterprise ERP', 'Data Analytics'].map((item) => (
//                                 <li key={item}>
//                                     <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors block">
//                                         {item}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Contact Hub */}
//                     <div>
//                         <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-10 relative">
//                             Connect
//                             <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-orange"></span>
//                         </h4>
//                         <div className="space-y-6">
//                             <div className="flex items-start space-x-4 group">
//                                 <div className="p-3 bg-white/5 rounded-lg text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
//                                     <MapPin size={18} />
//                                 </div>
//                                 <span className="text-gray-400 text-xs leading-relaxed">
//                                     123 Technology Hub, Digital City, <br /> Bangalore - 560001
//                                 </span>
//                             </div>
//                             <div className="flex items-center space-x-4 group text-gray-400 hover:text-white transition-colors cursor-pointer">
//                                 <div className="p-3 bg-white/5 rounded-lg text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all">
//                                     <Mail size={18} />
//                                 </div>
//                                 <span className="text-xs font-bold tracking-widest">contact@hpe-it.com</span>
//                             </div>
//                             <div className="flex items-center space-x-4 group text-gray-400 hover:text-white transition-colors cursor-pointer">
//                                 <div className="p-3 bg-white/5 rounded-lg text-white group-hover:bg-white group-hover:text-navy-950 transition-all">
//                                     <Phone size={18} />
//                                 </div>
//                                 <span className="text-xs font-bold tracking-widest">+91 (80) 4567 8901</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Bar */}
//                 <div className="pt-10 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
//                     <p className="text-slate-400 dark:text-gray-600 text-[10px] font-bold tracking-[0.2em] uppercase">
//                         © {currentYear} HPE IT SOLUTIONS PVT LTD. ALL RIGHTS RESERVED.
//                     </p>
//                     <div className="flex space-x-10">
//                         {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((policy) => (
//                             <a key={policy} href="#" className="text-gray-600 hover:text-white text-[10px] font-bold tracking-widest uppercase transition-colors">
//                                 {policy}
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;


import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 bg-[#011b26] text-white border-t border-white/5 pt-20 pb-12 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
            <div className="max-w-[1400px] mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                    {/* ✅ Brand Info */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
                        <Link to="/" className="flex flex-col items-center sm:items-start gap-4 group">
                            <img
                                src="/HPE LOGO.png"
                                alt="HPE IT Solutions"
                                className="h-[70px] sm:h-[94px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="flex flex-col">
                                <span className="text-white font-black text-xl tracking-tight">HPE IT <span className="text-[#ff8d00]">Solutions</span></span>
                                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">Corporate Office – Hyderabad</span>
                            </div>
                        </Link>

                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm italic font-medium">
                            “Engineering Infrastructure Through Technology.”
                        </p>

                        <div className="flex space-x-5">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="text-gray-500 hover:text-[#ff8d00] transition-all transform hover:-translate-y-1"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Explore */}
                    <div className="text-center sm:text-left">
                        <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-10 text-white">
                            Explore
                        </h4>

                        <ul className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                            {['HOME', 'ABOUT', 'SERVICES', 'PROJECTS', 'CERTIFICATIONS', 'GROWTH STRATEGY', 'CONTACT'].map((link) => (
                                <li key={link}>
                                    <Link
                                        to={link === 'HOME' ? '/' : link === 'GROWTH STRATEGY' ? '/growth-strategy' : `/${link.toLowerCase()}`}
                                        className="text-gray-400 hover:text-[#00b0d4] text-[10px] sm:text-xs font-bold tracking-widest transition-colors flex items-center justify-center sm:justify-start group"
                                    >
                                        <span className="w-0 overflow-hidden group-hover:w-4 transition-all text-[#ff8d00]">→</span>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Expertise */}
                    <div className="text-center sm:text-left">
                        <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-10 text-white">
                            Expertise
                        </h4>

                        <ul className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                            {['Cloud Integration', 'Cybersecurity', 'AI & Automation', 'Enterprise ERP', 'Data Analytics'].map((item) => (
                                <li key={item} className="text-center sm:text-left">
                                    <div className="text-gray-400 text-xs sm:text-sm cursor-default">
                                        {item}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="text-center sm:text-left">
                        <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-10 text-white">
                            Connect
                        </h4>

                        <div className="space-y-6 flex flex-col items-center sm:items-start">

                            <div className="flex items-start space-x-4 group text-left">
                                <div className="p-3 bg-white/5 rounded-lg text-[#ff8d00]">
                                    <MapPin size={18} />
                                </div>
                                <span className="text-gray-400 text-xs leading-relaxed max-w-[200px]">
                                    Corporate Office – Hyderabad
                                </span>
                            </div>

                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=support@hpeitsolutions.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4 group text-gray-400 hover:text-white transition-colors cursor-pointer text-left"
                            >
                                <div className="p-3 bg-white/5 rounded-lg text-[#00b0d4]">
                                    <Mail size={18} />
                                </div>
                                <span className="text-xs font-bold tracking-widest">
                                    support@hpeitsolutions.com
                                </span>
                            </a>

                            <a
                                href="tel:+919154399144"
                                className="flex items-center space-x-4 group text-gray-400 hover:text-white transition-colors cursor-pointer text-left"
                            >
                                <div className="p-3 bg-white/5 rounded-lg text-white">
                                    <Phone size={18} />
                                </div>
                                <span className="text-xs font-bold tracking-widest">
                                    +91 9154399144
                                </span>
                            </a>

                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase">
                        © {currentYear} HPE IT SOLUTIONS PVT LTD. ALL RIGHTS RESERVED.
                    </p>

                    <div className="flex space-x-10">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((policy) => (
                            <a
                                key={policy}
                                href="#"
                                className="text-gray-500 hover:text-white text-[10px] font-bold tracking-widest uppercase transition-colors"
                            >
                                {policy}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;