import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendlyButton } from "@/components/CalendlyButton"
import { heroContent, siteConfig } from "@/config/content"
import { Check, ArrowRight, Download } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            {siteConfig.tagline}
          </Badge>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {heroContent.headline}
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            {heroContent.subheadline}
          </p>
          
          <ul className="mb-10 flex flex-col items-center gap-3 text-left md:flex-row md:justify-center md:gap-6">
            {heroContent.bullets.map((bullet, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm md:text-base">{bullet}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CalendlyButton size="lg" className="gap-2">
              {heroContent.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </CalendlyButton>
            <Button size="lg" variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              {heroContent.secondaryCta}
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground">
            {heroContent.trustLine}
          </p>
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute -top-40 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
    </section>
  )
}
