'use client'

import { BuilderComponent } from '@builder.io/react'
import { useEffect, useState } from 'react'
import '../builder-registry' // Import to register components

export default function BuilderHomePage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">OVERHEAR</h1>
          <p className="text-white opacity-90">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <BuilderComponent
        model="page"
        content={undefined}
        apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY!}
        options={{
          userAttributes: {
            urlPath: "/",
          },
        }}
      />
    </div>
  )
}
