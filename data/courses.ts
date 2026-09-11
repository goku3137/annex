// ─── Types ─────────────────────────────────────────────────────────────────
export interface CourseModule {
  title: string;
  topics: string[];
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  category: string;
  categorySlug: string;
  description: string;
  shortDescription: string;
  duration: string;
  modes: ("Classroom" | "Online" | "Corporate")[];
  certification?: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  featured: boolean;
  icon: string;           // emoji icon for now
  image: string;
  curriculumImage: string;
  curriculum: CourseModule[];
  careerOpportunities: string[];
  faqs: CourseFAQ[];
  color: string;          // tailwind color class for accent
}

export interface CourseCategory {
  id: string;
  slug: string;
  label: string;
  icon: string;
  description: string;
  color: string;
}

// ─── Categories ─────────────────────────────────────────────────────────────
export const categories: CourseCategory[] = [
  {
    id: "medical",
    slug: "medical-healthcare",
    label: "Medical & Healthcare",
    icon: "",
    description: "Professional healthcare training programs",
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    id: "programming",
    slug: "programming-data",
    label: "Programming & Data",
    icon: "",
    description: "Software development and data science courses",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "design",
    slug: "designing-creative",
    label: "Designing & Creative",
    icon: "",
    description: "Creative design and digital media programs",
    color: "from-purple-500/20 to-violet-500/20",
  },
  {
    id: "engineering",
    slug: "engineering-cad",
    label: "Engineering & CAD",
    icon: "",
    description: "Technical engineering and CAD drafting courses",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: "it",
    slug: "it-networking",
    label: "IT & Networking",
    icon: "",
    description: "IT infrastructure and networking certifications",
    color: "from-teal-500/20 to-green-500/20",
  },
  {
    id: "accounting",
    slug: "accounting",
    label: "Accounting",
    icon: "",
    description: "Professional accounting and finance software",
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    id: "management",
    slug: "management-admin",
    label: "Management & Admin",
    icon: "",
    description: "Business management and administration programs",
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    id: "languages",
    slug: "languages-english",
    label: "Languages & English",
    icon: "",
    description: "English proficiency and language training",
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    id: "project",
    slug: "project-management",
    label: "Project Management",
    icon: "",
    description: "Professional project management certifications",
    color: "from-sky-500/20 to-blue-500/20",
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    label: "Digital Marketing",
    icon: "",
    description: "Digital marketing and social media strategy",
    color: "from-pink-500/20 to-rose-500/20",
  },
];

// ─── Courses ─────────────────────────────────────────────────────────────────
export const courses: Course[] = [
  // ── Medical & Healthcare ──
  {
    id: "medical-coding",
    slug: "medical-coding",
    title: "Medical Coding — CPC",
    shortTitle: "Medical Coding",
    category: "Medical & Healthcare",
    categorySlug: "medical-healthcare",
    description:
      "Professional medical coding training designed to prepare students for careers in healthcare coding and the CPC certification examination. This program covers anatomy, medical terminology, ICD-10-CM, CPT, and HCPCS Level II coding systems.",
    shortDescription:
      "Become a Certified Professional Coder. Master ICD-10, CPT, and HCPCS coding systems.",
    duration: "30 Hours",
    modes: ["Classroom", "Online"],
    certification: "CPC (AAPC)",
    level: "Intermediate",
    featured: true,
    icon: "",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    curriculumImage: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2072&auto=format&fit=crop",
    color: "rose",
    curriculum: [
      { title: "Module 1: Medical Terminology & Anatomy", topics: ["Body systems overview", "Medical terminology", "Anatomy fundamentals"] },
      { title: "Module 2: ICD-10-CM Coding", topics: ["ICD-10-CM structure", "Diagnosis coding guidelines", "Coding conventions"] },
      { title: "Module 3: CPT Coding", topics: ["CPT structure", "E/M coding", "Surgery coding"] },
      { title: "Module 4: HCPCS Level II", topics: ["HCPCS overview", "Supply coding", "DME coding"] },
      { title: "Module 5: CPC Exam Preparation", topics: ["Practice exams", "Exam strategies", "Mock coding scenarios"] },
    ],
    careerOpportunities: ["Medical Coder", "Medical Billing Specialist", "Revenue Cycle Analyst", "Healthcare Auditor"],
    faqs: [
      { question: "Do I need a medical background?", answer: "No prior medical background is required. The course begins with foundational anatomy and terminology." },
      { question: "Is the CPC exam included?", answer: "Contact us for details on exam registration and fees." },
    ],
  },
  {
    id: "dental-coding",
    slug: "dental-coding",
    title: "Dental Coding",
    shortTitle: "Dental Coding",
    category: "Medical & Healthcare",
    categorySlug: "medical-healthcare",
    description:
      "Specialized dental coding training covering CDT codes, dental billing procedures, and insurance claim processing for dental practices.",
    shortDescription: "Specialized training in CDT codes and dental billing for healthcare professionals.",
    duration: "20 Hours",
    modes: ["Classroom", "Online"],
    level: "Beginner",
    featured: false,
    icon: "",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop",
    curriculumImage: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2072&auto=format&fit=crop",
    color: "rose",
    curriculum: [
      { title: "Module 1: Dental Terminology", topics: ["Tooth numbering systems", "Dental procedures", "Terminology"] },
      { title: "Module 2: CDT Coding", topics: ["CDT code structure", "Preventive codes", "Restorative codes"] },
      { title: "Module 3: Dental Billing", topics: ["Claim preparation", "Insurance processing", "Denial management"] },
    ],
    careerOpportunities: ["Dental Coder", "Dental Biller", "Dental Office Administrator"],
    faqs: [],
  },
  {
    id: "medical-billing",
    slug: "medical-billing",
    title: "Medical Billing",
    shortTitle: "Medical Billing",
    category: "Medical & Healthcare",
    categorySlug: "medical-healthcare",
    description:
      "Comprehensive medical billing training covering insurance claims, revenue cycle management, patient billing, and reimbursement processes.",
    shortDescription: "Master medical billing, insurance claims, and revenue cycle management.",
    duration: "25 Hours",
    modes: ["Classroom", "Online"],
    level: "Beginner",
    featured: false,
    icon: "",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    curriculumImage: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2072&auto=format&fit=crop",
    color: "rose",
    curriculum: [
      { title: "Module 1: Healthcare System Overview", topics: ["Insurance types", "Billing workflow", "Patient registration"] },
      { title: "Module 2: Claims Processing", topics: ["Claim preparation", "Electronic billing", "CMS-1500 form"] },
      { title: "Module 3: Revenue Cycle Management", topics: ["Denial management", "Appeals", "Collections"] },
    ],
    careerOpportunities: ["Medical Billing Specialist", "Revenue Cycle Manager", "Insurance Claims Analyst"],
    faqs: [],
  },
  {
    id: "cna",
    slug: "certified-nursing-assistant",
    title: "Certified Nursing Assistant",
    shortTitle: "CNA",
    category: "Medical & Healthcare",
    categorySlug: "medical-healthcare",
    description:
      "Hands-on nursing assistant training covering patient care, clinical skills, safety procedures, and healthcare communication for entry-level healthcare roles.",
    shortDescription: "Hands-on patient care training for entry-level healthcare roles.",
    duration: "40 Hours",
    modes: ["Classroom"],
    certification: "CNA",
    level: "Beginner",
    featured: true,
    icon: "",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    curriculumImage: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2072&auto=format&fit=crop",
    color: "rose",
    curriculum: [
      { title: "Module 1: Patient Care Fundamentals", topics: ["Patient rights", "Infection control", "Safety procedures"] },
      { title: "Module 2: Clinical Skills", topics: ["Vital signs", "Personal care", "Mobility assistance"] },
      { title: "Module 3: Communication", topics: ["Patient communication", "Medical documentation", "Team collaboration"] },
    ],
    careerOpportunities: ["Nursing Assistant", "Home Care Aide", "Hospital Technician"],
    faqs: [],
  },

  // ── Programming & Data ──
  {
    id: "python",
    slug: "python",
    title: "Python Programming",
    shortTitle: "Python",
    category: "Programming & Data",
    categorySlug: "programming-data",
    description:
      "Comprehensive Python programming course from fundamentals to advanced applications. Covers data structures, OOP, file handling, APIs, and practical project development.",
    shortDescription: "Learn Python from basics to advanced applications with real-world projects.",
    duration: "40 Hours",
    modes: ["Classroom", "Online"],
    level: "Beginner",
    featured: true,
    icon: "",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    curriculumImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    color: "blue",
    curriculum: [
      { title: "Module 1: Python Fundamentals", topics: ["Variables & data types", "Control flow", "Functions"] },
      { title: "Module 2: Data Structures", topics: ["Lists, tuples, sets", "Dictionaries", "Comprehensions"] },
      { title: "Module 3: OOP in Python", topics: ["Classes & objects", "Inheritance", "Polymorphism"] },
      { title: "Module 4: File Handling & APIs", topics: ["File operations", "JSON handling", "REST APIs"] },
      { title: "Module 5: Final Projects", topics: ["Real-world projects", "Code review", "Best practices"] },
    ],
    careerOpportunities: ["Python Developer", "Backend Developer", "Data Analyst", "Automation Engineer"],
    faqs: [
      { question: "Is any prior programming experience needed?", answer: "No. This course starts from the very basics of programming." },
    ],
  },
  {
    id: "data-science",
    slug: "data-science",
    title: "Data Science",
    shortTitle: "Data Science",
    category: "Programming & Data",
    categorySlug: "programming-data",
    description:
      "End-to-end data science training covering Python, statistics, data visualization, machine learning, and practical data analysis projects.",
    shortDescription: "Master data analysis, visualization, and machine learning with Python.",
    duration: "60 Hours",
    modes: ["Classroom", "Online"],
    certification: "Data Science Professional",
    level: "Intermediate",
    featured: true,
    icon: "",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    curriculumImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    color: "blue",
    curriculum: [
      { title: "Module 1: Python for Data Science", topics: ["NumPy", "Pandas", "Matplotlib"] },
      { title: "Module 2: Statistics & Probability", topics: ["Descriptive stats", "Probability", "Hypothesis testing"] },
      { title: "Module 3: Data Visualization", topics: ["Seaborn", "Plotly", "Dashboard creation"] },
      { title: "Module 4: Machine Learning", topics: ["Supervised learning", "Unsupervised learning", "Model evaluation"] },
      { title: "Module 5: Capstone Project", topics: ["End-to-end project", "Presentation", "Portfolio"] },
    ],
    careerOpportunities: ["Data Scientist", "Data Analyst", "ML Engineer", "Business Intelligence Analyst"],
    faqs: [],
  },
  {
    id: "machine-learning",
    slug: "machine-learning",
    title: "Machine Learning",
    shortTitle: "Machine Learning",
    category: "Programming & Data",
    categorySlug: "programming-data",
    description:
      "Advanced machine learning course covering algorithms, deep learning fundamentals, neural networks, and real-world AI applications.",
    shortDescription: "Deep dive into ML algorithms, neural networks, and real-world AI applications.",
    duration: "50 Hours",
    modes: ["Classroom", "Online"],
    level: "Advanced",
    featured: true,
    icon: "",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    curriculumImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    color: "blue",
    curriculum: [
      { title: "Module 1: ML Foundations", topics: ["Regression", "Classification", "Clustering"] },
      { title: "Module 2: Advanced Algorithms", topics: ["Decision trees", "Random forests", "SVM"] },
      { title: "Module 3: Deep Learning", topics: ["Neural networks", "TensorFlow basics", "CNNs"] },
      { title: "Module 4: Projects", topics: ["Image classification", "NLP basics", "Deployment"] },
    ],
    careerOpportunities: ["ML Engineer", "AI Developer", "Research Scientist", "Deep Learning Engineer"],
    faqs: [],
  },

  // ── Design ──
  {
    id: "graphic-design",
    slug: "graphic-design",
    title: "Graphic Design",
    shortTitle: "Graphic Design",
    category: "Designing & Creative",
    categorySlug: "designing-creative",
    description:
      "Professional graphic design training covering Adobe Photoshop, Illustrator, InDesign, and design principles for print and digital media.",
    shortDescription: "Master Adobe Creative Suite and professional design principles.",
    duration: "45 Hours",
    modes: ["Classroom", "Online"],
    certification: "Adobe Certified",
    level: "Beginner",
    featured: true,
    icon: "",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    curriculumImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
    color: "purple",
    curriculum: [
      { title: "Module 1: Design Fundamentals", topics: ["Color theory", "Typography", "Layout principles"] },
      { title: "Module 2: Adobe Photoshop", topics: ["Photo editing", "Compositing", "Digital painting"] },
      { title: "Module 3: Adobe Illustrator", topics: ["Vector graphics", "Logo design", "Illustrations"] },
      { title: "Module 4: Adobe InDesign", topics: ["Print layout", "Brochures", "Publications"] },
    ],
    careerOpportunities: ["Graphic Designer", "Brand Designer", "Print Designer", "Digital Designer"],
    faqs: [],
  },
  {
    id: "adobe-premiere",
    slug: "adobe-premiere-pro",
    title: "Adobe Premiere Pro",
    shortTitle: "Premiere Pro",
    category: "Designing & Creative",
    categorySlug: "designing-creative",
    description:
      "Professional video editing with Adobe Premiere Pro. Learn video production workflows, color grading, audio editing, and visual effects.",
    shortDescription: "Professional video editing and production with Adobe Premiere Pro.",
    duration: "30 Hours",
    modes: ["Classroom", "Online"],
    level: "Intermediate",
    featured: false,
    icon: "",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
    curriculumImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
    color: "purple",
    curriculum: [
      { title: "Module 1: Premiere Pro Interface", topics: ["Workspace", "Import & organization", "Sequences"] },
      { title: "Module 2: Editing Techniques", topics: ["Cut & trim", "Transitions", "Timeline"] },
      { title: "Module 3: Color & Audio", topics: ["Color grading", "Lumetri Color", "Audio mixing"] },
    ],
    careerOpportunities: ["Video Editor", "Content Creator", "Post-Production Specialist"],
    faqs: [],
  },

  // ── Engineering & CAD ──
  {
    id: "autocad-2d",
    slug: "autocad-2d",
    title: "AutoCAD 2D Drafting",
    shortTitle: "AutoCAD 2D",
    category: "Engineering & CAD",
    categorySlug: "engineering-cad",
    description:
      "Professional 2D drafting and drawing with AutoCAD. Covers drawing tools, dimensioning, layers, blocks, and industry-standard drafting practices.",
    shortDescription: "Professional 2D drafting with AutoCAD — from basics to industry standards.",
    duration: "30 Hours",
    modes: ["Classroom", "Online"],
    certification: "Autodesk Certified",
    level: "Beginner",
    featured: true,
    icon: "",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    curriculumImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2062&auto=format&fit=crop",
    color: "orange",
    curriculum: [
      { title: "Module 1: AutoCAD Interface", topics: ["Workspace setup", "Drawing tools", "Coordinate systems"] },
      { title: "Module 2: 2D Drawing", topics: ["Lines, arcs, circles", "Editing tools", "Precision drawing"] },
      { title: "Module 3: Annotations & Dimensions", topics: ["Text", "Dimensioning", "Leaders"] },
      { title: "Module 4: Layers & Blocks", topics: ["Layer management", "Blocks & attributes", "Xrefs"] },
    ],
    careerOpportunities: ["CAD Drafter", "Architectural Technician", "Engineering Drafter", "Interior Designer"],
    faqs: [],
  },
  {
    id: "revit-architecture",
    slug: "revit-architecture",
    title: "Revit Architecture",
    shortTitle: "Revit",
    category: "Engineering & CAD",
    categorySlug: "engineering-cad",
    description:
      "BIM-based architectural design with Autodesk Revit. Covers building modeling, documentation, families, and project coordination.",
    shortDescription: "BIM architectural design and documentation with Autodesk Revit.",
    duration: "40 Hours",
    modes: ["Classroom", "Online"],
    certification: "Autodesk Certified",
    level: "Intermediate",
    featured: true,
    icon: "",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2062&auto=format&fit=crop",
    curriculumImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2062&auto=format&fit=crop",
    color: "orange",
    curriculum: [
      { title: "Module 1: Revit Fundamentals", topics: ["BIM concepts", "Interface", "Project setup"] },
      { title: "Module 2: Building Modeling", topics: ["Walls, floors, roofs", "Doors & windows", "Stairs"] },
      { title: "Module 3: Documentation", topics: ["Sheets & views", "Annotations", "Schedules"] },
      { title: "Module 4: Families & Project", topics: ["Family creation", "Project workflow", "Coordination"] },
    ],
    careerOpportunities: ["BIM Modeler", "Architectural Designer", "Revit Technician", "Project Coordinator"],
    faqs: [],
  },

  // ── Languages ──
  {
    id: "ielts",
    slug: "ielts",
    title: "IELTS Preparation",
    shortTitle: "IELTS",
    category: "Languages & English",
    categorySlug: "languages-english",
    description:
      "Comprehensive IELTS preparation program covering all four modules — Listening, Reading, Writing, and Speaking. Exam-oriented strategies with mock tests and individual feedback.",
    shortDescription: "Structured IELTS exam preparation with mock tests and expert feedback.",
    duration: "40 Hours",
    modes: ["Classroom", "Online"],
    certification: "IELTS",
    level: "Intermediate",
    featured: true,
    icon: "",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop",
    curriculumImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
    color: "yellow",
    curriculum: [
      { title: "Module 1: Listening", topics: ["Listening strategies", "Question types", "Practice tests"] },
      { title: "Module 2: Reading", topics: ["Skimming & scanning", "Reading strategies", "Time management"] },
      { title: "Module 3: Writing", topics: ["Task 1 & Task 2", "Essay structure", "Band 7+ techniques"] },
      { title: "Module 4: Speaking", topics: ["Fluency development", "Mock interviews", "Band scoring"] },
      { title: "Module 5: Mock Exams", topics: ["Full practice tests", "Performance review", "Exam strategies"] },
    ],
    careerOpportunities: ["Study Abroad", "Immigration", "Professional Licensing", "Career Development"],
    faqs: [
      { question: "What band score can I achieve?", answer: "Results depend on individual effort and English proficiency. Our trainers work with each student to maximize their score." },
      { question: "How long is the course?", answer: "Standard preparation is 40 hours but can be extended based on individual needs." },
    ],
  },
  {
    id: "oet",
    slug: "oet",
    title: "OET Preparation",
    shortTitle: "OET",
    category: "Languages & English",
    categorySlug: "languages-english",
    description:
      "Occupational English Test preparation for healthcare professionals. Covers Listening, Reading, Writing, and Speaking modules with healthcare-specific contexts.",
    shortDescription: "OET preparation designed specifically for healthcare professionals.",
    duration: "35 Hours",
    modes: ["Classroom", "Online"],
    certification: "OET",
    level: "Intermediate",
    featured: false,
    icon: "",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    curriculumImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
    color: "yellow",
    curriculum: [
      { title: "Module 1: OET Overview", topics: ["Test format", "Healthcare vocabulary", "Assessment criteria"] },
      { title: "Module 2: Listening & Reading", topics: ["Healthcare contexts", "Question types", "Practice"] },
      { title: "Module 3: Writing", topics: ["Referral letters", "Case notes", "Professional writing"] },
      { title: "Module 4: Speaking", topics: ["Role plays", "Communication skills", "Mock assessments"] },
    ],
    careerOpportunities: ["Nurses", "Doctors", "Pharmacists", "Allied Healthcare Professionals"],
    faqs: [],
  },

  // ── Project Management ──
  {
    id: "pmp",
    slug: "pmp",
    title: "PMP Certification",
    shortTitle: "PMP",
    category: "Project Management",
    categorySlug: "project-management",
    description:
      "PMP exam preparation aligned with PMI's PMBOK Guide. Comprehensive coverage of project management fundamentals, process groups, knowledge areas, and agile practices.",
    shortDescription: "PMI-aligned PMP exam preparation covering PMBOK and agile frameworks.",
    duration: "35 Hours",
    modes: ["Classroom", "Online"],
    certification: "PMP (PMI)",
    level: "Advanced",
    featured: true,
    icon: "",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
    curriculumImage: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1974&auto=format&fit=crop",
    color: "sky",
    curriculum: [
      { title: "Module 1: Project Foundations", topics: ["PMBOK overview", "Project life cycle", "Project charter"] },
      { title: "Module 2: Planning", topics: ["Scope management", "Schedule management", "Cost management"] },
      { title: "Module 3: Execution & Control", topics: ["Quality management", "Risk management", "Change control"] },
      { title: "Module 4: Agile & Hybrid", topics: ["Agile frameworks", "Scrum", "Hybrid approaches"] },
      { title: "Module 5: PMP Exam Prep", topics: ["Practice questions", "Exam strategies", "Mock exams"] },
    ],
    careerOpportunities: ["Project Manager", "Program Manager", "PMO Analyst", "Agile Coach"],
    faqs: [
      { question: "Is work experience required for PMP?", answer: "PMI requires documented project management experience. Contact us for eligibility details." },
    ],
  },

  // ── Digital Marketing ──
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    description:
      "Complete digital marketing training covering SEO, Google Ads, social media marketing, content marketing, email marketing, and analytics.",
    shortDescription: "Master SEO, Google Ads, social media, and digital marketing analytics.",
    duration: "45 Hours",
    modes: ["Classroom", "Online"],
    certification: "Google Digital Marketing",
    level: "Beginner",
    featured: true,
    icon: "",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
    curriculumImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    color: "pink",
    curriculum: [
      { title: "Module 1: Digital Marketing Foundations", topics: ["Digital ecosystem", "Customer journey", "Marketing funnel"] },
      { title: "Module 2: SEO", topics: ["On-page SEO", "Off-page SEO", "Technical SEO"] },
      { title: "Module 3: Google Ads", topics: ["Search campaigns", "Display ads", "Campaign optimization"] },
      { title: "Module 4: Social Media Marketing", topics: ["Platform strategies", "Content creation", "Paid social"] },
      { title: "Module 5: Analytics", topics: ["Google Analytics 4", "Reporting", "Performance analysis"] },
    ],
    careerOpportunities: ["Digital Marketing Specialist", "SEO Analyst", "Social Media Manager", "PPC Specialist"],
    faqs: [],
  },

  // ── Accounting ──
  {
    id: "quickbooks",
    slug: "quickbooks",
    title: "QuickBooks",
    shortTitle: "QuickBooks",
    category: "Accounting",
    categorySlug: "accounting",
    description:
      "Comprehensive QuickBooks training for small business accounting, covering setup, invoicing, payroll, financial reports, and bank reconciliation.",
    shortDescription: "Complete QuickBooks accounting software training for professionals.",
    duration: "25 Hours",
    modes: ["Classroom", "Online"],
    level: "Beginner",
    featured: false,
    icon: "",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    curriculumImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    color: "emerald",
    curriculum: [
      { title: "Module 1: QuickBooks Setup", topics: ["Company setup", "Chart of accounts", "Preferences"] },
      { title: "Module 2: Daily Operations", topics: ["Invoicing", "Payments", "Expenses"] },
      { title: "Module 3: Reports & Payroll", topics: ["Financial reports", "Payroll basics", "Bank reconciliation"] },
    ],
    careerOpportunities: ["Accountant", "Bookkeeper", "Finance Officer", "Small Business Manager"],
    faqs: [],
  },

  // ── Advanced Excel ──
  {
    id: "advanced-excel",
    slug: "advanced-excel",
    title: "Advanced Excel",
    shortTitle: "Advanced Excel",
    category: "IT & Networking",
    categorySlug: "it-networking",
    description:
      "Advanced Microsoft Excel training covering formulas, pivot tables, data analysis, macros, VBA basics, and business reporting dashboards.",
    shortDescription: "Advanced Excel formulas, pivot tables, dashboards, and VBA automation.",
    duration: "20 Hours",
    modes: ["Classroom", "Online"],
    level: "Intermediate",
    featured: true,
    icon: "",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
    curriculumImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
    color: "teal",
    curriculum: [
      { title: "Module 1: Advanced Formulas", topics: ["VLOOKUP, XLOOKUP", "IF & nested functions", "Array formulas"] },
      { title: "Module 2: Pivot Tables & Charts", topics: ["PivotTables", "PivotCharts", "Slicers & timelines"] },
      { title: "Module 3: Dashboards & Automation", topics: ["Dashboard design", "Macros", "VBA basics"] },
    ],
    careerOpportunities: ["Data Analyst", "Finance Analyst", "Business Analyst", "Operations Manager"],
    faqs: [],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
export const featuredCourses = courses.filter((c) => c.featured);

export const getCourseBySlug = (slug: string): Course | undefined =>
  courses.find((c) => c.slug === slug);

export const getCoursesByCategory = (categorySlug: string): Course[] =>
  courses.filter((c) => c.categorySlug === categorySlug);
