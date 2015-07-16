require('rc-radio/assets/index.css');
var React = require('react');
var Radio = require('rc-radio');

function onChange(e) {
  console.log('radio checked:' + (e.target.checked));
}


var Test = React.createClass({
  getInitialState() {
    return {
      disabled: false,
      checked: null
    }
  },
  toggle() {
    this.setState({
      disabled: !this.state.disabled
    });
  },
  click: function (e) {
    this.setState({
      checked: e.target.value
    })
  },
  render() {
    return <div style={{margin: 20}}>
      <div>
        <p>
          <label>
            <Radio name="rc-radio" value="a" onChange={onChange} onClick={this.click} checked={this.state.checked === "a"}
              disabled={this.state.disabled}/>
          &nbsp; rc-radio
          </label>
        &nbsp;&nbsp;
          <label>
            <Radio name="rc-radio" value="b" onChange={onChange} onClick={this.click} checked={this.state.checked === "b"}
              disabled={this.state.disabled}/>
          &nbsp; rc-radio
          </label>
        &nbsp;&nbsp;
        </p>
        <p>
          <label>
            <input type='radio' name="radio" onChange={onChange}
              disabled={this.state.disabled}/>
          &nbsp; native
          </label>
        &nbsp;&nbsp;
          <label>
            <input type='radio' name="radio" onChange={onChange}
              disabled={this.state.disabled}/>
          &nbsp; native
          </label>
        &nbsp;&nbsp;
        </p>
      </div>

      <button onClick={this.toggle}>toggle disabled</button>

    </div>;
  }
});

React.render(<Test />, document.getElementById("__react-content"));
