/* Copyright (C) 2017 Canonical Ltd. */
'use strict';

const React = require('react');
const enzyme = require('enzyme');

const ButtonRow = require('./button-row');

describe('ButtonRow', function() {

  const renderComponent = (options = {}) => enzyme.shallow(
    <ButtonRow
      buttons={options.buttons || []} />
  );

  it('generates a button', function() {
    var callbackStub = sinon.stub();
    var buttons = [{
      title: 'My button',
      type: 'submit',
      action: callbackStub
    }];
    const wrapper = renderComponent({buttons});
    expect(wrapper).toMatchSnapshot();
  });

  it('sets a class when generating multiple buttons', function() {
    var callbackStub = sinon.stub();
    var buttons = [{
      title: 'My button',
      type: 'submit',
      action: callbackStub
    }, {
      title: 'Another button',
      type: 'submit',
      action: callbackStub
    }];
    const wrapper = renderComponent({buttons});
    expect(wrapper).toMatchSnapshot();
  });
});
