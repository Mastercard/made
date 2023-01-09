import React, { useState } from 'react';
import { Global, styled } from '@storybook/theming';
import { Icons, IconButton, WithTooltip, TooltipLinkList } from '@storybook/components';
import { Filters } from './ColorFilters';
const iframeId = 'storybook-preview-iframe';
export const baseList = [{
  name: 'blurred vision',
  percentage: 22.9
}, {
  name: 'deuteranomaly',
  percentage: 2.7
}, {
  name: 'deuteranopia',
  percentage: 0.56
}, {
  name: 'protanomaly',
  percentage: 0.66
}, {
  name: 'protanopia',
  percentage: 0.59
}, {
  name: 'tritanomaly',
  percentage: 0.01
}, {
  name: 'tritanopia',
  percentage: 0.016
}, {
  name: 'achromatomaly',
  percentage: 0.00001
}, {
  name: 'achromatopsia',
  percentage: 0.0001
}, {
  name: 'grayscale'
}];

const getFilter = filterName => {
  if (!filterName) {
    return 'none';
  }

  if (filterName === 'blurred vision') {
    return 'blur(2px)';
  }

  if (filterName === 'grayscale') {
    return 'grayscale(100%)';
  }

  return `url('#${filterName}')`;
};

const Hidden = styled.div(() => ({
  '&, & svg': {
    position: 'absolute',
    width: 0,
    height: 0
  }
}));
const ColorIcon = styled.span({
  background: 'linear-gradient(to right, #F44336, #FF9800, #FFEB3B, #8BC34A, #2196F3, #9C27B0)',
  borderRadius: '1rem',
  display: 'block',
  height: '1rem',
  width: '1rem'
}, ({
  filter
}) => ({
  filter: getFilter(filter)
}), ({
  theme
}) => ({
  boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`
}));
const Column = styled.span({
  display: 'flex',
  flexDirection: 'column'
});
const Title = styled.span({
  textTransform: 'capitalize'
});
const Description = styled.span(({
  theme
}) => ({
  fontSize: 11,
  color: theme.textMutedColor
}));

const getColorList = (active, set) => [...(active !== null ? [{
  id: 'reset',
  title: 'Reset color filter',
  onClick: () => {
    set(null);
  },
  right: undefined,
  active: false
}] : []), ...baseList.map(i => {
  const description = i.percentage !== undefined ? `${i.percentage}% of users` : undefined;
  return {
    id: i.name,
    title: /*#__PURE__*/React.createElement(Column, null, /*#__PURE__*/React.createElement(Title, null, i.name), description && /*#__PURE__*/React.createElement(Description, null, description)),
    onClick: () => {
      set(i);
    },
    right: /*#__PURE__*/React.createElement(ColorIcon, {
      filter: i.name
    }),
    active: active === i
  };
})];

export const VisionSimulator = () => {
  const [filter, setFilter] = useState(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, filter && /*#__PURE__*/React.createElement(Global, {
    styles: {
      [`#${iframeId}`]: {
        filter: getFilter(filter.name)
      }
    }
  }), /*#__PURE__*/React.createElement(WithTooltip, {
    placement: "top",
    trigger: "click",
    tooltip: ({
      onHide
    }) => {
      const colorList = getColorList(filter, i => {
        setFilter(i);
        onHide();
      });
      return /*#__PURE__*/React.createElement(TooltipLinkList, {
        links: colorList
      });
    },
    closeOnClick: true,
    onDoubleClick: () => setFilter(null)
  }, /*#__PURE__*/React.createElement(IconButton, {
    key: "filter",
    active: !!filter,
    title: "Vision simulator"
  }, /*#__PURE__*/React.createElement(Icons, {
    icon: "accessibility"
  }))), /*#__PURE__*/React.createElement(Hidden, null, /*#__PURE__*/React.createElement(Filters, null)));
};