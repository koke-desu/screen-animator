import EffectPanel from "@/components/ui/EffectPanel";
import TriggerPanel from "@/components/ui/TriggerPanel";
import OutputPanel from "@/components/ui/OutputPanel";
import React from "react";
import Inspector from "@/components/ui/Inspector";
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
    </div>
  );
};
export default Home;
