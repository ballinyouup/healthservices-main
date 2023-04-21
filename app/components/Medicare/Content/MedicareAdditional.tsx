import { Tab } from "@headlessui/react";

const MedicareAdditional = () => {
	return (
		<Tab.Panel>
			<div className="flex flex-col pb-6 text-5xl font-bold">
				<span>ADDITIONAL</span>
				<span>BENEFITS</span>
			</div>
			<div className="flex flex-col gap-4 text-lg">
				<span>
					Some Medicare plans offer additional benefits not covered by Original
					Medicare, such as vision, dental, and hearing coverage. These benefits
					are more commonly found in Medicare Advantage plans, but some Medigap
					policies may also include coverage for specific services not covered
					by Original Medicare.
				</span>
				<span>
					In addition to these benefits, some Medicare plans may offer extra
					perks like wellness programs, gym memberships, and transportation
					services. It's essential to review and compare plan options carefully
					to ensure you select a plan that meets your healthcare needs and
					preferences.
				</span>
			</div>
		</Tab.Panel>
	);
};

export default MedicareAdditional;
