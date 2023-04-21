import { Tab } from "@headlessui/react";

const MedicareAdvantage = () => {
	return (
		<Tab.Panel>
			<div className="flex flex-col pb-6 text-4xl font-bold sm:text-5xl">
				<span>MEDICARE</span>
				<span>ADVANTAGE</span>
			</div>
			<div className="flex flex-col gap-4 text-lg">
				<span>
					Medicare Advantage, also known as Medicare Part C, is an alternative
					to Original Medicare provided by private insurance companies approved
					by the Centers for Medicare and Medicaid Services (CMS).
				</span>
				<span>
					Medicare Advantage plans must cover all services that Original
					Medicare covers, but they may also include additional benefits, such
					as vision, dental, and hearing coverage. Some Medicare Advantage plans
					also include prescription drug coverage (Part D).{" "}
				</span>
				<span>
					To enroll in a Medicare Advantage plan, you must already be enrolled
					in Medicare Part A and Part B. You will continue to pay your Part B
					premium and may also pay an additional premium for the Medicare
					Advantage plan.
				</span>
			</div>
		</Tab.Panel>
	);
};

export default MedicareAdvantage;
