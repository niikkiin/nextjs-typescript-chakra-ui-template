import { createContext, useContext } from 'react'
import { useDisclosure } from '@chakra-ui/react'

interface SampleContextProviderProps {
  children?: React.ReactNode
}

interface SampleContextProps {
  isOpen: boolean
}

export const initialSampleContextState = {
  isOpen: false,
}

export const SampleContext = createContext<SampleContextProps>({
  ...initialSampleContextState,
})

export const SampleContextProvider: React.FC<SampleContextProviderProps> = ({
  children,
}) => {
  const { isOpen } = useDisclosure()

  return (
    <SampleContext.Provider
      value={{
        isOpen,
      }}
    >
      {children}
    </SampleContext.Provider>
  )
}

export const useSampleContext = () => {
  return useContext(SampleContext)
}
