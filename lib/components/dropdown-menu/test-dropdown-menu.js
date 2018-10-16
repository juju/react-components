/* Copyright (C) 2017 Canonical Ltd. */

'use strict';

const React = require('react');
const enzyme = require('enzyme');

const DropdownMenu = require('./dropdown-menu');

describe('Dropdown Menu', function() {

  const renderComponent = (options = {}) => enzyme.shallow(
    <DropdownMenu.WrappedComponent
      handleClickOutside={options.handleClickOutside || sinon.stub()}>
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
