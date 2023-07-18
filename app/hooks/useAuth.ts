import { create } from "zustand"

interface User {
  name: string
  bio?: string
  image?: string
}

interface AuthStore {
  user: User | null
  setUser: (user: User) => void
}

const useAuth = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))

export default useAuth
