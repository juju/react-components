## Status

A component for displaying the full status of a Juju model and the contained entities.

Example usage:

```jsx
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
  remoteApplications: {app: {offerURL: 'saas.mysql'}},
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
/>;
```
