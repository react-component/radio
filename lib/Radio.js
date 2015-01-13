/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function () {
    return {
      prefixCls: 'rc-radio'
    };
  },

  getInitialState: function () {
    var value = this.props.value;
    var currentIndex = -1;

    if (typeof value !== 'undefined') {
      this.props.options.forEach(function (option, index) {
        if (option.value === value) {
          currentIndex = index;
          return false;
        }
      });
    }

    return {
      focusIndex: -1,
      currentIndex: currentIndex,
      currentValue: this.props.options[currentIndex]
    };
  },

  prefixClsFn: function () {
    var prefixCls = this.props.prefixCls;
    if (!arguments.length) {
      return prefixCls;
    }
    var args = Array.prototype.slice.call(arguments, 0);
    return args.map(function (s) {
      if (!s) {
        return prefixCls;
      }
      return prefixCls + '-' + s;
    }).join(' ');
  },

  onFocus: function (index) {
    var self = this;

    if (self._timer) {
      clearTimeout(self._timer);
    }

    self._timer = setTimeout(function () {
      self._timer = null;
      self.setState({
        focusIndex: index
      });
    }, 100);

  },

  onBlur: function () {
    var self = this;
    if (self._timer) {
      clearTimeout(self._timer);
      self._timer = null;
    }

    this.setState({
      focusIndex: -1
    });
  },

  onKeyDown: function (index, ev) {
    var refs = this.refs;
    var keyCode = ev.keyCode;

    if (keyCode === 13) {
      this.setState({
        currentIndex: index
      });
      ev.preventDefault();
    } else if (keyCode === 39 || keyCode === 40) {
      if (index < this.props.options.length - 1) {
        refs[index + 1].getDOMNode().focus();
        this.setState({
          currentIndex: index + 1
        });
        ev.preventDefault();
      }
    } else if (keyCode === 37 || keyCode === 38) {
      if (index > 0) {
        refs[index - 1].getDOMNode().focus();
        this.setState({
          currentIndex: index - 1
        });
        ev.preventDefault();
      }
    }
  },

  onClick: function (index, ev) {
    if (index === this.state.currentIndex) {
      return;
    }

    var target = ev.target;
    if (target.tagName.toLowerCase() !== 'input') {
      return;
    }

    this.refs[index].getDOMNode().blur();

    this.setState({
      currentIndex: index,
      currentValue: this.props.options[index]
    });

    if (this.props.onSelect) {
      this.props.onSelect(index, this.props.options[index]);
    }
  },

  render: function () {
    var self = this;
    var prefixClsFn = this.prefixClsFn;
    var currentIndex = this.state.currentIndex;

    var options = this.props.options.map(function (option, index) {
      var className = prefixClsFn('', (self.state.focusIndex === index ? 'focus' : ''));
      return (
        <div className={className} tabIndex="0" key = {index} ref = {index} onClick={self.onClick.bind(self, index)} onKeyDown = {self.onKeyDown.bind(self, index)} onFocus = {self.onFocus.bind(self, index)} onBlur = {self.onBlur.bind(self, index)} >
          <label>
            <input type="radio" name={self.props.name} value={option.value}/>
            <i className={prefixClsFn('iconfont')} dangerouslySetInnerHTML={{__html: index === currentIndex ? '&#xe612;' : '&#xe613;'}}></i>
            <span>{option.text}</span>
          </label>
        </div>
      );
    });

    return (
      <div className={prefixClsFn('group')}>
          {options}
      </div>
    );
  }
});
