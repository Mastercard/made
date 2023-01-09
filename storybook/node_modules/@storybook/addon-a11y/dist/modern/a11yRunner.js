import global from 'global';
import { addons } from '@storybook/addons';
import { EVENTS } from './constants';
const {
  document,
  window: globalWindow
} = global;

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}

const channel = addons.getChannel(); // Holds axe core running state

let active = false; // Holds latest story we requested a run

let activeStoryId;
/**
 * Handle A11yContext events.
 * Because the event are sent without manual check, we split calls
 */

const handleRequest = async storyId => {
  const {
    manual
  } = await getParams(storyId);

  if (!manual) {
    await run(storyId);
  }
};

const run = async storyId => {
  activeStoryId = storyId;

  try {
    const input = await getParams(storyId);

    if (!active) {
      active = true;
      channel.emit(EVENTS.RUNNING);
      const axe = (await import('axe-core')).default;
      const {
        element = '#root',
        config,
        options = {}
      } = input;
      const htmlElement = document.querySelector(element);
      axe.reset();

      if (config) {
        axe.configure(config);
      }

      const result = await axe.run(htmlElement, options); // It's possible that we requested a new run on a different story.
      // Unfortunately, axe doesn't support a cancel method to abort current run.
      // We check if the story we run against is still the current one,
      // if not, trigger a new run using the current story

      if (activeStoryId === storyId) {
        channel.emit(EVENTS.RESULT, result);
      } else {
        active = false;
        run(activeStoryId);
      }
    }
  } catch (error) {
    channel.emit(EVENTS.ERROR, error);
  } finally {
    active = false;
  }
};
/** Returns story parameters or default ones. */


const getParams = async storyId => {
  const {
    parameters
  } = (await globalWindow.__STORYBOOK_STORY_STORE__.loadStory({
    storyId
  })) || {};
  return parameters.a11y || {
    config: {},
    options: {
      restoreScroll: true
    }
  };
};

channel.on(EVENTS.REQUEST, handleRequest);
channel.on(EVENTS.MANUAL, run);