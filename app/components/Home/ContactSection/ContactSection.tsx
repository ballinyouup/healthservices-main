import ContactCard from "./ContactCard";
import Image from "next/image";
const ContactSection = () => {
	return (
		<section className="relative flex h-full w-full items-center justify-center gap-20 px-8 lg:py-20 lg:flex-row">
			<Image
				src="/family.png"
				alt="Family Image"
				width={500}
				height={500}
				className="hidden lg:block"
				unoptimized
			/>
			<ContactCard />
		</section>
	);
};

export default ContactSection;
