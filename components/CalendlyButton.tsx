"use client"

import { Button, ButtonProps } from "@/components/ui/button"
import { calendlyConfig } from "@/config/content"
import { Calendar, ExternalLink } from "lucide-react"

interface CalendlyButtonProps extends Omit<ButtonProps, 'onClick'> {
  showIcon?: boolean
  showExternalIcon?: boolean
  children?: React.ReactNode
}

export function CalendlyButton({ 
  showIcon = true, 
  showExternalIcon = false,
  children, 
  ...props 
}: CalendlyButtonProps) {
  const handleClick = () => {
    window.open(calendlyConfig.url, "_blank", "noopener,noreferrer")
  }

  return (
    <Button onClick={handleClick} {...props}>
      {showIcon && <Calendar className="h-4 w-4 mr-2" />}
      {children || calendlyConfig.text}
      {showExternalIcon && <ExternalLink className="h-4 w-4 ml-2" />}
    </Button>
  )
}
