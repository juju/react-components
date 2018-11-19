/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const React = require('react');
const {storiesOf} = require('@storybook/react');

const BasicTable = require('./basic-table');

const headers = [
  {
    content: 'Column 1',
    columnSize: 3,
    classes: ['class1', 'class2']
  },
  {
    content: <span>Column 2</span>,
    columnSize: 4
  }
];
const rows = [
  {
    columns: [
      {
        content: <span>row 1 column 1</span>,
        columnSize: 3,
        classes: ['r1c1class1', 'r1c1class2']
      },
      {
        content: 'row 1 column 2',
        columnSize: 3
      }
    ],
    key: 'row-one-key'
  },
  {
    columns: [
      {
        content: 'row 2 column 1',
        columnSize: 7
      }
    ],
    key: 'row-two-key'
  },
  {
    columns: [
      {
        content: 'row 3 column 1',
        columnSize: 3
      },
      {
        columnSize: 3
      },
      {
        content: 0,
        columnSize: 6
      }
    ],
    key: 'row-three-key'
  }
];

storiesOf('BasicTable', module).addWithJSX('basic display', () => (
  <BasicTable headers={headers} rows={rows} />
));
