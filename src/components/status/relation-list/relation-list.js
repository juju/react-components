/* Copyright (C) 2018 Canonical Ltd. */

import PropTypes from 'prop-types';
import React from 'react';

import {propTypes as maracaPropTypes} from '@canonical/maraca';
import StatusTable from '../table/table';

class StatusRelationList extends React.Component {
  /**
    Generate a link to an application from a relation.
    @param name {String} An app name.
    @returns {Object} The link element.
  */
  _generateRelationAppLink(name) {
    const {generateApplicationURL, onApplicationClick} = this.props;
    let app = this.props.applications[name];
    if (!app || (!generateApplicationURL && !onApplicationClick)) {
      // If the application is not in the DB it must be remote app so don't
      // link to it.
      return <span>{name}</span>;
    }
    return (
      <a
        className="status-view__link"
        href={generateApplicationURL ? generateApplicationURL(name) : null}
        onClick={onApplicationClick ? onApplicationClick.bind(this, name) : null}
      >
        <img className="status-view__icon" src={this.props.getIconPath(app)} />
        {name}
      </a>
    );
  }

  /**
    Generate the relation rows.
    @returns {Array} The list of rows.
  */
  _generateRows() {
    const {relations} = this.props;
    return Object.keys(relations).map(key => {
      const rel = relations[key];
      let name = '';
      let provides = '';
      let consumes = '';
      let scope = '';
      (rel.endpoints || []).forEach(endpoint => {
        const application = endpoint.applicationName;
        const ep = endpoint.relation;
        switch (ep.role) {
          case 'peer':
            name = ep.name;
            provides = application;
            consumes = application;
            scope = 'peer';
            return;
          case 'provider':
            name = ep.name;
            consumes = application;
            scope = 'regular';
            break;
          case 'requirer':
            provides = application;
            break;
        }
      });
      return {
        columns: [
          {
            columnSize: 3,
            content: name
          },
          {
            columnSize: 3,
            content: this._generateRelationAppLink(provides)
          },
          {
            columnSize: 3,
            content: this._generateRelationAppLink(consumes)
          },
          {
            columnSize: 3,
            content: scope
          }
        ],
        key: (rel.id || '').toString()
      };
    });
  }

  render() {
    const headers = [
      {
        content: 'Relation',
        columnSize: 3
      },
      {
        content: 'Provides',
        columnSize: 3
      },
      {
        content: 'Consumes',
        columnSize: 3
      },
      {
        content: 'Type',
        columnSize: 3
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

StatusRelationList.propTypes = {
  applications: maracaPropTypes.applications,
  generateApplicationURL: PropTypes.func,
  getIconPath: PropTypes.func.isRequired,
  onApplicationClick: PropTypes.func,
  relations: maracaPropTypes.relations,
  statusFilter: PropTypes.string
};

export default StatusRelationList;
