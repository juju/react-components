/* Copyright (C) 2017 Canonical Ltd. */

'use strict';

const React = require('react');
const enzyme = require('enzyme');

const ButtonDropdown = require('./button-dropdown');

describe('Button Dropdown', function() {

  const renderComponent = (options = {}) => enzyme.shallow(
    <ButtonDropdown
      activeItem="i4"
      classes={['extra-classes']}
      disableDropdown={options.disableDropdown || false}
      icon={options.icon || 'icon_16'}
      listItems={options.listItems || [{
        action: sinon.stub(),
        label: 'item1'
      }, {
        label: 'item2'
      }, {
        element: (<span>item3</span>)
      }, {
        action: sinon.stub(),
        id: 'i4',
        label: 'item4'
      }]}
      tooltip="more" />
  );


  it('can render closed', () => {
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
  });

  it('can render open', () => {
    const wrapper = renderComponent();
    wrapper.find('.button-dropdown__button').simulate('click');
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('can have a custom icon supplied', () => {
    const icon = <img alt="test-icond" src="" />;
    const wrapper = renderComponent({icon});
    assert.equal(wrapper.find('img').prop('alt'), 'test-icond');
  });

  it('can disable the dropdown', () => {
    const wrapper = renderComponent({
      disableDropdown: true
    });
    // We're setting the state to showDropdown but because it is disabled
    // the drop down is not rendered.
    wrapper.find('.button-dropdown__button').simulate('click');
    wrapper.update();
    assert.equal(wrapper.find('DropdownMenu').length, 0);
  });
});
