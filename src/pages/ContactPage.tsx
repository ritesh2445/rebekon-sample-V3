import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download, CheckCircle2, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { LinkedinIcon, YoutubeIcon, FacebookIcon, InstagramIcon } from '../components/SocialIcons';
import confetti from 'canvas-confetti';
import { SITE_CONFIG, CERTIFICATIONS } from '../data/siteData';
import { CapabilitiesModal } from '../components/CapabilitiesModal';

export const ContactPage: React.FC = () => {
  const [capabilitiesModalOpen, setCapabilitiesModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interestArea, setInterestArea] = useState('Healthcare');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please provide your name';
    if (!organization.trim()) errs.organization = 'Please provide your organization';
    if (!email.trim() || !email.includes('@')) errs.email = 'Please provide a valid email';
    if (!message.trim()) errs.message = 'Please include a brief message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    confetti({
      particleCount: 65,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF2D55', '#007AFF', '#AF52DE']
    });

    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 select-none">
      {/* Hero */}
      <section className="py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ios-glass-pill text-xs font-bold text-white mb-4 shadow-xs">
            <Mail className="w-4 h-4 text-[#FF2D55]" />
            <span className="ios-pink-blue-text font-black uppercase tracking-wider">CONNECT WITH REBEKON CONSULTING</span>
          </div>
          <h1 className="font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Contact & Capabilities Statement
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Reach out for capability briefings, RFP inquiries, diverse supplier registration, and confidential advisory consultations.
          </p>
        </div>
      </section>

      {/* PROMINENT CAPABILITIES STATEMENT PROMO CARD */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="p-8 sm:p-10 rounded-[2.5rem] ios-glass-card shadow-xl border border-white/12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-[#FF2D55] uppercase tracking-wider">
              OFFICIAL PROCUREMENT DOCUMENTATION
            </span>
            <h3 className="font-extrabold text-2xl text-white tracking-tight">
              Download Rebekon Capabilities Statement
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Includes full NAICS classifications, NGLCC/CPUC certifications, core competencies, past performance, and principal executive bios.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setCapabilitiesModalOpen(true)}
            className="ios-btn-primary px-8 py-4 text-sm flex items-center gap-2.5 shrink-0 shadow-lg cursor-pointer"
          >
            <Download className="w-5 h-5 text-white" />
            <span>View & Download Statement</span>
          </button>
        </div>
      </section>

      {/* MAIN FORM & SIDEBAR GRID */}
      <section className="py-10 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-[2.5rem] ios-glass-card shadow-xl border border-white/12">
                <h3 className="font-bold text-2xl text-white mb-2">
                  Send a Message
                </h3>
                <p className="text-slate-300 text-sm mb-8 font-medium">
                  We look forward to partnering with your organization. Please complete the details below.
                </p>

                {submitted ? (
                  <div className="py-12 text-center space-y-4 animate-in zoom-in-95">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FF2D55] to-[#007AFF] flex items-center justify-center text-white mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-extrabold text-2xl text-white">
                      Message Received!
                    </h4>
                    <p className="text-slate-300 text-sm max-w-sm mx-auto">
                      Thank you for contacting Rebekon Consulting LLC. Celia Sandhya Daniels and our executive advisory team will reply shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setOrganization('');
                        setEmail('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="text-xs font-bold text-[#FF2D55] hover:underline pt-2 block mx-auto cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={`w-full px-4 py-3 rounded-2xl border text-sm text-white bg-white/80 focus:outline-none ${
                            errors.name ? 'border-red-400' : 'border-slate-200/90 focus:ring-2 focus:ring-[#FF2D55]/40'
                          }`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1">
                          Organization *
                        </label>
                        <input
                          type="text"
                          placeholder="Company, hospital, ERG"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          className={`w-full px-4 py-3 rounded-2xl border text-sm text-white bg-white/80 focus:outline-none ${
                            errors.organization ? 'border-red-400' : 'border-slate-200/90 focus:ring-2 focus:ring-[#007AFF]/40'
                          }`}
                        />
                        {errors.organization && <p className="text-red-500 text-xs mt-1">{errors.organization}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          placeholder="name@organization.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`w-full px-4 py-3 rounded-2xl border text-sm text-white bg-white/80 focus:outline-none ${
                            errors.email ? 'border-red-400' : 'border-slate-200/90 focus:ring-2 focus:ring-[#FF2D55]/40'
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          placeholder="(555) 000-0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200/90 text-sm text-white bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1">
                        Interest Area
                      </label>
                      <select
                        value={interestArea}
                        onChange={(e) => setInterestArea(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200/90 text-sm text-white bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#FF2D55]/40"
                      >
                        <option value="Healthcare">Healthcare & Clinical Trials</option>
                        <option value="Workplace DEI">Workplace DEI Consulting</option>
                        <option value="Trainings">Trainings & Allyship Workshops</option>
                        <option value="Policy">Policy & Guidelines</option>
                        <option value="AI Strategy">Strategic AI Planning</option>
                        <option value="Other">Other / General Inquiries</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-100 uppercase tracking-wider mb-1">
                        Message *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="How can we help your organization?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={`w-full px-4 py-3 rounded-2xl border text-sm text-white bg-white/80 focus:outline-none ${
                          errors.message ? 'border-red-400' : 'border-slate-200/90 focus:ring-2 focus:ring-[#007AFF]/40'
                        }`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full ios-btn-primary py-4 text-base shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-white" />
                      <span>Submit Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-[2.5rem] ios-glass-card shadow-md space-y-6">
                <h4 className="font-bold text-xl text-white">
                  Contact Information
                </h4>

                <div className="space-y-4 text-sm text-slate-200">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/80 border border-white/12 hover:border-[#FF2D55] transition-colors "
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FFEBF0] flex items-center justify-center text-[#FF2D55] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-white">Email Directly</div>
                      <div className="text-slate-300">{SITE_CONFIG.email}</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/80 border border-white/12 hover:border-[#007AFF] transition-colors "
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#E8F2FF] flex items-center justify-center text-[#007AFF] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-white">Phone Consultation</div>
                      <div className="text-slate-300">{SITE_CONFIG.phone}</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/80 border border-white/12 ">
                    <div className="w-9 h-9 rounded-xl bg-[#F3EEFE] flex items-center justify-center text-[#AF52DE] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-white">Headquarters</div>
                      <div className="text-slate-300">{SITE_CONFIG.location}</div>
                    </div>
                  </div>
                </div>

                {/* Social icons */}
                <div className="pt-4 border-t border-slate-200/60">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Connect Across Media
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={SITE_CONFIG.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-2xl bg-white/80 border border-white/12 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#007AFF] transition-all "
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={SITE_CONFIG.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-2xl bg-white/80 border border-white/12 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#FF2D55] transition-all "
                      aria-label="YouTube"
                    >
                      <YoutubeIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={SITE_CONFIG.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-2xl bg-white/80 border border-white/12 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#007AFF] transition-all "
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={SITE_CONFIG.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-2xl bg-white/80 border border-white/12 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#FF2D55] transition-all "
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Diverse Supplier Micro-Verification */}
                <div className="pt-4 border-t border-slate-200/60">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Diverse Supplier Accreditation:
                  </span>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div>• <strong>NGLCC Certified:</strong> #30210</div>
                    <div>• <strong>CPUC VON:</strong> 24000841</div>
                    <div>• <strong>D-U-N-S:</strong> 010274745</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Statement Modal */}
      <CapabilitiesModal
        isOpen={capabilitiesModalOpen}
        onClose={() => setCapabilitiesModalOpen(false)}
      />
    </div>
  );
};

export default ContactPage;


