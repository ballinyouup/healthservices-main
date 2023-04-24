import Airtable from "airtable";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	const base = new Airtable({
		apiKey: process.env.AIRTABLE_API_KEY as string,
	}).base("appX7LJE3epl1urmY");
	const body = await request.json();
	base("Users").create(body, { typecast: true, method: "post" });

	return new Response("Success", { headers: request.headers });
}
