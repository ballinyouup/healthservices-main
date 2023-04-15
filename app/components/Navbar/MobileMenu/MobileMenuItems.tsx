import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Fragment } from "react";

const MobileMenuItems = () => {
	const menuItems: JSX.Element[] = [
		<Menu.Item>
			<Link href="/">Medicare</Link>
		</Menu.Item>,
		<Menu.Item>
			<Link href="/">Obamacare</Link>
		</Menu.Item>,
		<Menu.Item>
			<Link href="/">Life Insurance</Link>
		</Menu.Item>,
		<Menu.Item>
			<Link href="/">Funeral Assistance</Link>
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
			<Menu.Items className="absolute right-0 top-28 flex w-full flex-col gap-1 rounded-md bg-white p-3 text-lg ring-1 ring-black ring-opacity-20 focus:outline-none">
				{menuItems.map((item, index) => {
					return (
						<>
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
							{index !== menuItems.length - 1 && (
								<hr className="border-black border-opacity-25" />
							)}
						</>
					);
				})}
			</Menu.Items>
		</Transition>
	);
};

export default MobileMenuItems;
