/* Copyright (C) 2018 Canonical Ltd. */

import React from 'react';
import enzyme from 'enzyme';

import StatusLabel from './label';

describe('StatusTable', () => {
  const renderComponent = (options = {}) =>
    enzyme.shallow(<StatusLabel status={options.status || 'pending'} />);

  it('renders', () => {
    const wrapper = renderComponent({status: 'available'});
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with a known status', () => {
    const wrapper = renderComponent({status: 'ok'});
    assert.strictEqual(wrapper.prop('className').includes('status-label--ok'), true);
  });
});
