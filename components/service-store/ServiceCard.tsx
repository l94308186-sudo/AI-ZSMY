'use client'
import React from 'react'

export default function ServiceCard({ name, desc }: { name: string; desc?: string }) {
  return (
    <div className="p-4 border rounded">
      <div className="font-bold">{name}</div>
      <div className="text-sm text-gray-600">{desc}</div>
    </div>
  )
}
