import {configure, setAddon} from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import 'vanilla-framework/scss/build.scss';

setAddon(JSXAddon);

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
