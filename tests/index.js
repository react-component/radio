const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-dom/test-utils');
const expect = require('expect.js');
const Radio = require('../index');

describe('rc-radio', () => {
  let inst;
  const container = document.createElement('div');
  document.body.appendChild(container);

  beforeEach((done) => {
    ReactDOM.render(<Radio />, container, function init() {
      inst = this;
      done();
    });
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  it('works', () => {
    expect(inst.refs.checkbox.state.checked).to.be(false);
    TestUtils.scryRenderedDOMComponentsWithTag(inst, 'input')[0].click();
    expect(inst.refs.checkbox.state.checked).to.be(true);
  });
});
