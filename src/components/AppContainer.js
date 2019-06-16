import React, {Component} from "react";
import ApiClient from '../components/ApiClient';
import WeatherResults from '../components/Weather/WeatherResults';
import AppLoader from '../components/Loader';
import BaseForm from '../components/Forms/BaseForm';
import RecentSearches from '../components/RecentSearches';
import TemperatureToggle from '../components/Weather/TemperatureToggle';
import '../App.css';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    const { config } = props;
    const localResults = localStorage.getItem(config.firstVisitResults); 
    const searchHistory = localStorage.getItem(config.searchHistory); 
    this.apiClient = new ApiClient({ config });
    this.state = {
      results: localResults ? JSON.parse(localResults) : null,
      loading: false,
      tempUnit: config.tempUnits.celsius,
      searches: searchHistory ? JSON.parse(searchHistory) : [],
    };
  }

  componentDidMount = async () => {
    const { firstVisit, config } = this.props;
    if (firstVisit) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setLoading(true);
        this.fetchWeather({
          lat: position.coords.latitude.toFixed(2),
          lon: position.coords.longitude.toFixed(2),
        }, {searchTerm: undefined}).then(() => {localStorage.setItem(config.firstVisitResults, JSON.stringify(this.state.results))});
      });
    }
  }

  setLoading = (val) => this.setState({loading: val});

  handleError = (message) => {
    this.setState({
      error: message,
      loading: false,
    })
  }

  handleTempUnitsChange = (val) => this.setState({tempUnit: val});

  clearError = () => this.setState({error: null});

  updateSearchHistory = ({ searchTerm }) => {
    const { searches } = this.state;
    const { config } = this.props;
    searches.length >= config.searchHistoryLimit && searches.shift();
    this.setState({
        searches: searches.concat(searchTerm),
    }, () => {localStorage.setItem(config.searchHistory, JSON.stringify(this.state.searches))});
  }

  fetchWeather = async (params, { searchTerm }) => {
    this.clearError();
    this.setLoading(true);
    return this.apiClient.get(params).then((resp) => {
      this.setState({
        results: resp.data,
      })
      this.setLoading(false)
    }).then(
      () => {
        if (searchTerm) {
          this.updateSearchHistory({ searchTerm })
        }
      }
    ).catch(
      (err) => this.handleError(err.response.data.message)
    ); 
  }

  render() {
    const {
      results,
      loading,
      error,
      tempUnit,
      searches,
    } = this.state;
    const { config } = this.props;
    return (
      <div>
        <RecentSearches
          searches={searches}
          limit={config.searchHistoryLimit}
        />
        <br />
        <BaseForm handleSearch={this.fetchWeather} />
        { error
          ? <div>{error}</div>
          : loading
            ? <div className='app-loader'><AppLoader /></div>
            : <React.Fragment>
              <WeatherResults
                results={results}
                tempUnit={tempUnit}
              />
              <TemperatureToggle
                handleToggle={this.handleTempUnitsChange}
                activeTempUnit={tempUnit}
                config={config}
              />
            </React.Fragment>
        }
      </div>
    )
  }
}
