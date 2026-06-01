import { 
  faTerminal, 
  faBrain, 
  faTableList, 
  faChartPie, 
  faServer, 
  faSpider, 
  faToolbox 
} from '@fortawesome/free-solid-svg-icons';

export const skillsData = [
  { 
    id: 'programming',
    label: 'Data Engineering & Backend', 
    tools: 'Python, SQL, FastAPI, ETL pipelines', 
    icon: faTerminal 
  },
  { 
    id: 'machine-learning',
    label: 'Machine Learning', 
    tools: 'Scikit-learn, predictive modeling, time-series analysis', 
    icon: faBrain 
  },
  { 
    id: 'data-analysis',
    label: 'Data & Analytics', 
    tools: 'SQL, Pandas, NumPy, Power BI', 
    icon: faTableList 
  },
  {
    id: 'scraping',
    label: 'Automation & Scraping', 
    tools: 'Playwright, BeautifulSoup, API integration', 
    icon: faSpider 
  },
  { 
    id: 'tools',
    label: 'Tools & Deployment', 
    tools: 'Git/GitHub, cloud deployment', 
    icon: faToolbox 
  },
  { 
    id: 'tools',
    label: 'System Thinking',
    tools: 'Debugging production issues, architecture design,data workflows', 
    icon: faToolbox 
  }
];