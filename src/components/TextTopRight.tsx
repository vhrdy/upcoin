import React from 'react'
import { GradientText } from "@/components/ui/shadcn-io/gradient-text";

export default function TextTopRight() {
  return (
    <div>
          <p className="text-2xl italic mb-2 font-bold">thesis</p>

    <p className="text-4xl font-bold">
          <GradientText
  text="The coin that goes up forever"
  gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
/><br/>
upcoin (n.) - mental condition where you still believe in a coin that only goes up.

symptoms: compulsive refresh, euphoria, deep depression.

treatment: buy more.
          </p>
  </div>
  )
}
