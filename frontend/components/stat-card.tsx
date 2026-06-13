import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function StatCard({
  value,
  label,
  accent = false,
  className,
}: {
  value: string
  label: string
  accent?: boolean
  className?: string
}) {
  return (
    <Card className={cn("p-5", className)}>
      <p className={cn("text-2xl font-bold", accent ? "text-primary" : "text-foreground")}>{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </Card>
  )
}
