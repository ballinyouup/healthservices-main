import HeroButton from "../Hero/HeroButton";
import HeroImage from "../Hero/HeroImage";
import HeroSubtitle from "../Hero/HeroSubtitle";
import HeroTitle from "../Hero/HeroTitle";

const Hero = () => {
	return (
		<section className="relative flex h-96 w-full flex-col items-center justify-start overflow-hidden max-[440px]:h-[500px]">
			<div className="absolute top-0 z-10 flex h-full w-full flex-col items-center gap-5">
				<div className="flex h-full w-full max-w-8.5xl flex-col items-start justify-center gap-4 p-8">
					<HeroTitle />
					<HeroSubtitle />
					<HeroButton />
				</div>
			</div>
			<HeroImage />
		</section>
	);
};

export default Hero;
