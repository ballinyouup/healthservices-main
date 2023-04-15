"use client";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import {
	Bars3Icon,
	ChevronDownIcon,
	ChevronUpIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { motion } from "framer-motion";

const Dropdown = () => {
	const buttonStyle =
		"relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-3xl  border border-transparent bg-purple px-3 py-2 text-lg font-bold text-white before:absolute before:-left-96 before:-top-24 before:h-60 before:w-96 before:rotate-45 before:bg-gradient-to-br before:from-transparent before:via-[rgba(255,255,255,0.5)] before:to-[rgba(255,255,255,1)] before:transition-all before:duration-[600ms] before:ease-in-out hover:border hover:border-[rgba(0,0,0,0.5)] hover:shadow-md hover:shadow-[rgba(0,0,0,0.2)] before:hover:left-full before:hover:opacity-50 active:shadow-inner active:shadow-[rgba(0,0,0,0.5)]";
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
		<div className="hidden font-semibold md:flex">
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className={buttonStyle}>
						Insurance
						<ChevronDownIcon
							className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
							aria-hidden="true"
						/>
					</Menu.Button>
				</div>
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
			</Menu>
		</div>
	);
};

export default Dropdown;
