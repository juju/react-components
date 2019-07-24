/* Copyright (C) 2017 Canonical Ltd. */

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import enhanceWithClickOutside from '../../utils/react-click-outside';

import Panel from '../panel/panel';
import './_dropdown-menu.scss';

/**
  Creates a dropdown menu with the supplied children as items.
*/
class DropdownMenu extends React.Component {
  /**
    When the menu is shown, clicking anywhere but the menu will close
    the menu.
    @param {Object} evt The click event.
  */
  handleClickOutside(evt) {
    this.props.handleClickOutside(evt);
  }

  render() {
    const instanceName = classNames('dropdown-menu', this.props.classes);
    return (
      <Panel instanceName={instanceName} visible={true}>
        <ul className="dropdown-menu__list">{this.props.children}</ul>
      </Panel>
    );
  }
}

DropdownMenu.propTypes = {
  // The children need to be <li>.
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  classes: PropTypes.array,
  handleClickOutside: PropTypes.func
};

export default enhanceWithClickOutside(DropdownMenu);
