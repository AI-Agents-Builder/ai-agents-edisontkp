"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { termsAndConditions, calendlyConfig } from "@/config/content"
import { CreditCard, Calendar, FileText, ExternalLink } from "lucide-react"

interface PaymentModalProps {
  packageName: string
  packagePrice: string
  priceAmount: number
  children: React.ReactNode
}

export function PaymentModal({ packageName, packagePrice, priceAmount, children }: PaymentModalProps) {
  const [step, setStep] = useState<"terms" | "payment" | "success">("terms")
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handlePayment = async () => {
    if (!termsAccepted) return
    
    setIsProcessing(true)
    
    // Simulate payment processing
    // In production, this would integrate with Stripe's payment flow
    // using redirectToCheckout or Stripe Elements
    setTimeout(() => {
      setStep("success")
      setIsProcessing(false)
    }, 2000)
  }

  const handleScheduleCall = () => {
    // Open Calendly in a new tab
    window.open(calendlyConfig.url, "_blank", "noopener,noreferrer")
    setIsOpen(false)
    resetModal()
  }

  const resetModal = () => {
    setStep("terms")
    setTermsAccepted(false)
    setIsProcessing(false)
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      resetModal()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden">
        {step === "terms" && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Terms and Conditions
              </DialogTitle>
              <DialogDescription>
                Please review and accept the terms before proceeding with payment for {packageName}.
              </DialogDescription>
            </DialogHeader>
            
            <ScrollArea className="h-[400px] rounded-md border p-4">
              <div className="space-y-6">
                <p className="text-sm text-muted-foreground">
                  Last updated: {termsAndConditions.lastUpdated}
                </p>
                {termsAndConditions.sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="mb-2 font-semibold">{section.title}</h3>
                    <p className="text-sm text-muted-foreground">{section.content}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="flex items-center space-x-2 pt-4 border-t">
              <Checkbox
                id="terms"
                checked={termsAccepted}
                onCheckedChange={(checked) => setTermsAccepted(checked === true)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I have read and agree to the Terms and Conditions
              </label>
            </div>
            
            <div className="flex justify-between items-center pt-4">
              <div>
                <p className="text-sm text-muted-foreground">Package: {packageName}</p>
                <p className="text-lg font-bold text-primary">{packagePrice}</p>
              </div>
              <Button 
                onClick={() => setStep("payment")} 
                disabled={!termsAccepted}
                className="gap-2"
              >
                <CreditCard className="h-4 w-4" />
                Continue to Payment
              </Button>
            </div>
          </>
        )}
        
        {step === "payment" && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Secure Payment
              </DialogTitle>
              <DialogDescription>
                Complete your payment securely via Stripe.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 py-4">
              <div className="rounded-lg border p-4 bg-muted/30">
                <h3 className="font-semibold mb-2">Order Summary</h3>
                <div className="flex justify-between items-center">
                  <span>{packageName}</span>
                  <span className="font-bold">{packagePrice}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  * 50% deposit required to commence work
                </p>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                  <CreditCard className="h-4 w-4" />
                  Secured by Stripe
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Clicking &quot;Pay Now&quot; will redirect you to Stripe&apos;s secure checkout page to complete your payment.
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-blue-50 dark:bg-blue-950 p-3 rounded-lg">
                <Calendar className="h-4 w-4 flex-shrink-0" />
                <span>After payment, you&apos;ll be able to schedule your discovery call via Calendly.</span>
              </div>
            </div>
            
            <div className="flex gap-3 pt-4 border-t">
              <Button 
                variant="outline" 
                onClick={() => setStep("terms")}
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="flex-1 gap-2"
              >
                {isProcessing ? (
                  <>Processing...</>
                ) : (
                  <>
                    Pay ${priceAmount / 2} Deposit
                  </>
                )}
              </Button>
            </div>
          </>
        )}
        
        {step === "success" && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-green-600">
                <Calendar className="h-5 w-5" />
                Payment Successful!
              </DialogTitle>
              <DialogDescription>
                Thank you for your payment. Now let&apos;s schedule your discovery call.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 py-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Next Step: Schedule Your Call</h3>
                <p className="text-muted-foreground">
                  Click below to schedule your discovery call with Edison. During this call, we&apos;ll discuss your requirements and define the project scope.
                </p>
              </div>
              
              <div className="rounded-lg border p-4 bg-muted/30">
                <h4 className="font-medium mb-2">What to expect:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 30-minute discovery call</li>
                  <li>• Discussion of your workflows and pain points</li>
                  <li>• Initial project scope definition</li>
                  <li>• Next steps and timeline overview</li>
                </ul>
              </div>
            </div>
            
            <Button 
              onClick={handleScheduleCall}
              className="w-full gap-2"
              size="lg"
            >
              <Calendar className="h-4 w-4" />
              Schedule Discovery Call
              <ExternalLink className="h-4 w-4" />
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
