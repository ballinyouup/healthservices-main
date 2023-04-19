import { Tab } from "@headlessui/react";
import Divider from "../../Divider/Divider";

const MedicareOverview = () => {
	return (
		<Tab.Panel>
			<div className="pb-6 text-5xl font-bold">OVERVIEW</div>
			<p>
				<strong> Medicare </strong> is a federal health insurance program that
				provides coverage to eligible individuals who are
				<strong> 65 or older, </strong> have
				<strong> certain disabilities,</strong> or have
				<strong>
					&nbsp;end-stage renal disease.
					<br />
				</strong>
				The program offers a&nbsp;
				<strong>range of benefits and services,</strong>
				which are divided into two main parts: <br />
				<strong> Original Medicare </strong>
				and <strong> Medicare Advantage.</strong>
			</p>
			<Divider />
			<p>
				<strong> Original Medicare </strong> is a
				<strong> fee-for-service plan </strong> that covers
				<strong>
					hospital stays, doctor visits, and other medical services,
				</strong>
				&nbsp;and it is divided into <strong> two parts:</strong>
				<strong> Part A </strong> which covers <strong> inpatient care </strong>
				in hospitals, and <strong> Part B </strong> which covers
				<strong> doctor visits </strong> and
				<strong> other outpatient services </strong> <br />
				<br /> On the other hand, <strong>Medicare Advantage plans</strong>
				are offered by <strong> private insurance companies </strong> and
				provide <strong> additional benefits </strong> beyond what
				<em> Original Medicare </em> covers, such as
				<strong> prescription drug coverage </strong> and additional coverage
				for <strong> vision, hearing, and dental services. </strong>
			</p>
			<Divider />
			<p>
				<strong>Enrolling in Medicare </strong> requires several steps,
				including <strong> determining eligibility, </strong>{" "}
				<strong> selecting a plan </strong> and{" "}
				<strong> completing the necessary paperwork. </strong>
				<br />
				<br />
				<strong> Eligibility for Medicare </strong> is based on{" "}
				<strong> age </strong> <strong> disability </strong> or{" "}
				<strong> end-stage renal disease </strong> The{" "}
				<strong> initial enrollment period </strong> for Medicare starts{" "}
				<strong> three months prior </strong> to an individual's{" "}
				<strong> 65th birthday </strong> and continues for{" "}
				<strong> three months after </strong>
			</p>
			<Divider />
			<p>
				{" "}
				<strong> Users </strong> have the option to enroll in{" "}
				<strong> Original Medicare </strong> or{" "}
				<strong> Medicare Advantage, </strong> and can also purchase{" "}
				<strong> additional coverage </strong> through{" "}
				<strong> Medigap </strong> or{" "}
				<strong> prescription drug coverage (Part D) </strong> if they so
				choose. <br />
				<br />
				<strong> Navigating the Medicare program </strong> can be complex and
				there are many options available.{" "}
				<strong> Understanding the basics </strong> of the program and the{" "}
				<strong> enrollment process </strong> is crucial for users to access
				more detailed information as needed.
			</p>
		</Tab.Panel>
	);
};

export default MedicareOverview;
