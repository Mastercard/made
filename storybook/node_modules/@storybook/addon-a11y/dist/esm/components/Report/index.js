import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.concat.js";
import React, { Fragment } from 'react';
import { Placeholder } from '@storybook/components';
import { Item } from './Item';
export var Report = function Report(_ref) {
  var items = _ref.items,
      empty = _ref.empty,
      type = _ref.type;
  return /*#__PURE__*/React.createElement(Fragment, null, items && items.length ? items.map(function (item) {
    return /*#__PURE__*/React.createElement(Item, {
      item: item,
      key: "".concat(type, ":").concat(item.id),
      type: type
    });
  }) : /*#__PURE__*/React.createElement(Placeholder, {
    key: "placeholder"
  }, empty));
};