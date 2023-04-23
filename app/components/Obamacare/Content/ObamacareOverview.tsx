import { Tab } from "@headlessui/react";

const ObamacareOverview = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="pb-2 text-4xl font-bold sm:text-5xl">OVERVIEW</div>
			<span>
				The Affordable Care Act (ACA), also known as Obamacare, is a
				comprehensive healthcare reform law enacted in 2010. Its primary goal is
				to make health insurance more affordable and accessible for all
				Americans, regardless of age, income, or pre-existing conditions.
			</span>
			<span>
				This page will provide an overview of the ACA, including its key
				components, eligibility requirements, enrollment process, coverage
				options, costs, and benefits.
			</span>
		</Tab.Panel>
	);
};

export default ObamacareOverview;
