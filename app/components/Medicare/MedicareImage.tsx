import Image from "next/image";

const MedicareImage = () => {
	return (
		<div className="h-64 w-full overflow-hidden bg-purpleDark bg-opacity-50 brightness-50">
			<Image
				alt="Medicare Image"
				className="relative -left-20 -top-24 w-full min-w-[1200px] mix-blend-soft-light"
				src="/familyreal.jpg"
				width={600}
				height={600}
			/>
		</div>
	);
};

export default MedicareImage;
