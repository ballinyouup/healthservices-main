import { Tab } from "@headlessui/react";

const ObamacareEligibility = () => {
	return (
		<Tab.Panel>
			<div className="flex flex-col pb-6 text-4xl font-bold uppercase sm:text-5xl">
				<span>Eligibility &</span>
				<span>Enrollment</span>
			</div>
			<p className="flex flex-col gap-6 text-lg">
				<span>
					Most U.S. citizens and legal residents are eligible for health
					coverage under the ACA, either through the Health Insurance
					Marketplace, Medicaid expansion, or employer-sponsored insurance. The
					ACA does not generally affect individuals aged 65 and older, as they
					are covered by Medicare.
				</span>
				<span>
					Enrollment in the Health Insurance Marketplace occurs during the
					annual Open Enrollment Period (OEP), which typically runs from
					November 1 to December 15. If you experience a qualifying life event,
					such as losing your job, getting married, or having a child, you may
					be eligible for a Special Enrollment Period (SEP) outside of the OEP.
				</span>
			</p>
		</Tab.Panel>
	);
};

export default ObamacareEligibility;
