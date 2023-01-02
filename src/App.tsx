import { MantineProvider } from '@mantine/core'
import MainLayout from './layouts/MainLayout'

const App = () => {
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS>
            <MainLayout />
        </MantineProvider>
    )
}

export default App
