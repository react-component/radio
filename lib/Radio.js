/** @jsx React.DOM */
var React = require('react');
var CSSCore = require('react/lib/CSSCore');

var focusClassName = 'rc-radio-focus';

module.exports = React.createClass({
    getInitialState: function() {
        var self = this,
            value = this.props.value,
            currentIndex = -1;

        if (typeof value !== 'undefined') {
            this.props.options.forEach(function(option, index){
                if(option.value == value) {
                    currentIndex = index;
                    return false;
                }
            });
        }

        return {
            currentIndex: currentIndex,
            currentValue:this.props.options[currentIndex]
        }
    },

    onFocus: function(index) {
        var refs = this.refs;
        CSSCore.addClass(refs[index].getDOMNode(), focusClassName);
    },

    onBlur: function(index) {
        var refs = this.refs;
        CSSCore.removeClass(refs[index].getDOMNode(), focusClassName);
    },

    onKeyDown: function(index, ev) {
        var refs = this.refs,
            keyCode = ev.keyCode;

        if (keyCode == 13) {
            this.setState({
                currentIndex: index
            });
        }

        if (keyCode === 39 || keyCode === 40) {
            if (index < this.props.options.length-1) {
                refs[index+1].getDOMNode().focus();
                this.setState({
                    currentIndex: index + 1
                });
            }
        }else if( keyCode == 37 || keyCode === 38) {
            if (index > 0) {
                refs[index-1].getDOMNode().focus();
                this.setState({
                    currentIndex: index - 1
                });
            }
        }
    },

    onClick: function(index, ev) {
        if(index == this.state.currentIndex) {
            return;
        }

        var target = ev.target;
        if (target.tagName.toLowerCase() != 'input') {
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
                <div className="rc-radio" tabIndex="0" ref = {index} onKeyDown = {self.onKeyDown.bind(self, index)} onFocus = {self.onFocus.bind(self, index)} onBlur = {self.onBlur.bind(self, index)} >
                    <label onClick={self.onClick.bind(self, index)}>
                        <input type="radio" name={self.props.name} value={option.value}/>
                        <i className="iconfont" dangerouslySetInnerHTML={{__html:index == currentIndex?'&#xe612;':'&#xe613;'}}></i>
                        <span>{option.text}</span>
                    </label>
                </div>
            )
        });

        return (
            <div className="rc-radio-group">
                {options}
            </div>
        )
    }

});
