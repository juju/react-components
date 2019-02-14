/* Copyright (C) 2017 Canonical Ltd. */

import React from 'react';
import enzyme from 'enzyme';

import BasicTableCell from './cell';

describe('BasicTableCell', () => {
  const renderComponent = (options = {}) =>
    enzyme.shallow(
      <BasicTableCell
        classes={options.classes}
        columnSize={options.columnSize || 5}
        content={options.content}
        isLastCol={options.isLastCol}
      />
    );

  it('can render', () => {
    const wrapper = renderComponent({
      content: <span>Content!</span>
    });
    expect(wrapper).toMatchSnapshot();
  });
});
