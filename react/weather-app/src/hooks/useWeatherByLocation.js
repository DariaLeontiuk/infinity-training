import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherByLocation } from "../redux/weatherSlice";

const useWeatherByLocation = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.data);
  const error = useSelector((state) => state.weather.error);
  const status = useSelector((state) => state.weather.status);

  const loadWeatherByLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchWeatherByLocation({ latitude, longitude }));
        },
        (error) => {
          console.error("Error getting location:", error);
          dispatch({
            type: "weather/fetchWeatherByLocation/rejected",
            error: "Unable to retrieve your location",
          });
        }
      );
    } else {
      dispatch({
        type: "weather/fetchWeatherByLocation/rejected",
        error: "Geolocation is not supported by this browser",
      });
    }
  }, [dispatch]);

  useEffect(() => {
    loadWeatherByLocation();
  }, [loadWeatherByLocation]);

  return { weather, error, status, reloadWeatherByLocation: loadWeatherByLocation };
};

export default useWeatherByLocation;