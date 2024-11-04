import { StoryObj } from "@storybook/react/*";

import { Button } from "../button/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./Card";

const meta = {
  title: "Primitives/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, at.</CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, et. Rerum consequuntur odio velit voluptatibus dolorem amet deserunt. Optio,
          voluptates.
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button variant="danger" className="w-24">
            Cancel
          </Button>
          <Button className="w-24">Ok</Button>
        </CardFooter>
      </>
    ),
  },
};

export default meta;
