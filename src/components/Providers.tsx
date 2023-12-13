import ThemeProvider from '@/context/ThemeProvider'
import { FC, PropsWithChildren } from 'react'

interface ProvidersProps extends PropsWithChildren {}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
