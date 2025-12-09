import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CalendlyButton } from '@/components/CalendlyButton'
import { CheckCircle, Calendar, Home } from 'lucide-react'

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Payment Successful!
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Thank you for your purchase. Your payment has been processed successfully.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center justify-center gap-2">
              <Calendar className="w-6 h-6" />
              Next Step: Schedule Your Discovery Call
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Let's get started! Book your discovery call to discuss your project requirements and timeline.
            </p>
            <CalendlyButton 
              size="lg" 
              className="w-full sm:w-auto"
              showIcon={true}
              showExternalIcon={true}
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              You will receive a confirmation email shortly with your payment receipt and next steps.
            </p>
            
            <div className="pt-4">
              <Link href="/">
                <Button variant="outline" className="gap-2">
                  <Home className="w-4 h-4" />
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
