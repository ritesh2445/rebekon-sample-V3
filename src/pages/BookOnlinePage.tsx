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

    // Trigger subtle celebratory confetti
    confetti({
      particleCount: 65,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F45B9C', '#7C6BE8', '#3E6BE0', '#FCE4EF']
    });

    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Hero */}
      <section className="py-14 bg-gradient-to-b from-[#FCE4EF]/40 via-[#FAFAFC] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE4EF] text-[#F45B9C] text-xs font-bold tracking-wider uppercase mb-4">
            <Calendar className="w-4 h-4" />
            <span>FREE 30-MINUTE CONSULTATION</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 tracking-tight">
            Let's Talk About Humanizing Your Organization
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Schedule an introductory consultation directly with Celia Sandhya Daniels to explore how Rebekon Consulting can support your executive leadership, clinical protocols, or DEI roadmap.
          </p>
        </div>
      </section>

      {/* MAIN BOOKING CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Fallback & Details */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs space-y-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-1">
                    Direct Contact Fallback
                  </h3>
                  <p className="text-xs text-slate-500">
                    Prefer to reach out directly? Our team responds within 24 business hours.
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200 hover:border-[#F45B9C] transition-colors text-slate-700"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FCE4EF] flex items-center justify-center text-[#F45B9C] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-semibold text-slate-900">Email Us</div>
                      <div>{SITE_CONFIG.email}</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200 hover:border-[#3E6BE0] transition-colors text-slate-700"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#E6EEFF] flex items-center justify-center text-[#3E6BE0] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-semibold text-slate-900">Call Directly</div>
                      <div>{SITE_CONFIG.phone}</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200 text-slate-700">
                    <div className="w-9 h-9 rounded-xl bg-[#EDE9FE] flex items-center justify-center text-[#7C6BE8] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-semibold text-slate-900">Office Location</div>
                      <div>{SITE_CONFIG.location}</div>
                    </div>
                  </div>
                </div>

                {/* What to expect card */}
                <div className="pt-4 border-t border-slate-200/80 space-y-2 text-xs text-slate-600">
                  <span className="font-bold text-slate-800 uppercase tracking-wider block">
                    What to Expect:
                  </span>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F45B9C] shrink-0 mt-0.5" />
                    <span>30-minute confidential video or phone session</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3E6BE0] shrink-0 mt-0.5" />
                    <span>Discovery of organizational goals, ERG status & timelines</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7C6BE8] shrink-0 mt-0.5" />
                    <span>Tailored capability recommendations & preliminary scoping</span>
                  </div>
                </div>
              </div>

              {/* Wix Booking Widget Embed Slot */}
              <div className="p-6 rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50/50 text-center">
                <span className="font-mono text-xs font-bold text-[#3E6BE0] bg-[#E6EEFF] px-2.5 py-1 rounded-full">
                  [ADD BOOKING EMBED]
                </span>
                <p className="text-xs text-slate-500 mt-2">
                  Drop an external Calendly, HubSpot, or Wix Bookings iframe widget here if preferred.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Scheduler Form */}
            <div className="lg:col-span-8">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-lg">
                {submitted ? (
                  <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-300">
                    <div className="w-20 h-20 rounded-full brand-gradient flex items-center justify-center text-white mx-auto shadow-xl">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-3xl text-slate-900">
                        Consultation Confirmed!
                      </h3>
                      <p className="text-slate-600 text-base max-w-md mx-auto">
                        Thank you, <strong className="text-slate-900">{fullName}</strong>. A calendar invite for <strong className="text-[#3E6BE0]">{selectedDate} at {selectedTime}</strong> has been sent to <strong className="text-slate-900">{email}</strong>.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-50 max-w-md mx-auto text-left text-xs space-y-2 border border-slate-200">
                      <div><strong className="text-slate-800">Topic:</strong> {selectedTopic}</div>
                      <div><strong className="text-slate-800">Organization:</strong> {organization}</div>
                      <div><strong className="text-slate-800">Lead Consultant:</strong> {SITE_CONFIG.founder}</div>
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
                        className="text-sm font-semibold text-[#F45B9C] hover:underline"
                      >
                        Book another appointment
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleBooking} className="space-y-8">
                    {/* Step 1: Select Topic */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                        1. Select Practice or Consultation Focus
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {topics.map((topic) => (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => setSelectedTopic(topic)}
                            className={`p-3.5 rounded-2xl text-left text-xs font-semibold transition-all border ${
                              selectedTopic === topic
                                ? 'border-[#F45B9C] bg-[#FCE4EF]/40 text-slate-900 shadow-xs'
                                : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-white'
                            }`}
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Date & Time Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                          2. Preferred Date
                        </label>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F45B9C]/40"
                          min="2026-09-24"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                          Preferred Time (PST)
                        </label>
                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#3E6BE0]/40 bg-white"
                        >
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Step 3: Contact Info */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-900">
                        3. Your Information
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-slate-600 mb-1">Full Name *</label>
                          <input
                            type="text"
                            placeholder="e.g. Dr. Jordan Lee"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className={`w-full px-4 py-3 rounded-2xl border text-sm text-slate-800 focus:outline-none ${
                              errors.fullName ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:ring-2 focus:ring-[#F45B9C]/40'
                            }`}
                          />
                          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                        </div>

                        <div>
                          <label className="block text-xs text-slate-600 mb-1">Work Email *</label>
                          <input
                            type="email"
                            placeholder="jordan.lee@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-3 rounded-2xl border text-sm text-slate-800 focus:outline-none ${
                              errors.email ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:ring-2 focus:ring-[#3E6BE0]/40'
                            }`}
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-slate-600 mb-1">Organization / Hospital / BioPharma *</label>
                        <input
                          type="text"
                          placeholder="e.g. Life Sciences Global"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          className={`w-full px-4 py-3 rounded-2xl border text-sm text-slate-800 focus:outline-none ${
                            errors.organization ? 'border-red-400' : 'border-slate-200 focus:ring-2 focus:ring-[#F45B9C]/40'
                          }`}
                        />
                        {errors.organization && <p className="text-red-500 text-xs mt-1">{errors.organization}</p>}
                      </div>

                      <div>
                        <label className="block text-xs text-slate-600 mb-1">Key Questions or Goals (Optional)</label>
                        <textarea
                          rows={3}
                          placeholder="Tell us briefly about your team, current initiatives, or challenges..."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#3E6BE0]/40"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full brand-gradient text-white font-semibold py-4 rounded-full text-base shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
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
