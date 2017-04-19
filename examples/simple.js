import React from 'react';
import ReactDOM from 'react-dom';
import Radio from 'rc-radio';
import 'rc-radio/assets/index.less';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      checked: null,
      r: 'a',
    };
  }

  handleChange = (e) => {
    this.setState({
      r: e.target.value,
    });
  }

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  render() {
    return (<div style={{ margin: 20 }}>
      <div>
        <p>
          <label>
            <Radio value="a"
              checked = {this.state.r === 'a'}
              onChange={this.handleChange}
              disabled={this.state.disabled}
            />
            &nbsp; rc-radio
          </label>
          &nbsp;&nbsp;
          <label>
            <Radio value="b"
              checked = {this.state.r === 'b'}
              onChange={this.handleChange}
              disabled={this.state.disabled}
            />
            &nbsp; rc-radio
          </label>
          &nbsp;&nbsp;
        </p>
        <p>
          <label>
            <input type="radio" name="radio"
              defaultChecked
              disabled={this.state.disabled}
            />
            &nbsp; native
          </label>
          &nbsp;&nbsp;
          <label>
            <input type="radio" name="radio"
              disabled={this.state.disabled}
            />
            &nbsp; native
          </label>
          &nbsp;&nbsp;
        </p>
      </div>

      <button onClick={this.toggle}>toggle disabled</button>

    </div>);
  }
}

ReactDOM.render(<Test />, document.getElementById('__react-content'));
