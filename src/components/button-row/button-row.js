/* Copyright (C) 2017 Canonical Ltd. */
'use strict';

const classNames = require('classnames');
const PropTypes = require('prop-types');
const React = require('react');

const Button = require('../button/button');

require('./_button-row.scss');

class ButtonRow extends React.Component {
  /**
    Returns the classes for the footer based on the provided props.
    @returns {String} The collection of class names.
  */
  _generateClasses() {
    var classes = {};
    var buttonsLength = this.props.buttons.length;
    classes['button-row--multiple'] = buttonsLength > 0;
    classes['button-row--count-' + buttonsLength] = true;
    return classNames('button-row', classes);
  }

  /**
    Creates the buttons based on the provided props.
    @param {Array} buttons The properties of the buttons to generate.
    @returns {Array} Collection of buttons.
  */
  _generateButtons(buttons) {
    var components = [];
    buttons.forEach(button => {
      components.push(
        <Button
          action={button.action}
          disabled={button.disabled}
          key={button.title}
          submit={button.submit}
          type={button.type}
        >
          {button.title}
        </Button>
      );
    });
    return components;
  }

  /**
  Creates the inline list based on the provided props.
  @param {Array} components The properties of the Button components to generate.
  @returns {Array} Collection of inline list items.
  */
  _generateButtonsList(components) {
    var listItems = [];
    components.forEach((component, index) => {
      listItems.push(
        // Using component.title as a key here as it should always be unique in a row of buttons
        <li className="p-inline-list__item" key={index}>
          {component}
        </li>
      );
    });
    return listItems;
  }

  render() {
    var buttons = this._generateButtons(this.props.buttons);
    return <div className={this._generateClasses()}>{buttons}</div>;
  }
}

ButtonRow.propTypes = {
  buttons: PropTypes.array.isRequired
};

module.exports = ButtonRow;
