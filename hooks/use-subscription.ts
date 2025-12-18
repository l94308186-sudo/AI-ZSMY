import { useEffect, useState } from 'react'

export default function useSubscription(expiry?: string | null) {
  const [active, setActive] = useState(true)
  useEffect(() => {
    if (!expiry) return
    const exp = new Date(expiry)
    setActive(exp > new Date())
  }, [expiry])
  return { active }
}
