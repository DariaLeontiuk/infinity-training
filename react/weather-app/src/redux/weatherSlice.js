import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWeatherByCity = createAsyncThunk(
  "weather/fetchWeatherByCity",
  async (city, {dispatch}) => {
    const geoResponse = await axios.get(
      "https://api.openweathermap.org/geo/1.0/direct",
      {
        params: {
          q: city,
          limit: 1,
          appid: API_KEY,
        },
      }
    );

    if (geoResponse.data.length === 0) {
      throw new Error("City not found");
    }

    const { lat, lon, country } = geoResponse.data[0];

    const weatherData = await dispatch(fetchWeatherByLocation({latitude: lat, longitude: lon})).unwrap();

    return { ...weatherData, country };
  }
);

export const fetchWeatherByLocation = createAsyncThunk(
  "weather/fetchWeatherByLocation",
  async ({ latitude, longitude }) => {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params: {
          lat: latitude,
          lon: longitude,
          units: "metric",
          appid: API_KEY,
        },
      }
    );

    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByCity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherByCity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWeatherByCity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchWeatherByLocation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherByLocation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWeatherByLocation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
