import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { packages } from "@/config/content"
import { PaymentModal } from "@/components/PaymentModal"
import { Check, CreditCard, Star } from "lucide-react"

export function PackagesSection() {
  return (
    <section id="packages" className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Service Packages
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Choose the package that fits your needs. All packages include custom development, integrations, and post-launch support. Prices in USD.
          </p>
        </div>
        
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`relative flex flex-col transition-shadow hover:shadow-lg ${
                pkg.highlighted ? 'border-primary shadow-md' : ''
              }`}
            >
              {pkg.highlighted && pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="gap-1 bg-primary px-3 py-1">
                    <Star className="h-3 w-3" />
                    {pkg.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {pkg.tier}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{pkg.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                  {"duration" in pkg && (
                    <span className="text-sm text-muted-foreground">— {pkg.duration}</span>
                  )}
                </div>
                <CardDescription className="mt-2">
                  For: {pkg.forWho}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {pkg.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <PaymentModal
                  packageId={pkg.id}
                  packageName={pkg.name}
                  packagePrice={pkg.price}
                  priceAmount={pkg.priceAmount}
                >
                  <Button 
                    className="w-full gap-2" 
                    variant={pkg.highlighted ? "default" : "outline"}
                  >
                    <CreditCard className="h-4 w-4" />
                    Get Started
                  </Button>
                </PaymentModal>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
