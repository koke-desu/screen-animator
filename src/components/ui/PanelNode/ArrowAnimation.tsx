import React, { useState } from "react";
import { Image } from "@chakra-ui/react";
type Props = {};

const ArrowAnimation: React.FC<Props> = ({}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const playAnimation = () => {
    setIsAnimating(true);
  };

  const stopAnimation = () => {
    setIsAnimating(false);
  };

  return (
    <Image
      src={isAnimating ? "/arrow_animation.png" : "/empty.png"} // empty.pngは非表示にするための1px*1pxの透明画像
      alt=""
      width={8}
      height={6}
      draggable="false"
      onMouseEnter={playAnimation}
      onMouseLeave={stopAnimation}
      data-node-arrow-start // framer-motionのdragを無効化するための属性。詳細の実装は./PanelNode.tsxを参照されたい
    />
  );
};
export default ArrowAnimation;
