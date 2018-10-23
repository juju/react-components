/* Copyright (C) 2017 Canonical Ltd. */
'use strict';

const React = require('react');
const enzyme = require('enzyme');

const MachineUnit = require('./machine-unit');


describe('MachineUnit', () => {

  const renderComponent = (options = {}) => enzyme.shallow(
    <MachineUnit
      classes={options.classes}
      icon={options.icon || 'smalldata.svg'}
      menuItems={options.menuItems}
      name={options.name || 'bigmoney/99'}
      status={options.status || 'upper-middle'} />
  );

  it('can render', () => {
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
  });

  it('can render with a menu', () => {
    const menuItems = [{
      label: 'Destroy',
      action: sinon.stub()
    }];
    const wrapper = renderComponent({
      menuItems
    });
    assert.equal(wrapper.find('.machine-unit__name').text(), 'bigmoney/99');
    assert.equal(wrapper.find('ButtonDropdown').prop('listItems'), menuItems);
  });

  it('can render with additional classes', () => {
    const wrapper = renderComponent({
      classes: ['doughnuts']
    });
    assert.equal(wrapper.prop('className').includes('doughnuts'), true);
  });
});
