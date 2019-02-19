/* Copyright (C) 2017 Canonical Ltd. */

import React from 'react';
import enzyme from 'enzyme';

import Status from './status';

describe('Status', () => {
  let model, valueStore;

  const renderComponent = (options = {}) =>
    enzyme.shallow(
      <Status
        generateApplicationOnClick={
          options.generateApplicationOnClick === undefined
            ? sinon.stub()
            : options.generateApplicationOnClick
        }
        generateApplicationURL={
          options.generateApplicationURL === undefined
            ? sinon.stub()
            : options.generateApplicationURL
        }
        generateCharmURL={
          options.generateCharmURL === undefined ? sinon.stub() : options.generateCharmURL
        }
        generateMachineOnClick={
          options.generateMachineOnClick === undefined
            ? sinon.stub()
            : options.generateMachineOnClick
        }
        generateMachineURL={
          options.generateMachineURL === undefined ? sinon.stub() : options.generateMachineURL
        }
        generateUnitOnClick={
          options.generateUnitOnClick === undefined
            ? sinon.stub()
            : options.generateUnitOnClick
        }
        generateUnitURL={
          options.generateUnitURL === undefined ? sinon.stub() : options.generateUnitURL
        }
        getIconPath={options.getIconPath || sinon.stub()}
        model={options.model || model}
        navigateToApplication={
          options.navigateToApplication === undefined
            ? sinon.stub()
            : options.navigateToApplication
        }
        navigateToCharm={
          options.navigateToCharm === undefined ? sinon.stub() : options.navigateToCharm
        }
        navigateToMachine={
          options.navigateToMachine === undefined ? sinon.stub() : options.navigateToMachine
        }
        valueStore={options.valueStore || valueStore}
      />
    );

  beforeEach(() => {
    model = {
      cloud: 'aws',
      environmentName: 'my-model',
      modelUUID: 'myuuid',
      region: 'neutral zone',
      sla: 'advanced',
      version: '2.42.47'
    };
    valueStore = {
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
  });

  it('renders when not connected to a model', () => {
    model = {};
    const wrapper = renderComponent();
    assert.equal(
      wrapper.find('.status-view__content').text(),
      'Cannot show the status: the GUI is not connected to a model.'
    );
  });

  it('renders without entities', () => {
    valueStore.applications = {};
    valueStore.machines = {};
    valueStore.relations = {};
    valueStore.remoteApplications = {};
    valueStore.units = {};
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with entites', () => {
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without link functions', () => {
    const wrapper = renderComponent({
      generateApplicationOnClick: null,
      generateApplicationURL: null,
      generateCharmURL: null,
      generateMachineOnClick: null,
      generateMachineURL: null,
      generateUnitOnClick: null,
      generateUnitURL: null,
      navigateToApplication: null,
      navigateToCharm: null,
      navigateToMachine: null
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('can set the highest status', () => {
    valueStore.units = {
      unit: {
        agentStatus: {
          current: 'error'
        },
        workloadStatus: {
          current: ''
        }
      }
    };
    const wrapper = renderComponent();
    assert.equal(wrapper.find('StatusModel').prop('highestStatus'), 'error');
  });
});
