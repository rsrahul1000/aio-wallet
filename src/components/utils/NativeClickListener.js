import React from 'react';
import PropTypes from 'prop-types';

export default class NativeClickListener extends React.Component {
  static propsType = {
    listenInside: PropTypes.bool,
    onClick: PropTypes.func,
    containerStyle: PropTypes.string,
  };

  static defaultProps = {
    listenInside: false,
    containerStyle: '',
  };

  componentDidMount() {
    document.addEventListener('click', this.globalClickHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.globalClickHandler);
  }

  globalClickHandler = nativeEvent => {
    const { onClick, listenInside } = this.props;
    if (this._container && this._container.contains(nativeEvent.target) && !listenInside) return;
    onClick(nativeEvent);
  };

  render() {
    return (
      <div className={this.props.containerStyle} ref={ref => (this._container = ref)}>
        {this.props.children}
      </div>
    );
  }
}
