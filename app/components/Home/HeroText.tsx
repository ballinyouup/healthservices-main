const HeroText = () => {
	return (
		<div className="absolute top-0 z-10 flex w-full flex-col items-start gap-5">
			<span className="font-poppins p-4 text-5xl font-semibold text-white">
				INSURANCE YOU CAN COUNT ON AT EVERY STAGE
			</span>

			{/* <----------------------Landing Subtitle Text-------------------------> */}
			<div className="flex flex-row items-center pl-3">
				<span className="font-poppins whitespace-normal text-xl font-normal leading-7 text-white">
					Everyone deserves access to quality insurance coverage that fits their
					needs and budget
				</span>
			</div>
			{/* <----------------------Landing Contact Button-------------------------> */}
			<div className="flex flex-row justify-center self-center sm:pr-10">
				<button className="flex h-12 w-44 flex-row items-center justify-center rounded-2xl bg-[#9D0897] px-5 py-3 shadow-md">
					<a
						href="tel:+17864447717"
						className="font-poppins text-center text-2xl font-semibold text-white"
					>
						Contact Us
					</a>
				</button>
			</div>
		</div>
	);
};

export default HeroText;
