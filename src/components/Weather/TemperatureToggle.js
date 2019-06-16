import React from 'react';

function TemperatureToggle(props) {
  const { config: {tempUnits}, activeTempUnit } = props;
  return (
    <form>
        <input
          type="radio"
          value={tempUnits.celsius}
          name={tempUnits.celsius}
          onChange={() => props.handleToggle(tempUnits.celsius)}
          checked={tempUnits.celsius === activeTempUnit} />
        <label htmlFor={tempUnits.celsius}>{tempUnits.celsius}</label>
        <input
          type="radio"
          value={tempUnits.fahreneheit}
          name={tempUnits.fahrenheit}
          onChange={() => props.handleToggle(tempUnits.fahrenheit)}
          checked={tempUnits.fahrenheit === activeTempUnit} />
        <label htmlFor={tempUnits.fahrenheit}>{tempUnits.fahrenheit}</label>
    </form>
  );
}

export default TemperatureToggle;
