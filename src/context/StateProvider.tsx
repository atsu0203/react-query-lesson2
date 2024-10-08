import { useContext, useState, createContext, ReactNode, FC } from 'react'
import { Task } from '../types/types'

interface StateContextType {
  tasks: Task[] | null

  dark: boolean
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}

const StateContext = createContext({} as StateContextType)
// interface Props {
//   children: ReactNode
// }

export const StateProvider: FC<Props> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[] | null>(null)
    const [dark, setDark] = useState(false)
    return (
      <StateContext.Provider value={{ tasks, setTasks, dark, setDark }}>
        {children}
      </StateContext.Provider>
    )
  }
  export const useStateContext = (): StateContextType => useContext(StateContext)