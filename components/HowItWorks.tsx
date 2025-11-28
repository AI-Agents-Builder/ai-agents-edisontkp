import { howItWorksSteps } from "@/config/content"
import { Phone, Pencil, Wrench, Rocket } from "lucide-react"

const stepIcons = [Phone, Pencil, Wrench, Rocket]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            How We Work Together
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            A straightforward process from discovery to deployment
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:block md:-translate-x-1/2" />
            
            <div className="space-y-8 md:space-y-12">
              {howItWorksSteps.map((item, index) => {
                const Icon = stepIcons[index]
                const isEven = index % 2 === 0
                
                return (
                  <div 
                    key={item.step} 
                    className={`relative flex items-start gap-4 md:gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Step content */}
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`rounded-lg border bg-card p-6 shadow-sm ${
                        isEven ? 'md:mr-8' : 'md:ml-8'
                      }`}>
                        <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Step indicator */}
                    <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground md:relative md:left-auto md:shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    {/* Empty space for alternating layout */}
                    <div className="hidden flex-1 md:block" />
                  </div>
                )
              })}
            </div>
          </div>
          
          <p className="mt-12 text-center text-sm text-muted-foreground">
            Technical stack and deployment options are tailored to your environment (cloud, VPC, or on-prem).
          </p>
        </div>
      </div>
    </section>
  )
}
