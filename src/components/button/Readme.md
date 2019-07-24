## Button

This is a generic button component using the [Vanilla button](https://docs.vanillaframework.io/en/patterns/buttons) styles.

Example usage:

```jsx
<Button>I'm a button!</Button>
```

Button types:

```jsx
<Button modifier="positive">Positive</Button>
```

Disabled button:

```jsx
<Button disabled={true}>Disabled</Button>
```

Submit button:

```jsx
<Button disabled={true}>Submit</Button>
```

With a tooltip:

```jsx
<Button tooltip={{msg: 'Tooltip message', position: 'btm-rgt'}}>Hover me</Button>
```
