interface IContactCard {}

const ContactCard: React.FC<IContactCard> = () => {
	return (
		<div className="flex h-full w-120 flex-col items-start justify-start gap-6 rounded-xl border border-black border-opacity-25 bg-slate-100 p-6 sm:p-12">
			<div className="flex w-full max-w-sm flex-col gap-4">
				<span className="text-4xl font-bold uppercase text-purple">
					Contact Us
				</span>
				<span>
					Fill out this form and our team will get back to you within 24 hours
				</span>
			</div>
			<div className="flex w-full max-w-sm flex-col gap-1">
				<div className="flex gap-2 sm:gap-4">
					<div className="flex flex-col">
						<label>First Name:</label>
						<input
							type="text"
							placeholder="First name..."
							className="h-10 w-full max-w-sm rounded-xl border border-black border-opacity-25 indent-3"
						/>
					</div>
					<div className="flex flex-col">
						<label>Last Name:</label>
						<input
							type="text"
							placeholder="Last Name..."
							className="h-10 w-full max-w-sm rounded-xl border border-black border-opacity-25 indent-3"
						/>
					</div>
				</div>
				<label>Email:</label>
				<input
					type="email"
					placeholder="Enter Email..."
					className="h-10 w-full max-w-sm rounded-xl border border-black border-opacity-25 indent-3"
				/>
				<label>Phone Number:</label>
				<input
					type="tel"
					placeholder="Enter Phone Number..."
					className="h-10 w-full max-w-sm rounded-xl border border-black border-opacity-25 indent-3"
				/>
				<button className="relative mt-2 flex w-full max-w-sm cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-transparent bg-purple px-3 py-2 text-base font-bold text-white before:absolute before:-left-96 before:-top-24 before:h-60 before:w-96 before:rotate-45 before:bg-gradient-to-br before:from-transparent before:via-[rgba(255,255,255,0.5)] before:to-[rgba(255,255,255,1)] before:transition-all before:duration-[600ms] before:ease-in-out hover:border hover:border-[rgba(0,0,0,0.5)] hover:shadow-md hover:shadow-[rgba(0,0,0,0.2)] before:hover:left-full before:hover:opacity-50 active:shadow-inner active:shadow-[rgba(0,0,0,0.5)]">
					Submit
				</button>
			</div>
		</div>
	);
};

export default ContactCard;
