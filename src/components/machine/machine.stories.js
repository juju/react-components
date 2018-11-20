/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const React = require('react');
const {storiesOf} = require('@storybook/react');

const Machine = require('./machine');

const machine = {
  name: 'new0',
  root: false,
  region: 'antarctica-east',
  series: 'spotty',
  status: 'chillaxing'
};
const units = [
  {
    icon: 'smalldata.svg',
    id: 'new0/0',
    name: 'new0/0',
    status: 'upper-middle'
  }
];

storiesOf('Machine', module)
  .addWithJSX('basic machine', () => (
    <Machine
      hardware={[
        {
          label: 'disk',
          value: 'floppy'
        },
        {
          label: 'memory',
          value: 'goldfish-like'
        }
      ]}
      machine={machine}
      menuItems={[
        {
          label: 'Delete',
          action: () => {}
        }
      ]}
      units={units}
    />
  ))
  .addWithJSX('basic container', () => (
    <Machine isContainer={true} machine={machine} units={units} />
  ))
  .addWithJSX('without hardware menu or units', () => <Machine machine={machine} />)
  .addWithJSX('with a terminal action', () => (
    <Machine isContainer={true} machine={machine} sshAction={() => {}} sshLabel="1.1.1.1" />
  ))
  .addWithJSX('as a root container', () => (
    <Machine
      isContainer={true}
      machine={{
        name: 'new0',
        root: true,
        region: 'antarctica-east',
        series: 'spotty',
        status: 'chillaxing'
      }}
    />
  ))
  .addWithJSX('with children', () => (
    <Machine machine={machine}>
      <span className="kids">content</span>
    </Machine>
  ));
