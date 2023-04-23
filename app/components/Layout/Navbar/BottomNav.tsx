import Button from "../../Button/Button";
import MenuDropdown from "./Menu/MenuDropdown";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu/MobileMenu";
import Link from "next/link";

const BottomNav = () => {
	return (
		<div className="flex h-16 w-full flex-row items-center justify-between bg-purple px-4 py-10">
			<Logo />
			<div className="hidden w-fit gap-2 sm:flex">
				<Button clear>
					<Link href="/">Home</Link>
				</Button>
				<MenuDropdown />
				<Button clear>
					<Link href="/">Contact Us</Link>
				</Button>
			</div>
			<MobileMenu />
		</div>
	);
};

export default BottomNav;
