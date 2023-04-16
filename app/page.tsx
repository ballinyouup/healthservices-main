import { Inter } from "next/font/google";
import Hero from "./components/Home/Hero/Hero";
import HomeCardSection from "./components/Home/CardSection/HomeCardSection";
import TextSection from "./components/Home/TextSection/TextSection";
import { Metadata } from "next";
import ContactSection from "./components/Home/ContactSection/ContactSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "HealthServicesFL.com",
	description:
		"At HealthServicesFL.com, we understand the importance of good health and financial security. That's why we offer a range of insurance options, including Obamacare, Medicare, Funeral Assistance, and Life Insurance. Our commitment to excellence in customer service means you can trust us to take care of all your insurance needs.",
};

export default function Home() {
	return (
		<main
			className={`flex h-full w-full items-center justify-center ${inter.className}`}
		>
			<div className="flex h-full w-full flex-col md:max-w-9xl">
				<Hero />
				<TextSection />
				<HomeCardSection />
				<ContactSection />
				<div className="p-20">test</div>
			</div>
		</main>
	);
}
