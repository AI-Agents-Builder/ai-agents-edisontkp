import Link from "next/link"
import { siteConfig } from "@/config/content"
import { Bot } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">{siteConfig.name}</span>
        </Link>
        
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#packages" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Packages
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </Link>
          <Link href="#use-cases" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Use Cases
          </Link>
          <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
