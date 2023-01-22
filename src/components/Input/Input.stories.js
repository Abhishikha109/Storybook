/* this component is using named & default exports */

import Input from './Input';

export default {
    title: 'Form/Input', // this should be unique for the entire project
    component: Input, // this property is optional but encourages because some addons are dependent on this
}

/* NAMED EXPORTS */
export const Small = () => <Input size='small' placeholder='Small size'/>
export const Medium = () => <Input size='medium' placeholder='Medium size'/>
export const Large = () => <Input size='large' placeholder='Larger size'/>

Small.storyName = 'Small Input';