import { Tab } from "@headlessui/react";

const ObamacareHIM = () => {
	return (
		<Tab.Panel className="flex flex-col gap-4 text-lg">
			<div className="flex flex-col pb-2 text-4xl font-bold uppercase sm:text-5xl">
				<span>Health</span>
				<span>Insurance</span>
				<span>Marketplace</span>
			</div>
			<p>
				<span>
					The Health Insurance Marketplace, also known as the Exchange, is an
					online platform where individuals, families, and small businesses can
					compare and purchase health insurance plans. Plans offered in the
					Marketplace are grouped into four categories based on the level of
					coverage they provide: Bronze, Silver, Gold, and Platinum.
				</span>
				<span>
					All plans in the Marketplace must cover a set of essential health
					benefits, including hospitalization, maternity care, mental health
					services, and prescription drugs. In addition, plans cannot deny
					coverage or charge higher premiums based on pre-existing conditions.
				</span>
			</p>
		</Tab.Panel>
	);
};

export default ObamacareHIM;
