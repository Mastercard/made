import React, { Fragment } from 'react';
import { Placeholder } from '@storybook/components';
import { Item } from './Item';
export const Report = ({
  items,
  empty,
  type
}) => /*#__PURE__*/React.createElement(Fragment, null, items && items.length ? items.map(item => /*#__PURE__*/React.createElement(Item, {
  item: item,
  key: `${type}:${item.id}`,
  type: type
})) : /*#__PURE__*/React.createElement(Placeholder, {
  key: "placeholder"
}, empty));