import React, { PureComponent } from 'react';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from 'recharts';
import { convertKToCelsius, convertKToFahrenheit } from '../utils/tempConversion';

const converterMap = {
  celsius: convertKToCelsius,
  fahrenheit: convertKToFahrenheit,
}

export default class WeatherResults extends PureComponent {
  // extract out what's needed to render the chart
  formatForChart = (results) => {
    const { tempUnit } = this.props;
    const tempConverter = converterMap[tempUnit] 

    return results.list.reduce((acc, item) => {
      const { main } = item;
      acc.push({
        temp: tempConverter(main.temp),
        humidity: main.humidity,
        pressure: main.pressure,
      });
      return acc;
    }, [])
  }

  renderHeader = (results) => {
    // eslint-disable-next-line no-mixed-operators
    return <p>Showing results for {results.city && results.city.name || 'N/A'}</p> 
  }

  renderBarChart = (results) => {
    return (
      <BarChart width={730} height={250} data={this.formatForChart(results)}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="temp" fill="#8884d8" />
        <Bar dataKey="humidity" fill="#82ca9d" />
        <Bar dataKey="pressure" fill="#FFA500" />
      </BarChart>
    )
  }

  render() {
    const { results } = this.props;
    return (
        <div>
          {results &&
            <React.Fragment> 
              {this.renderHeader(results)}
              {this.renderBarChart(results)}
            </React.Fragment>
          }
        </div>
    )
  }
}
