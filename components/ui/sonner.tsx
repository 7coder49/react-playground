"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-text": "#333",
          "--normal-border": "var(--border)",
          "--success-bg": "#5df576",
          "--success-text": "#333",
          "--normal-bg": "#5df576"
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast h-12 text-black",
          success: ""
        },
      }}
      {...props}
      visibleToasts={5}
    />
  )
}

export { Toaster }
