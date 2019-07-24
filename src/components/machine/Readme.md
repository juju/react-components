## Machine

A component for displaying a Juju machine.

Example usage:

```jsx
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
  machine={{
    name: 'new0',
    root: false,
    region: 'antarctica-east',
    series: 'spotty',
    status: 'chillaxing'
  }}
  menuItems={[
    {
      label: 'Delete',
      action: () => {}
    }
  ]}
  units={[
    {
      icon: 'smalldata.svg',
      id: 'new0/0',
      name: 'new0/0',
      status: 'upper-middle'
    }
  ]}
/>
```

Display a container:

```jsx
<Machine
  isContainer={true}
  machine={{
    name: 'new0',
    root: false,
    region: 'antarctica-east',
    series: 'spotty',
    status: 'chillaxing'
  }}
  units={[
    {
      icon: 'smalldata.svg',
      id: 'new0/0',
      name: 'new0/0',
      status: 'upper-middle'
    }
  ]}
/>
```

Without hardware or units:

```jsx
<Machine
  machine={{
    name: 'new0',
    root: false,
    region: 'antarctica-east',
    series: 'spotty',
    status: 'chillaxing'
  }}
/>
```

With a terminal action:

```jsx
<Machine
  isContainer={true}
  machine={{
    name: 'new0',
    root: false,
    region: 'antarctica-east',
    series: 'spotty',
    status: 'chillaxing'
  }}
  sshAction={() => {}}
  sshLabel="1.1.1.1"
/>
```

As a root container:

```jsx
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
```

With children:

```jsx
<Machine
  machine={{
    name: 'new0',
    root: false,
    region: 'antarctica-east',
    series: 'spotty',
    status: 'chillaxing'
  }}
>
  <span className="kids">content</span>
</Machine>
```
