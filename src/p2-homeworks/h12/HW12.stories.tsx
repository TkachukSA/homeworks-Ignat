import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import HW12 from "./HW12";
import {Provider} from "react-redux";
import store from "../h10/bll/store";



export default {
    title: 'Home work/HW12',
    component: HW12,
    argTypes: {
        changeValue: {
            description: 'Changed value editable span'
        },
        title: {
            defaultValue: 'HTML',
            // description: 'Start value to editable span'
        }
    },
} as Meta;

const Template: Story = (args) =>
    <Provider store={store}>
        <HW12 {...args} />;
    </Provider>


export const HW12Example = Template.bind({});
HW12Example.args = {

};