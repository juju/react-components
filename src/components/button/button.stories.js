/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const React = require('react');
const {storiesOf} = require('@storybook/react');

const Button = require('./button');

storiesOf('Button', module)
  .addWithJSX('basic display', () => <Button>Label</Button>)
  .addWithJSX('disabled', () => <Button disabled={true}>Label</Button>)
  .addWithJSX('with a tooltip', () => <Button tooltip="Hello, world">Label</Button>)
  .addWithJSX('with a type', () => <Button type="positive">Label</Button>);
