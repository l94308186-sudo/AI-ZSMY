'use client'
import React, { createContext, useState, useContext } from 'react'

type User = { id: string; name: string } | null

const AuthContext = createContext({ user: null as User, setUser: (u: User) => {} })

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
