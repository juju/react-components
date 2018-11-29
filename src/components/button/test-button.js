/* Copyright (C) 2017 Canonical Ltd. */
'use strict';

const React = require('react');
const enzyme = require('enzyme');

const Button = require('./button');

describe('Button', function() {
  let evt;

  const renderComponent = (options = {}) =>
    enzyme.shallow(
      <Button
        action={options.action}
        disabled={options.disabled}
        extraClasses={options.extraClasses}
        submit={options.submit}
        tooltip={options.tooltip}
        type={options.type}
      >
        {options.children}
      </Button>
    );

  beforeEach(() => {
    evt = {
      preventDefault: sinon.stub(),
      stopPropagation: sinon.stub()
    };
  });

  it('matches the snapshot', function() {
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
  });

  it('calls the callable provided when clicked', function() {
    var callbackStub = sinon.stub();
    const wrapper = renderComponent({
      action: callbackStub
    });
    wrapper.simulate('click', evt);
    assert.equal(callbackStub.callCount, 1);
  });

  it('does not call the callable if clicked when disabled', function() {
    var callbackStub = sinon.stub();
    const wrapper = renderComponent({
      action: callbackStub,
      disabled: true
    });
    wrapper.simulate('click', evt);
    assert.equal(callbackStub.callCount, 0);
  });

  it('does not submit when disabled', function() {
    const wrapper = renderComponent({
      disabled: true,
      submit: true
    });
    wrapper.simulate('click', evt);
    assert.equal(evt.preventDefault.callCount, 1);
  });

  it('does not call the callable if not provided', function() {
    // This is checking that code is not executed and so there are no side
    // effects to check. No syntax error is considered a success.
    const wrapper = renderComponent();
    wrapper.simulate('click', evt);
  });

  it('stop the event propogating when clicked', function() {
    var callbackStub = sinon.stub();
    const wrapper = renderComponent({
      action: callbackStub
    });
    wrapper.simulate('click', evt);
    assert.equal(evt.stopPropagation.callCount, 1);
  });

  it('displays the provided title and tooltip', function() {
    const wrapper = renderComponent({
      tooltip: 'My tooltip'
    });
    assert.equal(wrapper.prop('title'), 'My tooltip');
  });

  it('displays provided children', function() {
    const wrapper = renderComponent({
      children: 'Hello, world.'
    });
    assert.equal(wrapper.text(), 'Hello, world.');
  });

  it('sets the type attribute', function() {
    const wrapper = renderComponent({
      type: 'reset'
    });
    assert.equal(wrapper.prop('type'), 'reset');
  });

  it('sets the disabled attribute if disabled', function() {
    const wrapper = renderComponent({
      disabled: true
    });
    expect(wrapper.prop('disabled')).toEqual(true);
  });
});
