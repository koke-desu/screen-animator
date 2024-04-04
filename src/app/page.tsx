import EffectPanel from "@/components/ui/EffectPanel/EffectPanel";
import TriggerPanel from "@/components/ui/TriggerPanel/TriggerPanel";
import OutputPanel from "@/components/ui/OutputPanel/OutputPanel";
import React from "react";
import Inspector from "@/components/ui/Inspector/Inspector";
import NodeArrowPortal from "@/components/ui/NodeArrow/NodeArrowPortal";
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

      <NodeArrowPortal />
    </div>
  );
};
export default Home;
