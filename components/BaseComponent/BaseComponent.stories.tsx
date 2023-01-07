import { ComponentMeta, ComponentStory } from "@storybook/react";
import BaseComponent, { IBaseComponent } from "./BaseComponent";
import { mockBaseComponentProps } from "./BaseComponent.mocks";

export default {
  title: "example/BaseComponent",
  component: BaseComponent,
  argTypes: {},
} as ComponentMeta<typeof BaseComponent>;

const Template: ComponentStory<typeof BaseComponent> = (args) => (
  <BaseComponent {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBaseComponentProps.base,
} as IBaseComponent;
