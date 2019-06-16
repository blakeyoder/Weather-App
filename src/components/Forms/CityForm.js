import React, {PureComponent} from "react";
import preventDefault from '../utils/dom';

export default class CityForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { city } = this.state;
    return (
      <div>
        <form onSubmit={preventDefault(() => this.props.submitHandler({ q: `${city},US` }, {searchTerm: city}))}>
          <label htmlFor="city">City: </label>
          <input
            type='text'
            name='city'
            onChange={this.handleInput}
            value={city} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
