import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, ShieldCheck, Building, Award, Phone, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG, CERTIFICATIONS, NAICS_CODES, SERVICES_INCLUDE } from '../data/siteData';

interface CapabilitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CapabilitiesModal: React.FC<CapabilitiesModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text/markdown Capabilities Statement file download
    const content = `=====================================================
REBEKON CONSULTING LLC — CAPABILITIES STATEMENT
"Educate. Engage. Empower."
"Organizations to be truly inclusive — from the Bathroom to the Boardroom."
=====================================================

FOUNDER & PRINCIPAL:
Celia Sandhya Daniels (she/they)
Location: Thousand Oaks, California
Phone: 805 222 0502
Email: info@rebekon.com
Website: https://rebekon.com

COMPANY PROFILE:
Founded in 2018 in Thousand Oaks, CA, Rebekon Consulting LLC is a boutique DEI, Health Equity, and Racial & Gender Equity consultancy built on 30+ years of Fortune 100 enterprise consulting experience.

CORE COMPETENCIES:
1. Health Equity & Inclusive Clinical Trials
   - Gender-Affirming Care consultation for LGBTQ+ and intersex patients
   - Diversity in Clinical Trials protocol design and patient engagement
   - Market analysis, strategic planning, and implementation support

2. Workplace Diversity & Inclusion Consulting
   - Behavioral, structural, and operational DEI gap assessments
   - "From the Bathroom to the Boardroom" end-to-end transformation
   - People, Processes, and IT strategy alignment

3. Policy & Guidelines
   - Trans and Gender-diverse employee policies & transition roadmaps
   - Benefit review, gender-neutral facility guidelines, and self-ID frameworks

4. Trainings & Workshops
   - ERG, HR, Recruiter, and Executive Allyship workshops
   - Health equity workshops for clinicians and payors

GOVERNMENT & CORPORATE CERTIFICATIONS:
- NGLCC Certified LGBT Business Enterprise (LGBTBE): 30210
- California Public Utilities Commission (CPUC) Supplier Diversity: VON 24000841
- CA/LA SBE (Proprietary): 2034333
- EBE (Emerging Business Enterprise): 203433
- VSBE (Very Small Business Enterprise - Harbor): 2034333
- Dun & Bradstreet D-U-N-S: 010274745

PRIMARY NAICS CODES:
- 611430: Professional and Management Development Training
- 541612: Human Resource Consulting Services
- 541512: Computer Software Consulting Services or Consultants
- 541611: Administrative Management and General Management Consulting Services

DIFFERENTIATORS:
- 30+ Years enterprise IT, life sciences, and management consulting experience
- Recognized Top 10 LGBTQ+ Voice on LinkedIn (US & Canada)
- Endpoints News Top 20 LGBTQ+ Leaders in Biopharma
- Member, Syneos Health DEI and Health Equity Advisory Council

© Rebekon Consulting LLC. All rights reserved.
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Rebekon_Consulting_Capabilities_Statement.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center text-white">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Capabilities Statement
              </h3>
              <p className="text-xs text-slate-500">
                {SITE_CONFIG.companyName} • Thousand Oaks, CA
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-600">
          {/* Top Banner */}
          <div className="p-5 rounded-2xl bg-[#FCE4EF]/40 border border-[#FCE4EF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#F45B9C] uppercase tracking-wider">
                {SITE_CONFIG.tagline}
              </span>
              <h4 className="font-display font-bold text-slate-900 text-base mt-0.5">
                {SITE_CONFIG.positioningLine}
              </h4>
            </div>
            <button
              onClick={handleDownload}
              className="brand-gradient text-white text-xs font-semibold px-4 py-2.5 rounded-full flex items-center gap-2 shadow-sm hover:shadow transition-all shrink-0"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Document</span>
                </>
              )}
            </button>
          </div>

          {/* Grid of Certifications & NAICS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#3E6BE0]" />
                Corporate & Government Certifications
              </h5>
              <div className="space-y-2">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      {cert.logoUrl && (
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 p-1 flex items-center justify-center shrink-0">
                          <img
                            src={cert.logoUrl}
                            alt={cert.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="font-semibold text-slate-800 text-xs truncate">{cert.name}</div>
                        <div className="text-[11px] text-slate-500 truncate">{cert.issuer}</div>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#3E6BE0] bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">
                      {cert.code}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#F45B9C]" />
                NAICS Classification Codes
              </h5>
              <div className="space-y-2">
                {NAICS_CODES.map((item) => (
                  <div key={item.code} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-mono font-bold text-xs text-[#F45B9C] bg-[#FCE4EF]/60 px-1.5 py-0.5 rounded mr-2">
                      {item.code}
                    </span>
                    <span className="text-xs text-slate-700 font-medium">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Direct Contacts box */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1.5">
                <div className="font-semibold text-slate-800">Direct Procurement Contact</div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Mail className="w-3.5 h-3.5 text-[#F45B9C]" />
                  <span>{SITE_CONFIG.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Phone className="w-3.5 h-3.5 text-[#3E6BE0]" />
                  <span>{SITE_CONFIG.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Services bullets */}
          <div>
            <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
              Core Practice Areas
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h6 className="font-bold text-slate-900 text-xs mb-2 text-[#3E6BE0]">Inclusive Healthcare & Clinical Practice</h6>
                <ul className="space-y-1.5 text-xs">
                  {SERVICES_INCLUDE.healthcare.slice(0, 2).map((b, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#3E6BE0] font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h6 className="font-bold text-slate-900 text-xs mb-2 text-[#F45B9C]">Inclusive Workplace Consultation</h6>
                <ul className="space-y-1.5 text-xs">
                  {SERVICES_INCLUDE.workplace.slice(0, 2).map((b, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#F45B9C] font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            D&B D-U-N-S: 010274745 • SBE / EBE / VSBE
          </span>
          <button
            onClick={handleDownload}
            className="brand-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 shadow-md hover:scale-[1.02] transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF / Text Summary</span>
          </button>
        </div>
      </div>
    </div>
  );
};
