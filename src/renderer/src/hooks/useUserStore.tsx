import { User } from 'src/main/db/model/user'
import { create } from 'zustand'

interface UserState {
  activeUser: User | undefined
}

interface Actions {
  update: (user: User) => void
}

export const useUserStore = create<UserState & Actions>((set) => ({
  activeUser: undefined,
  update: (user) =>
    set((state) => ({
      activeUser: { ...state.activeUser, user: user.user, password: user.password }
    }))
}))
