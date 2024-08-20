import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconImage = styled.img`
  width: ${(props) => props.size || '50px'};
  height: ${(props) => props.size || '50px'};
`;

const WeatherIcon = ({ icon, size }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return <IconImage src={iconUrl} alt="weather icon" size={size} />;
};

WeatherIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default WeatherIcon;