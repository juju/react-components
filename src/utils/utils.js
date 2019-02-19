/* Copyright (C) 2018 Canonical Ltd. */

/**
  Normalised statuses for use with the status components.
*/
const STATUSES = {
  ERROR: 'error',
  PENDING: 'pending',
  OK: 'ok'
};

/**
  The order of priority for displaying a status.
*/
const STATUS_ORDER = [STATUSES.ERROR, STATUSES.PENDING, STATUSES.OK];

/**
  Get the highest status from a list of statuses.
  @param statuses {Ȧrray} A list of statuses.
  @returns {String} The status.
*/
const getHighestStatus = statuses => {
  const normalised = statuses.map(status => normaliseStatus(status));
  let status;
  // Loop through the order of priority until there is a matching status.
  STATUS_ORDER.some(val => {
    if (normalised.indexOf(val) > -1) {
      status = val;
      return true;
    }
  });
  return status;
};

/**
  Normalise the status value.
  @param status {String} The raw value.
  @returns {String} The normalised status ('ok', 'error' or 'pending').
*/
const normaliseStatus = value => {
  switch (value) {
    case 'active':
    case 'idle':
    case 'started':
    case 'waiting':
      return STATUSES.OK;
    case 'blocked':
    case 'down':
    case 'error':
      return STATUSES.ERROR;
    case 'pending':
    case 'installing':
    case 'executing':
    case 'allocating':
    case 'maintenance':
      return STATUSES.PENDING;
    default:
      return STATUSES.OK;
  }
};
  /**
  Return an element class name suitable for the given value.
  @param {String} prefix The class prefix.
  @param {String} value The provided value.
  @returns {String} The class name ('ok', 'error' or '').
*/
const getStatusClass = (prefix, value) => {
  if (!value) {
    // If there is no value then ignore it. This might be the case when an
    // entity's state property only has a value for pending/error states.
    return '';
  }
  if (!Array.isArray(value)) {
    value = [value];
  }
  const normalised = value.map(val => normaliseStatus(val));
  return prefix + getHighestStatus(normalised);
};

/**
  Filter units by those that have been committed.
  @param units {Array} The list of units.
  @returns {Array} The list of filtered units..
*/
const getRealUnits = units => {
  // Unplaced units have no machine defined. Subordinate units have an empty
  // string machine.
  return units.filter(unit => unit.machine !== undefined && unit.machine.indexOf('new') !== 0);
};

export {
  getHighestStatus,
  getRealUnits,
  getStatusClass,
  normaliseStatus,
  STATUS_ORDER,
  STATUSES
};
