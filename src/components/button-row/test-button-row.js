/* Copyright (C) 2017 Canonical Ltd. */

import React from 'react';
import enzyme from 'enzyme';

import ButtonRow from './button-row';

describe('ButtonRow', function() {
  const renderComponent = (options = {}) =>
    enzyme.shallow(<ButtonRow buttons={options.buttons || []} />);

  it('generates a button', function() {
    var callbackStub = sinon.stub();
    var buttons = [
      {
        title: 'My button',
        type: 'submit',
        action: callbackStub
      }
    ];
    const wrapper = renderComponent({buttons});
    expect(wrapper).toMatchSnapshot();
  });

  it('generates more than one button', function() {
    var callbackStub = sinon.stub();
    var buttons = [
      {
        title: 'My first button',
        type: 'submit',
        action: callbackStub
      },
      {
        title: 'My second button',
        type: 'submit',
        action: callbackStub
      }
    ];
    const wrapper = renderComponent({buttons});
    expect(wrapper).toMatchSnapshot();
  });
});
