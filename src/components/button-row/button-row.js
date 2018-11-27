/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const PropTypes = require('prop-types');
const React = require('react');

const Button = require('../button/button');

require('./_button-row.scss');

const ButtonRow = props => {
  const buttonsArr = props.buttons;
  const buttonListItems = buttonsArr.map((button, index) => (
    <li className="p-inline-list__item" key={index}>
      <Button {...props}>{button.title}</Button>
    </li>
  ));

  return (
    <div className="button-row">
      <ul className="p-inline-list">{buttonListItems}</ul>
    </div>
  );
};

ButtonRow.propTypes = {
  buttons: PropTypes.array.isRequired
};

module.exports = ButtonRow;
