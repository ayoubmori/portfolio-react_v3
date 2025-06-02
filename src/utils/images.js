import profileImg from '../assets/images/ayoub-img.jpg';
import backgroundImg from '/images/background.jpg';
import myScoreImg from '/images/my-score.png';
import movieAppImg from '/images/movie_app_demo.jpg';
import breastCancerImg from '/images/breast_canser_app.jpg';
import coffeeShopImg from '/images/coffe-shop-sales.png';
import weatherForecastImg from '/images/forcast-app.png';
import weatherPredictionImg from '/images/predict_weather_model.jpg';

export const images = {
  profile: profileImg,
  background: backgroundImg,
  projects: {
    myScore: myScoreImg,
    movieApp: movieAppImg,
    breastCancer: breastCancerImg,
    coffeeShop: coffeeShopImg,
    weatherForecast: weatherForecastImg,
    weatherPrediction: weatherPredictionImg
  }
};

export const fallbackImage = (text) => 
  `https://placehold.co/600x400/E0E7FF/4338CA?text=${encodeURIComponent(text)}`;

export const profileFallback = 
  'https://placehold.co/400x400/EFEFEF/AAAAAA?text=Profile+Image';
