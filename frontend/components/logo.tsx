import { Package } from "lucide-react"
import { cn } from "@/lib/utils"

export function Logo({
  className,
  showTagline = false,
  size = "md",
}: {
  className?: string
  showTagline?: boolean
  size?: "md" | "lg"
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className={cn(
          "flex items-center justify-center rounded-xl bg-primary text-primary-foreground",
          size === "lg" ? "size-12" : "size-9",
        )}
      >
        <Package className={size === "lg" ? "size-7" : "size-5"} />
      </div>
      <div className="flex flex-col leading-tight">
        <span className={cn("font-bold tracking-tight", size === "lg" ? "text-2xl" : "text-lg")}>HomeRun</span>
        {showTagline && <span className="text-sm text-muted-foreground">Local deliveries. Real people.</span>}
      </div>
    </div>
  )
}
