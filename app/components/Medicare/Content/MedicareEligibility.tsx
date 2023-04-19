import { Tab } from "@headlessui/react";
import Divider from "../../Divider/Divider";

const MedicareEligibility = () => {
	return (
		<Tab.Panel>
			<div className="flex flex-col pb-6 text-5xl font-bold uppercase">
				<span>Eligibility &</span>
				<span>Enrollment</span>
			</div>
			<p>
				<strong>Medicare </strong> is a federal health insurance program that
				provides coverage to eligible individuals who are&nbsp;
				<strong> 65 or older, </strong> have&nbsp;
				<strong> certain disabilities,</strong> or have&nbsp;
				<strong>
					end-stage renal disease.
					<br />
					<br />
				</strong>
				The program offers a
				<strong>&nbsp; range of benefits and services,</strong>&nbsp; which are
				divided into two main parts:
				<strong> Original Medicare </strong> and&nbsp;
				<strong> Medicare Advantage.</strong>
			</p>
			<Divider />
			<p>
				<strong> Original Medicare </strong> is a
				<strong> fee-for-service plan </strong> that covers
				<strong>
					&nbsp;hospital stays, doctor visits, and other medical services,
				</strong>
				&nbsp;and it is divided into <strong> two parts:</strong>
				<strong> Part A </strong> which covers <strong> inpatient care </strong>
				in hospitals, and <strong> Part B </strong> which covers
				<strong> doctor visits </strong> and
				<strong> other outpatient services </strong> <br />
				<br /> On the other hand,&nbsp;
				<strong>Medicare Advantage plans&nbsp;</strong>
				are offered by <strong> private insurance companies </strong> and
				provide <strong> additional benefits </strong> beyond what
				<em> Original Medicare </em> covers, such as
				<strong> prescription drug coverage </strong> and additional coverage
				for <strong> vision, hearing, and dental services. </strong>
			</p>
			<Divider />
			<p>
				<strong>Enrolling in Medicare </strong> requires several steps,
				including <strong> determining eligibility, </strong>
				<strong> selecting a plan </strong> and
				<strong> completing the necessary paperwork. </strong>
				<br />
				<br />
				<strong> Eligibility for Medicare </strong> is based on
				<strong> age </strong> <strong> disability </strong> or
				<strong> end-stage renal disease </strong> The
				<strong> initial enrollment period </strong> for Medicare starts
				<strong> three months prior </strong> to an individual's
				<strong> 65th birthday </strong> and continues for
				<strong> three months after </strong>
			</p>
		</Tab.Panel>
	);
};

export default MedicareEligibility;
