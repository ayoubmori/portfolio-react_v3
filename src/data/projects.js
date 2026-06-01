import { images } from '../utils/images';

export const projectsData = [
  // ==========================================
  // TOP TIER (Production & Enterprise Grade)
  // ==========================================
  {
    title: 'CAN 2025 Morocco: Official Tournament Hub',
    description: 'A high-performance digital match center and real-time data dashboard for the 35th Africa Cup of Nations.',
    fullDescription: 'A next-generation digital platform designed as the Official Tournament Hub for CAN 2025. Bridging the gap between a standard sports news site and a high-end data dashboard, this platform delivers real-time group standings, knockout brackets, and match scheduling. It features a premium, theme-aware UI and is engineered for lightning-fast performance and seamless mobile-first user experiences.',
    image: 'images/can_website.webp', 
    tier: 'top',
    tags: ['Web Development'],
    techStack: {
      frontendCore: {
        mainTag: 'Frontend Architecture',
        description: 'Type-safe, component-driven client architecture optimized for speed and SEO.',
        subTags: ['React 18', 'TypeScript', 'Vite', 'React Router']
      },
      uiDesign: {
        mainTag: 'Design System & UI',
        description: 'Premium "Institutional" aesthetic with utility-first styling and theme-aware kinetic animations.',
        subTags: ['Tailwind CSS', 'shadcn/ui', 'CSS Keyframes']
      },
      dataArchitecture: {
        mainTag: 'Data State & Deployment',
        description: 'Efficient client-side data fetching and edge-network hosting.',
        subTags: ['SWR (Stale-While-Revalidate)', 'Vercel Edge', 'JSON Fallbacks']
      }
    },
    features: [
      'Dynamic Tournament Hub: Engineered a real-time data layer to instantly render group standings, knockout brackets, and live match statuses.',
      'Theme-Aware "Morocco Ignited" UI: Designed a premium visual language featuring dynamic CSS variables that transition animations between Light Mode (Atlas Green) and Dark Mode (Moroccan Red).',
      'Smart Data Fetching: Implemented SWR (Stale-While-Revalidate) hooks to ensure users always see fresh match data without requiring manual page reloads.',
      'Host Cities Interactive Experience: Built immersive, interactive explorations of the six host venues using WebP imagery with aspect-ratio locking to eliminate Cumulative Layout Shift (CLS).',
      'Automated FIFA Rankings: Integrated custom filtering logic to automatically highlight CAN 2025 qualified teams within global ranking tables.'
    ],
    challenges: [
      'Balancing a premium, animation-heavy interface ("The Official Touch") with strict web performance, SEO, and load-time requirements.',
      'Architecting a robust state management system to handle rapid, real-time sports data updates without causing excessive React re-renders.'
    ],
    github: '',
    demo: 'https://afcon25morocco.tech'
  },
  {
    title: 'Smart Presence Kiosk',
    description: 'An enterprise-grade AI attendance system using facial recognition, liveness detection, and secure QR code fallbacks.',
    fullDescription: 'An enterprise-grade, asynchronous AI attendance system built with Python. It utilizes DeepFace for facial recognition and OpenCV for anti-spoofing (liveness detection). The system features a native desktop Kiosk app, a real-time web dashboard for managers, and a robust FastAPI backend. If facial recognition yields low confidence due to lighting or other factors, it seamlessly triggers a secure, expiring JWT QR Code fallback sent via email.',
    image: images.projects.kiosk, 
    tier: 'top',
    tags: ['AI / Computer Vision'],
    techStack: {
      aiVision: {
        mainTag: 'Computer Vision & AI',
        description: 'Vector-based facial recognition and anti-spoofing detection.',
        subTags: ['DeepFace', 'OpenCV', 'Facenet Embeddings']
      },
      backend: {
        mainTag: 'Backend Architecture',
        description: 'Asynchronous API managing database interactions, token verification, and email dispatch.',
        subTags: ['FastAPI', 'SQLModel', 'SQLite', 'JWT', 'Brevo API']
      },
      frontend: {
        mainTag: 'Kiosk & Dashboard UI',
        description: 'Hardware-connected desktop app and real-time manager dashboard.',
        subTags: ['CustomTkinter', 'HTML/JS']
      }
    },
    features: [
      'Lightning-Fast Face Matching: Utilizes a vector database with Facenet embeddings to compare live faces in milliseconds, eliminating slow iterative loops.',
      'Anti-Spoofing (Liveness Detection): Prevents fraudulent check-ins via photos or screens by analyzing blur, edges, and color saturation.',
      'Secure QR Fallback: Automatically prompts users and emails an expiring JWT QR code if the AI confidence threshold drops below acceptable limits.',
      'Native Kiosk UI: Built a dark-mode desktop app with CustomTkinter to connect directly to physical USB webcams, bypassing browser permission hurdles.',
      'Real-Time Web Dashboard: Live HTML/JS dashboard allowing managers to monitor asynchronous check-ins and check-outs globally.'
    ],
    challenges: [
      'Overcoming poor lighting and low-confidence facial scans by engineering a seamless, secure QR code fallback loop.',
      'Optimizing face-matching speed by transitioning from standard comparisons to vector embeddings.',
      'Connecting physical hardware (webcams) reliably without relying on browser-based APIs.'
    ],
    github: 'https://github.com/ayoubmori/presence_system',
    demo: ''
  },
  {
    title: 'Auto Job Applicator: Mission Control',
    description: 'A self-hosted web app that automates job applications using Google Gemini AI, featuring an interactive dashboard and live analytics.',
    fullDescription: 'A personal "Mission Control" web application designed to automate the tedious aspects of the job search. It leverages Google\'s Gemini AI to analyze job descriptions and craft highly tailored application emails. Built with a Flask backend and a secure local SQLite database, the platform features a dynamic dashboard for tracking application statuses, managing API keys securely, and visualizing application frequency through interactive charts.',
    image: 'images/job_app.png', 
    tier: 'top',
    tags: ['AI / LLMs', 'Automation'],
    techStack: {
      aiIntegration: {
        mainTag: 'AI & Automation',
        description: 'Automated email drafting and secure dispatch pipeline.',
        subTags: ['Gemini 2.5 API', 'Gmail API', 'OAuth 2.0']
      },
      backend: {
        mainTag: 'Backend & Database',
        description: 'Server-side rendering and secure local data management.',
        subTags: ['Python', 'Flask', 'SQLite', 'SQLAlchemy']
      },
      analytics: {
        mainTag: 'Data & Visualization',
        description: 'Interactive dashboard with real-time application tracking.',
        subTags: ['Pandas', 'Chart.js', 'Jinja2']
      }
    },
    features: [
      'AI-Powered Email Generation: Integrates the Gemini 2.5 Flash model to analyze complex job descriptions and automatically draft highly personalized application emails.',
      'Automated Gmail Dispatch: Utilizes Google Cloud OAuth 2.0 credentials to securely authenticate and send customized emails directly from the user\'s local machine.',
      'Live Analytics Dashboard: Processes application data using Pandas and renders dynamic Chart.js visualizations to track application frequency across daily, weekly, and monthly filters.',
      'Secure Local Execution: Ensures total privacy by storing all CV links, application history, and secret API keys in a local, disconnected SQLite database.',
      'Interactive Job Management: Features a sleek UI with quick-view modals and live status updates (e.g., "Applied" to "Interviewing") that instantly reflect in the analytics engine.'
    ],
    challenges: [
      'Implementing secure OAuth 2.0 authentication flows to grant a local application access to the Gmail API without exposing user credentials.',
      'Engineering strict and dynamic system prompts for the Gemini API to ensure the generated emails remained professional and perfectly tailored regardless of the job description format.'
    ],
    github: 'https://github.com/ayoubmori/Gemini-Job-Applicator---V2',
    demo: ''
  },
  {
    title: 'BI & Data Mining System: "Comptoir"',
    description: 'An end-to-end Business Intelligence ecosystem and machine learning pipeline to optimize supply chain logistics and marketing strategies.',
    fullDescription: 'This project transitioned the operational (OLTP) "Comptoir" legacy environment into a robust analytical (OLAP) system. By engineering a complete ETL pipeline and deploying advanced data mining models, the system successfully extracts non-obvious patterns to identify supply chain bottlenecks and high-value cross-selling opportunities.',
    image: '/images/comptoir-dashboard.jpg', 
    tier: 'top',
    tags: ['Business Intelligence'],
    techStack: {
      dataEngineering: {
        mainTag: 'Data Architecture & ETL',
        description: 'Built a Star Schema designed to minimize query complexity and maximize performance for high-volume analysis.',
        subTags: ['SQL Server', 'Talend Open Studio', 'Data Warehousing']
      },
      machineLearning: {
        mainTag: 'Predictive Analytics & ML',
        description: 'Implemented clustering and association rule learning to extract actionable business insights.',
        subTags: ['Python', 'scikit-learn', 'pandas', 'mlxtend', 'networkx']
      },
      businessIntelligence: {
        mainTag: 'BI & Visualization',
        description: 'Designed interactive reporting and KPI tracking to monitor €1.27M in revenue.',
        subTags: ['Power BI', 'DAX']
      }
    },
    features: [
      'Developed a Star Schema data warehouse featuring calculated metrics like Delivery Delay and net revenue.',
      'Engineered strict ETL quality gates to filter anomalies, such as "Time Travel" records and missing shipment dates.',
      'Applied K-Means clustering (using the Elbow Method) to segment customers by logistical performance, identifying a "High-Risk" cluster averaging >22 days of delay.',
      'Executed Market Basket Analysis using the Apriori algorithm, discovering a cross-selling Lift of 7.03 between Sir Rodney\'s Scones and Maple Syrup.',
      'Mapped market dominance and logistical bottlenecks across 69 cities globally.'
    ],
    challenges: [
      'Redefining the definition of a "Basket" for the Apriori algorithm by engineering a composite key (Client + Purchase Date) to accurately capture true shopping sessions.',
      'Ensuring statistical integrity by cleaning legacy data that contained logical impossibilities (e.g., ShippedDate < OrderDate).'
    ],
    github: 'https://github.com/ayoubmori/your-repo-link', 
    demo: '' 
  },
  {
    title: 'Avito Car Price Demo API',
    description: 'A clean, production-style FastAPI backend demonstrating modern Python layered architecture with synthetic data generation.',
    fullDescription: 'Avito Car Price Demo API is a public demo vehicle platform built using clean architectural layers, strict validation schemas, and robust software design patterns to simulate a production-grade analytics system without external scraping overhead.',
    image: images.projects.pricePrediction, 
    tier: 'top',
    tags: ['Backend / APIs'],
    features: [
      'Asynchronous service layer decoupling API routing from business logic',
      'Pydantic schemas ensuring runtime data validation and strict input handling',
      'Automated synthetic engine seeding database tables with realistic mock localized datasets',
      'Abstract Base Classes (ABC) decoupling repository layers from concrete data providers',
      'Interactive OpenAPI Swagger UI documentation exposed directly at runtime'
    ],
    github: '',
    techStack: {
      frontend: {
        mainTag: 'API & Gateway Architecture',
        description: 'Layered backend engine built around high-throughput async processing and centralized configuration mappings.',
        subTags: ['Python 3.10+', 'FastAPI', 'Uvicorn', 'Pydantic v2', 'Python-multipart']
      },
      features: {
        mainTag: 'Data Architecture & Synthesis',
        description: 'Abstracted data layer powered by vectorized analysis and programmatic seed generation.',
        subTags: ['Pandas', 'Faker Suite', 'Repository Pattern', 'Factory Design Pattern', 'Unit Testing']
      }
    },
    challenges: [
      'Refactoring a live production scraper infrastructure into a decoupled, dependency-injected public framework while strictly preserving frontend data contracts.',
      'Enforcing clean separation of concerns by inserting Abstract Base Classes (ABC) as behavioral contracts between the API routes and the data access structures.',
      'Optimizing the synthetic engine to programmatically compute logical, structurally sound vehicle metrics (brands, locations, fuel types) across bulk relational outputs.'
    ]
  },

  // ==========================================
  // SECOND TIER (Tools & Dashboards)
  // ==========================================
  {
    title: 'Casabus Casablanca Scraper',
    description: 'A clean, production-ready Python package for harvesting, normalizing, and structuring public transit bus route and schedule matrices.',
    fullDescription: 'Casabus Casablanca Scraper transforms an exploratory collection of scripts into an enterprise-grade transit data parsing library, implementing sequence ordering, polyline encoding, and dual-strategy trip reconstruction.',
    image: images.projects.casabus, 
    tier: 'second',
    tags: ['Web Scraping'],
    features: [
      'Layered system architecture separating API client networking from serialization workflows',
      'Automated coordinate normalization and encoded string route geometry compression',
      'Dual-strategy trip reconstruction engine utilizing sequence arrays with automated endpoint fallback',
      'Extensive command-line interface (CLI) with runtime arguments for targeted data extraction',
      'Robust isolation test suite complete with modular conftest configurations and JSON network mock fixtures'
    ],
    github: 'https://github.com/ayoubmori/Used-Cars-Price-Prediction-API', 
    demo: '',   
    techStack: {
      frontend: {
        mainTag: 'Execution & Orchestration',
        description: 'A structured, lightweight executable package featuring robust error logging configurations and standard CLI tools.',
        subTags: ['Python 3.10+', 'Package CLI Module', 'JSON Stream Exporters', 'Environment Variables Management']
      },
      features: {
        mainTag: 'Transit Data Processing',
        description: 'Advanced data manipulation pipeline engineering raw public payloads into unified transit schemas.',
        subTags: ['Polyline Geometries', 'Deduplication Parsers', 'Pytest Fixtures Framework', 'Fallback Orchestrators']
      }
    },
    challenges: [
      'Refactoring a highly coupled, script-heavy workflow with mixed execution scopes into clearly isolated architectural boundaries.',
      'Designing a reliable schedule-building engine capable of cleanly reconstructing full trip vectors from granular stop data when target endpoints drop out.',
      'Implementing graceful concurrency throttling controls (custom delays and connection timeouts) to reliably execute bulk data harvesting sweeps.'
    ]
  },
  {
    title: 'Coffee Shop Sales Dashboard',
    description: 'An interactive dashboard visualizing coffee shop sales data to identify trends and best-selling products. Built using Power BI.',
    image: images.projects.coffeeShop,
    tier: 'second',
    tags: ['Business Intelligence'],
    github: 'https://github.com/ayoubmori/coffee-shop-site',
  },
  {
    title: 'MyScore App',
    description: 'A web application for tracking and visualizing academic scores and progress. Built with a focus on user-friendly data input and insightful analytics.',
    fullDescription: 'MyScore App is a comprehensive academic performance tracking system that helps students visualize and analyze their academic journey.',
    image: images.projects.myScore,
    tier: 'second',
    tags: ['Data Analysis', 'Web Development'],
    github: '',
    demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7209570700792115200/',
    techStack: {
      frontend: {
        mainTag: 'Frontend Development',
        description: 'Modern, responsive interface with interactive visualizations',
        subTags: ['Python','Streamlit','HTML5', 'CSS3', 'JavaScript ES6+', 'Chart.js']
      },
      features: {
        mainTag: 'Core Features',
        description: 'Comprehensive score tracking and analysis',
        subTags: ['Score Analytics', 'Progress Tracking', 'Performance Metrics']
      }
    },
    challenges: [
      'Implementing complex data visualization while maintaining optimal performance',
      'Creating an intuitive UX for data input and manipulation',
      'Ensuring accurate statistical calculations for trend analysis'
    ]
  },

  // ==========================================
  // STUDENT / ACADEMIC
  // ==========================================
  {
    title: 'Breast Cancer Detection Model',
    description: 'A machine learning model to predict breast cancer occurrence based on diagnostic data. Includes data preprocessing and model evaluation.',
    image: images.projects.breastCancer,
    tier: 'student',
    tags: ['Machine Learning', 'Data Analysis'],
    github: 'https://github.com/ayoubmori/Ml-Project-Analyse-Breast-Cancer-Data',
    demo: 'https://ml-analyze-breast-cancer-data.streamlit.app/'
  },
  {
    title: 'Weather Prediction Model',
    description: 'A time-series analysis and forecasting model for predicting weather patterns using historical data. Explores various statistical models.',
    image: images.projects.weatherPrediction,
    tier: 'student',
    tags: ['Predictive Modeling'],
    github: 'https://github.com/ayoubmori/predect-weather---mini-projet'
  },
  {
    title: 'Weather Forecast App',
    description: 'A clean interface to display current weather and forecasts using a third-party weather API. Focus on clear presentation of data.',
    image: images.projects.weatherForecast,
    tier: 'student',
    tags: ['API Integration'],
    github: 'https://github.com/ayoubmori/weather-app',
  },
  {
    title: 'Movie Recommendation App',
    description: 'An innovative mobile-first platform for discovering movies. Leverages external APIs for real-time data and user ratings.',
    image: images.projects.movieApp,
    tier: 'student',
    tags: ['Web Development'],
    github: 'https://github.com/ayoubmori/Movies-App'
  }
];