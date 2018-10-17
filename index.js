/* Copyright (C) 2018 Canonical Ltd. */

'use strict';

const BasicTable = require('./lib/components/basic-table/basic-table');
const Button = require('./lib/components/button/button');
const ButtonRow = require('./lib/components/button-row/button-row');
const ExpandingRow = require('./lib/components/expanding-row/expanding-row');
const Machine = require('./lib/components/machine/machine');
const MachineUnit = require('./lib/components/machine-unit/machine-unit');
const Panel = require('./lib/components/panel/panel');
const Status = require('./lib/components/status/status/status');
const StatusApplicationList = require(
  './lib/components/status/application-list/application-list');
const StatusLabel = require('./lib/components/status/label/label');
const StatusMachineList = require('./lib/components/status/machine-list/machine-list');
const StatusModel = require('./lib/components/status/model/model');
const StatusRelationList = require('./lib/components/status/relation-list/relation-list');
const StatusRemoteApplicationList = require(
  './lib/components/status/remote-application-list/remote-application-list');
const StatusTable = require('./lib/components/status/table/table');
const StatusUnitList = require('./lib/components/status/unit-list/unit-list');
const Terminal = require('./lib/components/terminal/terminal');

module.exports = {
  BasicTable,
  Button,
  ButtonRow,
  ExpandingRow,
  Machine,
  MachineUnit,
  Panel,
  Status,
  StatusApplicationList,
  StatusLabel,
  StatusMachineList,
  StatusModel,
  StatusRelationList,
  StatusRemoteApplicationList,
  StatusTable,
  StatusUnitList,
  Terminal
};
