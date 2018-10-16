'use strict';

const config = {
  roots: ['<rootDir>/lib/'],
  setupFiles: [
    '<rootDir>/lib/test/jest-setup.js',
    '<rootDir>/lib/test/enzyme-setup.js'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['<rootDir>/lib/**/test-*.js'],
  moduleNameMapper: {
    '\\.scss$': '<rootDir>/lib/test/proxy-module.js'
  },
};

module.exports = config;
