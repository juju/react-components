/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const classnames = require('classnames');
const PropTypes = require('prop-types');
const React = require('react');

require('./_button.scss');

class Button extends React.Component {
  /**
    Call the action if not disabled.
    @param {Object} e The click event.
  */
  _handleClick(e) {
    // Don't bubble the click the parent.
    e.stopPropagation();
    // If submit is true then typically no action is provided because it
    // is submitting a form.
    if (!this.props.disabled && this.props.action) {
      this.props.action();
    }
    if (this.props.disabled && this.props.type === 'submit') {
      e.preventDefault();
    }
  }

  render() {
    const classes = classnames(
      this.props.modifier ? `p-button--${this.props.modifier}` : `p-button`,
      this.props.tooltip ? `p-tooltip p-tooltip--${this.props.tooltip.position}` : ``,
      this.props.extraClasses
    );
    return (
      <button
        className={classes}
        disabled={this.props.disabled}
        onClick={this._handleClick.bind(this)}
        type={this.props.type ? this.props.type : 'button'}
      >
        {this.props.children}
        {this.props.tooltip && (
          <span className="p-tooltip__message" id={this.props.tooltip.position} role="tooltip">
            {this.props.tooltip.msg}
          </span>
        )}
      </button>
    );
  }
}

Button.propTypes = {
  action: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  extraClasses: PropTypes.string,
  modifier: PropTypes.string,
  tooltip: PropTypes.shape({
    msg: PropTypes.string,
    position: PropTypes.string
  }),
  type: PropTypes.string
};

module.exports = Button;
