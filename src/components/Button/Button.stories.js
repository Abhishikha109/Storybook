/* this component is using named & default exports */

import Button from './Button';

export default {
    title: 'Form/Button', // this should be unique for the entire project
    component: Button, // this property is optional but encourages because some addons are dependent on this
    // decorators: [story => <Center>{story()}</Center>], // local decorators 
    args: {
        children: 'Button',
    }
}

/* NAMED EXPORTS */
export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({});
PrimaryA.args = {
    variant: 'primary',
    // children: 'Primary Args',
}

export const SecondaryA = Template.bind({});
SecondaryA.args = {
    variant: 'secondary',
    // children: 'Secondary Args',
}

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
   ...PrimaryA.args,
    // children: 'Long Primary Args'
}