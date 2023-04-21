import { Tab } from "@headlessui/react";

const MedicareCosts = () => {
	return (
		<Tab.Panel>
			<div className="flex flex-col pb-6 text-4xl sm:text-5xl font-bold uppercase">
				<span>Costs &</span>
				<span>Coverage</span>
			</div>
			<div>
				<ul className="flex list-disc flex-col gap-4 text-lg">
					<span>
						Medicare costs and benefits can vary depending on the coverage you
						select. Original Medicare has deductibles,copayments, and
						coinsurance, while Medicare Advantage and Medigap plans may have
						different cost-sharing structures. Here's a brief overview of some
						common costs and benefits associated with Medicare:
					</span>
					<span className="text-xl font-bold">Part A:</span>
					<li className="ml-6">
						Most people do not pay a premium for Part A. However, there is a
						deductible for each benefit period ($1,484 in 2021) and coinsurance
						for extended hospital stays.
					</li>
					<span className="text-xl font-bold">Part B:</span>
					<li className="ml-6">
						There is a standard monthly premium for Part B ($148.50 in 2021),
						which may be higher based on your income. The annual deductible is
						$203 in 2021, and after meeting the deductible, you typically pay
						20% of the Medicare-approved amount for most services. Medicare
						Advantage Costs Medicare Advantage plans may have different
						premiums, deductibles, copayments, and coinsurance. In addition to
						the Part B premium, you may pay an additional premium for the
						Medicare Advantage plan. Out-of-pocket costs vary depending on the
						plan you choose, but all Medicare Advantage plans have an annual
						out-of-pocket maximum, which limits the amount you'll pay for
						covered services in a year.
					</li>
					<span className="text-xl font-bold">Medigap Costs:</span>
					<li className="ml-6">
						Medigap Costs Medigap plans have monthly premiums that vary based on
						the plan you choose, your age, and your location. Medigap policies
						help cover out-of-pocket costs associated with Original Medicare,
						such as deductibles, coinsurance, and copayments. Some plans also
						offer additional benefits, like coverage for emergency medical care
						when traveling outside the United States.
					</li>
					<span className="text-xl font-bold">
						Prescription Drug Coverage Costs:
					</span>
					<li className="ml-6">
						Prescription Drug Coverage Costs Part D plans have monthly premiums
						that vary based on the plan you choose. There may also be
						deductibles, copayments, and coinsurance associated with your
						prescription drug coverage. If your income is above a certain limit,
						you may pay an Income-Related Monthly Adjustment Amount (IRMAA) in
						addition to your Part D premium.
					</li>
				</ul>
			</div>
		</Tab.Panel>
	);
};

export default MedicareCosts;
