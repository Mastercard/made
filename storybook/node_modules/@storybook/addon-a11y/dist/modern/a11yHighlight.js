import global from 'global';
import { addons } from '@storybook/addons';
import { STORY_CHANGED } from '@storybook/core-events';
import { EVENTS, HIGHLIGHT_STYLE_ID } from './constants';
import { highlightStyle } from './highlight';
const {
  document
} = global;

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}

const channel = addons.getChannel();

const highlight = infos => {
  const id = HIGHLIGHT_STYLE_ID;
  resetHighlight(); // Make sure there are no duplicated selectors

  const elements = Array.from(new Set(infos.elements));
  const sheet = document.createElement('style');
  sheet.setAttribute('id', id);
  sheet.innerHTML = elements.map(target => `${target}{
          ${highlightStyle(infos.color)}
         }`).join(' ');
  document.head.appendChild(sheet);
};

const resetHighlight = () => {
  const id = HIGHLIGHT_STYLE_ID;
  const sheetToBeRemoved = document.getElementById(id);

  if (sheetToBeRemoved) {
    sheetToBeRemoved.parentNode.removeChild(sheetToBeRemoved);
  }
};

channel.on(STORY_CHANGED, resetHighlight);
channel.on(EVENTS.HIGHLIGHT, highlight);