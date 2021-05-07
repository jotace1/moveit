import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react'
import { ICountdownContextData } from '../interfaces/ISideBarContextData'

export const SideBarContext = createContext<ICountdownContextData>(
    {} as ICountdownContextData
)

export function SideBarProvider({ children }) {
    const [whichIsActive, setWhichIsActive] = useState('home')

    function handleClickButtons(activeButton) {
        setWhichIsActive(activeButton)
    }

    return (
        <SideBarContext.Provider
            value={{
                whichIsActive,
                handleClickButtons,
            }}
        >
            {children}
        </SideBarContext.Provider>
    )
}
