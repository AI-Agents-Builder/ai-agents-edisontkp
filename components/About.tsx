import { aboutContent } from "@/config/content"
import { Check, Bot } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                {aboutContent.title}
              </h2>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                {aboutContent.description}
              </p>
              <ul className="space-y-3">
                {aboutContent.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10">
                    <Bot className="h-24 w-24 text-primary" />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 h-8 w-8 rounded-full bg-primary/20" />
                <div className="absolute -bottom-2 -left-6 h-12 w-12 rounded-full bg-primary/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
