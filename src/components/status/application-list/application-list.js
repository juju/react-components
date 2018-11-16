/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const PropTypes = require('prop-types');
const React = require('react');
const {urls} = require('jaaslib');

const maracaPropTypes = require('@canonical/maraca').propTypes;
const StatusLabel = require('../label/label');
const StatusTable = require('../table/table');
const {
  getStatusClass,
  normaliseStatus
} = require('../../../utils/utils');

class StatusApplicationList extends React.Component {

  /**
    Generate the machine id.
    @param {String} charmURL - A charm URL.
    @returns {Object} The charm JSX.
  */
  _generateCharm(charmURL) {
    const {generateCharmURL, onCharmClick} = this.props;
    const charm = urls.URL.fromLegacyString(charmURL);
    const charmId = charm.path();
    // Set the revision to null so that it's not included when calling
    // charm.path() below.
    charm.revision = null;
    const charmPath = charm.path();
    if (!generateCharmURL || !onCharmClick) {
      return (<span>{charmPath}</span>);
    }
    return (
      <a
        className="status-view__link"
        href={generateCharmURL ? generateCharmURL(charmId) : null}
        onClick={onCharmClick ? onCharmClick.bind(this, charmId) : null}>
        {charmPath}
      </a>);
  }

  /**
    Generate the application rows.
    @returns {Array} The list of rows.
  */
  _generateRows() {
    const {applications, generateApplicationOnClick, generateApplicationURL} = this.props;
    return Object.keys(this.props.applications).reduce((accumulator, key) => {
      const app = applications[key];
      if (!app.charmURL) {
        // The provided data is not correct. A charmURL is required.
        return accumulator;
      }
      const charm = urls.URL.fromLegacyString(app.charmURL);
      const store = charm.schema === 'cs' ? 'jujucharms' : 'local';
      const revision = charm.revision;
      const units = Object.keys(this.props.units).filter(key =>
        this.props.units[key].application === app.name);
      accumulator.push({
        classes: [getStatusClass('status-table__row--', (app.status || {}).current)],
        onClick: generateApplicationOnClick ? generateApplicationOnClick(app.name) : null,
        clickURL: generateApplicationURL ? generateApplicationURL(app.name) : null,
        columns: [{
          columnSize: 2,
          content: (
            <span>
              <img className="status-view__icon" src={this.props.getIconPath(app)} />
              {app.name}
            </span>)
        }, {
          columnSize: 2,
          content: app.workloadVersion
        }, {
          columnSize: 2,
          content: app.status && app.status.current ? (
            <StatusLabel status={(app.status || {}).current} />) : null
        }, {
          columnSize: 1,
          content: units.length
        }, {
          columnSize: 2,
          content: this._generateCharm(app.charmURL)
        }, {
          columnSize: 2,
          content: store
        }, {
          columnSize: 1,
          content: revision
        }],
        extraData: normaliseStatus((app.status || {}).current),
        key: app.name
      });
      return accumulator;
    }, []);
  }

  render() {
    const headers = [{
      content: 'Application',
      columnSize: 2
    }, {
      content: 'Version',
      columnSize: 2
    }, {
      content: 'Status',
      columnSize: 2
    }, {
      content: 'Scale',
      columnSize: 1
    }, {
      content: 'Charm',
      columnSize: 2
    }, {
      content: 'Store',
      columnSize: 2
    }, {
      content: 'Rev',
      columnSize: 1
    }];
    return (
      <StatusTable
        headers={headers}
        rows={this._generateRows()}
        statusFilter={this.props.statusFilter} />
    );
  }
};

StatusApplicationList.propTypes = {
  applications: maracaPropTypes.applications,
  generateApplicationOnClick: PropTypes.func,
  generateApplicationURL: PropTypes.func,
  generateCharmURL: PropTypes.func,
  getIconPath: PropTypes.func.isRequired,
  onCharmClick: PropTypes.func,
  statusFilter: PropTypes.string,
  units: maracaPropTypes.units
};

module.exports = StatusApplicationList;
