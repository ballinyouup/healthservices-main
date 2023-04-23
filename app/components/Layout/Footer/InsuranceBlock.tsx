import Link from "next/link";

const InsuranceBlock = () => {
	const insuranceLinks = [
		{
			href: "/",
			text: "Home",
		},
		{
			href: "/medicare",
			text: "Medicare",
		},
		{
			href: "/obamacare",
			text: "Obamacare",
		},
		{
			href: "/lifeinsurance",
			text: "Life Insurance",
		},
		{
			href: "/funeralassistance",
			text: "Funeral Assistance",
		},
	];
	return (
		<div className="flex w-full max-w-xs items-center justify-center">
			<ul className="w-fit">
				{insuranceLinks.map((link, index) => (
					<li key={link.text}>
						{index !== 0 ? (
							<Link href={link.href} className="hover:underline">
								{link.text}
							</Link>
						) : (
							<span className="font-bold">{link.text}</span>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default InsuranceBlock;
