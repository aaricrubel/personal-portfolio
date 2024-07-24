import Link from "next/link";

export default function SideNav() {
	return (
		<div className="order-last md:order-first">
			<div className="text-3xl mt-[27px] mb-[10px]">Overview</div>
			<hr className="block-separator" />
			<ul className="list-disc my-[17px] pl-[38px] text-links">
				<li>
					<Link
						className="underline hover:no-underline underline-offset-2"
						href="/"
					>
						About
					</Link>
				</li>
				<li>
					<Link
						className="underline hover:no-underline underline-offset-2"
						href="/now"
					>
						Now
					</Link>
				</li>
				<li>
					<Link
						className="underline hover:no-underline underline-offset-2"
						href="/blog"
					>
						Blog
					</Link>
				</li>
				<li>
					<Link
						className="underline hover:no-underline underline-offset-2"
						href="/book-notes"
					>
						Book Notes
					</Link>
				</li>
				<li>
					<Link
						className="underline hover:no-underline underline-offset-2"
						href="mailto:abhinavmukherjee2001@gmail.com"
					>
						Email
					</Link>
				</li>
				<li>
					<Link
						className="underline hover:no-underline underline-offset-2"
						href="https://x.com/idkabhinav"
						target="_blank"
					>
						Twitter
					</Link>
				</li>
			</ul>
			<div className="text-3xl mt-[27px] mb-[10px]">
				My Favorite Posts
			</div>
			<hr className="block-separator" />
			<ul className="list-disc my-[17px] pl-[38px] text-links">
				<li>
					<Link
						className="underline hover:no-underline underline-offset-2"
						href="/blog/${id}"
					>
						High Risk, High Reward
					</Link>
				</li>
				<li>
					<Link
						className="underline hover:no-underline underline-offset-2"
						href="/blog/${id}"
					>
						Delayed Gratification
					</Link>
				</li>
				<li>
					<Link
						className="underline hover:no-underline underline-offset-2"
						href="/blog"
					>
						[All Writing]
					</Link>
				</li>
			</ul>
			<div className="text-3xl mt-[27px] mb-[10px]">Curation</div>
			<hr className="block-separator" />
			<ul className="list-disc my-[17px] pl-[38px] text-links">
				<li>
					<Link
						className="underline hover:no-underline underline-offset-2"
						href="/"
					>
						Pocket Saves
					</Link>
				</li>
				<li>
					<Link
						className="underline hover:no-underline underline-offset-2"
						href="/"
					>
						Raindrop Saves
					</Link>
				</li>
			</ul>
		</div>
	);
}
