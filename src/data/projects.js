import { images } from '../utils/images';

export const projectsData = [
  {
    title: 'MyScore App',
    description: 'A web application for tracking and visualizing academic scores and progress. Built with a focus on user-friendly data input and insightful analytics.',
    fullDescription: 'MyScore App is a comprehensive academic performance tracking system that helps students visualize and analyze their academic journey.',
    image: images.projects.myScore,
    tags: ['Python','Streamlit','HTML', 'CSS', 'Chart.js'],
    // features: [
    //   'Interactive score input with real-time validation',
    //   'Visual progress tracking with dynamic charts',
    //   'Performance trend analysis by subject',
    //   'Custom grading scale configuration',
    //   'Export reports in multiple formats'
    // ],
    github: '#',
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
    {
    title: 'Movie Recommendation App',
    description: 'An innovative mobile-first platform for discovering movies. Leverages external APIs for real-time data and user ratings.',
    image: images.projects.movieApp,
    tags: ['Python',"Streamlit" ,'API Integration'],
    github: 'https://github.com/ayoubmori/Movies-App'
    },
    {
    title: 'Breast Cancer Detection Model',
    description: 'A machine learning model to predict breast cancer occurrence based on diagnostic data. Includes data preprocessing and model evaluation.',
    image: images.projects.breastCancer,
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter'],
    github: 'https://github.com/ayoubmori/Ml-Project-Analyse-Breast-Cancer-Data',
    demo: 'https://ml-analyze-breast-cancer-data.streamlit.app/'
    },
    {
    title: 'Coffee Shop Sales Dashboard',
    description: 'An interactive dashboard visualizing coffee shop sales data to identify trends and best-selling products. Built using Power BI.',
    image: images.projects.coffeeShop,
    tags: ['Power BI', 'Data Visualization', 'Business Intelligence'],
    github: 'https://github.com/ayoubmori/coffee-shop-site',
    // demo: '#'
    },
    {
    title: 'Weather Forecast App',
    description: 'A clean interface to display current weather and forecasts using a third-party weather API. Focus on clear presentation of data.',
    image: images.projects.weatherForecast,
    tags: ['JavaScript', 'API', 'HTML', 'CSS'],
    github: 'https://github.com/ayoubmori/weather-app',
    // demo: '#'
    },
    {
    title: 'Weather Prediction Model',
    description: 'A time-series analysis and forecasting model for predicting weather patterns using historical data. Explores various statistical models.',
    image: images.projects.weatherPrediction,
    tags: ['Python', 'Time Series', 'StatsModels', 'Pandas'],
    github: 'https://github.com/ayoubmori/predect-weather---mini-projet'
    }
];