/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const React = require('react');
const {storiesOf} = require('@storybook/react');

const ButtonDropdown = require('./button-dropdown');

storiesOf('ButtonDropdown', module)
  .addWithJSX('basic display', () => (
    <ButtonDropdown
      activeItem="i4"
      classes={['extra-classes']}
      disableDropdown={false}
      icon={'icon_16'}
      listItems={[{
        action: () => {},
        label: 'item1'
      }, {
        label: 'item2'
      }, {
        element: (<span>item3</span>)
      }, {
        action: () => {},
        id: 'i4',
        label: 'item4'
      }]}
      tooltip="more" />
  ));
