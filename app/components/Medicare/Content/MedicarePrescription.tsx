import { Tab } from "@headlessui/react";

const MedicarePrescription = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
				<span>Prescription</span>
				<span>Drug Coverage</span>
			</div>
			<span>
				Medicare Part D provides prescription drug coverage and is offered
				through private insurance companies approved by CMS.
			</span>
			<span>
				Part D plans can be standalone prescription drug plans (PDPs) or
				included as part of a Medicare Advantage plan with prescription drug
				coverage (MA-PD).
			</span>
			<span>
				To enroll in a Part D plan, you must be enrolled in either Part A or
				Part B. You will pay a monthly premium for your Part D plan, which may
				vary depending on the plan you choose.
			</span>
		</Tab.Panel>
	);
};

export default MedicarePrescription;
