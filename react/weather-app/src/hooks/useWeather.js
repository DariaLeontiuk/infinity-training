import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherByCity } from "../redux/weatherSlice";

export const useWeather = (cityName) => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.data);
  const status = useSelector((state) => state.weather.status);
  const error = useSelector((state) => state.weather.error);

  useEffect(() => {
    if (cityName) {
      dispatch(fetchWeatherByCity(cityName));
    }
  }, [cityName, dispatch]);

  return { weather, status, error };
};
