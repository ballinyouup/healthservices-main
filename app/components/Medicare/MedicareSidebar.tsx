import { Tab } from "@headlessui/react";

const MedicareSidebar = () => {
	return (
		<Tab.List className="md:col-span-4 lg:col-span-3">
			<div className="flex flex-col items-start justify-start p-6 font-bold">
				<Tab className="w-full p-4 hover:bg-purple hover:text-white sm:w-fit">
					Overview
				</Tab>
				<Tab className="w-full p-4 hover:bg-purple hover:text-white sm:w-fit">
					Eligibility & Enrollment
				</Tab>
				<Tab className="w-full p-4 hover:bg-purple hover:text-white sm:w-fit">
					Original Medicare
				</Tab>
				<Tab className="w-full p-4 hover:bg-purple hover:text-white sm:w-fit">
					Medicare Advantage
				</Tab>
				<Tab className="w-full p-4 hover:bg-purple hover:text-white sm:w-fit">
					Medicare Supplement
				</Tab>
				<Tab className="flex w-full flex-col items-center p-4 hover:bg-purple hover:text-white sm:w-fit sm:items-start sm:justify-start">
					<span>Prescription Drug</span>
					<span>Coverage</span>
				</Tab>
				<Tab className="w-full p-4 hover:bg-purple hover:text-white sm:w-fit">
					Costs & Coverage
				</Tab>
				<Tab className="w-full p-4 hover:bg-purple hover:text-white sm:w-fit">
					Additional Benefits
				</Tab>
			</div>
		</Tab.List>
	);
};

export default MedicareSidebar;
