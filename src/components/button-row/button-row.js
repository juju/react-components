/* Copyright (C) 2018 Canonical Ltd. */

import PropTypes from 'prop-types';
import React from 'react';

import Button from '../button/button';
import './_button-row.scss';

const ButtonRow = props => {
  const buttonListItems = props.buttons.map((button, index) => (
    <li className="p-inline-list__item" key={index}>
      <Button
        action={button.action}
        disabled={button.disabled}
        extraClasses={button.extraClasses}
        modifier={button.modifier}
        tooltip={button.tooltip}
        type={button.type}
      >
        {button.title}
      </Button>
    </li>
  ));

  return (
    <div className="button-row">
      <ul className="p-inline-list">{buttonListItems}</ul>
    </div>
  );
};

ButtonRow.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      ...Button.propTypes
    })
  )
};

export default ButtonRow;
