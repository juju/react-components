## ButtonRow

This component is used to display a list of buttons in a row.

Example usage:

```jsx
<ButtonRow
  buttons={[
    {
      action: () => {},
      modifier: 'negative',
      title: 'My negative button',
      type: 'reset'
    },
    {
      action: () => {},
      modifier: 'positive',
      title: 'My positive button',
      type: 'submit'
    }
  ]}
/>
```

With a single button

```jsx
<ButtonRow
  buttons={[
    {
      action: () => {},
      modifier: 'positive',
      title: 'My button',
      type: 'submit'
    }
  ]}
/>
```
