import Image from "next/image";
import HeroButton from "./HeroButton";
import HeroSubtitle from "./HeroSubtitle";
import HeroTitle from "./HeroTitle";

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
			<Image
				className="absolute -top-20 h-[750px] w-full object-cover object-[-350px_0px] brightness-[35%] sm:object-top sm:brightness-[50%] md:h-[940px] md:max-w-9xl"
				src="/landingImage.png"
				alt="Landing Page Image"
				width={800}
				height={940}
				unoptimized
			/>
		</section>
	);
};

export default Hero;
