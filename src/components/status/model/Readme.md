## StatusModel

A component for displaying the status details of a Juju model.

Example usage:

```jsx
<StatusModel
  changeFilter={() => {}}
  counts={{
    applications: 5,
    machines: 3,
    relations: 9,
    remoteApplications: 7,
    units: 1
  }}
  highestStatus={'error'}
  model={{
    cloud: 'aws',
    environmentName: 'my-model',
    modelUUID: 'myuuid',
    region: 'neutral zone',
    sla: 'advanced',
    version: '2.42.47'
  }}
/>
```
