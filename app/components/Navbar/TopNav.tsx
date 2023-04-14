import Image from "next/image";

const TopNav = () => {
	return (
		<div className="hidden w-full flex-col items-center md:flex">
			<div className="isolate flex h-10 w-full flex-row items-center justify-end bg-neutral-100">
				<div className="flex h-7 w-full flex-row items-center justify-end gap-4 p-0 pr-3">
					<span className="h-4 text-sm font-semibold leading-5 tracking-wide text-black">
						Hours: 9am - 5pm
					</span>
					<div className="flex flex-row items-center gap-2 p-1">
						<Image
							className="h-6 w-6"
							src="/phone.png"
							alt="phone icon"
							width={24}
							height={24}
						/>
						<a
							href="tel:+17864447717"
							className="h-4 text-sm font-semibold leading-5 tracking-wide text-black"
						>
							Call 1+(786)-444-7717
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
