## StatusUnitList

A component for displaying the status of a list of Juju units.

Example usage:

```jsx
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
  }
};
const units = {
  'etcd/0': {
    modelUUID: '32c9c2db-0955-459a-8201-539657ef0da1',
    name: 'etcd/0',
    application: 'etcd',
    series: 'xenial',
    charmURL: 'cs:~containers/etcd-126',
    publicAddress: '13.211.141.188',
    privateAddress: '172.31.6.46',
    machineID: '2',
    ports: [
      {
        protocol: 'tcp',
        number: 2379
      }
    ],
    portRanges: [
      {
        fromPort: 2379,
        toPort: 2379,
        protocol: 'tcp'
      }
    ],
    subordinate: false,
    workloadStatus: {
      current: 'active',
      message: 'Healthy with 3 known peers',
      since: '2018-09-18T12:37:52.738056612Z',
      version: ''
    },
    agentStatus: {
      current: 'idle',
      message: '',
      since: '2018-09-18T12:43:05.056981166Z',
      version: '2.4.3'
    }
  }
};
<StatusUnitList
  applications={applications}
  generateMachineURL={() => {}}
  generateUnitOnClick={() => {}}
  generateUnitURL={() => {}}
  getIconPath={() => {}}
  onMachineClick={() => {}}
  units={units}
/>;
```
