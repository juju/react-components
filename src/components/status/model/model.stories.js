/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const React = require('react');
const {storiesOf} = require('@storybook/react');

const StatusModel = require('./model');

const counts = {
  applications: 5,
  machines: 3,
  relations: 9,
  remoteApplications: 7,
  units: 1
};
const model = {
  cloud: 'aws',
  environmentName: 'my-model',
  modelUUID: 'myuuid',
  region: 'neutral zone',
  sla: 'advanced',
  version: '2.42.47'
};

storiesOf('StatusModel', module).addWithJSX('basic display', () => (
  <StatusModel changeFilter={() => {}} counts={counts} highestStatus={'error'} model={model} />
));
