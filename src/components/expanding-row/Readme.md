## ExpandingRow

A component for displaying a row that can be expanded.

Example usage:

```jsx
<ExpandingRow>
  <span>Closed content</span>
  <span>Expanded content</span>
</ExpandingRow>
```

Begin expanded:

```jsx
<ExpandingRow expanded={true}>
  <span>Closed content</span>
  <span>Expanded content</span>
</ExpandingRow>
```

Disabled:

```jsx
<ExpandingRow clickable={false}>
  <span>Closed content</span>
  <span>Expanded content</span>
</ExpandingRow>
```
