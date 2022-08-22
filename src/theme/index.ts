import { extendTheme } from '@chakra-ui/react'

import Button from 'theme/components/Button'

const theme = extendTheme({
  fonts: {},
  config: {
    // Initially use dark mode
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  shadows: {},
  colors: {},
  components: {
    Button,
  },
})

export default theme
