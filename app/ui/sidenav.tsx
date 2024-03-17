import Link from "next/link";

export default function SideNav() {
  return (
    <div className="w-[340px]">
      <div className="text-[28px] my-[27px]">Overview</div>
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
            @idkabhinav
          </Link>
        </li>
      </ul>
      <div className="text-[28px] my-[27px]">Popular Post</div>
      <hr className="block-separator" />
      <ul className="list-disc my-[17px] pl-[38px] text-links">
        <li>
          <Link
            className="underline hover:no-underline underline-offset-2"
            href="/blog/${id}"
          >
            Post 1
          </Link>
        </li>
        <li>
          <Link
            className="underline hover:no-underline underline-offset-2"
            href="/blog/${id}"
          >
            Post 2
          </Link>
        </li>
        <li>
          <Link
            className="underline hover:no-underline underline-offset-2"
            href="/blog/${id}"
          >
            Post 3
          </Link>
        </li>
        <li>
          <Link
            className="underline hover:no-underline underline-offset-2"
            href="/blog/${id}"
          >
            Post 4
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
      <div className="text-[28px] my-[27px]">Curation</div>
      <hr className="block-separator" />
      <ul className="list-disc my-[17px] pl-[38px] text-links">
        <li>
          <Link
            className="underline hover:no-underline underline-offset-2"
            href="/"
          >
            Collection 1
          </Link>
        </li>
        <li>
          <Link
            className="underline hover:no-underline underline-offset-2"
            href="/"
          >
            Collection 2
          </Link>
        </li>
      </ul>
    </div>
  );
}
