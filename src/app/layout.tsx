import "@/styles/globals.css"

import { MODULE_NAME } from "@/common/constants"
import type { Metadata } from "next"
import React from "react"
import { ThemeProvider } from "@/components/app/theme-provider"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: MODULE_NAME,
  description: "course app",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          "max-h-screen w-full bg-foreground from-background to-foreground text-primary-foreground dark:bg-gradient-to-r"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
