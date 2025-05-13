import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="w-full py-4 px-6 md:px-12 bg-white flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <span className="text-white font-bold">W</span>
          </div>
          <span className="font-bold text-lg">WeFinance</span>
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
          About Us
        </Link>
        <Link href="/career" className="text-sm font-medium hover:text-primary transition-colors">
          Career
        </Link>
        <Link href="/news" className="text-sm font-medium hover:text-primary transition-colors">
          News
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
          More +
        </Link>
      </nav>

      <Button className="bg-primary hover:bg-primary/90 text-white rounded-md">Contact</Button>
    </header>
  )
}
