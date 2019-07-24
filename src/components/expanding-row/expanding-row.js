/* Copyright (C) 2017 Canonical Ltd. */

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './_expanding-row.scss';

class ExpandingRow extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
      styles: {
        height: '0px',
        opacity: 0
      }
    };
    this.innerRef = React.createRef();
  }

  componentDidMount() {
    // If the component should initially be shown as expanded then animate it
    // open.
    if (this.props.expanded) {
      this._toggle();
    }
    // Observe the DOM for any changes to the content of the expanded row. If
    // the content changes then animate to the new size required.
    this.observer = new MutationObserver(mutations => {
      this._resize();
    });
    this.observer.observe(this.innerRef.current, {childList: true, subtree: true});
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.props.expanded !== nextProps.expanded) {
      this._toggle();
    }
  }

  componentWillUnmount() {
    // Stop observing the child DOM.
    this.observer.disconnect();
  }

  /**
    Generate the base class names for the component.
    @returns {Object} The collection of class names.
  */
  _generateClasses() {
    var classes = this.props.classes || {};
    classes['expanding-row--expanded'] = this.state.expanded;
    classes['expanding-row--clickable'] = this.props.clickable;
    return classNames('expanding-row', 'twelve-col', classes);
  }

  /**
    Toggle between the expanded and closed states.
  */
  _toggle() {
    this.setState({expanded: !this.state.expanded}, () => {
      this._resize();
    });
  }

  /**
    Resize the row
  */
  _resize() {
    const expanded = this.state.expanded;
    this.setState({
      styles: {
        height: expanded ? this.innerRef.current.offsetHeight + 'px' : '0px',
        opacity: expanded ? 1 : 0
      }
    });
  }

  render() {
    return (
      <li
        className={this._generateClasses()}
        onClick={this.props.clickable ? this._toggle.bind(this) : undefined}
        style={this.props.style}
      >
        <div className="expanding-row__initial twelve-col no-margin-bottom">
          {this.props.children[0]}
        </div>
        <div className="expanding-row__expanded twelve-col" style={this.state.styles}>
          <div className="twelve-col no-margin-bottom" ref={this.innerRef}>
            {this.props.children[1]}
          </div>
        </div>
      </li>
    );
  }
}

ExpandingRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  classes: PropTypes.object,
  clickable: PropTypes.bool,
  expanded: PropTypes.bool,
  style: PropTypes.object
};

ExpandingRow.defaultProps = {
  clickable: true
};

export default ExpandingRow;
