import { Box, Button } from '@chakra-ui/react'

const SampleComponent = () => {
  return (
    <Box>
      <Button
        type="button"
        onClick={() => {
          return console.log('hello')
        }}
      >
        Test Button
      </Button>
    </Box>
  )
}

export default SampleComponent
