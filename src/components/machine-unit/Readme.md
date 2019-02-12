## MachineUnit

A component for displaying a unit on a Juju machine.

Example usage:

```jsx
<MachineUnit
  icon="apache2.svg"
  key="apache2/1"
  menuItems={[
    {
      action: () => {},
      label: 'Remove'
    }
  ]}
  name="apache2/1"
  status="active"
/>
```
