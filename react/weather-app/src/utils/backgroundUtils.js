export const getBackgroundImageByWeatherId = (weatherId) => {
  if (weatherId >= 200 && weatherId < 300) {
    return "/assets/thunderstorm.jpg";
  } else if (weatherId >= 300 && weatherId < 600) {
    return "/assets/rain.jpg";
  } else if (weatherId >= 600 && weatherId < 700) {
    return "/assets/snow.jpg";
  } else if (weatherId >= 700 && weatherId < 800) {
    return "/assets/atmosphere.jpg";
  } else if (weatherId === 800) {
    return "/assets/clear.jpg";
  } else if (weatherId > 800 && weatherId < 900) {
    return "/assets/clouds.jpg";
  } else {
    return "/assets/default.jpg";
  }
};
