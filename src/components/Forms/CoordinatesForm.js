import React, {PureComponent} from "react";
import preventDefault from '../utils/dom';

export default class CoordinatesForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      long: '',
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { lat, long } = this.state;
    return (
      <div>
        <form onSubmit={preventDefault(() => this.props.submitHandler({
          lat: Number(lat).toFixed(2),
          lon: Number(long).toFixed(2),
        }, {searchTerm: `lat: ${lat}, long: ${long}`}))}>
          <label htmlFor="lat">Latitude: </label>
          <input
            type='text'
            name='lat'
            onChange={this.handleInput}
            value={lat} />
          <label htmlFor="long">Longitude: </label>
          <input
            type='text'
            name='long'
            onChange={this.handleInput}
            value={long} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
