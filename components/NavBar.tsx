import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

function NavBar() {
  return (
    <div className="flex items-center justify-between px-5  p-3 shadow-md border-b-[1px]">
      <Image src="/logo.png" alt="logo car" width={100} height={100} />
      <div className="hidden md:flex gap-5">
        <h2 className="hover:bg-blue-500 rounded-full hover:text-white px-3 cursor-pointer p-2 transition">Home</h2>
        <h2 className="hover:bg-blue-500 rounded-full hover:text-white px-3 cursor-pointer p-2 transition">History</h2>
        <h2 className="hover:bg-blue-500 rounded-full hover:text-white px-3 cursor-pointer p-2 transition">Contact Us</h2>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default NavBar;
