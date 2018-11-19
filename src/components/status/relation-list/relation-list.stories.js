/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const React = require('react');
const {storiesOf} = require('@storybook/react');

const StatusRelationList = require('./relation-list');

const applications = {
  etcd: {
    modelUUID: '32c9c2db-0955-459a-8201-539657ef0da1',
    name: 'etcd',
    exposed: false,
    charmURL: 'cs:~containers/etcd-126',
    ownerTag: '',
    life: 'alive',
    minUnits: 0,
    constraints: {
      'root-disk': 8192
    },
    config: {
      channel: '3.2/stable'
    },
    subordinate: false,
    status: {
      current: 'waiting',
      message: 'waiting for machine',
      since: '2018-09-18T12:31:14.763574172Z',
      version: ''
    },
    workloadVersion: ''
  },
  'kubernetes-master': {
    modelUUID: '32c9c2db-0955-459a-8201-539657ef0da1',
    name: 'etcd',
    exposed: false,
    charmURL: 'cs:~containers/etcd-126',
    ownerTag: '',
    life: 'alive',
    minUnits: 0,
    constraints: {
      'root-disk': 8192
    },
    config: {
      channel: '3.2/stable'
    },
    subordinate: false,
    status: {
      current: 'waiting',
      message: 'waiting for machine',
      since: '2018-09-18T12:31:14.763574172Z',
      version: ''
    },
    workloadVersion: ''
  }
};
const relations = {
  '1': {
    modelUUID: '32c9c2db-0955-459a-8201-539657ef0da1',
    key: 'kubernetes-master:etcd etcd:db',
    id: 1,
    endpoints: [
      {
        applicationName: 'kubernetes-master',
        relation: {
          name: 'etcd',
          role: 'requirer',
          interface: 'etcd',
          optional: false,
          limit: 1,
          scope: 'global'
        }
      },
      {
        applicationName: 'etcd',
        relation: {
          name: 'db',
          role: 'provider',
          interface: 'etcd',
          optional: false,
          limit: 0,
          scope: 'global'
        }
      }
    ]
  }
};

storiesOf('StatusRelationList', module).addWithJSX('basic display', () => (
  <StatusRelationList
    applications={applications}
    generateApplicationURL={() => {}}
    getIconPath={() => {}}
    onApplicationClick={() => {}}
    relations={relations}
  />
));
