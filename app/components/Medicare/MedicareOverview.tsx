import { Tab } from "@headlessui/react";
import Divider from "../Divider/Divider";

const MedicareOverview = () => {
	return (
		<Tab.Panel>
			<span className="text-5xl font-bold">OVERVIEW</span>
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
		</Tab.Panel>
	);
};

export default MedicareOverview;
