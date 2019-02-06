# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.0] - 2019-02-07
### Changed
- Updated xterm dependency to protect against a vulnerability.
- Exposed some components that were missing in the index.
- Update refs to be functions not strings.

## [0.4.0] - 2019-01-10
### Changed
- Republished 0.3.1 with the correct version number.

## [0.3.1] - 2019-01-10
### Added
- Added Prettier.
- Added GitHub templates.
- Added Travis config.
### Changed
- Make syntax changes from Prettier.
- Update Button component to Vanilla v1 styles.
- Update eslint and added more rules.
- Fixed Vanilla SCSS import path so that it's import from node_modules.
### Removed
- Remove deprecated `@method` JSdoc declarations

## [0.3.0] - 2018-11-16
### Added
- Set up package building for NPM.
### Changed
- Moved components to src/ dir.
- Sync components to latest GUI versions.
- Use colour variables from Vanilla.
- Update components to not use GUI specific state code.

## [0.2.0] - 2018-10-18
### Changed
- Clean up dependencies.
### Removed
- Export the Terminal component

## [0.1.1] - 2018-10-17
### Added
- Added Storybook and component stories.
- Added Terminal component.
### Changed
- Updated components to their latest versions from the Juju GUI.

## [0.1.0] - 2018-10-16
### Added
- Added components originally built for the Juju GUI.
- Added eslint.
- Added dependencies.
