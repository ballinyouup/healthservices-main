"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Dropdown = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [mobileMenu, setMobileMenu] = useState(false);
	function handleMenuOpen() {
		setMenuOpen(!menuOpen);
	}
	function handleMobileMenu() {
		setMobileMenu(!mobileMenu);
	}

	return (
		<div className="hidden font-semibold md:flex">
			<Menu as="div">
			<div>
				<Menu.Button
					onClick={handleMenuOpen}
					className="relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-3xl  border border-transparent bg-purple px-3 py-2 text-lg font-bold text-white before:absolute before:-left-96 before:-top-24 before:h-60 before:w-96 before:rotate-45 before:bg-gradient-to-br before:from-transparent before:via-[rgba(255,255,255,0.5)] before:to-[rgba(255,255,255,1)] before:transition-all before:duration-[600ms] before:ease-in-out hover:border hover:border-[rgba(0,0,0,0.5)] hover:shadow-md hover:shadow-[rgba(0,0,0,0.2)] before:hover:left-full before:hover:opacity-50 active:shadow-inner active:shadow-[rgba(0,0,0,0.5)]"
				>
					Insurance
					{menuOpen ? (
						<Image
							src="/upArrow.png"
							alt="Down Arrow"
							className="w-3 invert"
							width={12}
							height={12}
						/>
					) : (
						<Image
							src="/downArrow.png"
							alt="Up Arrow"
							className="w-3 invert"
							width={12}
							height={12}
						/>
					)}
				</Menu.Button>
				</div>
				<Menu.Items className="absolute right-4 mt-0.5 flex w-32 flex-col items-start rounded-md bg-purple text-white">
					<Menu.Item>
						<Link
							href="/medicare"
							className="w-full rounded-t-md border border-transparent p-3 hover:border-white hover:border-opacity-30 hover:bg-purplelight"
						>
							Medicare
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link
							href="/obamacare"
							className="w-full border border-transparent p-3 hover:border-white hover:border-opacity-30 hover:bg-purplelight"
						>
							Obamacare
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link
							href="/lifeinsurance"
							className="w-full border border-transparent p-3 hover:border-white hover:border-opacity-30 hover:bg-purplelight"
						>
							Life
							<br />
							Insurance
						</Link>
					</Menu.Item>
					<Menu.Item>
						<Link
							href="/funeralassistance"
							className="w-full rounded-b-md border border-transparent p-3 hover:border-white hover:border-opacity-30 hover:bg-purplelight"
						>
							Funeral
							<br />
							Assistance
						</Link>
					</Menu.Item>
				</Menu.Items>
			</Menu>
			<div className="flex h-12 flex-row items-start gap-3 py-1 pr-3 md:hidden">
				<button onClick={handleMobileMenu}>
					{mobileMenu ? (
						<XMarkIcon className="h-12" />
					) : (
						<Bars3Icon className="h-12" />
					)}
				</button>
			</div>
			{mobileMenu && (
				<div className="absolute top-24 flex h-fit w-full flex-col items-start gap-5 bg-purple py-10 pl-12 pr-6 text-2xl font-semibold text-white sm:left-1/2 sm:h-screen sm:w-1/2 md:hidden">
					<Link href="/medicare">Medicare</Link>
					<Link href="/obamacare">Obamacare</Link>
					<Link href="/lifeinsurance">Life Insurance</Link>
					<Link href="/funeralassistance">Funeral Assistance</Link>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
