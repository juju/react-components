/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const React = require('react');
const {storiesOf} = require('@storybook/react');

const ExpandingRow = require('./expanding-row');

storiesOf('ExpandingRow', module)
  .addWithJSX('basic display', () => (
    <ExpandingRow>
      <span>closed</span>
      <span>open</span>
    </ExpandingRow>
  ))
  .addWithJSX('begin expanded', () => (
    <ExpandingRow
      expanded={true}>
      <span>closed</span>
      <span>open</span>
    </ExpandingRow>
  ))
  .addWithJSX('disabled', () => (
    <ExpandingRow
      clickable={false}>
      <span>closed</span>
      <span>open</span>
    </ExpandingRow>
  ));
