import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class NativeControl extends React.Component {

  componentDidMount() {
    this.props.syncChecked(this.props.checked);
    this.props.setDisabled(this.props.disabled);
  }

  componentDidUpdate(prevProps) {
    if (this.props.disabled !== prevProps.disabled) {
      this.props.setDisabled(this.props.disabled);
    }

    if (this.props.checked !== prevProps.checked) {
      this.props.syncChecked(this.props.checked);
    }
  }

  get classes() {
    return classnames('mdc-switch__native-control', this.props.className);
  }

  handleChange = (e) => {
    const {syncChecked, onChange} = this.props;
    const {checked} = e.target;
    syncChecked(checked);
    onChange(e);
  }

  render() {
    const {
      disabled,
      /* eslint-disable no-unused-vars */
      className,
      checked,
      syncChecked,
      setDisabled,
      onChange,
      /* eslint-enable no-unused-vars */
      ...otherProps
    } = this.props;

    return (
      <input
        type='checkbox'
        role='switch'
        onChange={this.handleChange}
        disabled={disabled}
        checked={checked}
        className={this.classes}
        {...otherProps}
      />
    );
  }
}

NativeControl.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
  setDisabled: PropTypes.func,
  syncChecked: PropTypes.func,
};

NativeControl.defaultProps = {
  checked: false,
  className: '',
  disabled: false,
  id: null,
  onChange: () => {},
  setDisabled: () => {},
  syncChecked: () => {},
};
