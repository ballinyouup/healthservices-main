"use client";
import { Menu } from "@headlessui/react";
import MenuButton from "./MenuButton";
import MenuItems from "./MenuItems";

const Dropdown = () => {
	return (
		<div className="hidden font-semibold md:flex">
			<Menu as="div" className="relative inline-block text-left">
				<MenuButton />
				<MenuItems />
			</Menu>
		</div>
	);
};

export default Dropdown;
