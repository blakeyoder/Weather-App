import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

class AppLoader extends PureComponent {

  static defaultProps = {
    type: 'Oval',
    color: 'White',
    height: 40,
    width: 40,
  }

  render() {
    return (<Loader {...this.props} />)
  }
}

Loader.PropTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
}


export default AppLoader;
