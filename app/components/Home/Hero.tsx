import HeroText from "./HeroText";

const Hero = () => {
	return (
		<section className="relative h-96 w-full overflow-hidden">
			<HeroText />
			<img
				className="absolute h-[750px] w-[800px] object-cover object-[-350px_0px] brightness-[35%] sm:object-center sm:brightness-[50%] md:h-[940px] md:w-full md:max-w-full"
				src="./landingImage.png"
			/>
		</section>
	);
};

export default Hero;
