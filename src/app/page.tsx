import EffectPanel from "@/components/EffectPanel";
import TriggerPanel from "@/components/TriggerPanel";
import OutputPanel from "@/components/OutputPanel";
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
