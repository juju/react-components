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
          title: 'My button',
          type: 'submit',
          action: () => {}
        }
      ]}
    />
  ))
  .addWithJSX('with multipe buttons', () => (
    <ButtonRow
      buttons={[
        {
          title: 'My button',
          type: 'submit',
          action: () => {}
        },
        {
          title: 'Another button',
          type: 'submit',
          action: () => {}
        }
      ]}
    />
  ));
