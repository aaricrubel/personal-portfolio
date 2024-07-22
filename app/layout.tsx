import type { Metadata } from "next";
import { Asul } from "next/font/google";
import "./globals.css";
import SideNav from "./ui/sidenav";
import Link from "next/link";

const asul = Asul({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Abhinav Mukherjee",
	description: "Personal Website of Abhinav Mukherjee",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${asul.className} antialiased bg-background`}>
				<div>
					<div className="py-16">
						<div className="px-1.5">
							<div className="max-w-5xl flex flex-col mx-auto">
								<div className="text-[32px]">
									<Link
										href="/"
										className="hover:underline underline-offset-2"
									>
										Abhinav Mukherjee
									</Link>
								</div>
								<div className="flex flex-row mt-6 gap-20">
									<SideNav />
									<div>{children}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
