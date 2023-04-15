import { useState } from "react";
import { Menu } from "@headlessui/react";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
const MobileMenuButton = () => {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);
	return (
		<Menu.Button
			className="p-2"
			onClick={() => setOpenMobileMenu(!openMobileMenu)}
		>
			{!openMobileMenu ? (
				<Bars3Icon className="h-8 w-8 text-white" height={32} width={32} />
			) : (
				<XMarkIcon className="h-8 w-8 text-white" height={32} width={32} />
			)}
		</Menu.Button>
	);
};

export default MobileMenuButton;
