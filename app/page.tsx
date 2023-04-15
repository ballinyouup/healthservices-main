import { Inter } from "next/font/google";
import Hero from "./components/Home/Hero/Hero";
import HomeCardSection from "./components/Home/CardSection/HomeCardSection";
import TextSection from "./components/Home/TextSection/TextSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			className={`flex w-full items-center justify-center ${inter.className}`}
		>
			<div className="flex w-full flex-col md:max-w-9xl">
				<Hero />
				<TextSection />
				<HomeCardSection />
			</div>
		</main>
	);
}
