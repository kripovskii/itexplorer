import React from 'react';
import { Box, Text, Link, extendTheme, ChakraProvider, CSSReset, Button, keyframes, Image } from '@chakra-ui/react';
import { AiOutlineForm } from 'react-icons/ai';

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        gradient: {
          borderRadius: '999px',
          bgGradient: 'linear(to-r, #FFD700, #8A2BE2)',
          bgClip: 'text',
          animation: 'gradientAnimation 5s infinite',
          _hover: {
            bgGradient: 'linear(to-r, #FFD700, #8A2BE2)',
            color: 'white',
            animation: 'none',
          },
        },
      },
    },
  },
  animations: {
    '@keyframes gradientAnimation': {
      '0%': {
        backgroundPosition: '0% 50%',
      },
      '50%': {
        backgroundPosition: '100% 50%',
      },
      '100%': {
        backgroundPosition: '0% 50%',
      },
    },
  },
});

const Footer = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box bg="black" py={4} textAlign="center">
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <Image src="./logo.svg" alt="Logo" mr={2} />
          <Text color="white" fontSize="sm">
            &copy; {new Date().getFullYear()} ИП Карпенко ИНН 250809006236 ОГРН 319253600057741.
          </Text>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Link href="https://itexplorer.itsm365.com/" color="white" fontSize="sm" display="inline-flex" alignItems="center">
            <Button
              size="md"
              borderRadius="999px"
              bgGradient="linear(to-r, #FFD700, #8A2BE2)"
              bgClip="text"
              animation="gradientAnimation 5s infinite"
              _hover={{ bgGradient: 'linear(to-r, #FFD700, #8A2BE2)', color: 'white', animation: 'none' }}
            >
              <AiOutlineForm size={16} />
              <Text ml={2}>Система заявок</Text>
            </Button>
          </Link>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Footer;
