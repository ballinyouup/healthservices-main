import { Tab } from "@headlessui/react";

const MedicareSupplement = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
				<span>Medicare</span>
				<span>Supplements</span>
			</div>
			<span>
				Medicare Supplement Insurance, also known as Medigap, is designed to
				help cover some of the out-of-pocket costs associated with Original
				Medicare, such as deductibles, coinsurance, and copayments.
			</span>
			<span>
				Medigap policies are offered by private insurance companies and can only
				be used with Original Medicare, not Medicare Advantage plans. There are
				10 standardized Medigap plans, labeled A, B, C, D, F, G, K, L, M, and N,
				each offering different levels of coverage. It's essential to compare
				Medigap plans carefully to find the one that best meets your needs.
			</span>
		</Tab.Panel>
	);
};

export default MedicareSupplement;
