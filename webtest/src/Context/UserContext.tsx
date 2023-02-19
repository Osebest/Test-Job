import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";


export type User = {
  email: string;
  password: string;
}

export interface UserContextInterface {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const defaultState = {
  user: {
    email: "",
    password: "",
  },
  setUser: (user: User) => {},
}

export const UserContext = createContext(defaultState)

type UserProviderProps = {
  children: ReactNode
}

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({
    email: "osebes@gmail.com",
    password: "password",
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}