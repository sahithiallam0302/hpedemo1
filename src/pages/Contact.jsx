import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Globe, ArrowRight } from "lucide-react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { citiesData } from "../data/contactLocations";

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/**
 * Sub-Component: Contact Hero
 */
const ContactHero = () => (
  <section className="relative w-full h-[40vh] min-h-[350px] flex items-center overflow-hidden">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-1000 scale-105"
      style={{ backgroundImage: "url('/contact_us2.jpg')" }}
    />
    {/* Overlay - Ensuring text legibility */}
    <div className="absolute inset-0 bg-gradient-to-r from-hpe-navy via-hpe-navy/80 to-transparent"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-hpe-navy/40 via-transparent to-hpe-navy/20"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-20 animate-fade-in-up">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-[2px] bg-hpe-cyan"></div>
        <span className="text-hpe-cyan font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase">Strategic Connectivity</span>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-tight uppercase">
        Let's Start a <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-hpe-cyan via-blue-400 to-blue-600">
          Conversation
        </span>
      </h1>

      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-medium opacity-90">
        Connect with our specialized engineering units to build India's next generation of digital infrastructure.
      </p>

      <button
        onClick={() => document.getElementById("contact-grid")?.scrollIntoView({ behavior: "smooth" })}
        className="group px-8 py-4 bg-hpe-cyan text-hpe-navy font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(0,229,255,0.4)] flex items-center gap-4"
      >
        Reach Out Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>

    {/* Custom Animations */}
    <style dangerouslySetInnerHTML={{
      __html: `
      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
    `}} />
  </section>
);

/**
 * Sub-Component: Info Card
 */
const InfoCard = ({ icon: Icon, title, value }) => (
  <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 group hover:border-hpe-cyan/30 transition-all duration-500 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-hpe-cyan/10 border border-hpe-cyan/20 text-hpe-cyan group-hover:bg-hpe-cyan group-hover:text-hpe-navy transition-all duration-300">
      <Icon size={28} />
    </div>
    <div className="flex-1">
      <h3 className="text-hpe-cyan font-black text-[10px] uppercase tracking-[0.2em] mb-1">{title}</h3>
      <p className="text-white font-bold text-lg leading-tight tracking-tight">{value}</p>
    </div>
  </div>
);

/**
 * Main Contact Component
 */
export default function Contact() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="bg-hpe-navy min-h-screen text-slate-300 w-full overflow-hidden pt-20">
      <ContactHero />

      {/* Main Content Grid */}
      <section id="contact-grid" className="py-24 px-6 md:px-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="mb-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-none">
                  GLOBAL <span className="text-hpe-cyan">COMMUNICATIONS</span>
                </h2>
                <div className="w-20 h-1.5 bg-hpe-cyan mb-8 rounded-full"></div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Connect with our specialized engineering and support units for bespoke digital infrastructure strategies.
                </p>
              </div>

              <div className="grid gap-5">
                <InfoCard icon={Mail} title="Strategic Email" value="support@hpeitsolutions.com" />
                <InfoCard icon={Phone} title="Direct Hotline" value="+91 9154399144" />
                <InfoCard icon={MapPin} title="Corporate Hub" value="Hyderabad, Telangana, India" />
                <InfoCard icon={Globe} title="Regional Support" value="Pan-India Operational Matrix" />
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border-white/5 shadow-2xl relative overflow-hidden group">
                {/* Decorative background element */}
                <div className="absolute -top-20 -right-24 w-64 h-64 bg-hpe-cyan/5 rounded-full blur-[80px]" />

                <div className="mb-12 relative z-10">
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Initiate Inquiry</h3>
                  <p className="text-slate-500 text-sm font-medium tracking-wide">Enter your transmission details below.</p>
                </div>

                <form className="grid md:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.1em] text-slate-400 ml-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full p-4 bg-hpe-navy/50 rounded-xl border border-white/10 text-white placeholder:text-slate-700 focus:outline-none focus:border-hpe-cyan focus:bg-hpe-navy/80 focus:ring-1 focus:ring-hpe-cyan/30 transition-all font-semibold"
                      placeholder="e.g. Satya Nadella"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.1em] text-slate-400 ml-1">Corporate Email</label>
                    <input
                      type="email"
                      className="w-full p-4 bg-hpe-navy/50 rounded-xl border border-white/10 text-white placeholder:text-slate-700 focus:outline-none focus:border-hpe-cyan focus:bg-hpe-navy/80 focus:ring-1 focus:ring-hpe-cyan/30 transition-all font-semibold"
                      placeholder="name@enterprise.com"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.1em] text-slate-400 ml-1">Transmission Subject</label>
                    <input
                      type="text"
                      className="w-full p-4 bg-hpe-navy/50 rounded-xl border border-white/10 text-white placeholder:text-slate-700 focus:outline-none focus:border-hpe-cyan focus:bg-hpe-navy/80 focus:ring-1 focus:ring-hpe-cyan/30 transition-all font-semibold"
                      placeholder="Infrastructure Automation Inquiry"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.1em] text-slate-400 ml-1">Message Detail</label>
                    <textarea
                      rows="5"
                      className="w-full p-4 bg-hpe-navy/50 rounded-xl border border-white/10 text-white placeholder:text-slate-700 focus:outline-none focus:border-hpe-cyan focus:bg-hpe-navy/80 focus:ring-1 focus:ring-hpe-cyan/30 transition-all font-semibold resize-none"
                      placeholder="Outline your technical requirements here..."
                    ></textarea>
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <button
                      type="submit"
                      className="group w-full py-5 bg-hpe-cyan text-hpe-navy rounded-xl font-black uppercase tracking-[0.2em] transition-all duration-500 hover:shadow-[0_20px_50px_-10px_rgba(0,229,255,0.4)] hover:-translate-y-1 flex items-center justify-center gap-4"
                    >
                      Process Submission <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                    <p className="text-center mt-6 text-[10px] font-bold text-slate-600 uppercase tracking-widest">Secure AES-256 Encrypted Protocol</p>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Operational Presence Map */}
      <section className="py-24 bg-hpe-navy-light/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-white mb-4 uppercase">
                Regional <span className="text-hpe-cyan">Hubs</span>
              </h2>
              <p className="text-slate-400">
                Strategic operational units across the subcontinent, ensuring localized support and
                resilient service delivery for enterprise clients.
              </p>
            </div>

            {/* City Selectors */}
            <div className="flex flex-wrap gap-2">
              {Object.keys(citiesData).map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-6 py-3 rounded-xl border font-bold text-[10px] uppercase tracking-wider transition-all duration-300
                  ${selectedCity === city
                      ? "bg-hpe-cyan border-hpe-cyan text-hpe-navy shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                      : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
                    }
                `}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 relative">
            <MapContainer
              key={selectedCity ? selectedCity : "india"}
              center={selectedCity ? citiesData[selectedCity].center : [22, 80]}
              zoom={selectedCity ? citiesData[selectedCity].zoom : 5}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                attribution="&copy; CARTO"
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />

              {!selectedCity && Object.entries(citiesData).map(([city, data]) => (
                <Marker key={city} position={data.center} eventHandlers={{ click: () => setSelectedCity(city) }} />
              ))}

              {selectedCity && citiesData[selectedCity].branches.map((branch, i) => (
                <Marker key={i} position={branch.position}>
                  <Popup className="hpe-dark-popup">
                    <div className="p-3 min-w-[220px] bg-white rounded-lg">
                      <h4 className="font-black text-xs uppercase tracking-widest text-hpe-navy mb-3 border-b pb-2">
                        {selectedCity} Division
                      </h4>
                      <p className="text-gray-600 text-[11px] leading-tight mb-4">{branch.address}</p>

                      <div className="grid gap-2">
                        {branch.phone && (
                          <div className="flex items-center gap-2 text-[11px] font-bold text-gray-800">
                            <Phone size={12} className="text-hpe-orange" /> {branch.phone}
                          </div>
                        )}

                        <div className="flex flex-col gap-2 mt-2">
                          {branch.website && (
                            <a href={branch.website} target="_blank" rel="noreferrer" className="bg-hpe-navy text-white text-center py-2 rounded-lg text-[9px] font-black uppercase hover:bg-hpe-cyan hover:text-hpe-navy transition-all">
                              Analyze Facility
                            </a>
                          )}
                          <a href={`https://www.google.com/maps?q=${branch.position[0]},${branch.position[1]}`} target="_blank" rel="noreferrer" className="bg-gray-100 text-gray-700 text-center py-2 rounded-lg text-[9px] font-black uppercase">
                            Navigation Path
                          </a>
                        </div>
                      </div>

                      {branch.closed && (
                        <div className="mt-4 p-1.5 bg-red-50 text-red-600 text-[8px] font-black uppercase text-center rounded border border-red-100">
                          Facility Offline
                        </div>
                      )}

                      <button onClick={() => setSelectedCity(null)} className="w-full mt-4 text-[9px] uppercase tracking-tighter text-blue-600 font-bold hover:underline">
                        ← Network Reset
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .leaflet-popup-content-wrapper { border-radius: 16px !important; padding: 0 !important; overflow: hidden; }
        .leaflet-popup-content { margin: 0 !important; }
        .leaflet-container { background: #0a0e1a !important; }
        .hpe-dark-popup .leaflet-popup-tip { display: none; }
      `}} />
    </div>
  );
}
