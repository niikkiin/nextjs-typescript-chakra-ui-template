import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxProps,
  CloseButton,
  Flex,
} from '@chakra-ui/react'

import NavLink from 'components/NavLink'
import Logo from 'components/Logo'

import { LinkProps, SidebarMenuItemsProps } from 'models/sidebarMenu'

import { SidebarMenuItems } from 'constants/sidebarMenu'

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ onClose, ...rest }) => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', onClose)
    return () => {
      router.events.off('routeChangeComplete', onClose)
    }
  }, [router.events, onClose])

  return (
    <Box
      transition="3s ease"
      backgroundColor="cyan.900"
      boxShadow="dark"
      color="white"
      w={['full', 'full', '48']}
      pos={['relative', 'relative', 'fixed']}
      h="full"
      zIndex="1201" //to overlap the zIndex "banner" of the header
      flexDirection="column"
      justifyContent="space-between"
      {...rest}
    >
      <Box>
        <Flex h="20" alignItems="center" mx="4" justifyContent="space-between">
          <Logo w={['50%', '30%', '100%']} mb="6" mt="6" cursor="pointer" />

          <CloseButton display={['flex', 'flex', 'none']} onClick={onClose} />
        </Flex>

        {SidebarMenuItems?.map((menuItem: SidebarMenuItemsProps, i) => {
          return (
            <Accordion key={i} defaultIndex={[0, 1]} allowMultiple>
              <AccordionItem border="none" mt={i === 1 ? '4' : '0'}>
                <h2>
                  <AccordionButton
                    sx={{
                      '&:focus': {
                        outline: 'none',
                        boxShadow: 'none',
                      },
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    <Box
                      flex="1"
                      textAlign="left"
                      pl="1"
                      color="gray.50"
                      fontSize="1rem"
                    >
                      {menuItem.label}
                    </Box>
                    <AccordionIcon color="gray.50" />
                  </AccordionButton>
                </h2>
                <AccordionPanel p="0">
                  {menuItem.items?.map((item: LinkProps, j) => {
                    return <NavLink key={j} link={item} />
                  })}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          )
        })}
      </Box>
    </Box>
  )
}

export default Sidebar
