/* Copyright (C) 2017 Canonical Ltd. */

import React from 'react';
import enzyme from 'enzyme';

import DropdownMenu from './dropdown-menu';

describe('Dropdown Menu', function() {
  const renderComponent = (options = {}) =>
    enzyme.shallow(
      <DropdownMenu.WrappedComponent
        handleClickOutside={options.handleClickOutside || sinon.stub()}
      >
        {options.children}
      </DropdownMenu.WrappedComponent>
    );

  it('can render', () => {
    const wrapper = renderComponent({
      children: <li>child</li>
    });
    expect(wrapper).toMatchSnapshot();
  });
});
