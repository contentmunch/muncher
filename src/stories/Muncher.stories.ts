import type {Meta, StoryObj} from '@storybook/react';
import {Muncher} from "../components/Muncher.tsx";
import "./assets/Muncher.stories.scss";

const meta = {
    title: 'Muncher',
    component: Muncher,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Muncher>;
export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {},
};
