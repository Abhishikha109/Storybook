import {Button} from '@chakra-ui/react'
import {action, actions} from "@storybook/addon-actions";
import {text, boolean} from "@storybook/addon-knobs";

export default {
    title: 'Chakra/Button',
    component: Button,
    // argTypes: {
    //     onClick: {action: 'clicked'}
    // }
}

// by doing this way we can see the controls parameters

const Template = args => <Button {...args}/>

export const Success = Template.bind({});

Success.args = {
    colorScheme: 'green',
    children: 'Success',
}

export const Danger = Template.bind({});

Danger.args = {
    colorScheme: 'brand',
    children: 'Danger',
}

export const actionButton = () =>
    <Button colorScheme='blue'
            onClick={action('click handler')}>
        Action Button
    </Button>

export const actionsButton = () =>
    <Button colorScheme='yellow'
            {...actions('onClick', 'onMouseOver')}>
        Actions Button
    </Button>

export const Log = () =>
    <Button colorScheme='pink'
            onClick={() => console.log('Button Clicked', process.env.STORYBOOK_THEME)}>
        Log
    </Button>

export const Knob = () =>
    <Button colorScheme='purple'
            disabled={boolean('Disabled', false)}>{text('Label', 'Button Label')}
    </Button>