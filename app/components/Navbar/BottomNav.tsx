import Dropdown from "./Dropdown";
import Logo from "./Logo";

const BottomNav = () => {
	return (
		<div className="flex h-20 w-full flex-row items-center justify-between gap-3 bg-white px-4 py-12">
			<Logo />
			<Dropdown />
		</div>
	);
};

export default BottomNav;
