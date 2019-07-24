/* Copyright (C) 2018 Canonical Ltd. */

import React from 'react';
import enzyme from 'enzyme';

import StatusTable from './table';

describe('StatusTable', () => {
  let headers, rows;

  const renderComponent = (options = {}) =>
    enzyme.shallow(
      <StatusTable
        headers={options.headers || headers}
        rows={options.rows || rows}
        statusFilter={options.statusFilter}
      />
    );

  beforeEach(() => {
    headers = [
      {
        columnSize: 2,
        content: 'Application'
      }
    ];
    rows = [
      {
        columns: [
          {
            columnSize: 2,
            content: 'apache2'
          }
        ],
        key: 'apache2'
      }
    ];
  });

  it('renders', () => {
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
  });
});
