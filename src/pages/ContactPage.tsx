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
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#F45B9C', '#7C6BE8', '#3E6BE0']
    });

    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Hero */}
      <section className="py-14 bg-gradient-to-b from-[#FCE4EF]/40 via-[#FAFAFC] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE4EF] text-[#F45B9C] text-xs font-bold tracking-wider uppercase mb-4">
            <Mail className="w-4 h-4" />
            <span>CONNECT WITH REBEKON CONSULTING</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 tracking-tight">
            Contact & Capabilities Statement
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Reach out for capability briefings, RFP inquiries, diverse supplier registration, and confidential advisory consultations.
          </p>
        </div>
      </section>

      {/* PROMINENT CAPABILITIES STATEMENT PROMO CARD */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="p-8 sm:p-10 rounded-3xl brand-gradient-soft border border-[#FCE4EF] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-[#F45B9C] uppercase tracking-wider">
              OFFICIAL PROCUREMENT DOCUMENTATION
            </span>
            <h3 className="font-display font-bold text-2xl text-slate-900">
              Download Rebekon Capabilities Statement
            </h3>
            <p className="text-slate-600 text-sm max-w-xl">
              Includes full NAICS classifications, NGLCC/CPUC certifications, core competencies, past performance, and principal executive bios.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setCapabilitiesModalOpen(true)}
            className="brand-gradient text-white font-semibold px-8 py-4 rounded-full text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2.5 shrink-0"
          >
            <Download className="w-5 h-5" />
            <span>View & Download Statement</span>
          </button>
        </div>
      </section>

      {/* MAIN FORM & SIDEBAR GRID */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-md">
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
                  Send a Message
                </h3>
                <p className="text-slate-600 text-sm mb-8">
                  We look forward to partnering with your organization. Please complete the details below.
                </p>

                {submitted ? (
                  <div className="py-12 text-center space-y-4 animate-in zoom-in-95">
                    <div className="w-16 h-16 rounded-full brand-gradient flex items-center justify-center text-white mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-display font-bold text-2xl text-slate-900">
                      Message Received!
                    </h4>
                    <p className="text-slate-600 text-sm max-w-sm mx-auto">
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
                      className="text-xs font-semibold text-[#F45B9C] hover:underline pt-2 block mx-auto"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={`w-full px-4 py-3 rounded-2xl border text-sm text-slate-800 focus:outline-none ${
                            errors.name ? 'border-red-400' : 'border-slate-200 focus:ring-2 focus:ring-[#F45B9C]/40'
                          }`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Organization *
                        </label>
                        <input
                          type="text"
                          placeholder="Company, hospital, ERG"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          className={`w-full px-4 py-3 rounded-2xl border text-sm text-slate-800 focus:outline-none ${
                            errors.organization ? 'border-red-400' : 'border-slate-200 focus:ring-2 focus:ring-[#3E6BE0]/40'
                          }`}
                        />
                        {errors.organization && <p className="text-red-500 text-xs mt-1">{errors.organization}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          placeholder="name@organization.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`w-full px-4 py-3 rounded-2xl border text-sm text-slate-800 focus:outline-none ${
                            errors.email ? 'border-red-400' : 'border-slate-200 focus:ring-2 focus:ring-[#F45B9C]/40'
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          placeholder="(555) 000-0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#3E6BE0]/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Interest Area
                      </label>
                      <select
                        value={interestArea}
                        onChange={(e) => setInterestArea(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#F45B9C]/40"
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
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Message *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="How can we help your organization?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={`w-full px-4 py-3 rounded-2xl border text-sm text-slate-800 focus:outline-none ${
                          errors.message ? 'border-red-400' : 'border-slate-200 focus:ring-2 focus:ring-[#3E6BE0]/40'
                        }`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full brand-gradient text-white font-semibold py-4 rounded-full text-base shadow-md hover:shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-6">
                <h4 className="font-display font-bold text-xl text-slate-900">
                  Contact Information
                </h4>

                <div className="space-y-4 text-sm text-slate-700">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#F45B9C] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FCE4EF] flex items-center justify-center text-[#F45B9C] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase">Email</div>
                      <div className="font-medium text-slate-900">{SITE_CONFIG.email}</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#3E6BE0] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#E6EEFF] flex items-center justify-center text-[#3E6BE0] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase">Phone</div>
                      <div className="font-medium text-slate-900">{SITE_CONFIG.phone}</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80">
                    <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] flex items-center justify-center text-[#7C6BE8] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase">Headquarters</div>
                      <div className="font-medium text-slate-900">{SITE_CONFIG.location}</div>
                    </div>
                  </div>
                </div>

                {/* Social media connections */}
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                    Connect on Social Media
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={SITE_CONFIG.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#3E6BE0] hover:border-[#3E6BE0] transition-all"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={SITE_CONFIG.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#F45B9C] hover:border-[#F45B9C] transition-all"
                      aria-label="YouTube"
                    >
                      <YoutubeIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={SITE_CONFIG.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#3E6BE0] hover:border-[#3E6BE0] transition-all"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={SITE_CONFIG.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#F45B9C] hover:border-[#F45B9C] transition-all"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED SUPPLIER & DIVERSE BUSINESS ACCREDITATIONS */}
      <section className="py-14 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold tracking-widest text-[#3E6BE0] uppercase">
              CORPORATE & GOVERNMENT QUALIFICATIONS
            </span>
            <h3 className="font-display font-bold text-2xl text-slate-900 mt-1">
              Certified Diverse Supplier Credentials
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {CERTIFICATIONS.filter(c => c.logoUrl).map((cert, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col items-center justify-between text-center hover:border-slate-300 transition-colors">
                <div className="h-12 w-full flex items-center justify-center mb-2">
                  <img src={cert.logoUrl} alt={cert.name} className="max-h-12 max-w-[85px] object-contain" />
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900 leading-tight">{cert.name}</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">{cert.code}</div>
                </div>
              </div>
            ))}
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
