import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { whyAgentsContent } from "@/config/content"
import { Headset, TrendingUp, Settings, Database } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "headset": Headset,
  "trending-up": TrendingUp,
  "settings": Settings,
  "database": Database,
}

export function WhyAgents() {
  return (
    <section id="why-agents" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {whyAgentsContent.title}
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            {whyAgentsContent.description}
          </p>
        </div>
        
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyAgentsContent.features.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <Card key={index} className="text-center transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
