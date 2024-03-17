import Link from "next/link";

export default function SideNav() {
  return (
    <div className="w-[340px]">
      <div className="text-[28px] my-[27px]">Overview</div>
      <hr className="block-separator" />
      <ul className="list-disc my-[17px] pl-[38px] text-links">
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Now</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/">Book Notes</Link>
        </li>
        <li>
          <Link href="/">@idkabhinav</Link>
        </li>
      </ul>
      <div className="text-[28px] my-[27px]">Popular Post</div>
      <hr className="block-separator" />
      <ul className="list-disc my-[17px] pl-[38px] text-links">
        <li>
          <Link href="/">Post 1</Link>
        </li>
        <li>
          <Link href="/">Post 2</Link>
        </li>
        <li>
          <Link href="/">Post 3</Link>
        </li>
        <li>
          <Link href="/">Post 4</Link>
        </li>
        <li>
          <Link href="/">[All Writing]</Link>
        </li>
      </ul>
      <div className="text-[28px] my-[27px]">Curation</div>
      <hr className="block-separator" />
      <ul className="list-disc my-[17px] pl-[38px] text-links">
        <li>
          <Link href="/">Collection 1</Link>
        </li>
        <li>
          <Link href="/">Collection 2</Link>
        </li>
      </ul>
    </div>
  );
}
