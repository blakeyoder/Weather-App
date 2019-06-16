import React, {PureComponent} from "react";
import preventDefault from '../utils/dom';

export default class ZipForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { zip } = this.state;
    return (
      <div>
        <form onSubmit={preventDefault(() => this.props.submitHandler({ zip: `${zip},US` }, {searchTerm: zip}))}>
          <label htmlFor="zip">Zip: </label>
          <input
            type='text'
            name='zip'
            onChange={this.handleInput}
            value={zip} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
