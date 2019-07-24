## StatusTable

A component for displaying a table of Juju entities and their statuses.

Example usage:

```jsx
<StatusTable
  headers={[
    {
      content: 'Unit',
      columnSize: 2
    },
    {
      content: 'Workload',
      columnSize: 2
    }
  ]}
  rows={[
    {
      columns: [
        {
          columnSize: 2,
          content: 'apache2/0'
        },
        {
          columnSize: 2,
          content: 'running'
        }
      ],
      key: 'apache2/0'
    }
  ]}
  statusFilter="error"
/>
```
