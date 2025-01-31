import Link from "next/link"
import Image from "next/image"

import CustomButton from "./CustomButton"

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[144px] flex justify-between items-center sm:px-16 px-6 py-4s">
      <Link href="/" className="flex justify-center
       items-center">
      </Link>
      </nav>
    </header>
  )
}

export default Navbar