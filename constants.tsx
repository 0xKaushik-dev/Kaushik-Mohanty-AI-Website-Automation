
import { Project, PipelineStep, Service, Experience, FAQItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI-Generated Portfolio Website',
    category: 'Full Automation',
    description: 'A fully automated website built using an AI-powered workflow — from idea interpretation to live deployment.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    highlights: ['AI-driven structure', 'Automated UI generation', 'Cloud deployment', 'Fast load times'],
    liveUrl: 'https://ai-portfolio-demo.vercel.app'
  }
];

export const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: '1',
    title: 'Idea Input',
    description: 'Website requirements are provided in natural language.',
    icon: 'MessageSquare'
  },
  {
    id: '2',
    title: 'AI Processing',
    description: 'AI interprets the idea and generates website structure, content flow, and layout logic.',
    icon: 'Cpu'
  },
  {
    id: '3',
    title: 'Design Automation',
    description: 'Modern UI components, spacing systems, and responsive layouts are created automatically.',
    icon: 'Layers'
  },
  {
    id: '4',
    title: 'Code Management',
    description: 'Source code is structured and maintained using GitHub.',
    icon: 'Github'
  },
  {
    id: '5',
    title: 'Deployment',
    description: 'Websites are deployed instantly using Vercel.',
    icon: 'Zap'
  },
  {
    id: '6',
    title: 'Hosting',
    description: 'Final websites can be hosted on GoDaddy or Hostinger based on client needs.',
    icon: 'Globe'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'AI Website Generation',
    description: 'Websites generated using AI workflows for speed and consistency.',
    features: ['Instant Prototyping', 'Dynamic Layouts', 'SEO Optimized Content']
  },
  {
    id: '2',
    title: 'Automated Deployment',
    description: 'From code to live URL with zero manual hosting setup.',
    features: ['Vercel Integration', 'Edge Network Performance', 'Continuous Delivery']
  },
  {
    id: '3',
    title: 'Portfolio & Business Websites',
    description: 'Clean, modern websites optimized for individuals and startups.',
    features: ['Mobile First', 'High Conversion Design', 'Minimalist Aesthetics']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'AI Solutions Inc.',
    role: 'Lead Automation Engineer',
    description: 'Spearheading the transition from manual coding to AI-augmented development pipelines.',
    period: '2024 - Present'
  },
  {
    id: '2',
    company: 'WebFlow Automata',
    role: 'Product Designer',
    description: 'Defined the visual language for automated UI systems.',
    period: '2023 - 2024'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What does an AI Automation Specialist do?',
    answer: 'I design and build automated systems that streamline workflows, reduce manual effort, and improve efficiency using AI-driven tools and integrations.'
  },
  {
    question: 'What types of automation do you work on?',
    answer: 'I work on end-to-end automation pipelines, including task automation, AI workflows, API integrations, and cloud-based automation systems.'
  },
  {
    question: 'Do you build scalable solutions?',
    answer: 'Yes. All solutions are designed with scalability, performance, and long-term maintainability in mind.'
  },
  {
    question: 'Which tools and technologies do you use?',
    answer: 'I work with modern automation platforms, AI services, APIs, cloud infrastructure, and workflow orchestration tools.'
  },
  {
    question: 'Can you automate existing business processes?',
    answer: 'Absolutely. I analyze current workflows and transform them into efficient, automated systems with minimal disruption.'
  }
];
