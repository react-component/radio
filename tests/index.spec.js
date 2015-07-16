/**
 * only require other specs here
 */
var expect = require('expect.js');
var Radio = require('../index');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Simulate = TestUtils.Simulate;

describe('rc-switch', function () {
  var inst;
  var container = document.createElement('div');
  document.body.appendChild(container);

  beforeEach(function (done) {
    React.render(<Radio/>, container, function () {
      inst = this;
      done();
    });
  });

  afterEach(function () {
    React.unmountComponentAtNode(container);
  });

  it('works', function () {
    expect(inst.refs.checkbox.state.checked).to.be(false);
    TestUtils.scryRenderedDOMComponentsWithTag(inst, 'input')[0].getDOMNode().click();
    expect(inst.refs.checkbox.state.checked).to.be(true);
  });
});
