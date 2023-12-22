import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

// Importa la imagen
import Imagen from './Imagen.png';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            {/* Usa el componente Image para mostrar la imagen con sombreado */}
            <Image
              src={Imagen}
              alt="Descripción de la imagen"
              shadow="dark-lg"  // Agrega sombreado oscuro
            />
            <Text
              position="absolute"
              top="20%"  // Ajusta la posición vertical del título
              left="50%"
              transform="translate(-50%, -50%)"
              fontSize="2xl"
              fontWeight="bold"
              color="white"
              zIndex={1}
            >
              Domina el terreno
            </Text>
            <Button
              position="absolute"
              top="15%"  // Ajusta la posición vertical del botón
              left="40%"
              transform="translateX(-50%)"
              variant="outline"
              colorScheme="teal"
              color="white"
              zIndex={2}
              _hover={{ cursor: 'pointer' }}
            >
              Más Detalles
            </Button>
            {/* Agrega el botón "Ver Video" al lado del botón "Más Detalles" */}
            <Button
              position="absolute"
              top="40"  // Ajusta la posición vertical del botón
              left="60%"  // Ajusta la posición a tu preferencia
              transform="translateX(-50%)"
              variant="outline"
              colorScheme="teal"
              color="white"
              zIndex={2}
              _hover={{ cursor: 'pointer' }}
            >
              Ver Video
            </Button>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
