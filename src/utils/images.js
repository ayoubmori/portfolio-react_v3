export const images = {
  profile: '/images/ayoub-img.jpg',
  background: '/images/background.jpg',
  projects: {
    myScore: '/images/my-score.png',
    movieApp: '/images/movie_app_demo.jpg',
    breastCancer: '/images/breast_canser_app.jpg',
    coffeeShop: '/images/coffe-shop-sales.png',
    weatherForecast: '/images/forcast-app.png',
    weatherPrediction: '/images/predict_weather_model.jpg'
  }
};

export const fallbackImage = (text) => 
  `https://placehold.co/600x400/E0E7FF/4338CA?text=${encodeURIComponent(text)}`;

export const profileFallback = 
  'https://placehold.co/400x400/EFEFEF/AAAAAA?text=Profile+Image';
