/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const React = require('react');
const {storiesOf} = require('@storybook/react');

const SvgIcon = require('./svg-icon');

storiesOf('SvgIcon', module)
  .addWithJSX('basic display', () => <SvgIcon name="icon-name" />)
  .addWithJSX('with a size', () => <SvgIcon name="icon-name" size={20} />)
  .addWithJSX('with height and width', () => (
    <SvgIcon height={20} name="icon-name" width={100} />
  ));
