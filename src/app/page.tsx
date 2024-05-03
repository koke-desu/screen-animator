import EffectPanel from "@/components/ui/Panels/EffectPanel/EffectPanel";
import TriggerPanel from "@/components/ui/Panels/TriggerPanel/TriggerPanel";
import OutputPanel from "@/components/ui/Panels/OutputPanel/OutputPanel";
import React from "react";
import Inspector from "@/components/ui/Inspector/Inspector";
import NodeArrowPortal from "@/components/ui/NodeArrow/NodeArrowPortal";
import AllNodeArrow from "@/components/ui/NodeArrow/AllNodeArrow";
import RenderWindowPortal from "@/components/ui/Render/RenderWindowPortal";
type Props = {};

const Home: React.FC<Props> = ({}) => {
  return (
    <div className="flex h-screen w-screen bg-black">
      <div className="flex h-full flex-1 gap-8 p-8">
        <TriggerPanel />
        <EffectPanel />
        <OutputPanel />
      </div>
      <Inspector />

      <AllNodeArrow />
      <NodeArrowPortal />
      <RenderWindowPortal />
    </div>
  );
};
export default Home;
