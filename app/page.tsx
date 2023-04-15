import { Inter } from "next/font/google";
import Hero from "./components/Home/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="flex w-full items-center justify-center">
			<Hero />
		</main>
	);
}
