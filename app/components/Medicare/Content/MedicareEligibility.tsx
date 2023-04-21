import { Tab } from "@headlessui/react";

const MedicareEligibility = () => {
	return (
		<Tab.Panel>
			<div className="flex flex-col pb-6 text-4xl sm:text-5xl font-bold uppercase">
				<span>Eligibility &</span>
				<span>Enrollment</span>
			</div>
			<p className="flex flex-col gap-6 text-lg">
				<div>
					<span className="font-bold">
						To be eligible for Medicare, individuals must be:
					</span>
					<ul className="ml-8 list-disc">
						<li>Aged 65 or older</li>
						<li>
							Under 65 but permanently disabled and receiving Social Security
							Disability Insurance (SSDI) for at least 24 months
						</li>
						<li>
							Diagnosed with End-Stage Renal Disease (ESRD) or Amyotrophic
							Lateral Sclerosis (ALS)
						</li>
					</ul>
				</div>
				<div>
					<span className="font-bold">You can enroll:</span>
					<ul className="ml-8 list-disc">
						<li>Online at www.ssa.gov</li>
						<li>By phone at 1-800-772-1213 (TTY 1-800-325-0778)</li>
						<li>In person at your local Social Security office</li>
					</ul>
				</div>
				<span>
					Enrollment in Medicare is handled through the Social Security
					Administration. You can enroll during your Initial Enrollment Period
					(IEP), which begins three months before the month you turn 65,
					includes your birth month, and extends for three months after your
					birth month. If you miss your IEP, you can enroll during the General
					Enrollment Period (GEP) which occurs from January 1 to March 31 each
					year, but you may face late enrollment penalties.
				</span>
			</p>
		</Tab.Panel>
	);
};

export default MedicareEligibility;
