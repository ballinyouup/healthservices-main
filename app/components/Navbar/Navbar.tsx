import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

const Navbar = () => {
	return (
		<header className="relative z-20 flex w-full flex-col items-center">
			<div className="flex w-full max-w-9xl flex-col items-center">
				<TopNav />
				<BottomNav />
			</div>
		</header>
	);
};

export default Navbar;
