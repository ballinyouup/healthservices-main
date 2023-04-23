import { Tab } from "@headlessui/react";

const LifeInsuranceHowTo = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
				<span>Life Insurance</span>
				<span>How To</span>
			</div>
			<span>
				Choosing a life insurance policy depends on your personal and financial
				goals, your budget, and your risk tolerance. Here are some questions to
				ask yourself before buying a life insurance policy:
			</span>
			<ul className="list-disc">
				<li className="ml-6">How much coverage do I need?</li>
				<li className="ml-6">How long do I need coverage for?</li>
				<li className="ml-6">How much can I afford to pay in premiums?</li>
				<li className="ml-6">
					Do I want to build cash value or just have a death benefit?
				</li>
				<li className="ml-6">
					Do I want to participate in the market or have a guaranteed rate of
					return?
				</li>
				<li className="ml-6">
					Do I want to have flexibility or stability in my policy?
				</li>
			</ul>
		</Tab.Panel>
	);
};

export default LifeInsuranceHowTo;
