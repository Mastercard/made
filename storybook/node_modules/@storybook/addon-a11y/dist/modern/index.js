import deprecate from 'util-deprecate';
import dedent from 'ts-dedent';
export { PARAM_KEY } from './constants';
export * from './highlight';
export * from './params';

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}

export const withA11y = deprecate((storyFn, storyContext) => {
  return storyFn(storyContext);
}, dedent`
    withA11y(options) is deprecated, please configure addon-a11y using the addParameter api:

    addParameters({
      a11y: options,
    });

    More at: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#removed-witha11y-decorator
  `);