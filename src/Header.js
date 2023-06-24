// Header.js
import React from 'react';
import { Box, Flex, Text, extendTheme, ChakraProvider, CSSReset, Button, Image } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';

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

const Header = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box bg="black" color="white" py={4}>
        <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
          <Image src="/logo.svg" boxSize={"-webkit-max-content"} mr={0} />
          <Flex>
          <Button
  as={Link}
  to="section1"
  smooth={true}
  duration={500}
  variant="gradient"
  colorScheme="whiteAlpha"
  mr={2}
>
  О нас
</Button>
<Button
  as={Link}
  to="section4"
  smooth={true}
  duration={500}
  variant="gradient"
  colorScheme="whiteAlpha"
  mr={2}
>
  Наши преимущества
</Button>
<Button
  as={Link}
  to="map"
  smooth={true}
  duration={500}
  variant="gradient"
  colorScheme="whiteAlpha"
  mr={2}
>
  Как нас найти
</Button>
<Button
  as={Link}
  to="feedback"
  smooth={true}
  duration={500}
  variant="gradient"
  colorScheme="whiteAlpha"
>
  Обратная связь
</Button>
</Flex>
          <Flex align="center">
            <Flex align="center" mr={4}>
              <PhoneIcon boxSize={4} mr={1} />
              <Button
                as="a"
                variant="ghost"
                colorScheme="whiteAlpha"
                href="tel:+74232393023"
              >
                +7 (423) 239-30-23
              </Button>
            </Flex>
            <Flex align="center">
              <EmailIcon boxSize={4} mr={1} />
              <Button
                as="a"
                variant="ghost"
                colorScheme="whiteAlpha"
                href="mailto:help@itexplorer.ru"
              >
                help@itexplorer.ru
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};
export default Header;
