import { Tab } from "@headlessui/react";

const MedicareOriginal = () => {
	return (
		<Tab.Panel>
			<div className="flex flex-col pb-6 text-4xl sm:text-5xl font-bold">
				<span>ORIGINAL</span>
				<span>MEDICARE</span>
			</div>
			<div className="flex flex-col gap-4">
				<span className="text-xl font-bold">
					Original Medicare consists of two parts:
				</span>
				<ul className="ml-8 list-disc">
					<li>Part A (Hospital Insurance)</li>
					<li>Part B (Medical Insurance)</li>
				</ul>
				<span className="text-xl font-bold">Part A (Hospital Insurance)</span>
				<span>
					Part A covers inpatient hospital care, skilled nursing facility care,
					hospice care, and some home health care services. Most people do not
					pay a premium for Part A if they or their spouse paid Medicare taxes
					while working for at least 10 years (40 quarters).
				</span>
				<span className="text-xl font-bold"> Part B (Medical Insurance)</span>
				<span>
					Part B covers medically necessary services and preventive services,
					such as doctor visits, outpatient care, medical equipment, and some
					home health care services. Part B requires a monthly premium, which is
					typically deducted from your Social Security benefits.
				</span>
			</div>
		</Tab.Panel>
	);
};

export default MedicareOriginal;
