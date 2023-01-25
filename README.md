# Story Books

Create React Project (npx create-react-app appName)

npx sb init

Yarn storybook

Implement extra features for storybooks to make them more useful. ADDONS
Like we have added onClick event in argTypes in Chakra.stories.js

To view the messages which is written on console, we can add one dependency, so we do not need to open the console,
Install this as a dev dependency
yarn add -D @storybook/addon-console (import it inside preview.js file)

Other dependencies used in this storybook:

yarn add -D @storybook/addon-docs (since, this add on is maintained by the storybook team, hence instead of adding it in preview.js, you can directly add it into the main.js) (but it is already installed in newer version)
yarn add -D @storybook/addon-knobs
yarn add -D @storybook/addon-a11y

Build-storybook (package.json => scripts): to build a new static app which can be hosted anywhere

If you modify preview.js, then you need to again run the server via ‘yarn storybook’