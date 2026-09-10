export interface Testimonial {
  id: string;
  name: string;
  course: string;
  rating: number;
  text: string;
  avatar?: string;
  outcome?: string;
}

// NOTE: Placeholder testimonials — replace with real student testimonials
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmed Al Mansoori",
    course: "Medical Coding — CPC",
    rating: 5,
    text: "The medical coding course at Annex was thorough and practical. The trainer explained complex coding concepts clearly and the exam preparation sessions were extremely helpful.",
    outcome: "Now working as a Medical Coder",
  },
  {
    id: "t2",
    name: "Priya Sharma",
    course: "IELTS Preparation",
    rating: 5,
    text: "I achieved an overall band score of 7.5 after completing the IELTS preparation course. The trainers provided individual attention and the mock tests closely matched the real exam.",
    outcome: "Achieved Band 7.5 in IELTS",
  },
  {
    id: "t3",
    name: "Mohammed Al Rashidi",
    course: "AutoCAD 2D Drafting",
    rating: 5,
    text: "Excellent training environment and experienced trainer. I went from zero knowledge to confidently producing industry-standard drawings. Highly recommended for engineering professionals.",
    outcome: "CAD Drafter at a leading firm",
  },
  {
    id: "t4",
    name: "Sarah Johnson",
    course: "Digital Marketing",
    rating: 5,
    text: "The digital marketing course was comprehensive and up to date with current industry practices. The Google Ads and SEO modules were particularly valuable for my career.",
    outcome: "Digital Marketing Specialist",
  },
  {
    id: "t5",
    name: "Rahul Menon",
    course: "Python Programming",
    rating: 5,
    text: "Started with no programming knowledge and now I'm building my own applications. The course structure was excellent — logical progression from basics to advanced topics.",
    outcome: "Junior Python Developer",
  },
  {
    id: "t6",
    name: "Fatima Al Hashemi",
    course: "Graphic Design",
    rating: 5,
    text: "The Adobe Creative Suite training transformed my design skills. Learning Photoshop, Illustrator, and InDesign together gave me a complete professional design toolkit.",
    outcome: "Freelance Graphic Designer",
  },
];
