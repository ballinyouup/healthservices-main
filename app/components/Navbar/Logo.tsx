import Link from "next/link";

const Logo = () => {
	return (
		<Link
			href="/"
			className="mr-auto mt-4 flex flex-col items-start pb-3 sm:pl-6 md:pl-16"
		>
			<img
				className="h-20 min-w-[220px] object-cover"
				src="./logo.png"
				alt="Health Services FL Logo"
			/>
		</Link>
	);
};

export default Logo;
