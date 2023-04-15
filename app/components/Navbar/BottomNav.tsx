import Button from "../Button/Button";
import MenuDropdown from "./Menu/MenuDropdown";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu/MobileMenu";

const BottomNav = () => {
	return (
		<div className="flex h-16 w-full flex-row items-center justify-between bg-purple bg-opacity-80  px-4 py-10">
			<Logo />
			<div className="hidden w-fit gap-2 sm:flex">
				<Button clear>Home</Button>
				<MenuDropdown />
				<Button clear>Contact Us</Button>
			</div>
			<MobileMenu />
		</div>
	);
};

export default BottomNav;
