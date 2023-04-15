const TextSection = () => {
	return (
		<section className="w-full">
			<div className="flex h-48 items-center justify-center">
				<div className="flex w-full max-w-xl items-center justify-center gap-4 p-2">
					<span className="w-40 text-end text-4xl font-bold uppercase text-purple">
						Why Choose Us
					</span>
					<span className="h-28 border-[1.5px] border-black" />
					<span>
						Our plans not only offer comprehensive coverage for routine checkups
						and major medical procedures but our agents also provide
						personalized attention and guidance to help you find the plan that's
						right for you.
					</span>
				</div>
			</div>
		</section>
	);
};

export default TextSection;
