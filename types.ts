
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  highlights: string[];
  liveUrl?: string;
}

export interface PipelineStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  period: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
