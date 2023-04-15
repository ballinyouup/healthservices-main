import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

const Navbar = () => {
	return (
		<header className="relative z-20 flex w-full flex-col items-center">
			<TopNav />
			<BottomNav />
		</header>
	);
};

export default Navbar;
