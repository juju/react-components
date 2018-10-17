/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const React = require('react');
const {storiesOf} = require('@storybook/react');

const DropdownMenu = require('./dropdown-menu');

storiesOf('DropdownMenu', module)
  .addWithJSX('basic display', () => (
    <DropdownMenu
      handleClickOutside={() => {}}>
      <li>child</li>
    </DropdownMenu>
  ));
