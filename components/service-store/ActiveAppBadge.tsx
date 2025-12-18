'use client'
import React from 'react'

export default function ActiveAppBadge({ name }: { name: string }) {
  return <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">{name}</span>
}
