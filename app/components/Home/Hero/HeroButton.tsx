import Button from "../../Button/Button";

const HeroButton = () => {
	return (
		<div className="flex w-full flex-row justify-start sm:max-w-xl">
			<Button>
				<a
					href="tel:+17864447717"
					className="font-poppins text-center text-2xl font-semibold text-white"
				>
					Contact Us
				</a>
			</Button>
		</div>
	);
};

export default HeroButton;
