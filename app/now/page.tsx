import Link from "next/link";

export default function Page() {
	return (
		<div>
			<h1 className="md:text-5xl text-3xl font-bold mb-4">
				What am I doing now?
			</h1>
			<br />
			<h6 className="text-xs italic">
				This page is inspired by Derek Sivers'{" "}
				<Link
					className="underline hover:no-underline underline-offset-2 text-links"
					href="https://sive.rs/now"
					target="_blank"
				>
					now
				</Link>{" "}
				page suggestion and his{" "}
				<Link
					className="underline hover:no-underline underline-offset-2 text-links"
					href="https://nownownow.com/"
					target="_blank"
				>
					Now Now Now
				</Link>{" "}
				movement. <br /> The purpose of this page is to share what I'm
				currently upto.
			</h6>
			<br />
			<h6 className="font-bold">Last updated - July'24</h6>
			<p className="md:text-lg text-sm my-4">
				I'm currently working as a Product Manager of Financial and Test
				Prep products <br /> at a Series-D startup called Leap in India,
				focusing on the Study Abroad Market.
			</p>
			<h2 className="md:text-2xl text-xl">
				What am I currently working on?
			</h2>
			<h2 className="md:text-2xl text-xl">What am I reading now?</h2>
			<h2 className="md:text-2xl text-xl">What am I listening now?</h2>
			<h2 className="md:text-2xl text-xl">What am I watching now?</h2>
		</div>
	);
}
