## Terminal

A component for displaying a Juju connected terminal.

Example usage:

```jsx
const websocket = function() {};
websocket.prototype.send = () => {};
websocket.prototype.close = () => {};

<Terminal
  addNotification={() => {}}
  address="1.2.3.4:123"
  creds={{
    user: 'user',
    password: 'password',
    macaroons: {}
  }}
  WebSocket={websocket}
/>;
```
