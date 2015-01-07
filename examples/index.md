# rc-radio@1.x demo
---

<link rel="stylesheet" href="../assets/radio.css">


## render

````html
<div id='react-content-standalone'></div>
````

````js
/** @jsx React.DOM */
var React = require('react');
var Radio = require('../');

var options =  [{
      value:1,
      text:'张馨予'
    },{
      value:2,
      text:'刘亦菲'
    },{
      value:3,
      text:'angelababy'
    },{
      value:4,
      text:'高圆圆'
    }];
function select(index, option) {
  document.getElementById('result').innerHTML = '你选择了'+option.text;  
}

React.render(
  <div className="rc-radio-demo">
    <h3>你最喜欢的女星是？</h3>
    <Radio name="rc-radio" options = {options} onSelect = {select}/>
    <span id="result"></span>
  </div>, document.getElementById('react-content-standalone'));
````