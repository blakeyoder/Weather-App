import React, {PureComponent} from "react";
import {
  CityForm,
  ZipForm,
  CoordinatesForm,
} from '../Forms'

const INPUT_TYPES = Object.freeze({
  city: 'city',
  coordinates: 'coordinates',
  zip: 'zip',
});

export default class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeInput: INPUT_TYPES.city,
    };
  }

  handleActiveInputType = ({ activeInput }) => {
    this.setState({
      activeInput,
    });
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  renderInputTypeChoices = () => {
    const { activeInput } = this.state;
    return Object.keys(INPUT_TYPES).map((inputType) => {
      return (
        <React.Fragment key={inputType}>
          <input
            type="radio"
            value={inputType}
            name={inputType}
            onChange={() => this.setState({activeInput: inputType})}
            checked={inputType === activeInput} />
          <label htmlFor={inputType}>{inputType}</label>
        </React.Fragment>
      );
    });
  }

  renderActiveForm = () => {
    const { activeInput } = this.state;
    switch (activeInput) {
      case INPUT_TYPES.city:
        return <CityForm submitHandler={this.props.handleSearch} />;
      case INPUT_TYPES.zip:
        return <ZipForm submitHandler={this.props.handleSearch} />;
      case INPUT_TYPES.coordinates:
        return <CoordinatesForm submitHandler={this.props.handleSearch} />;
      default:
        return null;
    }

  }

  render() {
    return (
      <div>
        <div>Search by: {this.renderInputTypeChoices()}</div>
        <br />
        <div>
          {this.renderActiveForm()}
        </div>
      </div>
    )
  }
}
