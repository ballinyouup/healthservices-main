import ContactCard from "./ContactCard";
import Image from "next/image";
const ContactSection = () => {
	return (
		<section className="relative flex h-full w-full flex-col-reverse items-center justify-center gap-20 bg-opacity-50 px-8 py-20 lg:flex-row">
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
