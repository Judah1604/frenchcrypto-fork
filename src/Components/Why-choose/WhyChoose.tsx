import Intro from "../../Lib/util/Intro";
import WhyChooseCard from "./WhyChooseCard";
import AI from "../../assets/Images/AI-illust.svg";
import User from "../../assets/Images/user-friendly.svg";
import Security from "../../assets/Images//security.svg";
import Support from "../../assets/Images//support.svg";

export default function WhyChoose() {
  return (
    <div className=" max-w-[1140px] mx-auto p-5 ">
      <Intro contentIntro="Supercharged AI" />

      <div className=" flex flex-col items-center mx-auto">
        <h1 className=" md:text-[48px] font-[400] text-[32px] text-center">
          Why Choose FrenchCrypto?
        </h1>
        <p className="md:w-1/2 w-5/6 text-center md:text-justify">
          FrenchCrypto doesn't merely follow trends; it sets them. Empowering
          traders to navigate both bullish and bearish markets with confidence,
          FrenchCrypto leverages sophisticated algorithms and real-time data
          streams. It adapts to ever-changing market dynamics, seizing
          opportunities while minimizing risks.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5 justify-center py-12">
        <WhyChooseCard
          CardTitle="AI-Powered Trading"
          CardBody="Leverage advanced AI algorithms for smarter, faster, and more accurate trading decisions."
          Icon={AI}
        />
        <WhyChooseCard
          CardTitle="User-Friendly Interface"
          CardBody="Enjoy an intuitive and seamless trading experience designed for both beginners and experts."
          Icon={User}
        />
        <WhyChooseCard
          CardTitle="Robust Security"
          CardBody="Your assets and data are safeguarded with top-tier security measures and encryption protocols."
          Icon={Security}
        />
        <WhyChooseCard
          CardTitle="24/7 Support"
          CardBody="Our dedicated support team is available around the clock to assist you with any queries or issues."
          Icon={Support}
        />
      </div>
    </div>
  );
}
