/* Copyright (C) 2018 Canonical Ltd. */

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import {getStatusClass} from '../../../utils/utils';
import './_label.scss';

const StatusLabel = props => {
  const status = props.status;
  const classes = classNames('status-label', getStatusClass('status-label--', status));
  return <span className={classes}>{status}</span>;
};

StatusLabel.propTypes = {
  // If the status supplied is "ok", "pending", or "error" it will get
  // highlighted otherwise it'll just show the text.
  status: PropTypes.string.isRequired
};

export default StatusLabel;
