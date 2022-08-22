import { Flex, IconButton } from '@chakra-ui/react'
import { FiAlignLeft } from 'react-icons/fi'

import Logo from 'components/Logo'

interface HeaderProps {
  onOpen: () => void
}

const Header: React.FC<HeaderProps> = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={[0, 0, 48]}
      px={['24px', '40px']}
      position="sticky"
      top="0"
      height="20"
      zIndex={['banner', 'banner', 'banner']}
      alignItems="center"
      justifyContent={['space-between', 'space-between', 'flex-end']}
      backgroundColor="cyan.100"
      boxShadow="2xl"
      color="white"
      {...rest}
    >
      <IconButton
        display={['flex', 'flex', 'none']}
        onClick={onOpen}
        aria-label="open menu"
        outline="none"
        sx={{
          '&:focus': {
            outline: '',
          },
          '&:hover': {
            backgroundColor: 'gray.80',
          },
        }}
        icon={<FiAlignLeft />}
      />
      <Logo
        display={['flex', 'flex', 'none']}
        w={['40%', '30%', '100%']}
        maxH={['50px']}
        cursor="pointer"
      />
    </Flex>
  )
}

export default Header
