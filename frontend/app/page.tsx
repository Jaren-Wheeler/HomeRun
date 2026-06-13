"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-card">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-6 py-10">
        <Logo size="lg" showTagline />

        <div className="relative my-8 overflow-hidden rounded-2xl bg-secondary">
          <img
            src="/delivery-illustration.png"
            alt="A delivery person handing a package to a customer"
            className="h-56 w-full object-cover"
          />
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Welcome back!</h1>
          <p className="mt-1 text-sm text-muted-foreground">Login to continue</p>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <Input id="email" type="email" placeholder="Email address" className="h-12" />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="h-12 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Forgot password?
            </Link>
          </div>

          <Button className="h-12 text-base font-semibold">
            <Link href="/dashboard">Log In</Link>
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {"Don't have an account? "}
          <Link href="#" className="font-semibold text-primary hover:underline">
            Sign up
          </Link>
        </p>

        <div className="mt-8 flex flex-col gap-2 text-center text-sm">
          <span className="text-muted-foreground">Continue as:</span>
          <div className="flex justify-center gap-3">
            <Button variant="outline">
              <Link href="/dashboard">Purchaser</Link>
            </Button>
            <Button variant="outline">
              <Link href="/deliverer">Deliverer</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
