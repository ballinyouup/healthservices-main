import Airtable from "airtable";

export async function POST(request: Request) {
	const base = new Airtable({
		apiKey: process.env.AIRTABLE_API_KEY as string,
	}).base("appX7LJE3epl1urmY");
	const body = await request.json();
	base("Users").create(body, { typecast: true }, function (err) {
		if (err) {
			console.error(err);
			return;
		}
	});

	return new Response("Success");
}
