import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  contact: {
    name: 'Arthur Hardman Borges',
    location: 'São Paulo, Brazil',
    phone: '+55 11 98103-2927',
    email: 'arthur@hardman.com.br',
    linkedin: 'https://www.linkedin.com/in/arthur-hardman-borges/',
    github: 'https://github.com/Thukera',
  },

  tagline: {
    en: 'Senior Software & Solutions Engineer | Contact Center & Telecom Specialist',
    pt: 'Engenheiro de Software & Soluções Sênior | Especialista em Contact Center & Telecom',
  },

  summary: {
    en: 'Senior Software and Solutions Engineer specialized in contact center platforms and telecommunications systems. Positioned at the intersection of software development and solution architecture, I design and implement end-to-end technical solutions for customer interaction platforms, with deep expertise in NICE CXone, Avaya ecosystems, and omnichannel integrations.\n\nMy approach combines full-stack development capabilities with solution engineering mindset—I don\'t just write code, I architect scalable solutions. From building custom integrations and middleware to automating complex workflows and implementing cognitive BOT solutions, I bridge the gap between business requirements and technical implementation. I specialize in system integrations, API-driven architectures, and designing robust backend solutions using Java/Spring Boot, while maintaining strong frontend skills in React and TypeScript.\n\nAs a technical leader and knowledge advocate, I actively mentor teams, conduct workshops, and serve as the primary liaison between business stakeholders and technical teams. I translate complex requirements into practical, scalable solutions while ensuring alignment with enterprise architecture standards. My expertise spans the full solution lifecycle—from POC design and MVP implementation to production deployment, monitoring, and continuous optimization.\n\nI thrive in environments that demand both technical depth and strategic thinking, seeking opportunities to work on large-scale international projects that challenge my skills in solution architecture, system integration, and digital transformation.',
    pt: 'Sou um Engenheiro de Software e Soluções Sênior especializado em plataformas de contact center e sistemas de telecomunicações. Posicionado na interseção entre desenvolvimento de software e arquitetura de soluções, projeto e implemento soluções técnicas end-to-end para plataformas de interação com clientes, com profunda expertise em NICE CXone, ecossistemas Avaya e integrações omnichannel.\n\nMinha abordagem combina capacidades de desenvolvimento full-stack com mentalidade de engenharia de soluções—não apenas escrevo código, arquiteto soluções escaláveis. Desde a construção de integrações customizadas e middleware até a automação de fluxos complexos e implementação de soluções cognitivas de BOT, faço a ponte entre requisitos de negócio e implementação técnica. Sou especialista em integrações de sistemas, arquiteturas orientadas a API e design de soluções backend robustas usando Java/Spring Boot, mantendo fortes habilidades frontend em React e TypeScript.\n\nComo líder técnico e defensor do conhecimento, ativamente mentoro equipes, conduzo workshops e atuo como principal elo entre stakeholders de negócio e equipes técnicas. Traduzo requisitos complexos em soluções práticas e escaláveis, garantindo alinhamento com padrões de arquitetura empresarial. Minha expertise abrange o ciclo completo de soluções—desde design de POC e implementação de MVP até deploy em produção, monitoramento e otimização contínua.\n\nProspero em ambientes que demandam tanto profundidade técnica quanto pensamento estratégico, buscando oportunidades de trabalhar em projetos internacionais de grande escala que desafiem minhas habilidades em arquitetura de soluções, integração de sistemas e transformação digital.',
  },

  experience: [
    {
      id: 'exp-1',
      role: {
        en: 'System Specialist / Solutions Engineer',
        pt: 'Especialista de Sistemas / Engenheiro de Soluções',
      },
      company: 'Rede D\'or São Luiz',
      location: 'São Paulo - SP',
      period: {
        start: 'Nov 2024',
        end: 'Present',
      },
      current: true,
      description: {
        en: 'Act as Solutions Engineer for the NICE CxOne omnichannel platform, architecting and implementing end-to-end contact center solutions. Specialize in designing and developing IVR flows, REST API integrations, cognitive BOT implementations, and omnichannel orchestration for digital channels (chat, email, social media). Serve as the technical bridge between business stakeholders, external partners, and development teams—translating complex business requirements into scalable technical architectures. Lead solution design through POCs and MVPs, create comprehensive technical documentation (system topologies, integration diagrams, implementation timelines), and conduct workshops to drive platform adoption and team enablement. Provide architectural guidance and hands-on development support, ensuring solutions align with enterprise standards while meeting performance and scalability requirements.',
        pt: 'Atuo como Engenheiro de Soluções para a plataforma omnichannel NICE CxOne, arquitetando e implementando soluções end-to-end de contact center. Especializado em projetar e desenvolver fluxos de IVR, integrações REST API, implementações de BOT cognitivo e orquestração omnichannel para canais digitais (chat, email, redes sociais). Sirvo como ponte técnica entre stakeholders de negócio, parceiros externos e equipes de desenvolvimento—traduzindo requisitos complexos de negócio em arquiteturas técnicas escaláveis. Lidero o design de soluções através de POCs e MVPs, crio documentação técnica abrangente (topologias de sistema, diagramas de integração, cronogramas de implementação) e conduzo workshops para impulsionar a adoção da plataforma e capacitação da equipe. Forneço orientação arquitetural e suporte prático de desenvolvimento, garantindo que as soluções estejam alinhadas com padrões empresariais enquanto atendem requisitos de performance e escalabilidade.',
      },
      technologies: ['NICE CxOne', 'IVR Studio', 'REST API', 'Cognitive BOT', 'Omnichannel', 'Solution Architecture'],
    },
    {
      id: 'exp-2',
      role: {
        en: 'Senior Full-Stack Developer / Solutions Engineer',
        pt: 'Desenvolvedor Full-Stack Sênior / Engenheiro de Soluções',
      },
      company: 'A5 Solutions',
      location: 'São Paulo - SP',
      period: {
        start: 'Jan 2023',
        end: 'Nov 2024',
      },
      description: {
        en: 'Led end-to-end solution design and implementation for contact center platforms, specializing in system integrators, API connectors, IVR service channels, and digital transformation projects. Architected and developed analytical portals for real-time application monitoring, process automation, and performance optimization. Served as technical lead for integration projects with CRM systems, payment gateways, and third-party APIs. Designed scalable middleware solutions using Java/Spring Boot for backend services and React/TypeScript for administrative portals. Acted as solution architect for customer projects, conducting technical workshops, translating business requirements into technical specifications, and providing architectural guidance to development teams. Mentored junior developers and fostered a culture of innovation, code quality, and continuous improvement.',
        pt: 'Liderei design e implementação de soluções end-to-end para plataformas de contact center, especializado em integradores de sistemas, conectores API, canais de atendimento IVR e projetos de transformação digital. Arquitetei e desenvolvi portais analíticos para monitoramento de aplicações em tempo real, automação de processos e otimização de performance. Atuei como líder técnico em projetos de integração com sistemas CRM, gateways de pagamento e APIs de terceiros. Projetei soluções de middleware escaláveis usando Java/Spring Boot para serviços backend e React/TypeScript para portais administrativos. Agi como arquiteto de soluções para projetos de clientes, conduzindo workshops técnicos, traduzindo requisitos de negócio em especificações técnicas e fornecendo orientação arquitetural para equipes de desenvolvimento. Mentoreei desenvolvedores júnior e promovi uma cultura de inovação, qualidade de código e melhoria contínua.',
      },
      technologies: ['Java', 'Spring Boot', 'NICE CxOne', 'BotBuilder', 'REST API', 'AWS', 'Docker', 'Solution Design', 'System Integration'],
    },
    {
      id: 'exp-3',
      role: {
        en: 'Mid-Level Software Developer',
        pt: 'Desenvolvedor de Software Pleno',
      },
      company: 'A5 Solutions',
      location: 'São Paulo - SP',
      period: {
        start: 'Jan 2020',
        end: 'Jan 2023',
      },
      description: {
        en: 'Developed and maintained IVRs using Java (AVAYA IVR) and Snippet (NICE IVR), integrating databases, consulting external APIs, and building middleware for Tomcat servers and AWS environments. Designed and optimized databases, automated data extraction and transformation processes, and enhanced system performance. Worked closely with cross-functional teams to deliver scalable solutions aligned with business objectives.',
        pt: 'Desenvolvi e mantive IVRs usando Java (AVAYA IVR) e Snippet (NICE IVR), integrando bancos de dados, consultando APIs externas e construindo middleware para servidores Tomcat e ambientes AWS. Projetei e otimizei bancos de dados, automatizei processos de extração e transformação de dados e melhorei a performance do sistema. Trabalhei em estreita colaboração com equipes multifuncionais para entregar soluções escaláveis alinhadas aos objetivos de negócio.',
      },
      technologies: ['Java', 'IVR', 'NICE CxOne', 'Avaya Orchestration Designer', 'MySQL', 'PostgreSQL', 'Tomcat', 'AWS'],
    },
    {
      id: 'exp-4',
      role: {
        en: 'Technical Support Engineer',
        pt: 'Engenheiro de Suporte Técnico',
      },
      company: 'A5 Solutions / Avaya',
      location: 'São Paulo - SP',
      period: {
        start: 'Sep 2014',
        end: 'Dec 2019',
      },
      description: {
        en: 'Specialized in advanced troubleshooting for the Avaya platform, including Predictive Dialers and IVR application servers. Acted as the Single Point of Contact (SPOC) for real-time bridge conferences between customers and specialists, resolving complex technical issues in English and Portuguese. Developed and led Technical Knowledge Transfer (TKT) sessions, coaching team members to enhance technical expertise and maintain high service quality.',
        pt: 'Especializado em troubleshooting avançado para a plataforma Avaya, incluindo Predictive Dialers e servidores de aplicação IVR. Atuei como Ponto Único de Contato (SPOC) para conferências bridge em tempo real entre clientes e especialistas, resolvendo problemas técnicos complexos em inglês e português. Desenvolvi e conduzi sessões de Transferência de Conhecimento Técnico (TKT), treinando membros da equipe para aprimorar expertise técnica e manter alta qualidade de serviço.',
      },
      technologies: ['Avaya', 'IVR', 'Predictive Dialers', 'Troubleshooting', 'SPOC'],
    },
  ],

  caseStudies: [
    {
      id: 'case-1',
      title: {
        en: 'First-of-its-kind NICE Implementation in Brazil',
        pt: 'Primeira Implementação NICE de seu Tipo no Brasil',
      },
      industry: {
        en: 'Insurance',
        pt: 'Seguros',
      },
      description: {
        en: 'I led the integration architecture for one of NICE\'s first major implementations in Brazil, for a large national insurance company. I designed a Java middleware hosted on AWS that centralized all REST integrations and decoupled the NICE platform from the client\'s internal systems, along with an analytics dashboard tracking the full customer journey.',
        pt: 'Liderei a arquitetura de integração para uma das primeiras grandes implementações da NICE no Brasil, para uma grande seguradora nacional. Projetei um middleware Java hospedado na AWS que centralizou todas as integrações REST e desacoplou a plataforma NICE dos sistemas internos do cliente, juntamente com um dashboard analítico rastreando toda a jornada do cliente.',
      },
      result: {
        en: 'The architecture became the standard for future projects, and the dashboard evolved into a multi-tenant product now used by several major corporate clients.',
        pt: 'A arquitetura tornou-se o padrão para projetos futuros, e o dashboard evoluiu para um produto multi-tenant agora usado por vários grandes clientes corporativos.',
      },
      tags: ['Solution Architecture', 'Java', 'AWS', 'REST APIs', 'Multi-tenant'],
    },
    {
      id: 'case-2',
      title: {
        en: 'Technical Leadership at Scale',
        pt: 'Liderança Técnica em Escala',
      },
      industry: {
        en: 'Retail',
        pt: 'Varejo',
      },
      description: {
        en: 'In my first role as Tech Lead, I led Discovery and delivery of an omnichannel solution for one of Brazil\'s largest retail chains, covering financial services, e-commerce, logistics, and thousands of daily interactions. I coordinated a development team, ran code reviews, and worked directly on the most critical integrations.',
        pt: 'Em minha primeira função como Tech Lead, liderei Discovery e entrega de uma solução omnichannel para uma das maiores redes de varejo do Brasil, cobrindo serviços financeiros, e-commerce, logística e milhares de interações diárias. Coordenei uma equipe de desenvolvimento, realizei revisões de código e trabalhei diretamente nas integrações mais críticas.',
      },
      result: {
        en: 'Successful delivery of one of the company\'s largest operations, establishing my role as a technical leader on large-scale projects.',
        pt: 'Entrega bem-sucedida de uma das maiores operações da empresa, estabelecendo meu papel como líder técnico em projetos de grande escala.',
      },
      tags: ['Technical Leadership', 'Team Management', 'Discovery', 'Code Review'],
    },
    {
      id: 'case-3',
      title: {
        en: 'Real-time Performance Optimization',
        pt: 'Otimização de Performance em Tempo Real',
      },
      industry: {
        en: 'Retail / Telecom',
        pt: 'Varejo / Telecom',
      },
      description: {
        en: 'The biggest technical challenge of my career: the predictive dialer in use had an average agent idle time of nearly 90 seconds. I designed and built a Java connector using concurrent, multi-threaded processing to sync a third-party predictive engine with the existing infrastructure in real time — with zero disruption to the agent experience.',
        pt: 'O maior desafio técnico da minha carreira: o discador preditivo em uso tinha um tempo médio de ociosidade do agente de quase 90 segundos. Projetei e construí um conector Java usando processamento concorrente e multi-thread para sincronizar um mecanismo preditivo de terceiros com a infraestrutura existente em tempo real — sem nenhuma interrupção na experiência do agente.',
      },
      result: {
        en: 'Idle time dropped from ~90s to under 30s. The solution remains in production today.',
        pt: 'O tempo de ociosidade caiu de ~90s para menos de 30s. A solução permanece em produção hoje.',
      },
      tags: ['Performance Engineering', 'Concurrency', 'SIP', 'Troubleshooting'],
    },
    {
      id: 'case-4',
      title: {
        en: 'Pioneering Conversational AI Rollout',
        pt: 'Implementação Pioneira de IA Conversacional',
      },
      industry: {
        en: 'Healthcare',
        pt: 'Saúde',
      },
      description: {
        en: 'I was selected for direct training with the vendor\'s specialists to lead the first implementation of a cognitive Bot platform in Brazil, for a major healthcare company — while building the largest development team I had ever coordinated.',
        pt: 'Fui selecionado para treinamento direto com os especialistas do fornecedor para liderar a primeira implementação de uma plataforma de Bot cognitivo no Brasil, para uma grande empresa de saúde — enquanto construía a maior equipe de desenvolvimento que já coordenei.',
      },
      result: {
        en: 'Successful implementation, strengthening my technical relationship with the vendor and leading to further joint training and initiatives.',
        pt: 'Implementação bem-sucedida, fortalecendo meu relacionamento técnico com o fornecedor e levando a mais treinamentos e iniciativas conjuntas.',
      },
      tags: ['Conversational AI', 'Fast Learning', 'Team Leadership', 'Innovation'],
    },
    {
      id: 'case-5',
      title: {
        en: 'On-site Technical Consulting with a Major Financial Institution',
        pt: 'Consultoria Técnica On-site com uma Grande Instituição Financeira',
      },
      industry: {
        en: 'Banking',
        pt: 'Bancário',
      },
      description: {
        en: 'I acted as the technical point of reference for a service platform evolution project with one of Brazil\'s largest banks, traveling to work directly with the client\'s teams, leading discovery sessions, and translating business needs into technical solutions.',
        pt: 'Atuei como ponto de referência técnica para um projeto de evolução de plataforma de serviço com um dos maiores bancos do Brasil, viajando para trabalhar diretamente com as equipes do cliente, liderando sessões de discovery e traduzindo necessidades de negócio em soluções técnicas.',
      },
      result: {
        en: 'Stronger cross-team communication, reduced ambiguity during development, and deliverables better aligned with business needs.',
        pt: 'Comunicação mais forte entre equipes, ambiguidade reduzida durante o desenvolvimento e entregas mais alinhadas com as necessidades de negócio.',
      },
      tags: ['Stakeholder Management', 'Discovery', 'Technical Consulting'],
    },
    {
      id: 'case-6',
      title: {
        en: 'Large-scale Legacy Platform Migration',
        pt: 'Migração de Plataforma Legada em Grande Escala',
      },
      industry: {
        en: 'Healthcare / Insurance',
        pt: 'Saúde / Seguros',
      },
      description: {
        en: 'Following a corporate acquisition, I technically led the full migration of a service operation from a legacy platform (Avaya) to NICE CXone — including discovery, reverse-engineering existing flows, and technical governance over external vendors\' work.',
        pt: 'Após uma aquisição corporativa, liderei tecnicamente a migração completa de uma operação de serviço de uma plataforma legada (Avaya) para NICE CXone — incluindo discovery, engenharia reversa de fluxos existentes e governança técnica sobre o trabalho de fornecedores externos.',
      },
      result: {
        en: 'Migration of 20+ IVRs and digital channels, for an operation of nearly a thousand agents. I remain the technical reference for this environment today.',
        pt: 'Migração de mais de 20 IVRs e canais digitais, para uma operação de quase mil agentes. Permaneço a referência técnica para este ambiente hoje.',
      },
      tags: ['Legacy Migration', 'Vendor Management', 'Technical Governance', 'Reverse Engineering'],
    },
    {
      id: 'case-7',
      title: {
        en: 'Modernizing the Agent Experience (Internal Product)',
        pt: 'Modernizando a Experiência do Agente (Produto Interno)',
      },
      industry: {
        en: 'Healthcare',
        pt: 'Saúde',
      },
      description: {
        en: 'I identified that agents had to constantly switch between disconnected systems during service calls (~1,200 agents affected). I architected and built, from scratch, a full-stack solution (middleware + frontend on AWS) that directly integrated the scheduling system into the service environment.',
        pt: 'Identifiquei que os agentes tinham que alternar constantemente entre sistemas desconectados durante chamadas de serviço (~1.200 agentes afetados). Arquitetei e construí, do zero, uma solução full-stack (middleware + frontend na AWS) que integrou diretamente o sistema de agendamento ao ambiente de serviço.',
      },
      result: {
        en: 'A significant reduction in Average Handling Time (AHT), improved operational experience, and ongoing expansion to new company units.',
        pt: 'Uma redução significativa no Tempo Médio de Atendimento (TMA), experiência operacional melhorada e expansão contínua para novas unidades da empresa.',
      },
      tags: ['Product Ownership', 'Full-stack Architecture', 'AWS', 'UX'],
    },
    {
      id: 'case-8',
      title: {
        en: 'Strategic AI Technology Evaluation',
        pt: 'Avaliação Estratégica de Tecnologia de IA',
      },
      industry: {
        en: 'Healthcare',
        pt: 'Saúde',
      },
      description: {
        en: 'I act as the technical specialist evaluating conversational AI platforms for service automation, assessing architecture, integrations, security, and compatibility with the existing environment — serving as the bridge between international vendors and internal teams.',
        pt: 'Atuo como especialista técnico avaliando plataformas de IA conversacional para automação de serviços, avaliando arquitetura, integrações, segurança e compatibilidade com o ambiente existente — servindo como ponte entre fornecedores internacionais e equipes internas.',
      },
      result: {
        en: 'Structured comparison of different technology approaches, supporting more informed investment decisions.',
        pt: 'Comparação estruturada de diferentes abordagens tecnológicas, apoiando decisões de investimento mais informadas.',
      },
      tags: ['Technology Assessment', 'Conversational AI', 'Solution Architecture'],
    },
  ],

  projects: [
    {
      id: 'proj-1',
      title: {
        en: 'My Finances APP - Personal Project',
        pt: 'Meu APP de Finanças',
      },
      description: {
        en: 'Personal finance management application built with modern web technologies. Features include expense tracking, budget management, financial reports, and data visualization.',
        pt: 'Aplicação de gestão financeira pessoal construída com tecnologias web modernas. Funcionalidades incluem rastreamento de despesas, gerenciamento de orçamento, relatórios financeiros e visualização de dados.',
      },
      image: '/projects/finances.mp4',
      url: 'https://finances.hardman.app.br',
      tags: ['Java', 'React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'PWA', 'REST API', 'Bulma'],
      isConfidential: false,
      highlights: [
        {
          en: 'Real-time expense tracking',
          pt: 'Rastreamento de despesas em tempo real',
        },
        {
          en: 'Interactive financial dashboards',
          pt: 'Dashboards financeiros interativos',
        },
        {
          en: 'Budget planning and alerts',
          pt: 'Planejamento de orçamento e alertas',
        },
      ],
    },
    {
      id: 'proj-2',
      title: {
        en: 'Music Store - University Project',
        pt: 'Loja de Música - Projeto Universitário',
      },
      description: {
        en: 'E-commerce web application for musical instruments and equipment built with Spring Boot. Features product catalog with guitars, basses, amplifiers, and accessories, user registration, shopping cart functionality, and basic sales management.',
        pt: 'Aplicação web e-commerce para instrumentos musicais e equipamentos construída com Spring Boot. Apresenta catálogo de produtos com guitarras, baixos, amplificadores e acessórios, cadastro de usuários, funcionalidade de carrinho de compras e gerenciamento básico de vendas.',
      },
      image: '/projects/musicstore.mp4',
      url: 'https://music-store.hardman.app.br',
      tags: ['Java', 'Spring Boot', 'Hibernate', 'JPA', 'Thymeleaf', 'H2 Database', 'Maven', 'Bootstrap'],
      isConfidential: false,
      highlights: [
        {
          en: 'Product catalog with categories and subcategories',
          pt: 'Catálogo de produtos com categorias e subcategorias',
        },
        {
          en: 'Shopping cart system with price calculation',
          pt: 'Sistema de carrinho de compras com cálculo de preços',
        },
        {
          en: 'Product and inventory management',
          pt: 'Gerenciamento de produtos e estoque',
        },
        {
          en: 'Sales tracking and history',
          pt: 'Rastreamento e histórico de vendas',
        },
      ],
    },
    {
      id: 'proj-3',
      title: {
        en: 'Digital Agenda Platform - Enterprise Project',
        pt: 'Plataforma de Agenda Digital',
      },
      description: {
        en: 'Enterprise-grade scheduling and appointment management system designed for healthcare and service industries. Features comprehensive booking workflows, resource management, and analytics dashboards. Built with scalability and security as core priorities.',
        pt: 'Sistema de agendamento e gerenciamento de compromissos de nível empresarial projetado para setores de saúde e serviços. Possui fluxos abrangentes de reserva, gerenciamento de recursos e dashboards analíticos. Construído com escalabilidade e segurança como prioridades centrais.',
      },
      image: '/projects/zenkai.mp4',
      isConfidential: true,
      tags: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PWA','PostgreSQL', 'AWS', 'Docker', 'REST API', 'Tailwind CSS'],
      highlights: [
        {
          en: 'Multi-tenant architecture for healthcare providers',
          pt: 'Arquitetura multi-tenant para provedores de saúde',
        },
        {
          en: 'Real-time appointment synchronization',
          pt: 'Sincronização de compromissos em tempo real',
        },
                {
          en: 'User registration and management',
          pt: 'Cadastro e gerenciamento de usuários',
        },
        {
          en: 'Advanced analytics and reporting',
          pt: 'Análises e relatórios avançados',
        },
      ],
    },
  ],

  skills: [
    {
      category: {
        en: 'Solution Architecture & Engineering',
        pt: 'Arquitetura & Engenharia de Soluções',
      },
      items: ['Solution Design', 'System Integration', 'API Architecture', 'POC/MVP Development', 'Technical Documentation', 'Stakeholder Management', 'Workshop Facilitation'],
    },
    {
      category: {
        en: 'Backend Development',
        pt: 'Desenvolvimento Backend',
      },
      items: ['Java', 'Spring Boot', 'Spring Data JPA', 'JWT', 'Maven', 'REST API', 'SOAP'],
    },
    {
      category: {
        en: 'Frontend Development',
        pt: 'Desenvolvimento Frontend',
      },
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'CSS', 'Tailwind CSS', 'Thymeleaf', 'Bulma', 'Bootstrap'],
    },
    {
      category: {
        en: 'Databases',
        pt: 'Bancos de Dados',
      },
      items: ['MySQL', 'PostgreSQL', 'Microsoft SQL Server'],
    },
    {
      category: {
        en: 'Cloud & DevOps',
        pt: 'Cloud & DevOps',
      },
      items: ['Docker', 'CI/CD', 'Git', 'Jenkins', 'AWS'],
    },
    {
      category: {
        en: 'Infrastructure & Networking',
        pt: 'Infraestrutura & Redes',
      },
      items: ['Linux', 'Windows Server', 'System Architecture'],
    },
    {
      category: {
        en: 'Telecommunications',
        pt: 'Telecomunicações',
      },
      items: ['IVR Development', 'Avaya Platform', 'NICE CxOne', 'Omnichannel Solutions', 'Predictive Dialers'],
    },
  ],

  education: [
    {
      id: 'edu-1',
      degree: {
        en: 'Technologist in Systems Analysis and Development',
        pt: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      },
      institution: 'Centro Universitário Senac',
      location: 'São Paulo - SP',
      period: {
        start: 'Jul 2016',
        end: 'Jul 2019',
      },
      description: {
        en: 'Higher Education in Systems Analysis and Development',
        pt: 'Ensino Superior em Análise e Desenvolvimento de Sistemas',
      },
    },
    {
      id: 'edu-2',
      degree: {
        en: 'English as a Second Language',
        pt: 'Inglês como Segunda Língua',
      },
      institution: 'Entry / Cultura Inglesa',
      location: 'Diadema - SP',
      period: {
        start: 'Jan 2009',
        end: 'Dec 2013',
      },
      description: {
        en: 'Complete training with all modules of the \'Entry\' institution. A patron of \'Cultura Inglesa\' focused on Business area.',
        pt: 'Treinamento completo com todos os módulos da instituição \'Entry\'. Convênio com \'Cultura Inglesa\' focado na área de Negócios.',
      },
    },
  ],

  certifications: [
    {
      id: 'cert-1',
      name: 'NICE inContact Core Certification',
      issuer: 'NICE',
    },
    {
      id: 'cert-2',
      name: 'Avaya Aura Communication Manager Administration',
      issuer: 'Avaya',
    },
    {
      id: 'cert-3',
      name: 'Avaya Aura Experience Portal and Proactive Outreach Manager',
      issuer: 'Avaya',
    },
    {
      id: 'cert-4',
      name: 'Avaya Orchestration Designer for Self Service - Fundamentals',
      issuer: 'Avaya',
    },
    {
      id: 'cert-5',
      name: 'Avaya Proactive Contact Basic and Advanced System Supervisor',
      issuer: 'Avaya',
    },
    {
      id: 'cert-6',
      name: 'Implementing and Supporting Avaya Aura Experience Portal and POM',
      issuer: 'Avaya',
    },
  ],

  languages: [
    {
      language: 'Portuguese',
      proficiency: {
        en: 'Native',
        pt: 'Nativo',
      },
    },
    {
      language: 'English',
      proficiency: {
        en: 'Proficient',
        pt: 'Proficiente',
      },
    },
  ],

  interests: [
    {
      en: 'Interested in pursuing a postgraduate degree or MBA to deepen expertise',
      pt: 'Interessado em cursar pós-graduação ou MBA para aprofundar expertise',
    },
    {
      en: 'Looking to work on international projects',
      pt: 'Buscando trabalhar em projetos internacionais',
    },
    {
      en: 'Passionate about music and playing different instruments, fostering creativity outside of work',
      pt: 'Apaixonado por música e por tocar diferentes instrumentos, promovendo criatividade fora do trabalho',
    },
  ],
};
