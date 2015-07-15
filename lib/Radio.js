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
      this.props.options.items.forEach(function (option, index) {
        if (option.value === value) {
          currentIndex = index;
          return false;
        }
      });
    }

    return {
      focusIndex: -1,
      currentIndex: currentIndex,
      currentValue: this.props.options.items[currentIndex]
    };
  },

  prefixClsFn: function () {
    var prefixCls = this.props.prefixCls;
    if (!arguments.length) {
      return prefixCls;
    }
    var args = Array.prototype.slice.call(arguments, 0);

    var cls=args.map(function (s) {
      s=s.replace(/\s/g,"");
      if (!s) {
        return;
      }
      return prefixCls + '-' + s;
    }).join(' ');
    cls=cls.replace(/\s/g,"")?prefixCls+" "+cls.trim():prefixCls;
    return cls
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
    ev.preventDefault();
    var refs = this.refs;
    var keyCode = ev.keyCode,
      num=this.state.currentIndex,
      items=this.props.options.items;
    function isDisabled(i){
      if(items[i].disabled){
        if (keyCode === 9 || keyCode === 39 || keyCode === 40){
          i++
        }else if (keyCode === 37 || keyCode === 38){
          i--
        }
        return isDisabled(i);
      }
      return i
    }
    if (keyCode === 9 ||keyCode === 39 || keyCode === 40) {
      if(num<items.length-1) {
        num++;
        num=isDisabled(num);
      }
    } else if (keyCode === 37 || keyCode === 38) {
      if (num > 0) {
        num--;
        num=isDisabled(num);
      }
    }
    this.setState({
      focusIndex:num,
      currentIndex: num,
      currentValue: this.props.options.items[num]
    });
    var n=this.state.value||num;
    this.props.onChange(n);
  },

  onClick: function (index, ev) {
    if (index === this.state.currentIndex||this.props.options.disabled) {
      return;
    }
    this.setState({
      currentIndex: index,
      currentValue: this.props.options.items[index]
    });
    var n=this.state.value||index;
    this.props.onChange(n);
  },

  render: function () {
    var self = this;
    var props=this.props;
    var prefixClsFn = this.prefixClsFn;
    var currentIndex = this.state.currentIndex;
    var options = (props.options.items||[]).map(function (option, index) {
      var className = prefixClsFn('',(self.state.focusIndex === index ? 'focus' : ''),(currentIndex === index ? 'checked' : ''),option.disabled?"disabled":"");
      className+=" "+(option.prefixCls||"");
      return (
        <div value={option.value} className={className} tabIndex="0" key = {index} ref = {index} onClick={option.disabled?null:self.onClick.bind(self, index)} onKeyDown = {self.onKeyDown.bind(self, index)} onFocus = {self.onFocus.bind(self, index)} onBlur = {self.onBlur.bind(self, index)} >
          <label>
            <em></em>
            <span>{option.text}</span>
          </label>
        </div>
      );
    });
    return (
      <div className={prefixClsFn('group',props.options.disabled?"disabled":"")}>
          {options}
      </div>
    );
  }
});
