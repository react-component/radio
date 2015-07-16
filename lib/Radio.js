'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var React = require('react');
var classnames = require('classnames');

var Radio = React.createClass({
  displayName: 'Radio',

  getInitialState: function getInitialState() {
    var props = this.props;
    var checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    return {
      checked: checked
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-radio',
      style: {},
      className: '',
      defaultChecked: false,
      onChange: null
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked
      });
    }
  },
  render: function render() {
    var _classnames;

    var props = this.props;
    var prefixCls = props.prefixCls;
    return React.createElement(
      'span',
      { className: classnames((_classnames = {}, _defineProperty(_classnames, props.className, !!props.className), _defineProperty(_classnames, prefixCls, 1), _defineProperty(_classnames, prefixCls + '-checked', this.state.checked), _defineProperty(_classnames, prefixCls + '-disabled', props.disabled), _classnames)),
        style: props.style
      },
      React.createElement('span', { className: prefixCls + '-inner' }),
      React.createElement('input', { type: 'radio',
        className: prefixCls + '-input',
        value: props.value,
        name: props.name,
        disabled: props.disabled,
        checked: this.state.checked,
        onChange: this.handleChange,
        onClick: props.onClick
      })
    );
  },
  handleChange: function handleChange(e) {
    var checked = e.target.checked;
    if (!('checked' in this.props)) {
      this.setState({
        checked: checked
      });
    }
    this.props.onChange(e);
  }
});

module.exports = Radio;