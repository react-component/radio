'use strict';

var React = require('react');
var Checkbox = require('rc-checkbox');

var Radio = React.createClass({
  getDefaultProps() {
    return {
      prefixCls: 'rc-radio',
      type: 'radio'
    };
  },

  render() {
    return <Checkbox {...this.props} ref="checkbox"/>;
  }
});

module.exports = Radio;
