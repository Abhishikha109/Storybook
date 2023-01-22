import {addDecorator} from "@storybook/react";
import Center from "../src/components/Center/Center";
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {withConsole} from '@storybook/addon-console'; // to get all the console log in storybook UI in action tab
import {withKnobs} from '@storybook/addon-knobs';
import {withA11y} from "@storybook/addon-a11y";

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, {numeric: true}),
    },
}

const theme = extendTheme({
    colors: {
        brand: {
            // 50: "#44337A",
            // 100: "#B794F4",
            500: "#B794F4", // you need this
        }
    }
});

addDecorator(story => <Center>
    {story()}
</Center>);

addDecorator((storyFn, context) => 
    withConsole()(storyFn)(context));

addDecorator(withKnobs);
addDecorator(withA11y);

export const decorators = [
    (Story) => (
        <ChakraProvider theme={theme}>
            <Story />
        </ChakraProvider>
    )
];