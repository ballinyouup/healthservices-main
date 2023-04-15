import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Fragment } from "react";
const MenuItems = () => {
	const menuItems: JSX.Element[] = [
		<Menu.Item>
			<Link href="/" className="hover:underline">
				Medicare
			</Link>
		</Menu.Item>,
		<Menu.Item>
			<Link href="/" className="hover:underline">
				Obamacare
			</Link>
		</Menu.Item>,
		<Menu.Item>
			<Link href="/" className="hover:underline">
				Life Insurance
			</Link>
		</Menu.Item>,
		<Menu.Item>
			<Link href="/" className="hover:underline">
				Funeral
				<br />
				Assistance
			</Link>
		</Menu.Item>,
	];

	return (
		<Transition
			as={Fragment}
			enter="transition ease-out duration-150"
			enterFrom="transform opacity-0 scale-0"
			enterTo="transform opacity-100 scale-100"
			leave="transition ease-in duration-150 scale-75"
			leaveFrom="transform opacity-100 scale-100"
			leaveTo="transform opacity-0 scale-95"
		>
			<Menu.Items className="absolute right-0 mt-2 flex w-36 flex-col gap-1 rounded-md bg-white p-3 ring-1 ring-black ring-opacity-20 focus:outline-none">
				{menuItems.map((item, index) => {
					return (
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								delay: 0.25 * index,
							}}
							key={index}
						>
							{item}
						</motion.div>
					);
				})}
			</Menu.Items>
		</Transition>
	);
};

export default MenuItems;
