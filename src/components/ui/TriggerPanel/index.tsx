"use client";
import React from "react";
import PanelAddMenu from "../PanelAddMenu/PanelAddMenu";
import { Button } from "@chakra-ui/react";

type Props = {};

const TriggerPanel: React.FC<Props> = ({}) => {
  return (
    <div className="bg-gray-dark flex h-full flex-1 flex-col rounded-lg">
      <PanelAddMenu
        title="Add Trigger"
        items={[
          { label: "Button", icon: <Button>Add Button</Button> },
          { label: "Menu", icon: <Button>Add Menu</Button> },
          { label: "Link", icon: <Button>Add Link</Button> },
        ]}
      />
    </div>
  );
};
export default TriggerPanel;
