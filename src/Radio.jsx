import React from 'react';
import Checkbox from 'rc-checkbox';

export default class Radio extends React.Component {
  static defaultProps = {
    prefixCls: 'rc-radio',
    type: 'radio',
  };

  render() {
    return <Checkbox {...this.props} ref="checkbox"/>;
  }
}
