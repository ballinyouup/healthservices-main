import { Tab } from "@headlessui/react";

const ObamacareAdditional = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="pb-2 text-4xl font-bold sm:text-5xl">OVERVIEW</div>
			<span>
				Obamacare is a federal law that provides affordable and quality health
				insurance to millions of Americans. It offers various types of cost
				assistance, such as premium tax credits, cost-sharing reduction
				subsidies, Medicaid expansion, and CHIP. It also sets minimum standards
				for health plans, such as covering essential health benefits, preventive
				services, and pre-existing conditions.
			</span>
			<span>
				You can enroll in an Obamacare plan through the Health Insurance
				Marketplace during the open enrollment period or a special enrollment
				period if you qualify. You can compare plans based on premiums,
				deductibles, copayments, coinsurance, out-of-pocket maximums, networks,
				and benefits. You can also get help with enrollment online, by phone, by
				mail, or in person.
			</span>
			<span>
				You should report any changes in your income or household size to the
				Marketplace as soon as possible. Some Obamacare plans may offer
				additional benefits that are not required by law but may enhance your
				health and well-being.
			</span>
		</Tab.Panel>
	);
};

export default ObamacareAdditional;
