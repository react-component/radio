# rc-radio@1.0.0
---

<link rel="stylesheet" href="../assets/index.css">

````html
<div id='ex1' style="margin:20px">
  加载中... 请稍候
</div>
````
<style>
.test{
color:red;
}
</style>
````js
/** @jsx React.DOM */

var Radio = require('../');
var React = require('react');

var options =  {
    disabled: false,
    items:[{
      value:1,
      text:'张馨予',
      prefixCls:"test"
    },{
      value:2,
      text:'刘亦菲',
      disabled:true
    },{
      value:3,
      text:'angelababy',
      disabled:true
    },{
      value:4,
      text:'高圆圆'
    }]
};
function onChange(value) {
  console.log('radio checked:' + value);
}
React.render(
	<div className="form">
		<div className="rc-radio-demo">
			<h2>你最喜欢的女星是</h2>
			<Radio name="rc-radio" options= {options}
     value={1} onChange={onChange}/>
		</div>
	</div>

	, document.getElementById('ex1'));
````
