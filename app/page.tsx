import Link from "next/link";
export default function Home() {
	return (
		<div>
			<h1 className="text-5xl font-bold mb-4">Hi!</h1>
			<p className="text-lg mb-4">
				I’m a curious person. By profession, I'm a Product Manager.{" "}
				<br /> I build consumer products inside of startups.<br></br>I
				spend a lot of time evangelizing startups, businesses and the
				power of building tech.
			</p>
			<span className="text-lg">
				<Link
					className="underline hover:no-underline underline-offset-2 text-links"
					href="/now"
				>
					Now
				</Link>
				: What I'm currently upto
			</span>
		</div>
	);
}
