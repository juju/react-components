/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const React = require('react');
const {storiesOf} = require('@storybook/react');

const StatusRemoteApplicationList = require('./remote-application-list');

const remoteApplications = {
  'mysql': {
    modelUUID: 'fe1060e8-0a10-424f-8007-d45c69ca04b5',
    name: 'mysql',
    offerUUID: 'efb9f9b7-65f3-4f6f-86a4-58bebf32c1f4',
    offerURL: 'localhost-localhost:admin/saas.mysql',
    life: 'alive',
    status: {
      current: 'waiting',
      message: 'waiting for machine',
      since: '2018-09-19T12:30:05.572836696Z',
      version: ''
    }
  }
};

storiesOf('StatusRemoteApplicationList', module)
  .addWithJSX('basic display', () => (
    <StatusRemoteApplicationList
      remoteApplications={remoteApplications} />
  ));
