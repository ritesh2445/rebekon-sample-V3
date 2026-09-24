export interface ServicePillar {
  id: string;
  badge: string;
  title: string;
  description: string;
  link: string;
  ctaText: string;
  iconName: string;
}

export interface FrameworkStep {
  stepNumber: string;
  stepName: string;
  title: string;
  link: string;
  ctaText: string;
  bullets: string[];
}

export interface Achievement {
  year?: string;
  title: string;
  description?: string;
  badge?: string;
}

export interface Certification {
  name: string;
  code: string;
  issuer: string;
  logoUrl?: string;
}

export interface MediaItem {
  id: string;
  title: string;
  source: string;
  type: 'Podcast' | 'Webcast' | 'Keynote' | 'Press';
  embedUrl: string;
  thumbnailUrl: string;
  duration?: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: 'Healthcare' | 'Workplace DEI' | 'Policy & Guidelines';
  clientType: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  quote?: string;
  author?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'DEI' | 'Health Equity' | 'Trans Advocacy' | 'AI & Technology';
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export const SITE_CONFIG = {
  companyName: 'Rebekon Consulting LLC',
  founder: 'Celia Sandhya Daniels',
  pronouns: '(she/they)',
  foundedYear: '2018',
  location: 'Thousand Oaks, California',
  phone: '805 222 0502',
  email: 'info@rebekon.com',
  tagline: 'Educate. Engage. Empower.',
  positioningLine: 'Organizations to be truly inclusive — from the Bathroom to the Boardroom.',
  socials: {
    linkedin: 'https://www.linkedin.com/in/celiasdaniels',
    youtube: 'https://www.youtube.com/@RebekonConsultingLLC',
    facebook: 'https://www.facebook.com/rebekonconsulting',
    instagram: 'https://www.instagram.com/rebekonconsulting',
  }
};

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'healthcare',
    badge: 'HUMANIZING HEALTHCARE',
    title: 'Health Equity Consultation',
    description: 'Healthcare organizations require expertise in developing and executing strategic plans to address challenges faced by underrepresented communities like racial, sexual, gender minorities including people with disabilities. We can provide inclusive healthcare and clinical trials consulting services based on market analysis, strategic planning, and implementation support.',
    link: '/healthcare',
    ctaText: 'More Info',
    iconName: 'HeartHandshake'
  },
  {
    id: 'deib',
    badge: 'HUMANIZING WORKPLACE',
    title: 'Diversity and Inclusion Consulting',
    description: 'With years of experience, we have the capabilities and expertise to take your organizational change from the Bathroom to the Boardroom. We combine our insights and skills to transform your People, Processes, and IT strategies, into an inclusive company. With lived experiences, we are proud to help shape and improve your organizational outcome.',
    link: '/deib',
    ctaText: 'More Info',
    iconName: 'Users'
  },
  {
    id: 'ai-strategy',
    badge: 'HUMANIZING BUSINESS',
    title: 'Strategic AI Planning and Execution',
    description: 'Looking to develop your business but not sure where to turn in the age of AI? Need help planning or executing your next project? Let us guide you. Any organization can move forward with small incremental changes, but building for the future in today\'s rapidly evolving environment with diverse teams means helping organizations regain their business value by focusing on human value.',
    link: 'mailto:info@rebekon.com?subject=Lets%20Humanizing%20your%20Business',
    ctaText: 'Get in Touch',
    iconName: 'Sparkles'
  }
];

export const FRAMEWORK_STEPS: FrameworkStep[] = [
  {
    stepNumber: '01',
    stepName: 'EDUCATE',
    title: 'Trainings and Workshops',
    link: '/topics',
    ctaText: 'Explore Workshops',
    bullets: [
      'Inclusive Workplace and Allyship workshops for ERGs, HR, DEI, recruiters, IT, corporate communications, and diverse suppliers.',
      'Humanizing healthcare workshops for healthcare professionals, medical insurance, and life sciences companies, focusing on gender-affirming care and HIV/AIDS for LGBTQ+ patients from various intersections.',
      'Inclusive Clinical Research: Deliver workshops on racial, gender, and health equity in a world of AI/ML and technological advancement.'
    ]
  },
  {
    stepNumber: '02',
    stepName: 'ENGAGE',
    title: 'Consulting & Management',
    link: '/healthcare',
    ctaText: 'Consulting Services',
    bullets: [
      'Offer end-to-end DEI Consultation and Project management services.',
      'Inclusive healthcare and inclusive clinical trials consulting for Medical providers, BioPharma, Insurance companies and policy makers.',
      'Behavioral, structural, and operational DEI gap assessments for recruitment, HR, marketing, Training, Security and business functions.',
      'Racial and Gender Equity, HR consultation for policies, benefits, accessibility and transition guidelines for racial, sexual and gender minorities.'
    ]
  },
  {
    stepNumber: '03',
    stepName: 'EMPOWER',
    title: 'Community Engagement',
    link: '/resources',
    ctaText: 'Community Initiatives',
    bullets: [
      'Community Awareness — public speaking engagements, keynotes, panel discussions, conferences, webcasts, podcasts, and blogs on DEI, IT, healthcare, and related topics.',
      'Promote awareness and advocacy with government agencies and policymakers in Race, Sexual and Gender minorities.',
      'Community empowerment events, including resume building, job readiness, job fairs, mentorship, branding, wrap-around services, and collaboration with supportive partnerships.'
    ]
  }
];

export const SERVICES_INCLUDE = {
  healthcare: [
    'Trainings, workshops, and consultation for healthcare professionals, medical insurance, and life sciences companies, focused on Gender Affirming Care for trans, gender-diverse, and intersex patients from various intersections.',
    'Diversity in Clinical Trials Consultation for LGBTQ+ patients.',
    'Management Consulting in Healthcare and Life Sciences.',
    'Diversity in Healthcare and Clinical Trials workshop and consultation for Medical Providers, Payors, Pharmaceuticals and Policy makers.'
  ],
  workplace: [
    'DEI Consultation and Project Management services.',
    'Conduct behavioral, structural, and operational DEI gap assessment for Talent Acquisition, HR, Marketing, Legal, Finance, and Business functions.',
    'Implement policies and guidelines for Trans and Gender-diverse and Intersex employees and Job seekers.',
    'Job fairs, Industry-specific training, and allyship workshops.',
    'Racial, Gender and Health Equity workshops.'
  ]
};

export const CERTIFICATIONS = [
  { name: 'NGLCC Certified Business', code: 'NGLCC (30210)', issuer: 'National LGBT Chamber of Commerce', logoUrl: '/images/real/cert_nglcc.png' },
  { name: 'California Public Utilities Commission', code: 'VON: 24000841', issuer: 'CPUC Supplier Diversity', logoUrl: '/images/real/cert_cpuc.png' },
  { name: 'CA/LA SBE (Proprietary)', code: '2034333', issuer: 'Small Business Enterprise', logoUrl: '/images/real/cert_sbe.png' },
  { name: 'EBE Certification', code: '203433', issuer: 'Emerging Business Enterprise', logoUrl: '/images/real/cert_ebe.png' },
  { name: 'VSBE (Harbor)', code: '2034333', issuer: 'Very Small Business Enterprise', logoUrl: '/images/real/cert_sbe.png' },
  { name: 'D&B D-U-N-S Registered', code: '010274745', issuer: 'Dun & Bradstreet', logoUrl: '/images/logos/dnb.svg' }
];

export const ESTABLISHED_STATS = [
  { value: '30+', label: 'Years Experience', subtext: 'Serving Fortune 100 Companies' },
  { value: '2018', label: 'Year Founded', subtext: 'Thousand Oaks, California' },
  { value: 'Top 10', label: 'LinkedIn Voices', subtext: 'LGBTQ+ Leader in US & Canada' },
  { value: 'Top 20', label: 'Biopharma Leader', subtext: "Endpoints News Top LGBTQ+ Leaders" },
  { value: 'Top 100', label: 'Trailblazing Women', subtext: 'Global Impact in DEI' }
];

export const NAICS_CODES = [
  { code: '611430', name: 'Professional and Management Development Training' },
  { code: '541612', name: 'Human Resource Consulting Services' },
  { code: '541512', name: 'Computer Software Consulting Services or Consultants' },
  { code: '541611', name: 'Administrative Management and General Management Consulting Services' }
];

export interface ClientPartner {
  name: string;
  category: string;
  logoUrl: string;
}

export const CLIENT_PARTNERS: ClientPartner[] = [
  { name: 'Amgen', category: 'Biopharma', logoUrl: '/images/logos/amgen.svg' },
  { name: 'Genentech', category: 'Biotechnology', logoUrl: '/images/logos/genentech.svg' },
  { name: 'UnitedHealth Group', category: 'Healthcare', logoUrl: '/images/logos/unitedhealth.svg' },
  { name: 'BlueCross BlueShield', category: 'Health Insurance', logoUrl: '/images/logos/bcbs.svg' },
  { name: 'IQVIA', category: 'Life Sciences & Data', logoUrl: '/images/logos/iqvia.svg' },
  { name: 'Capgemini', category: 'Management Consulting', logoUrl: '/images/logos/capgemini.svg' },
  { name: 'Cognizant', category: 'Enterprise IT', logoUrl: '/images/logos/cognizant.svg' },
  { name: 'Syneos Health', category: 'Clinical Research', logoUrl: '/images/logos/syneos.svg' },
  { name: 'Dun & Bradstreet', category: 'Enterprise Data', logoUrl: '/images/logos/dnb.svg' },
  { name: 'Microsoft', category: 'Enterprise Tech', logoUrl: '/images/logos/microsoft.svg' },
  { name: 'Amazon', category: 'Cloud & Tech', logoUrl: '/images/logos/amazon.svg' },
  { name: 'NGLCC', category: 'Diversity Chamber', logoUrl: '/images/real/screenshot_23404.png' }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Endpoints News's Top 20 LGBTQ+ Leaders in the Biopharma Industry",
    badge: 'Biopharma Recognition'
  },
  {
    title: 'Top 100 trailblazing LGBTQ+ women making a difference in the diversity, equity, and inclusion space around the world',
    badge: 'Global DEI Recognition'
  },
  {
    title: 'Serving in the Syneos "DEI and Health Equity Advisory Council" advancing the rights of under-recognized communities',
    badge: 'Health Equity Council'
  },
  {
    title: "LinkedIn's Top LGBTQ+ Voices in the U.S. and Canada",
    badge: 'Top Voice'
  },
  {
    title: 'DEI Advisor for Commission on Peace Officer Standards and Training (POST)',
    badge: 'Public Policy'
  },
  {
    title: 'Serving as a Board member in the Workforce Development Board of Ventura County, California',
    badge: 'Board Leadership'
  },
  {
    title: 'Serving as the Vice President of PFLAG and Stonewall Democrats of Ventura County',
    badge: 'Community Leadership'
  },
  {
    title: "Listed in Marquis Who's Who in Publications Board",
    badge: 'National Honors'
  },
  {
    year: '2024',
    title: 'Received the "2024 Diversity Spotlight Award" from Diversity Collective, presented by a Member of Congress for uplifting the LGBTQ+ community',
    badge: 'Congressional Honors'
  },
  {
    year: '2022',
    title: 'Received the "Social Justice Award" during the progressive awards event for 2022 from the Ventura County Democratic Party',
    badge: 'Social Justice'
  },
  {
    year: '2021',
    title: 'Received the "Certificate of Recognition as Friend of the Port" in honor of the 2021 Women\'s History Month from the Oxnard Board of Harbor Commissioners, Ventura County, California',
    badge: 'Civic Award'
  },
  {
    year: '2019',
    title: 'Received the 2019 Human Rights Campaign\'s Equality Award for "Outstanding commitment and service to our community"',
    badge: 'HRC Equality Award'
  },
  {
    year: '2017',
    title: 'Received the "2017 Visionary Award" from Satrang, a Southern California South Asian LGBTQ+ community, honoring vision, bravery, and speaking against injustice facing the Transgender community',
    badge: 'Visionary Award'
  },
  {
    title: 'Served on the Executive Board for Trans Can Work, an organization focused on Economic Empowerment for the Transgender and Gender Non-Binary community in North America',
    badge: 'Economic Empowerment'
  },
  {
    title: 'Served on the community advisory board for Fordham\'s HIV and Drug Abuse Prevention Research Ethics Training Institute (RETI), funded through the National Institute on Drug Abuse',
    badge: 'Research Ethics'
  },
  {
    year: '2018–2019',
    title: 'Served as the International Ambassador for Sahodari Foundation in 2018–2019, an India-based transgender organization empowering the transgender and gender non-binary community through education and training in creative arts',
    badge: 'International Ambassador'
  },
  {
    year: '2019',
    title: 'Contributed to policy changes in 2019 alongside the TransLatino Coalition in LA to make recommendations to the State for the trans and gender non-binary community in California',
    badge: 'State Policy Impact'
  }
];

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: 'media-1',
    title: 'Bathroom to Boardroom: A Conversation with Trans Activist Celia Sandhya Daniels',
    source: 'The Inclusive Screenwriter',
    type: 'Keynote',
    embedUrl: 'https://www.youtube.com/embed/HqiyBdBoM-Y',
    thumbnailUrl: '/images/real/yt_thumb_bathroom_boardroom.jpg',
    duration: '41:12',
    description: 'Celia Sandhya Daniels explores actionable pathways for transitioning organizational culture from entry-level restroom dignity to executive C-suite accountability.'
  },
  {
    id: 'media-2',
    title: '#45: The Challenge of Being Trans, with Celia Daniels',
    source: 'FUTRtv Video Podcast',
    type: 'Podcast',
    embedUrl: 'https://www.youtube.com/embed/Cn_qpgK6DTc',
    thumbnailUrl: '/images/real/yt_thumb_futrtv_trans.jpg',
    duration: '48:30',
    description: 'Hosts Chris Brandt and Sandesh Patel interview Celia Daniels on her journey growing up in Southern India and executive leadership across Fortune 500 enterprises.'
  },
  {
    id: 'media-3',
    title: 'See It to Be It: Trans Activist (w/ Celia Daniels)',
    source: 'Living Corporate',
    type: 'Podcast',
    embedUrl: 'https://www.youtube.com/embed/3SGXKKllDew',
    thumbnailUrl: '/images/real/yt_thumb_living_corporate.jpg',
    duration: '32:15',
    description: 'A deep discussion on corporate authenticity, minority representation in executive boardrooms, and championing the next generation of diverse talent.'
  },
  {
    id: 'media-4',
    title: 'Celia Daniels - LGBT Professional, Entrepreneur & Trans Activist',
    source: 'OutBüro LGBTQ+ Community',
    type: 'Webcast',
    embedUrl: 'https://www.youtube.com/embed/j2ZebtrPsz4',
    thumbnailUrl: '/images/real/yt_thumb_outburo.jpg',
    duration: '28:45',
    description: 'An executive dialogue on building inclusive business ecosystems and empowering LGBTQ+ founders and entrepreneurs.'
  },
  {
    id: 'media-5',
    title: 'Celia Sandhya Daniels on Gender & Workplace Safety',
    source: 'POSH at Work',
    type: 'Webcast',
    embedUrl: 'https://www.youtube.com/embed/TdMkgvetsgY',
    thumbnailUrl: 'https://i.ytimg.com/vi/TdMkgvetsgY/hqdefault.jpg',
    duration: '25:10',
    description: 'Practical guidance for HR, compliance leaders, and business heads on preventing discrimination and establishing gender-affirming workplace protections.'
  },
  {
    id: 'media-6',
    title: 'Proud Possibilities, Ep 5 with Celia and Sasha',
    source: 'Desi Rainbow Parents',
    type: 'Podcast',
    embedUrl: 'https://www.youtube.com/embed/rsUMN--gZvM',
    thumbnailUrl: '/images/real/yt_thumb_desi_rainbow.jpg',
    duration: '55:20',
    description: 'A heartfelt conversation exploring intersectional South Asian identity, family acceptance, and cultural advocacy across generations.'
  },
  {
    id: 'media-7',
    title: '#EquityMatters: D&I Policy Which Really Work',
    source: 'Inclusify io',
    type: 'Keynote',
    embedUrl: 'https://www.youtube.com/embed/4CZzt2KrYjE',
    thumbnailUrl: '/images/real/yt_thumb_equity_matters.jpg',
    duration: '35:40',
    description: 'Moving beyond performative statements into structural policy overhaul, metrics tracking, and cultural retention.'
  },
  {
    id: 'media-8',
    title: 'Workplace Pride: Leading with Empathy and Rigor',
    source: 'Amplify DEI Summit',
    type: 'Keynote',
    embedUrl: 'https://www.youtube.com/embed/bTuePMKUGi8',
    thumbnailUrl: '/images/real/yt_thumb_workplace_pride.jpg',
    duration: '44:05',
    description: 'Celia shares insights from decades inside Fortune 100 IT and healthcare consulting environments on how true allyship drives business performance.'
  },
  {
    id: 'media-9',
    title: 'How to Make the Workplace a Safe Place',
    source: 'Ivan Kaye Leadership Series',
    type: 'Podcast',
    embedUrl: 'https://www.youtube.com/embed/aQY9iVG9k_M',
    thumbnailUrl: '/images/real/yt_thumb_safe_workplace.jpg',
    duration: '30:18',
    description: 'A practical framework for corporate leaders to identify blind spots, dismantle microaggressions, and design supportive employee pipelines.'
  },
  {
    id: 'media-10',
    title: 'Life Is Fading Away - Composed & Performed by Celia Sandhya Daniels',
    source: 'Celia Daniels Original Music',
    type: 'Keynote',
    embedUrl: 'https://www.youtube.com/embed/UZjt2I2pixk',
    thumbnailUrl: '/images/real/yt_thumb_music_composition.jpg',
    duration: '04:15',
    description: 'Original musical composition and vocal performance by Celia Sandhya Daniels, expressing the deeply personal journey of authenticity and courage.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'Enterprise Gender Transition Guidelines & Bathroom-to-Boardroom Policy Rollout',
    category: 'Policy & Guidelines',
    clientType: 'Fortune 100 Technology & Life Sciences Enterprise',
    challenge: 'A multi-national corporation needed comprehensive gender transition guidelines, bathroom policy updates, and executive training across 12,000+ employees.',
    solution: 'Rebekon conducted behavioral and operational gap assessments, drafted compliant transition policies, and delivered tailored allyship workshops for HR and leadership.',
    metrics: [
      { label: 'Employees Trained', value: '12,000+' },
      { label: 'Policy Satisfaction', value: '98%' },
      { label: 'ERG Participation Increase', value: '+64%' }
    ],
    quote: 'Celia helped our leadership team navigate delicate questions with empathy, clarity, and enterprise rigor.',
    author: 'Chief Diversity Officer, F100 BioPharma'
  },
  {
    id: 'cs-2',
    title: 'Inclusive Clinical Trials Recruitment & Protocol Optimization',
    category: 'Healthcare',
    clientType: 'Global Clinical Research Organization',
    challenge: 'Underrepresentation of transgender, non-binary, and intersectional racial minorities in Phase II and Phase III oncology and immunology clinical trials.',
    solution: 'Designed an inclusive patient engagement framework, updated consent protocols with culturally competent terminology, and trained clinical investigators.',
    metrics: [
      { label: 'Underrepresented Enrollment', value: '+42%' },
      { label: 'Investigator Sites Trained', value: '35+' },
      { label: 'Protocol Retention Rate', value: '94%' }
    ],
    quote: 'The framework transformed our trial site readiness and created genuine trust with patient communities.',
    author: 'VP Clinical Operations'
  },
  {
    id: 'cs-3',
    title: 'Holistic DEIB Behavioral Gap Assessment & Supplier Diversity',
    category: 'Workplace DEI',
    clientType: 'Regional Healthcare & Insurance Provider',
    challenge: 'Disconnect between corporate DEIB commitments and day-to-day employee experience in customer support, facilities, and regional clinics.',
    solution: 'Implemented end-to-end 360-degree assessment across HR, Legal, Facilities, and Diverse Supplier pipelines, accompanied by executive coaching.',
    metrics: [
      { label: 'Inclusion Index Score', value: '+31 pts' },
      { label: 'Diverse Supplier Spend', value: '+28%' },
      { label: 'Employee Turnover Reduction', value: '-19%' }
    ],
    quote: 'From facilities and rest facilities to senior management, the cultural shift was immediate and measurable.',
    author: 'Head of Human Resources'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'humanizing-healthcare-trans-patients',
    title: 'Humanizing Healthcare: Beyond the Checkbox for Trans & Gender-Expansive Patients',
    category: 'Health Equity',
    date: 'February 18, 2026',
    readTime: '6 min read',
    excerpt: 'Why standard medical intake forms, clinical trial criteria, and EHR systems continue to misgender patients — and how healthcare leaders can build truly affirming care pathways.',
    content: [
      'In healthcare, true equity is never about checking an administrative box. When a transgender or gender-diverse individual enters a hospital, clinic, or clinical trial site, their dignity depends on every point of contact — from the initial digital intake portal and reception desk to the triage nurse and treating physician.',
      'Historically, electronic health record (EHR) systems have enforced binary sex-assigned-at-birth fields without room for chosen names, pronouns, anatomical inventories, or lived experience. The clinical and emotional consequence is pervasive mistrust and delayed care.',
      'At Rebekon Consulting, we work directly with medical providers, payors, and clinical researchers to redesign both the systems and the human interactions. Affirming care reduces mortality, enhances clinical trial retention, and restores faith in medicine.'
    ],
    tags: ['Health Equity', 'Transgender Care', 'Clinical Trials', 'BioPharma']
  },
  {
    id: 'blog-2',
    slug: 'bathroom-to-the-boardroom-meaning',
    title: 'From the Bathroom to the Boardroom: What Genuine Inclusion Looks Like in 2026',
    category: 'DEI',
    date: 'January 24, 2026',
    readTime: '5 min read',
    excerpt: 'Inclusion cannot exist only at 30,000 feet in corporate mission statements if frontline employees fear basic day-to-day safety and dignity.',
    content: [
      '"From the Bathroom to the Boardroom" is not merely a catchy slogan. It is a fundamental truth born out of 25+ years in Fortune 100 enterprise environments and lived experience as a trans woman of color.',
      'If an employee must walk across three office buildings just to find a safe, gender-affirming restroom, all the corporate keynote speeches in the world become performative.',
      'To build a culture of belonging, organizations must align their structural infrastructure, IT identity systems, insurance benefits, and executive governance. When dignity is guaranteed at the most basic level, innovation and loyalty naturally follow.'
    ],
    tags: ['Workplace Inclusion', 'Executive Leadership', 'Culture', 'HR Policy']
  },
  {
    id: 'blog-3',
    slug: 'ai-diversity-health-equity-intersections',
    title: 'AI in Clinical Research: Navigating Algorithmic Bias and Minority Health Equity',
    category: 'AI & Technology',
    date: 'December 12, 2025',
    readTime: '7 min read',
    excerpt: 'As artificial intelligence and machine learning automate clinical trial matching and patient diagnostics, who ensures that marginalized communities are not erased?',
    content: [
      'Artificial intelligence is advancing at unprecedented velocity across healthcare and life sciences. From automated diagnostic models to predictive clinical trial patient recruitment, algorithms are making decisions that directly dictate human survival.',
      'Yet AI models are trained on historical data. If historical data excluded racial, gender, and sexual minorities, the AI will systematically replicate and accelerate those exclusions.',
      'Building for the future requires combining technological sophistication with human lived experience. Organizations must audit datasets for intersectional gaps and involve diverse clinical consultants from the inception of model design.'
    ],
    tags: ['Artificial Intelligence', 'Algorithmic Bias', 'Health Equity', 'Clinical Research']
  }
];
