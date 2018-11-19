/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const React = require('react');
const {storiesOf} = require('@storybook/react');

const Status = require('./status');

const model = {
  cloud: 'aws',
  environmentName: 'my-model',
  modelUUID: 'myuuid',
  region: 'neutral zone',
  sla: 'advanced',
  version: '2.42.47'
};
const valueStore = {
  applications: {
    app: {
      status: {
        current: ''
      }
    }
  },
  machines: {
    machine: {
      agentStatus: {
        current: ''
      }
    }
  },
  relations: {relation: {}},
  remoteApplications: {app: {}},
  units: {
    unit: {
      agentStatus: {
        current: ''
      },
      workloadStatus: {
        current: ''
      }
    }
  }
};

storiesOf('Status', module).addWithJSX('basic display', () => (
  <Status
    generateApplicationOnClick={() => {}}
    generateApplicationURL={() => {}}
    generateCharmURL={() => {}}
    generateMachineOnClick={() => {}}
    generateMachineURL={() => {}}
    generateUnitOnClick={() => {}}
    generateUnitURL={() => {}}
    getIconPath={() => {}}
    model={model}
    navigateToApplication={() => {}}
    navigateToCharm={() => {}}
    navigateToMachine={() => {}}
    valueStore={valueStore}
  />
));
