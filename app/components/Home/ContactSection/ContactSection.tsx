import ContactCard from "./ContactCard";
import Image from "next/image";
const ContactSection = () => {
	return (
		<section className="relative flex h-full w-full flex-row items-center justify-center gap-20 bg-purpleDark p-20">
			<Image
				src="/family.png"
				alt="Family Image"
				width={500}
				height={500}
				className="mix-blend-luminosity"
				unoptimized
			/>
			<ContactCard text="Contact US" />
		</section>
	);
};

export default ContactSection;
