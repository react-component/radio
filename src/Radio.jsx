'use strict';

var React = require('react');
var classnames = require('classnames');


var Radio = React.createClass({
		getInitialState() {
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
		getDefaultProps() {
			return {
				prefixCls: 'rc-radio',
				style: {},
				className: '',
				defaultChecked: false,
				onChange: null
			};
		},
		componentWillReceiveProps(nextProps) {
			if ('checked' in nextProps) {
				this.setState({
					checked: !!nextProps.checked
				});
			}
		},
		render() {
			var props = this.props;
			var prefixCls = props.prefixCls;
			return (
				<span className={classnames({
					[props.className]: !!props.className,
					[prefixCls]: 1,
					[`${prefixCls}-checked`]: this.state.checked,
					[`${prefixCls}-disabled`]: props.disabled
				})}
					style={props.style}
				>
					<span className={`${prefixCls}-inner`}></span>

					<input type="radio"
						className={`${prefixCls}-input`}
						value={props.value}
						name={props.name}
						disabled={props.disabled}
						checked={this.state.checked}
						onChange={this.handleChange}
						onClick={props.onClick}
					/>
				</span>
			);
		},
		handleChange(e) {
			var checked = e.target.checked;
			if (!('checked' in this.props)) {
				this.setState({
					checked: checked
				});
			}
			this.props.onChange(e);
		}
	}
);

module.exports = Radio;
