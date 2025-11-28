import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useCases } from "@/config/content"
import { ShieldCheck, Building2, GraduationCap, Briefcase, ShoppingCart, HeartPulse } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "shield-check": ShieldCheck,
  "building-2": Building2,
  "graduation-cap": GraduationCap,
  "briefcase": Briefcase,
  "shopping-cart": ShoppingCart,
  "heart-pulse": HeartPulse,
}

export function UseCases() {
  return (
    <section id="use-cases" className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Where AI Agents Fit Best
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Industry-specific agent solutions for real business problems
          </p>
        </div>
        
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => {
            const Icon = iconMap[useCase.icon]
            return (
              <Card key={index} className="transition-shadow hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{useCase.industry}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
