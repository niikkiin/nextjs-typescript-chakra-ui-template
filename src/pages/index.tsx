import { Box, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

import SampleComponent from 'components/SampleComponent'

import useSampleHook from 'hooks/useSampleHook'

import { useSampleContext } from 'store/contexts/sampleContext'

import Layout from 'layout'

const Home: NextPage = () => {
  const { isOpen } = useSampleContext()
  const { sampleField } = useSampleHook('test sample')
  return (
    <Layout>
      <Box>
        <Heading>GM Nikki</Heading>
        SAMPLE FOR CONTEXT: {isOpen.toString()}
        SAMPLE FOR HOOK: {sampleField.toString()}
        <SampleComponent />
      </Box>
    </Layout>
  )
}

export default Home
