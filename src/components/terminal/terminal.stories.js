/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const React = require('react');
const {storiesOf} = require('@storybook/react');

const Terminal = require('./terminal');

const websocket = function() {};
websocket.prototype.send = () => {};
websocket.prototype.close = () => {};

storiesOf('Terminal', module)
  .addWithJSX('basic display', () => (
    <Terminal
      addNotification={() => {}}
      address="1.2.3.4:123"
      changeState={() => {}}
      creds={{
        user: 'user',
        password: 'password',
        macaroons: {}
      }}
      WebSocket={websocket} />
  ));
