// https://github.com/kentor/react-click-outside/blob/master/index.js

import hoistNonReactStatic from 'hoist-non-react-statics';
import React from 'react';
import ReactDOM from 'react-dom';

export default function enhanceWithClickOutside(WrappedComponent) {
  const componentName = WrappedComponent.displayName || WrappedComponent.name;

  class EnhancedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
      document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside(e) {
      const domNode = this.__domNode;
      if (
        (!domNode || !domNode.contains(e.target)) &&
        typeof this.__wrappedComponent.handleClickOutside === 'function'
      ) {
        this.__wrappedComponent.handleClickOutside(e);
      }
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          ref={c => {
            this.__wrappedComponent = c;
            this.__domNode = ReactDOM.findDOMNode(c);
          }}
        />
      );
    }
  }

  EnhancedComponent.displayName = `Wrapped${componentName}`;
  // XXX hatch 9 Aug 2017 Expose the wrapped component for testing.
  EnhancedComponent.WrappedComponent = WrappedComponent;

  return hoistNonReactStatic(EnhancedComponent, WrappedComponent);
};
