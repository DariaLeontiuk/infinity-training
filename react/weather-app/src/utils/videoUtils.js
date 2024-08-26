export const getBackgroundVideoByWeatherId = (weatherId) => {
    if (weatherId >= 200 && weatherId < 300) {
      return "/videos/thunderstorm.mp4";
    } else if (weatherId >= 300 && weatherId < 600) {
      return "/videos/rain.mp4";
    } else if (weatherId >= 600 && weatherId < 700) {
      return "/videos/snow.mp4";
    } else if (weatherId >= 700 && weatherId < 800) {
      return "/videos/atmosphere.mp4";
    } else if (weatherId === 800) {
      return "/videos/clear.mp4";
    } else if (weatherId > 800 && weatherId < 900) {
      return "/videos/clouds.mp4";
    } else {
      return "/videos/default.mp4";
    }
  };


  