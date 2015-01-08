# rc-radio@1.0.0
---

<link rel="stylesheet" href="../assets/index.css">

````html
<div id='ex1'>
</div>
````

````js
/** @jsx React.DOM */
window.process = {
	env:''
}
var Radio = require('../');
var React = require('react');

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

React.render(
	<div className="form">
		<div>
			<h2>你最喜欢的武侠小说是</h2>
			<div>
				<input type="text"/>
			</div>
		</div>
		<div className="rc-radio-demo">
			<h2>你最喜欢的女星是</h2>
			<Radio name="rc-radio" options= {options} />
		</div>
	</div>
	, document.getElementById('ex1'));
````