/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const React = require('react');
const {storiesOf} = require('@storybook/react');

const Button = require('./button');

storiesOf('Button', module)
  .addWithJSX('Neutral', () => <Button modifier="neutral">Neutral</Button>)
  .addWithJSX('Neutral (disabled)', () => (
    <Button disabled={true} modifier="neutral">
      Neutral (disabled)
    </Button>
  ))
  .addWithJSX('Positive', () => <Button modifier="positive">Positive</Button>)
  .addWithJSX('Positive (disabled)', () => (
    <Button disabled={true} modifier="positive">
      Positive (disabled)
    </Button>
  ))
  .addWithJSX('Negative', () => <Button modifier="negative">Negative</Button>)
  .addWithJSX('Negative (disabled)', () => (
    <Button disabled={true} modifier="negative">
      Negative (disabled)
    </Button>
  ))
  .addWithJSX('with a type of Submit', () => <Button type="submit">Submit button</Button>)
  .addWithJSX('with a type of Reset', () => (
    <Button modifier="negative" type="reset">
      Reset button
    </Button>
  ))
  .addWithJSX('with tooltip', () => (
    <Button tooltip={{msg: 'tool tip message', position: 'btm-rgt'}} type="submit">
      Hover me
    </Button>
  ));
