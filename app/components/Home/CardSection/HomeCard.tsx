"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
interface IHomeCard {
	src: string;
	alt: string;
	delay?: number;
	text: string;
	href: string;
}

const HomeCard: React.FC<IHomeCard> = ({ src, alt, delay = 0, text, href }) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{
				delay: delay,
				duration: 0.5,
			}}
			className="relative z-0 overflow-hidden [&>*]:hover:left-0"
		>
			<Image src={src} alt={alt} width={240} height={240} />
			<motion.div className="absolute -left-60 top-0 z-10 h-full w-full bg-purple transition-all duration-500">
				<Link
					href={href}
					className="flex h-full w-full items-center justify-center text-lg text-white"
				>
					{text}
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default HomeCard;
