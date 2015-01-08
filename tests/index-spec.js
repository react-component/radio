/** @jsx React.DOM */

var expect = require('expect.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Simulate = TestUtils.Simulate;
var async = require('async');

var Radio = require('../index');

require('/assets/index.css');

describe('rc-radio', function (){
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
    var defaultValue = 1;
    var radio;
    var container = document.createElement('div');
    document.body.appendChild(container);

    beforeEach(function (done) {
      React.render(<Radio value={defaultValue} options={options} />, container, function () {
        radio = this;
        done();
      });
    });

    afterEach(function () {
      React.unmountComponentAtNode(container);
    });

    it('render works', function () {
      expect(TestUtils.scryRenderedDOMComponentsWithClass(radio, 'rc-radio-group').length).to.above(0);
    });

    it('defaultValue works', function () {
      expect(radio.state.currentValue.value).to.be(defaultValue);
    });


    it('onSelect works', function (done) {
      var item,
      	  index = options.length-1;
      radio.setProps({
        onSelect: function (d) {
          expect(d).to.be(index);
          done();
        }
      }, function () {
        item = TestUtils.scryRenderedDOMComponentsWithClass(radio, 'rc-radio')[index];
        Simulate.click(item.getDOMNode().getElementsByTagName('input')[0]);
      });
    });

});
