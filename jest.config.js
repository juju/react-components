'use strict';

const config = {
  roots: ['<rootDir>/src/'],
  setupFiles: [
    '<rootDir>/src/test/jest-setup.js',
    '<rootDir>/src/test/enzyme-setup.js',
    'jest-prop-type-error'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['<rootDir>/src/**/test-*.js'],
  moduleNameMapper: {
    '\\.scss$': '<rootDir>/src/test/proxy-module.js'
  }
};

module.exports = config;
