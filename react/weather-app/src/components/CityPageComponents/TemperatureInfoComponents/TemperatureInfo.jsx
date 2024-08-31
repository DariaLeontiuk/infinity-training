import React, { useRef, useEffect} from "react";
import styled from "styled-components";
import FeelsLike from "./FeelsLike";
import Humidity from "./Humidity";
import Visibility from "./Visibility";
import Pressure from "./Pressure";

const TempContainer = styled.div`
  padding: 60px;
  position: relative;
  z-index: 2;
`;

const ElemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
`;

const TemperatureInfoContainer = styled.div`
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  grid-column: 1 / 2;
  grid-row: 2 / 13;
  position: relative;
  overflow: hidden;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: 0.8;
`;

const Temp = styled.h2`
  font-size: 70px;
  margin: 0;
`

const TemperatureInfo = ({
  temp,
  feels_like,
  temp_min,
  temp_max,
  pressure,
  visibility,
  humidity,
  description,
  videoSrc,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videoSrc;
      videoRef.current.load();
    }
  }, [videoSrc]);

  const handleCanPlayThrough = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
      videoRef.current.play();
    }
  };

  const handleVideoError = () => {
    console.error("Error loading video");
  };
  
  return (
    videoSrc && (
      <TemperatureInfoContainer>
        <BackgroundVideo
          ref={videoRef}
          autoPlay
          muted
          loop
          onCanPlayThrough={handleCanPlayThrough}
          onError={handleVideoError}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </BackgroundVideo>
        <TempContainer>
          <Temp>{temp}°C</Temp>
          <h2>{description}</h2>
          <small>
            Min: {temp_min}°C, Max: {temp_max}°C
          </small>
        </TempContainer>
        <ElemContainer>
          <FeelsLike feels_like={feels_like} />
          <Pressure pressure={pressure} />
          <Visibility visibility={visibility} />
          <Humidity humidity={humidity} />
        </ElemContainer>
      </TemperatureInfoContainer>
    )
  );
};

export default TemperatureInfo;
