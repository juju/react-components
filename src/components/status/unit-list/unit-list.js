/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const PropTypes = require('prop-types');
const React = require('react');

const StatusLabel = require('../label/label');
const StatusTable = require('../table/table');

const maracaPropTypes = require('@canonical/maraca').propTypes;
const utils = require('../../../utils/utils');

class StatusUnitList extends React.Component {
  /**
    Format the ports ranges for a unit
    @param ranges {Array} The port ranges.
    @returns {String} The formatted port ranges.
  */
  _formatPorts(ranges) {
    if (!ranges) {
      return '';
    }
    return ranges
      .map(range => {
        if (range.fromPort === range.toPort) {
          return `${range.fromPort}/${range.protocol}`;
        }
        return `${range.fromPort}-${range.toPort}/${range.protocol}`;
      })
      .join(', ');
  }

  /**
    Generate the machine id.
    @param {String} machineID - A machine id.
    @returns {Object} The id JSX.
  */
  _generateMachineID(machineID) {
    const {generateMachineURL, onMachineClick} = this.props;
    if (!generateMachineURL || !onMachineClick) {
      return <span>{machineID}</span>;
    }
    return (
      <a
        className="status-view__link"
        href={generateMachineURL ? generateMachineURL(machineID) : null}
        onClick={onMachineClick ? onMachineClick.bind(this, machineID) : null}
      >
        {machineID}
      </a>
    );
  }

  /**
    Generate the unit rows.
    @returns {Array} The list of rows. The returned array and containing objects
      should match the row format required by the BasicTable component.
  */
  _generateRows() {
    const {generateUnitOnClick, generateUnitURL, units} = this.props;
    return Object.keys(units).reduce((accumulator, key) => {
      const unit = units[key];
      let application = this.props.applications[unit.application];
      if (!application) {
        // The received data must be wrong as there should always be an application for a unit.
        return accumulator;
      }
      const appExposed = application.exposed;
      let publicAddress = unit.publicAddress;
      if (appExposed && unit.portRanges.length) {
        const port = unit.portRanges[0].fromPort;
        const label = `${unit.publicAddress}:${port}`;
        const protocol = port === 443 ? 'https' : 'http';
        const href = `${protocol}://${label}`;
        publicAddress = (
          <a className="status-view__link" href={href} target="_blank">
            {unit.publicAddress}
          </a>
        );
      }
      const agentStatus = (unit.agentStatus || {}).current;
      const workloadStatus = (unit.workloadStatus || {}).current;
      accumulator.push({
        classes: [utils.getStatusClass('status-table__row--', [agentStatus, workloadStatus])],
        onClick: generateUnitOnClick ? generateUnitOnClick(unit.name) : null,
        clickURL: generateUnitURL ? generateUnitURL(unit.name) : null,
        columns: [
          {
            columnSize: 2,
            content: (
              <span>
                <img className="status-view__icon" src={this.props.getIconPath(application)} />
                {unit.name}
              </span>
            )
          },
          {
            columnSize: 2,
            content: workloadStatus ? <StatusLabel status={workloadStatus} /> : null
          },
          {
            columnSize: 2,
            content: agentStatus ? <StatusLabel status={agentStatus} /> : null
          },
          {
            columnSize: 1,
            content: this._generateMachineID(unit.machineID)
          },
          {
            columnSize: 2,
            content: publicAddress
          },
          {
            columnSize: 1,
            content: this._formatPorts(unit.portRanges)
          },
          {
            columnSize: 2,
            content: (unit.workloadStatus || {}).message
          }
        ],
        extraData: utils.getHighestStatus([agentStatus, workloadStatus]),
        key: unit.name
      });
      return accumulator;
    }, []);
  }

  render() {
    const headers = [
      {
        content: 'Unit',
        columnSize: 2
      },
      {
        content: 'Workload',
        columnSize: 2
      },
      {
        content: 'Agent',
        columnSize: 2
      },
      {
        content: 'Machine',
        columnSize: 1
      },
      {
        content: 'Public address',
        columnSize: 2
      },
      {
        content: 'Ports',
        columnSize: 1
      },
      {
        content: 'Message',
        columnSize: 2
      }
    ];
    return (
      <StatusTable
        headers={headers}
        rows={this._generateRows()}
        statusFilter={this.props.statusFilter}
      />
    );
  }
}

StatusUnitList.propTypes = {
  applications: maracaPropTypes.applications,
  generateMachineURL: PropTypes.func,
  generateUnitOnClick: PropTypes.func,
  generateUnitURL: PropTypes.func,
  getIconPath: PropTypes.func.isRequired,
  onMachineClick: PropTypes.func,
  statusFilter: PropTypes.string,
  units: maracaPropTypes.units
};

module.exports = StatusUnitList;
