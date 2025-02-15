import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "DeepLove Dating Assistant",
  desc: "Navigate dating conversations effortlessly with DeepLove. Our smart assistant helps you respond smoothly, flirt confidently, and avoid awkward silences.",
  image: benefitOneImg,
  bullets: [
    {
      title: "No More Awkward Silences",
      desc: "DeepLove suggests the perfect reply to keep the conversation flowing.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Boost Your Dating Confidence",
      desc: "Practice conversations and improve your skills before the real date.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Master the Art of Flirting",
      desc: "Get DeepLove-crafted responses tailored to your personality and style.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Take Your Dating Game to the Next Level",
  desc: "More than just conversation help—DeepLove makes dating easier, smoother, and more fun.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Save Time & Avoid Overthinking",
      desc: "DeepLove helps you craft smooth responses without second-guessing yourself.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Detect Red Flags Early",
      desc: "DeepLove analyzes messages to spot sketchy or manipulative behavior.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Adapt to Any Dating Style",
      desc: "Whether playful, deep, or flirty—DeepLove helps you navigate every conversation.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
