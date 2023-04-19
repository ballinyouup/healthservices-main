"use client";

import { Tab } from "@headlessui/react";
import MedicareOverview from "./MedicareOverview";
import MedicareSidebar from "./MedicareSidebar";

const MedicareContent = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-12">
			<Tab.Group vertical>
				<MedicareSidebar />
				<Tab.Panels className="flex p-8 md:col-span-8 lg:col-span-9">
					<span className="mr-8 border border-purple border-opacity-50" />
					<MedicareOverview />
					<Tab.Panel>Content 2</Tab.Panel>
					<Tab.Panel>Content 3</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</section>
	);
};

export default MedicareContent;
