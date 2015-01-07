/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        var value = this.props.value,
            currentIndex = -1;

        if (typeof value !== 'undefined') {
            this.props.options.forEach(function(option, index) {
                if (option.value === value) {
                    currentIndex = index;
                    return false;
                }
            });
        }

        return {
            currentIndex: currentIndex,
            currentValue:this.props.options[currentIndex]
        };
    },

    onClick: function(index, ev) {
        if (index === this.state.currentIndex) {
            return;
        }

        var target = ev.target;
        if (target.tagName.toLowerCase() !== 'input') {
            return;
        }

        this.setState({
            currentIndex: index,
            currentValue: this.props.options[index]
        });

        if (this.props.onSelect) {
            this.props.onSelect(index, this.props.options[index]);
        }
    },

    render: function() {
        var self = this,
            currentIndex = this.state.currentIndex;

        var options = this.props.options.map(function(option, index) {
            return (
                <div className = "rc-radio">
                    <label onClick = {self.onClick.bind(self, index)}>
                        <input type = "radio" name = {self.props.name} value = {option.value}/>
                        <i className = "iconfont" dangerouslySetInnerHTML = {{__html:index === currentIndex ? '&#xe612;' : '&#xe613;'}}></i>
                        <span>{option.text}</span>
                    </label>
                </div>
            );
        });

        return (
            <div className = "rc-radio-group">
                {options}
            </div>
        );
    }

});