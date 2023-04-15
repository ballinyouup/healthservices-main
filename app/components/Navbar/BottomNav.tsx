import Button from "../Button/Button";
import Dropdown from "./Dropdown";
import Logo from "./Logo";

const BottomNav = () => {
	return (
		<div className="flex h-20 w-full flex-row items-center justify-between gap-3 bg-purple bg-opacity-80  px-4 py-12">
			<Logo />
			<Button>Home</Button>
			<Dropdown />
			<Button>Contact Us</Button>
		</div>
	);
};

export default BottomNav;
