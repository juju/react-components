/* Copyright (C) 2018 Canonical Ltd. */

import React from 'react';
import enzyme from 'enzyme';

import Button from './button';

describe('Button', function() {
  let evt;

  const renderComponent = (options = {}) =>
    enzyme.shallow(
      <Button
        action={options.action}
        disabled={options.disabled}
        extraClasses={options.extraClasses}
        modifier={options.modifier}
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

  it('default matches the snapshot', function() {
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.p-button').length).toEqual(1);
  });

  it('neutral matches the snapshot', function() {
    const wrapper = renderComponent({
      modifier: 'neutral'
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.p-button--neutral').length).toEqual(1);
  });

  it('positive matches the snapshot', function() {
    const wrapper = renderComponent({
      modifier: 'positive'
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.p-button--positive').length).toEqual(1);
  });

  it('negative matches the snapshot', function() {
    const wrapper = renderComponent({
      modifier: 'negative'
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.p-button--negative').length).toEqual(1);
  });

  it('with custom type matches snapshot', function() {
    const wrapper = renderComponent({
      type: 'submit'
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.p-button').length).toEqual(1);
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
      type: 'submit'
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

  it('stop the event propagating when clicked', function() {
    var callbackStub = sinon.stub();
    const wrapper = renderComponent({
      action: callbackStub
    });
    wrapper.simulate('click', evt);
    assert.equal(evt.stopPropagation.callCount, 1);
  });

  it('displays the provided title and tooltip', function() {
    const wrapper = renderComponent({
      tooltip: {msg: 'my tooltip', position: 'btm-rgt'}
    });
    expect(wrapper.find('.p-tooltip__message').length).toEqual(1);
    expect(wrapper.find('#btm-rgt').length).toEqual(1);
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

  it('applies extra classes if supplies', function() {
    const wrapper = renderComponent({
      extraClasses: 'foo bar'
    });
    expect(wrapper.hasClass('foo')).toEqual(true);
    expect(wrapper.hasClass('bar')).toEqual(true);
  });
});
