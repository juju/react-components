/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const React = require('react');
const {storiesOf} = require('@storybook/react');

const Panel = require('./panel');

storiesOf('Panel', module)
  .addWithJSX('basic display', () => (
    <Panel
      instanceName="this-panel">
      <div>child</div>
    </Panel>
  ));
