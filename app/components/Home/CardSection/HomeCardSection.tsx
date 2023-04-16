import HomeCard from "./HomeCard";

const HomeCardSection = () => {
	const cards = [
		{
			src: "/image1.jpg",
			alt: "Medicare Image",
			text: "Medicare",
			href: "/",
		},
		{
			src: "/image2.jpg",
			alt: "Obamacare Image",
			text: "Obamacare",
			href: "/",
		},
		{
			src: "/image3.jpg",
			alt: "Life Insurance Image",
			text: "Life Insurance",
			href: "/",
		},
		{
			src: "/image4.jpg",
			alt: "Funeral Assistance Image",
			text: "Funeral Assistance",
			href: "/",
		},
	];

	return (
		<section className="p-12">
			<div className="flex h-64 w-full flex-row items-center justify-center gap-20 overflow-hidden">
				{cards.map((card, index) => {
					return (
						<HomeCard
							src={card.src}
							alt={card.alt}
							text={card.text}
							href={card.href}
							delay={0.5 * index}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default HomeCardSection;
