import { Metadata } from "next";
import LifeInsuranceImage from "../components/LifeInsurance/LifeInsuranceImage";
import LifeInsuranceContent from "../components/LifeInsurance/LifeInsuranceContent";

export const metadata: Metadata = {
	title: "Funeral Assistance",
	description:
		"At HealthServicesFL.com, we understand the importance of good health and financial security. That's why we offer a range of insurance options, including Obamacare, Medicare, Funeral Assistance, and Life Insurance. Our commitment to excellence in customer service means you can trust us to take care of all your insurance needs.",
};

export default function Page() {
	return (
		<main className="flex w-full items-center justify-center">
			<div className="w-full max-w-5xl">
				<LifeInsuranceImage />
				<LifeInsuranceContent />
			</div>
		</main>
	);
}
