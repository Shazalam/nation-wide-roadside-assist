import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
  }

const EnterpriseInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, icon, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="text-[10px] font-bold text-white uppercase tracking-widest ml-1">
            {label}
          </label>
        )}
        <div className="relative group">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-slate group-focus-within:text-brand-blue transition-colors">
              {icon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              "flex h-11 w-full rounded-xl border border-brand-border bg-white/[0.03] px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-brand-slate/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
              icon && "pl-10",
              error && "border-rose-500/50 focus-visible:ring-rose-500/50",
              className
            )}
            ref={ref}
            {...props}
          />
          {/* Subtle Glow on focus */}
          <div className="absolute inset-0 rounded-xl bg-brand-blue/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity" />
        </div>
        {error && <p className="text-[10px] font-medium text-rose-500 ml-1">{error}</p>}
      </div>
    )
  }
)
EnterpriseInput.displayName = "EnterpriseInput"

export { EnterpriseInput }
