import "./style.css";
import Hero from "../Hero/Hero";
import Navbar from "../NavBar/Navbar";
import WhyChoose from "../Why-choose/WhyChoose";
import HowItWorks from "../HowItWorks/HowItWorks";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

export default function Home() {
	const pathname = useLocation().pathname;

	return (
		<div
			className={
				pathname.includes("/user")
					? "home bg-[#020407] flex flex-col"
					: "home active bg-[#020407] flex flex-col"
			}
		>
			<Navbar />
			<Hero />
			<WhyChoose />
			<HowItWorks />
			<Testimonial />
			<Footer />
		</div>
	);
}
