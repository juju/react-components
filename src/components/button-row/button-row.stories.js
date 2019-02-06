/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const React = require('react');
const {storiesOf} = require('@storybook/react');

const ButtonRow = require('./button-row');

storiesOf('ButtonRow', module)
  .addWithJSX('with single button', () => (
    <ButtonRow
      buttons={[
        {
          action: () => {},
          modifier: 'positive',
          title: 'My button',
          type: 'submit'
        }
      ]}
    />
  ))
  .addWithJSX('with multiple buttons', () => (
    <ButtonRow
      buttons={[
        {
          action: () => {},
          modifier: 'negative',
          title: 'My negative button',
          type: 'reset'
        },
        {
          action: () => {},
          modifier: 'positive',
          title: 'My positive button',
          type: 'submit'
        }
      ]}
    />
  ));
