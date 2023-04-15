import Button from "../Button/Button";
import Dropdown from "./Dropdown";
import Logo from "./Logo";

const BottomNav = () => {
	return (
		<div className="flex h-16 w-full flex-row items-center justify-between bg-purple bg-opacity-80  px-4 py-10">
			<Logo />
			<div className="flex w-fit gap-2">
				<Button>Home</Button>
				<Dropdown />
				<Button>Contact Us</Button>
			</div>
		</div>
	);
};

export default BottomNav;
