# Juju React Components
React components for use with Juju.

## Component Examples
The components can be viewed with Storybook. Just run `npm run storybook` and visit the supplied URL.

## Testing
The tests can be run with `npm test`.

## Releases
These are the steps to publish a new NPM release.

### QA
- Run `npm run storybook` and make sure there are no errors and that each component displays correctly.
- Consider testing in a project (e.g. Juju GUI) with `npm link ...`

### Prepare for release
- Check out a new branch from develop.
- Update the version with `npm version ...` using the next sensible version.
- Update the changelog, changing the `[Unreleased]` section to the version number from above e.g. `[0.5.0] - 2019-02-06`. Consider looking at `git log` and adding any missed changes.
- Commit the changes, push your branch to GitHub, create a PR against develop and land it (this might require approval).

### Sync master
- Create a PR from develop to master: https://github.com/juju/react-components/compare/master...develop?expand=1
- Land the branch (this might require approval).

### Publish to NPM
- Get a fresh copy of master `git clone git@github.com:juju/react-components.git juju-react-components-release`
- `cd juju-react-components-release`
- Build and publish the package with `npm publish`

### Tag the release
- Get the released package link `npm view @canonical/juju-react-components dist.tarball` and download the file.
- Create a new release on GitHub: https://github.com/juju/react-components/releases/new, remembering to:
  - Add the tag against **master** using the new version number.
  - Copy the changelog.
  - Upload the package (downloaded above).
