import EffectPanel from "@/components/ui/EffectPanel";
import TriggerPanel from "@/components/ui/TriggerPanel";
import OutputPanel from "@/components/ui/OutputPanel";
import React from "react";
type Props = {};

const Home: React.FC<Props> = ({}) => {
  return (
    <div className="flex h-screen w-screen">
      <TriggerPanel />
      <EffectPanel />
      <OutputPanel />
    </div>
  );
};
export default Home;
