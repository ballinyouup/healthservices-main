import Image from "next/image";

const MedicareImage = () => {
	return (
		<div className="relative h-64 w-full overflow-hidden bg-purpleDark bg-opacity-50">
			<span className="absolute bottom-8 left-8 text-8xl font-bold text-white">
				MEDICARE
			</span>
			<Image
				alt="Medicare Image"
				className="relative -left-20 -top-24 w-full min-w-[1200px] mix-blend-soft-light brightness-50"
				src="/familyreal.jpg"
				width={600}
				height={600}
				unoptimized
			/>
		</div>
	);
};

export default MedicareImage;
