"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const TopNav = () => {
	return (
		<div className="hidden w-full flex-col items-center md:flex">
			<div className="isolate flex h-10 w-full flex-row items-center justify-end bg-neutral-100">
				<div className="flex h-7 w-full flex-row items-center justify-end gap-4 p-0 pr-3">
					<span className="h-4 text-sm font-semibold leading-5 tracking-wide text-black">
						Hours: 9am - 5pm
					</span>
					<motion.a
						initial={{ x: 100, opacity: 0 }}
						animate={{
							x: 0,
							opacity: 1,
							transition: {
								duration: 0.5,
							},
						}}
						className="flex flex-row items-center gap-2 p-1"
						href="tel:+17864447717"
						whileHover={{
							scale: 1.05,
							transition: {
								duration: 0.2,
							},
						}}
					>
						<Image
							className="h-6 w-6"
							src="/phone.png"
							alt="phone icon"
							width={24}
							height={24}
						/>
						<span className="h-4 text-sm font-semibold leading-5 tracking-wide text-black">
							Call 1+(786)-444-7717
						</span>
					</motion.a>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
