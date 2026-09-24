import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, Mail, Phone, MapPin, Sparkles, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_CONFIG } from '../data/siteData';

export const BookOnlinePage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState('Healthcare & Clinical Trials');
  const [selectedDate, setSelectedDate] = useState('2026-10-05');
  const [selectedTime, setSelectedTime] = useState('10:00 AM PST');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const timeSlots = [
    '09:00 AM PST',
    '10:00 AM PST',
    '11:30 AM PST',
    '01:30 PM PST',
    '03:00 PM PST',
    '04:30 PM PST'
  ];

  const topics = [
    'Healthcare & Clinical Trials Equity',
    'Workplace DEIB Gap Assessment',
    'Executive Keynote or Workshop Booking',
    'Trans & Gender-Diverse Policy Audit',
    'Strategic AI Planning in Healthcare',
    'General Partnership / Other'
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!email.trim() || !email.includes('@')) errs.email = 'Please provide a valid work email';
    if (!organization.trim()) errs.organization = 'Please provide your organization name';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    confetti({
      particleCount: 75,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FF2D55', '#007AFF', '#AF52DE', '#00C7BE']
    });

    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 select-none">
      {/* Hero */}
      <section className="py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ios-glass-pill text-xs font-bold text-white mb-4 shadow-xs">
            <Calendar className="w-4 h-4 text-[#FF2D55]" />
            <span className="ios-pink-blue-text font-black uppercase tracking-wider">FREE 30-MINUTE CONSULTATION</span>
          </div>
          <h1 className="font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Let's Talk About Humanizing Your Organization
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Schedule an introductory consultation directly with Celia Sandhya Daniels to explore how Rebekon Consulting can support your executive leadership, clinical protocols, or DEI roadmap.
          </p>
        </div>
      </section>

      {/* MAIN BOOKING CONTENT */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Fallback & Details */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 rounded-3xl ios-glass-card shadow-md space-y-6">
                <div>
                  <h3 className="font-bold text-xl text-white mb-1">
                    Direct Contact Fallback
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    Prefer to reach out directly? Our team responds within 24 business hours.
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 border border-white/12 hover:border-[#FF2D55] transition-colors text-slate-100 "
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FFEBF0] flex items-center justify-center text-[#FF2D55] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-white">Email Us</div>
                      <div>{SITE_CONFIG.email}</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 border border-white/12 hover:border-[#007AFF] transition-colors text-slate-100 "
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#E8F2FF] flex items-center justify-center text-[#007AFF] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-white">Call Directly</div>
                      <div>{SITE_CONFIG.phone}</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 border border-white/12 text-slate-100 ">
                    <div className="w-9 h-9 rounded-xl bg-[#F3EEFE] flex items-center justify-center text-[#AF52DE] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-white">Office Location</div>
                      <div>{SITE_CONFIG.location}</div>
                    </div>
                  </div>
                </div>

                {/* What to expect card */}
                <div className="pt-4 border-t border-slate-200/60 space-y-2 text-xs text-slate-300 font-medium">
                  <span className="font-bold text-white uppercase tracking-wider block">
                    What to Expect:
                  </span>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF2D55] shrink-0 mt-0.5" />
                    <span>30-minute confidential video or phone session</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#007AFF] shrink-0 mt-0.5" />
                    <span>Discovery of organizational goals, ERG status & timelines</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#AF52DE] shrink-0 mt-0.5" />
                    <span>Tailored capability recommendations & preliminary scoping</span>
                  </div>
                </div>
              </div>

              {/* Wix Booking Widget Embed Slot */}
              <div className="p-6 rounded-3xl border-2 border-dashed border-slate-300/80 ios-glass text-center">
                <span className="font-mono text-xs font-bold text-[#007AFF] bg-[#E8F2FF] px-2.5 py-1 rounded-full">
                  [ADD BOOKING EMBED]
                </span>
                <p className="text-xs text-slate-400 mt-2 font-medium">
                  Drop an external Calendly, HubSpot, or Wix Bookings iframe widget here if preferred.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Scheduler Form */}
            <div className="lg:col-span-8">
              <div className="p-8 sm:p-12 rounded-[2.5rem] ios-glass-card shadow-xl border border-white/12">
                {submitted ? (
                  <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-300">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#FF2D55] to-[#007AFF] flex items-center justify-center text-white mx-auto shadow-xl">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-extrabold text-3xl text-white">
                        Consultation Confirmed!
                      </h3>
                      <p className="text-slate-300 text-base max-w-md mx-auto">
                        Thank you, <strong className="text-white">{fullName}</strong>. A calendar invite for <strong className="text-[#007AFF]">{selectedDate} at {selectedTime}</strong> has been sent to <strong className="text-white">{email}</strong>.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/90 max-w-md mx-auto text-left text-xs space-y-2 border border-slate-200/80 ">
                      <div><strong className="text-white font-bold">Topic:</strong> {selectedTopic}</div>
                      <div><strong className="text-white font-bold">Organization:</strong> {organization}</div>
                      <div><strong className="text-white font-bold">Lead Consultant:</strong> {SITE_CONFIG.founder}</div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFullName('');
                          setEmail('');
                          setOrganization('');
                          setNotes('');
                        }}
                        className="text-sm font-bold text-[#FF2D55] hover:underline cursor-pointer"
                      >
                        Book another appointment
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleBooking} className="space-y-8">
                    {/* Step 1: Select Topic */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white mb-3">
                        1. Select Practice or Consultation Focus
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {topics.map((topic) => (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => setSelectedTopic(topic)}
                            className={`p-3.5 rounded-2xl text-left text-xs font-bold transition-all border cursor-pointer ${
                              selectedTopic === topic
                                ? 'border-[#FF2D55] bg-[#FFEBF0] text-white shadow-xs'
                                : 'border-slate-200/80 hover:border-slate-300 text-slate-200 bg-white/70'
                            }`}
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Date & Time Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200/60">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
                          2. Preferred Date
                        </label>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200/90 text-sm text-white bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#FF2D55]/40"
                          min="2026-09-24"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
                          Preferred Time (PST)
                        </label>
                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200/90 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#007AFF]/40 bg-white/80"
                        >
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Step 3: Contact Info */}
                    <div className="space-y-4 pt-4 border-t border-slate-200/60">
                      <label className="block text-xs font-bold uppercase tracking-wider text-white">
                        3. Your Information
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-slate-300 mb-1 font-medium">Full Name *</label>
                          <input
                            type="text"
                            placeholder="e.g. Dr. Jordan Lee"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className={`w-full px-4 py-3 rounded-2xl border text-sm text-white bg-white/80 focus:outline-none ${
                              errors.fullName ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-slate-200/90 focus:ring-2 focus:ring-[#FF2D55]/40'
                            }`}
                          />
                          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                        </div>

                        <div>
                          <label className="block text-xs text-slate-300 mb-1 font-medium">Work Email *</label>
                          <input
                            type="email"
                            placeholder="jordan.lee@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-3 rounded-2xl border text-sm text-white bg-white/80 focus:outline-none ${
                              errors.email ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-slate-200/90 focus:ring-2 focus:ring-[#007AFF]/40'
                            }`}
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 mb-1 font-medium">Organization / Hospital / BioPharma *</label>
                        <input
                          type="text"
                          placeholder="e.g. Life Sciences Global"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          className={`w-full px-4 py-3 rounded-2xl border text-sm text-white bg-white/80 focus:outline-none ${
                            errors.organization ? 'border-red-400' : 'border-slate-200/90 focus:ring-2 focus:ring-[#FF2D55]/40'
                          }`}
                        />
                        {errors.organization && <p className="text-red-500 text-xs mt-1">{errors.organization}</p>}
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 mb-1 font-medium">Key Questions or Goals (Optional)</label>
                        <textarea
                          rows={3}
                          placeholder="Tell us briefly about your team, current initiatives, or challenges..."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200/90 text-sm text-white bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/40"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full ios-btn-primary py-4 text-base shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-5 h-5" />
                      <span>Confirm Free Consultation Appointment</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookOnlinePage;


