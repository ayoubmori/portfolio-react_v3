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
    label: 'Programming', 
    tools: 'Python, SQL, Linux Bash', 
    icon: faTerminal 
  },
  { 
    id: 'machine-learning',
    label: 'Machine Learning', 
    tools: 'Scikit-learn, TensorFlow', 
    icon: faBrain 
  },
  { 
    id: 'data-analysis',
    label: 'Data Analysis', 
    tools: 'Pandas, NumPy', 
    icon: faTableList 
  },
  { 
    id: 'data-viz',
    label: 'Data Vis & BI', 
    tools: 'Matplotlib, Seaborn, Power BI', 
    icon: faChartPie 
  },
  { 
    id: 'deployment',
    label: 'Deployment & APIs', 
    tools: 'FastAPI, Streamlit', 
    icon: faServer 
  },
  { 
    id: 'scraping',
    label: 'Web Scraping', 
    tools: 'BeautifulSoup, Playwright', 
    icon: faSpider 
  },
  { 
    id: 'tools',
    label: 'Tools', 
    tools: 'Git & GitHub', 
    icon: faToolbox 
  }
];