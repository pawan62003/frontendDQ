import React from "react";
import {
  ChakraProvider,
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Flex,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const Card = ({ heading, description, icon, href }) => {
  const imageSize = useBreakpointValue({ base: "100px", md: "150px" }); // Adjust the image size for different breakpoints

  return (
    <Box
    maxW={{ base: "full", md: "240px" }}
    w={"full"}
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p={5}
    display="flex"          // Add display flex to the parent Box
    flexDir="column"        // Set flex direction to column
    alignItems="center"     // Center items horizontally
    textAlign="center"      // Center text horizontally
  >
    {/* Your SVG logo code goes here */}
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      style={{ enableBackground: "new 0 0 122.88 122.88", fill: 'red' }} 
      viewBox="0 0 122.88 122.88"
      xmlSpace="preserve"
      width={imageSize}
      height={imageSize}
    >
      <g>
        <path
          d={icon}
        />
      </g>
    </svg>
    <Box mt={2}>
      <Heading m={'5px'} size="sm">{heading}</Heading>
    </Box>
  </Box>
  
  );
};

export default function DoctorCatDiv() {
  const cards = [
    {
      heading: "Orthopedic",
      icon: "M57.31,43.77l16.95-16.95l-0.82-10.18c-0.33-4.25,1.09-8.23,3.66-11.23c2.57-3,6.28-5.03,10.52-5.36 c4.25-0.33,8.23,1.09,11.23,3.66c3,2.57,5.03,6.28,5.36,10.52l0.37,4.57l2.44-0.09V18.7l0.12,0c4.18-0.09,8.01,1.48,10.85,4.13 c2.88,2.69,4.74,6.47,4.89,10.72l0,0.08h0.01l0,0.12c0.1,4.18-1.48,8.01-4.13,10.85c-2.69,2.88-6.47,4.74-10.73,4.89l-13.25,0.5 L79.15,65.61c-0.68,0.68-1.69,0.82-2.51,0.43l-16.47-6.17c-0.77-0.29-1.28-0.95-1.4-1.71l-2.07-12.48 C56.57,44.96,56.83,44.26,57.31,43.77L57.31,43.77L57.31,43.77z M22.03,23.3l7.04-0.58l-5.86-12.29l14.79,14.21l-6.43,0.96 l6.36,12.2L22.03,23.3L22.03,23.3L22.03,23.3z M14.15,51.48l6.08-4.24L7.99,39.43l21.39,4.51l-5.27,4.49l12.47,7.47L14.15,51.48 L14.15,51.48L14.15,51.48z M43.57,15.64l6.81,3.38l1-14.84l6.47,21.46l-6.63-2.53l-0.27,14.86L43.57,15.64L43.57,15.64L43.57,15.64 z M14.31,104.22l-0.19-0.02c-4.2-0.36-7.87-2.38-10.41-5.35c-2.55-2.98-3.97-6.92-3.66-11.12c0-0.07,0.01-0.15,0.02-0.22 c0.36-4.2,2.38-7.87,5.35-10.41c3.01-2.57,6.99-3.99,11.23-3.66l10.18,0.82l19.59-19.59c0.86-0.86,2.26-0.86,3.12,0 c0.41,0.41,0.62,0.93,0.64,1.47l1.34,10.46l15.98,6.31c1.13,0.44,1.69,1.72,1.25,2.86c-0.11,0.29-0.29,0.55-0.49,0.76L49.98,94.78 l-0.5,13.25c-0.15,4.25-2.01,8.04-4.89,10.72c-2.88,2.68-6.79,4.27-11.04,4.12c-4.25-0.15-8.04-2.01-10.72-4.89 c-2.68-2.88-4.27-6.79-4.12-11.04l0.09-2.36L14.31,104.22L14.31,104.22z M7.05,95.99c1.82,2.12,4.44,3.56,7.44,3.82l6.75,0.54 l0,0.01c1.17,0.09,2.07,1.09,2.03,2.27l-0.17,4.47c-0.11,3.03,1.03,5.82,2.95,7.88c1.92,2.06,4.62,3.39,7.65,3.49 c3.03,0.11,5.82-1.03,7.88-2.95c2.06-1.92,3.39-4.62,3.49-7.65l0.53-13.96c-0.02-0.59,0.19-1.19,0.64-1.65l16.5-16.5L48.7,70.21 l0,0c-0.73-0.28-1.28-0.95-1.38-1.77l-0.95-7.48L29.22,78.1c-0.44,0.44-1.06,0.69-1.73,0.64l-11.19-0.9 c-3.04-0.24-5.88,0.78-8.02,2.61c-2.14,1.83-3.59,4.48-3.83,7.52C4.21,91,5.22,93.84,7.05,95.99L7.05,95.99z M78.09,29.22 L61.23,46.09L62.9,56.2l14.12,5.29l15.24-15.24l0.01,0.01c0.38-0.38,0.9-0.62,1.48-0.64l14.12-0.53c3.03-0.11,5.74-1.43,7.65-3.49 c1.89-2.02,3.01-4.75,2.95-7.72c-0.01-0.08-0.01-0.16-0.01-0.24l0.01,0c-0.13-3-1.45-5.67-3.49-7.58 c-2.02-1.88-4.75-3.01-7.72-2.95c-0.08,0.01-0.16,0.01-0.24,0.01l0-0.01l-4.3,0.17c-1.21,0.1-2.28-0.81-2.37-2.03l-0.54-6.67 c-0.24-3.04-1.68-5.69-3.83-7.52C93.84,5.22,91,4.21,87.96,4.45c-3.04,0.24-5.69,1.68-7.52,3.83c-1.83,2.14-2.84,4.99-2.61,8.02 l0.89,11.11C78.8,28.06,78.59,28.73,78.09,29.22L78.09,29.22z",
      description: "Lorem ipsum dolor sit amet catetur, adipisicing elit.",
      href: "#",
    },
    {
      heading: "Cardiologist",
      icon: "M24.25,72.89c0.11,4.8,1.18,10.77,2.89,15.6c0.12-0.09,0.26-0.16,0.41-0.21c1.18-0.39,2.3-0.56,3.45-0.55 c1.12,0.01,2.23,0.19,3.43,0.49c0.8,0.2,1.29,1.01,1.09,1.81c-0.2,0.8-1.01,1.29-1.81,1.09c-0.99-0.25-1.88-0.4-2.72-0.41 c-0.81-0.01-1.62,0.12-2.49,0.41c-0.09,0.03-0.18,0.05-0.27,0.06c1.24,2.76,2.67,4.75,4.16,5.24c0.79,0.26,1.22,1.1,0.96,1.89 c-0.26,0.79-1.1,1.22-1.89,0.96c-2.89-0.94-5.3-4.71-7.03-9.5c-1.58-4.37-2.66-9.67-3.03-14.34L19,77.57 c-1.01,0.9-1.72,1.48-2.31,1.97c-1.97,1.62-2.64,2.16-3.63,5.78c-0.16,0.58-0.36,1.31-0.63,2.12c-0.28,0.84-0.61,1.73-1.01,2.54 c-0.52,1.07-1.18,2.08-2,2.84c-0.23,0.21-0.48,0.41-0.73,0.57c1.99,3.42,4.41,6.59,7.17,9.4c3.05,3.1,6.5,5.76,10.25,7.83 c5.59,3.09,8.08,3.28,12.46,3.61c1.32,0.1,2.79,0.21,4.61,0.42c4.22,0.48,8.28,1.21,12.19,2.01c0.33-4.93,2.34-8.03,4.47-11.32 c1.74-2.7,3.58-5.54,4.46-9.72c-0.05-0.2-0.06-0.42-0.02-0.63c-1.02-4.09-2.37-6.32-3.52-8.24c-0.56-0.93-1.08-1.79-1.51-2.72 c-0.38,0.51-0.77,0.97-1.19,1.38c-1.19,1.17-2.55,1.91-4.1,2.16l0,0c-0.13,0.02-0.26,0.04-0.39,0.05v0 c-0.12,0.01-0.25,0.02-0.4,0.03c-0.82,0.04-1.52-0.6-1.56-1.42c-0.04-0.82,0.6-1.52,1.42-1.56c0.06,0,0.14-0.01,0.22-0.02v0l0.01,0 c0.07-0.01,0.15-0.02,0.22-0.03l0,0l0.01,0c0.9-0.15,1.72-0.61,2.47-1.34c0.79-0.77,1.5-1.85,2.14-3.19 c-0.47-3.61,0.13-9.02,2.77-19.14c-0.69-0.17-1.37-0.42-2.05-0.72c-2.32-1.06-4.53-2.9-6.61-5.45c-0.09,0.01-0.19,0.01-0.28,0.02 c-2.41,0.16-4.89-0.04-6.54-0.18c-2.78-0.23-5.21-0.78-7.32-1.65c0.06,1.08-0.06,2.28-0.35,3.64c-0.26,1.19-0.69,2.37-1.3,3.55 c-0.59,1.15-1.35,2.29-2.27,3.42c-0.37,0.45-0.76,0.9-1.18,1.35c0.61,1.65,1.67,3.39,2.89,4.86c1.24,1.49,2.61,2.67,3.77,3.13 c0.78-0.04,1.51,0.05,2.19,0.26c0.8,0.24,1.52,0.63,2.18,1.17c0.64,0.52,0.74,1.46,0.22,2.1c-0.52,0.64-1.46,0.74-2.1,0.22 c-0.35-0.29-0.74-0.5-1.15-0.62c-0.19-0.06-0.4-0.1-0.61-0.12c-0.06,0.16-0.09,0.31-0.11,0.46c-0.04,0.34,0.02,0.69,0.12,1.05 c0.22,0.8-0.25,1.62-1.04,1.84c-0.8,0.22-1.62-0.25-1.84-1.04c-0.19-0.69-0.29-1.4-0.21-2.16c0.03-0.3,0.09-0.59,0.18-0.9 c-1.33-0.78-2.69-2.02-3.89-3.46c-1.13-1.35-2.14-2.92-2.88-4.48c-1.52,1.43-3.16,2.84-4.72,4.18 C25.37,71.92,24.78,72.42,24.25,72.89L24.25,72.89z M22.42,42.01V18.96c0-0.05,0-0.11,0.01-0.16c0.07-3.56-0.33-6.45-1.13-8.76 c-0.81-2.32-2.04-4.03-3.63-5.2c-0.15-0.11-0.3-0.22-0.46-0.32c-0.15-0.1-0.31-0.2-0.48-0.29c-1.18-0.67-2.36-0.99-3.6-1.14 c-1.31-0.15-2.7-0.1-4.18-0.02C8.13,3.12,7.36,3.21,6.75,3.39C6.37,3.5,6.1,3.61,6.03,3.72c-0.06,0.1-0.07,0.25-0.05,0.46 C6.02,4.52,6.17,4.94,6.4,5.43c1.25,1.75,2.3,3.73,3.14,5.93c0.84,2.21,1.48,4.67,1.91,7.36c0.01,0.08,0.02,0.16,0.02,0.23h0v24.98 c2.48-1.83,4.7-2.62,7.03-2.62C19.79,41.32,21.07,41.56,22.42,42.01L22.42,42.01z M8.48,46.55c0-0.04,0-0.08,0-0.11V19.05 c-0.4-2.41-0.98-4.62-1.74-6.62c-0.76-1.99-1.69-3.76-2.81-5.31C3.87,7.04,3.82,6.96,3.77,6.87C3.35,6.03,3.09,5.25,3.01,4.52 c-0.1-0.88,0.05-1.67,0.47-2.36c0.5-0.82,1.37-1.34,2.43-1.65c0.85-0.25,1.85-0.38,2.87-0.43C10.4,0,11.94-0.06,13.46,0.11 c1.6,0.18,3.16,0.62,4.73,1.51c0.21,0.12,0.42,0.25,0.63,0.39c0.21,0.13,0.41,0.28,0.61,0.42c2.07,1.53,3.65,3.71,4.67,6.62 c0.92,2.64,1.38,5.88,1.3,9.81c0,0.03,0,0.06,0,0.1v2.24c0.96-2.95,2.23-5.63,3.89-8.06l-1.26-4.48c-1.16-2.24-0.75-4.23,0.36-5.64 c0.53-0.67,1.24-1.2,2.01-1.53c0.78-0.34,1.63-0.49,2.45-0.42c1.65,0.14,3.16,1.11,3.82,3.15l1.14,2.22 c0.22,0.43,0.34,0.69,0.45,0.91c0.14,0.29,0.15,0.33,1.03,0.15l0,0l0.01,0l0.39-0.08c1.18-0.23,1.6-0.31,1.6-1.31v-1h0.01 c0-0.08,0.01-0.15,0.02-0.23c0.36-2.31,1.88-3.72,3.69-4.29c0.77-0.25,1.58-0.34,2.36-0.28c0.8,0.06,1.58,0.27,2.27,0.62 c1.47,0.76,2.52,2.13,2.53,4.07c0,0.04,0,0.08,0,0.11v2.24c4.41,1.77,7.54,4.25,9.3,7.49c1.54,2.83,2,6.18,1.32,10.08 c1.57,0.07,3,0.25,4.29,0.54c1.8,0.41,3.33,1.03,4.59,1.86c0.54,0.36,1.05,0.78,1.51,1.24c1.05,1.06,1.82,2.37,2.12,3.75 c0.33,1.48,0.13,3.01-0.8,4.42c-0.24,0.36-0.53,0.72-0.88,1.06c-1.24,1.22-3.09,1.97-5.54,2.26c-0.68,0.08-1.41,0.13-2.19,0.14 c1.38,1.02,2.66,2.16,3.74,3.43c2.37,2.79,3.8,6.19,3.37,10.41c-0.06,0.57-0.17,1.11-0.33,1.62c5.28,5.97,9.86,16.42,12.39,27.23 c2.46,10.52,3,21.45,0.39,29.03l-0.02,0.05c-1.29,3.89-3.52,7-6.72,8.85c-2.95,1.71-6.66,2.32-11.13,1.46 c-2.42-0.47-4.81-0.98-7.27-1.51c-5.54-1.2-11.39-2.46-17.48-3.15c-1.07-0.12-2.04-0.21-2.94-0.28c-0.99,2.25-2.61,3.84-4.46,4.73 c-1.38,0.66-2.89,0.92-4.37,0.77c-1.49-0.15-2.95-0.72-4.2-1.72c-0.94-0.75-1.76-1.75-2.39-2.99c-0.88,1.54-2.1,2.71-3.46,3.48 c-1.25,0.71-2.63,1.07-4.01,1.09c-1.39,0.01-2.78-0.33-4.03-1.04c-2.28-1.31-4.1-3.84-4.63-7.67c-0.02-0.11-0.04-0.22-0.04-0.33 v-5.18V98.35l0-0.01c-0.95-1.37-1.84-2.79-2.65-4.25c-0.95-0.14-1.8-0.68-2.55-1.64c-0.66-0.85-1.24-2.05-1.74-3.66 c-0.02-0.06-0.03-0.12-0.05-0.19l0,0c-1.29-7.34-1.99-17.04-0.37-25.84C2.09,56.54,4.4,50.77,8.48,46.55L8.48,46.55z M71.04,58.37 c-1.01,1.03-2.42,1.84-4.3,2.42c-0.96,0.29-1.92,0.46-2.86,0.49c-0.7,2.64-1.25,4.94-1.68,6.96l0.01,0.01 c3.09,7.66,6.92,9.2,10.14,10.49c3.08,1.24,5.69,2.29,7.1,6.73c0.25,0.79-0.19,1.63-0.98,1.88c-0.79,0.25-1.63-0.19-1.88-0.98 c-0.98-3.1-2.99-3.91-5.36-4.86c-3.12-1.26-6.75-2.71-9.93-8.26c-0.97,7,0.31,9.13,2.01,11.96c1.26,2.1,2.73,4.54,3.86,9.05 c1.8,0.89,3.36,2.02,4.7,3.4c1.45,1.49,2.63,3.27,3.55,5.35l3.17,2.18c0.68,0.47,0.85,1.4,0.38,2.08c-0.47,0.68-1.4,0.85-2.08,0.38 l-2.18-1.5l-1.77,3.11c-0.41,0.72-1.32,0.97-2.04,0.56c-0.72-0.41-0.97-1.32-0.56-2.04l2.2-3.87c-0.75-1.62-1.69-3.01-2.82-4.17 c-0.83-0.86-1.77-1.6-2.82-2.22c-1.06,4.01-2.86,6.79-4.58,9.45c-1.96,3.03-3.8,5.88-4.01,10.31c0.88,0.19,1.76,0.38,2.63,0.57 c2.49,0.54,4.93,1.06,7.2,1.5c3.72,0.72,6.74,0.25,9.07-1.11c2.52-1.46,4.31-3.99,5.37-7.2c0.01-0.03,0.02-0.06,0.03-0.08 c2.42-7.02,1.87-17.35-0.47-27.37C79.82,73.64,75.74,64.07,71.04,58.37L71.04,58.37z M36.66,117.08c-3.43-0.3-6-0.75-10.37-2.98 c0.37,2.2,1.28,3.75,2.45,4.68c0.79,0.63,1.69,0.98,2.62,1.08c0.93,0.09,1.9-0.08,2.79-0.51C35.12,118.9,36,118.13,36.66,117.08 L36.66,117.08z M22.88,112.2c-3.32-2.04-6.4-4.51-9.16-7.32c-0.84-0.85-1.64-1.74-2.42-2.65v6.24v5.13 c0.39,2.79,1.62,4.58,3.16,5.45c0.79,0.45,1.65,0.67,2.52,0.66c0.88-0.01,1.76-0.25,2.57-0.7c1.64-0.92,2.96-2.75,3.33-5.41V112.2 L22.88,112.2z M27.65,44.37c0.59,0.12,1.16,0.26,1.71,0.4c0.62,0.17,1.24,0.36,1.85,0.59c0.43,0.16,0.84,0.32,1.23,0.49 c2.26-6.28,5.51-11.27,9.84-14.81c-0.58-2.18-0.41-4.16,0.47-5.84c0.94-1.81,2.68-3.21,5.14-4.1l0,0c0.14-0.05,0.29-0.1,0.45-0.15 c0.79-0.25,1.63,0.18,1.88,0.97c0.25,0.79-0.18,1.63-0.97,1.88c-0.11,0.04-0.23,0.08-0.35,0.12l0,0l-0.01,0 c-1.72,0.62-2.9,1.53-3.49,2.68c-0.38,0.73-0.53,1.58-0.45,2.54c4.12-2.57,9.03-4,14.79-4.21c0.69-3.43,0.36-6.3-0.91-8.65 c-1.41-2.59-4-4.61-7.71-6.12l-0.67-0.1c-0.75-0.11-1.29-0.75-1.29-1.48h0V5.13c0-0.04,0-0.09,0.01-0.13 c-0.02-0.65-0.39-1.13-0.91-1.39c-0.33-0.17-0.71-0.27-1.11-0.3c-0.42-0.03-0.84,0.02-1.23,0.14c-0.77,0.25-1.43,0.83-1.63,1.78 v0.9c0,3.46-1.07,3.67-4.04,4.24l-0.39,0.08l0,0c-3.18,0.63-3.29,0.38-4.32-1.84c-0.12-0.26-0.27-0.57-0.39-0.81l-1.21-2.35 c-0.04-0.08-0.08-0.17-0.1-0.25l0,0c-0.22-0.75-0.71-1.09-1.23-1.14c-0.33-0.03-0.68,0.04-1.01,0.18 c-0.33,0.15-0.63,0.37-0.86,0.66c-0.45,0.57-0.58,1.44,0,2.49c0.06,0.11,0.11,0.23,0.14,0.35l1.49,5.28 c0.13,0.46,0.03,0.92-0.23,1.28l0,0c-2.55,3.51-4.14,7.69-5.12,12.56c-0.96,4.79-1.34,10.27-1.46,16.45 C26.24,43.63,26.93,43.99,27.65,44.37L27.65,44.37z M35.09,47.36c0.52,0.39,0.97,0.82,1.36,1.29c0.74,0.56,1.56,1.04,2.47,1.45 c1.85,0.82,4.08,1.33,6.69,1.55c1.58,0.13,3.94,0.32,6.12,0.18c1.96-0.13,3.76-0.5,4.57-1.4c0.89-1,1.46-2.55,1.8-4.52 c0.36-2.12,0.43-4.66,0.32-7.48c-0.01-0.11-0.01-0.23,0.01-0.35c0.12-0.82,0.87-1.39,1.69-1.27c3.08,0.44,5.62,0.54,7.61,0.31 c1.78-0.21,3.05-0.68,3.8-1.42c0.19-0.19,0.35-0.38,0.48-0.58c0.44-0.67,0.53-1.41,0.38-2.12c-0.18-0.81-0.67-1.62-1.34-2.3 c-0.31-0.31-0.65-0.6-1.03-0.85c-0.96-0.63-2.16-1.11-3.6-1.44c-1.44-0.32-3.1-0.49-4.99-0.51c-0.27,0.1-0.57,0.11-0.87,0.04 c-0.04-0.01-0.07-0.02-0.11-0.03c-6.38,0.12-11.59,1.86-15.73,5.04C40.44,36.22,37.26,41.09,35.09,47.36L35.09,47.36z M28.58,47.67 c-0.57-0.15-1.14-0.29-1.71-0.4l0,0c-0.14-0.03-0.28-0.08-0.42-0.15c-3.23-1.73-5.7-2.81-7.94-2.81c-2.16,0-4.31,1.03-7.05,3.53 c-4.15,3.78-6.45,9.37-7.58,15.47C2.34,71.65,3.01,80.93,4.25,88c0.39,1.21,0.79,2.07,1.22,2.62c0.26,0.34,0.49,0.51,0.68,0.52 c0.46,0.03,0.87-0.18,1.25-0.53c0.51-0.47,0.95-1.17,1.33-1.95c0.35-0.73,0.64-1.47,0.87-2.16c0.24-0.72,0.43-1.42,0.58-1.97 c1.25-4.56,2.1-5.26,4.62-7.32c0.66-0.54,1.43-1.17,2.22-1.88l4.23-3.78c0.95-0.85,1.85-1.63,2.79-2.43c2.78-2.39,5.82-5,7.8-7.43 c0.79-0.97,1.43-1.94,1.93-2.91c0.48-0.93,0.82-1.87,1.03-2.81c0.49-2.27,0.38-3.85-0.33-4.99c-0.05-0.08-0.1-0.16-0.16-0.24 c-0.47-0.38-0.92-0.79-1.33-1.23c-0.73-0.49-1.66-0.93-2.78-1.34C29.67,47.99,29.14,47.82,28.58,47.67L28.58,47.67z M61.45,40.85 c0,2.02-0.13,3.88-0.41,5.53c-0.42,2.51-1.22,4.57-2.52,6.02c-0.73,0.81-1.74,1.37-2.91,1.75c1.45,1.54,2.93,2.67,4.43,3.36 c0.85,0.39,1.72,0.64,2.6,0.73c0.13-0.01,0.26,0,0.39,0.03c0.93,0.05,1.87-0.06,2.83-0.35c1.44-0.44,2.46-1.03,3.12-1.75 c0.61-0.66,0.94-1.48,1.04-2.42c0.34-3.29-0.8-5.98-2.68-8.19C65.77,43.71,63.67,42.16,61.45,40.85L61.45,40.85z",
      description: "Lorem ipsum dolor sit amet catetur, adipisicing elit.",
      href: "#",
    },
    {
      heading: "Gastroenterology",
      icon: "M61.28,2.17a2.2,2.2,0,0,1,4.4.06,56.38,56.38,0,0,0,.84,10.51,53,53,0,0,0,2,7.67,28.59,28.59,0,0,1,8.77-3.89A22.45,22.45,0,0,1,92.18,18a31.44,31.44,0,0,1,11.7,9.72,48.43,48.43,0,0,1,8.3,17.76,79.25,79.25,0,0,1,2,22.82,78.9,78.9,0,0,1-4.4,22.45A56,56,0,0,1,102.41,105a38.77,38.77,0,0,1-10.27,9.72c-.6.38-1.26.78-2,1.18a61.17,61.17,0,0,1-26.39,7c-10,.26-19.45-2.44-24.55-10.34-.22-.33-.44-.71-.67-1.12-.6-1.08-1.1-2.12-1.59-3.16-1.32-2.79-2.68-5.65-5.67-8.14a10.41,10.41,0,0,0-3.63-2,11.16,11.16,0,0,0-4.27-.39c-4.53.42-7,2.25-9.32,4A19.33,19.33,0,0,1,8,105.12a6.42,6.42,0,0,1-1,.24,5.7,5.7,0,0,1-1,.08,4.91,4.91,0,0,1-4.51-2.73,13.39,13.39,0,0,1-1.38-6v-.08h0c0-1,0-1.41,0-1.8-.1-3.72-.14-5,3.65-8.39A21.55,21.55,0,0,1,5.4,85a22.41,22.41,0,0,1,1.87-1.24A31.88,31.88,0,0,1,10.72,82c1.16-.52,2.44-1,3.83-1.53,9.59-3.46,15.24-1.55,20.58.26,3.19,1.08,6.25,2.12,10,1.61s6.82-3.23,9.17-6.8a25.3,25.3,0,0,0,4.27-14.17c-.37-7.37-3.18-13.45-6.32-20.23C48.34,32.69,44,23.26,42.78,8.92l-.33-3.79a2.21,2.21,0,0,1,4.4-.36l.33,3.79c1.13,13.57,5.32,22.62,9,30.69,3.32,7.18,6.3,13.62,6.71,21.86a30,30,0,0,1-5,16.81c-3,4.54-7.22,8-12.27,8.74-4.75.64-8.28-.55-12-1.8-4.65-1.57-9.55-3.24-17.69-.3-1.2.43-2.36.9-3.5,1.41a27.79,27.79,0,0,0-3,1.56,17.34,17.34,0,0,0-1.55,1c-.51.37-1,.74-1.37,1.1-2.28,2.07-2.26,2.8-2.2,5,0,.7,0,1.47,0,1.93h0a9.31,9.31,0,0,0,.8,4A.8.8,0,0,0,6,101l.32,0a2.53,2.53,0,0,0,.42-.1,15.94,15.94,0,0,0,4.75-2.74c2.8-2.07,5.79-4.28,11.55-4.81a15.73,15.73,0,0,1,5.93.54,14.7,14.7,0,0,1,5.18,2.82c3.75,3.12,5.32,6.42,6.85,9.64.47,1,.95,2,1.45,2.9.15.28.33.57.53.88,4.11,6.37,12.19,8.55,20.74,8.32A56.36,56.36,0,0,0,88,112c.59-.33,1.17-.68,1.74-1a34.4,34.4,0,0,0,9.1-8.62,51.84,51.84,0,0,0,6.76-13.12,74.56,74.56,0,0,0,4.14-21.17,74.7,74.7,0,0,0-1.86-21.56,43.92,43.92,0,0,0-7.52-16.12,27.25,27.25,0,0,0-10-8.4A18.17,18.17,0,0,0,78.28,20.8a25.94,25.94,0,0,0-9.43,4.73,2.44,2.44,0,0,1-.64.39,2.21,2.21,0,0,1-2.87-1.24A57.71,57.71,0,0,1,62.17,13.5a61.07,61.07,0,0,1-.89-11.33ZM76,97.91a2.21,2.21,0,0,1,4.23,1.26l-2.17,7.2a2.21,2.21,0,0,1-4.23-1.26L76,97.91Zm-6.93-2.27A2.2,2.2,0,0,1,73,97.73l-3.8,7.06a2.21,2.21,0,0,1-3.89-2.09l3.81-7.06Zm-5.71-4.33a2.2,2.2,0,1,1,3.21,3l-5.17,5.49a2.2,2.2,0,1,1-3.21-3l5.17-5.49ZM51.7,3.5a2.21,2.21,0,0,1,4.41-.33C58,27.62,66,36.25,72.46,43.26c7.72,8.34,13.51,14.61,6.93,38L83,93.16h0a2.11,2.11,0,0,1-.08,1.46A2.23,2.23,0,0,1,80,95.77L66,90a2.22,2.22,0,0,1-1.08-.84,2.14,2.14,0,0,1,.65-3L75.16,80c5.89-21,.8-26.52-6-33.84C62.24,38.65,53.69,29.41,51.7,3.5ZM75.84,84.72l-4.38,2.8,6,2.48-1.6-5.28Z",
      description: "Lorem ipsum dolor sit amet catetur, adipisicing elit.",
      href: "#",
    },
    {
      heading: "Neurologist",
      icon: "M13.9,67.74c1.15,0.54,2.34,0.96,3.59,1.28c1.24,0.32,2.54,0.55,3.87,0.67c1.18,0.11,2.4,0.15,3.65,0.12 c1.08-0.03,2.2-0.11,3.35-0.24c-0.26-1.96-0.39-3.7-0.34-5.26c0.05-1.73,0.33-3.22,0.89-4.53c0.52-1.21,1.26-2.23,2.27-3.08 c0.82-0.7,1.82-1.28,3.03-1.76c-0.79-0.75-1.51-1.43-2.14-2.07c-0.8-0.81-1.46-1.55-1.97-2.27c-1.28-1.79-1.7-3.34-1.08-4.99 c0.59-1.56,2.17-3.15,4.91-5.1c1.41-1,2-1.88,2.17-2.75c0.18-0.88-0.07-1.83-0.34-2.88c-0.15-0.6-0.31-1.22-0.43-1.83 c-0.12-0.59-0.21-1.2-0.25-1.86c-1.03-0.96-2.52-2.26-4.32-3.09c-1.85-0.85-4.05-1.22-6.43-0.21c-0.44,0.18-0.91,0.17-1.31,0.01 c-0.41-0.17-0.75-0.49-0.93-0.92l0,0c-0.18-0.44-0.17-0.9-0.01-1.31c0.17-0.41,0.49-0.75,0.92-0.93l0.01,0 c2.86-1.21,5.46-1.09,7.69-0.38c1.91,0.61,3.55,1.66,4.87,2.7c0.24-0.8,0.58-1.65,1.05-2.55c0.61-1.18,1.44-2.45,2.55-3.83 c0.49-0.6,0.97-1.23,1.43-1.9c0.46-0.67,0.89-1.41,1.28-2.23c0.39-0.83,0.74-1.77,1.02-2.86c0.28-1.1,0.5-2.34,0.63-3.78h0 c0.04-0.47,0.27-0.88,0.61-1.17c0.34-0.28,0.78-0.44,1.25-0.4c0.47,0.04,0.88,0.27,1.17,0.61l0.03,0.04 c0.26,0.33,0.41,0.76,0.37,1.22l-0.01,0.05c-0.15,1.64-0.4,3.07-0.73,4.34c-0.34,1.29-0.75,2.41-1.22,3.41 c-0.47,1.01-0.99,1.88-1.52,2.67c-0.53,0.78-1.08,1.48-1.62,2.16c-1.23,1.53-2.04,2.89-2.55,4.1c-0.49,1.17-0.7,2.21-0.75,3.15 c0.04,0.14,0.06,0.29,0.05,0.44c0,0.15-0.02,0.3-0.06,0.44c0.03,0.54,0.1,1.05,0.2,1.55c0.11,0.55,0.23,1.04,0.36,1.51 c0.42,1.62,0.79,3.08,0.48,4.59c-0.32,1.52-1.32,3.03-3.64,4.68c-1.83,1.3-2.89,2.28-3.33,3.14c-0.37,0.73-0.23,1.4,0.3,2.16 c0.79,1.12,2.24,2.49,4.11,4.25c0.77-1.74,1.69-3.21,2.74-4.41c1.2-1.37,2.57-2.39,4.11-3.08c1.7-0.76,3.57-1.1,5.6-1.03 c2.02,0.06,4.2,0.52,6.53,1.35c0.45,0.16,0.79,0.49,0.98,0.89c0.19,0.39,0.22,0.85,0.07,1.29l-0.02,0.05 c-0.16,0.44-0.49,0.77-0.88,0.95c-0.39,0.19-0.85,0.22-1.29,0.07l-0.04-0.01c-1.94-0.69-3.71-1.08-5.31-1.14 c-1.58-0.07-3,0.17-4.25,0.73c-1.24,0.55-2.34,1.44-3.31,2.66c-0.98,1.25-1.81,2.85-2.49,4.82l0,0c-0.06,0.17-0.15,0.33-0.25,0.48 c-0.09,0.12-0.2,0.23-0.32,0.32l-0.02,0.03c-0.01,0.02-0.04,0.05-0.08,0.09c-0.12,0.13-0.26,0.23-0.4,0.31 c-0.13,0.07-0.26,0.13-0.4,0.16c-0.02,0.01-0.05,0.02-0.08,0.02l-0.01,0c-1.66,0.37-2.93,0.86-3.89,1.49 c-0.93,0.61-1.55,1.35-1.94,2.25c-0.43,1-0.62,2.24-0.63,3.73c-0.01,1.53,0.18,3.32,0.49,5.41l0,0.02 c0.01,0.05,0.01,0.11,0.01,0.17c0.9,1.13,1.95,2.09,3.12,2.91c1.23,0.86,2.6,1.56,4.1,2.13c1.61,0.62,3.36,1.08,5.23,1.41 c1.87,0.33,3.86,0.54,5.95,0.65c0.1,0,0.19,0.02,0.28,0.04l0,0c0.09,0.02,0.18,0.04,0.26,0.08c1.09,0.34,2.4,0.43,3.89,0.31 c1.53-0.12,3.23-0.46,5.06-0.95c1.93-0.52,3.98-1.22,6.1-2.02c2.12-0.8,4.33-1.72,6.56-2.68l0.03-0.01 c0.05-0.02,0.11-0.04,0.16-0.06c0.07-0.02,0.13-0.04,0.19-0.05L85,69.12V62.1c0-0.03,0-0.07,0.01-0.1l0-0.05 c0.1-1.15,0.3-2.19,0.59-3.1c0.3-0.93,0.69-1.73,1.18-2.41c0.53-0.74,1.17-1.33,1.91-1.77c0.73-0.43,1.56-0.71,2.48-0.83 c0.06-0.01,0.1-0.02,0.14-0.02l0.01,0c0.05,0,0.09-0.01,0.13-0.01l1.29,0.02v0l0.05,0c2.79,0.04,5.36,0.07,7.3-2.12 c1-1.12,1.64-2.3,2.01-3.52c0.37-1.22,0.46-2.48,0.34-3.75c-0.12-1.34-0.47-2.69-0.95-4.04c-0.49-1.36-1.13-2.69-1.83-3.98 c-0.23-0.42-0.26-0.89-0.14-1.31c0.12-0.42,0.41-0.8,0.83-1.02l0.01,0c0.41-0.22,0.88-0.26,1.3-0.13c0.42,0.12,0.8,0.41,1.02,0.83 l0,0c0.79,1.44,1.51,2.97,2.07,4.53c0.57,1.58,0.97,3.2,1.12,4.83c0.15,1.7,0.03,3.4-0.47,5.06c-0.5,1.66-1.38,3.27-2.73,4.79 c-2.99,3.36-6.33,3.31-9.95,3.26v0l-0.05,0c-0.23,0-0.49-0.01-1.1-0.01c-0.43,0.06-0.81,0.19-1.14,0.39 c-0.33,0.2-0.62,0.46-0.87,0.8c-0.29,0.4-0.53,0.91-0.72,1.51c-0.19,0.62-0.32,1.33-0.4,2.15v6.12l10.93-2.82l0,0l0.02,0 c0.02-0.01,0.04-0.01,0.07-0.02l13-2.54c0.63-0.41,1.22-0.85,1.76-1.31c0.58-0.49,1.1-0.99,1.56-1.51 c1.43-1.59,2.39-3.37,2.97-5.27c0.62-2.05,0.79-4.25,0.59-6.49c-0.19-2.17-0.72-4.38-1.52-6.55c-0.85-2.32-1.99-4.59-3.34-6.73 c-0.94-1.49-1.99-2.92-3.1-4.25c-1.13-1.34-2.32-2.58-3.54-3.68c-0.1-0.09-0.19-0.19-0.26-0.29c-0.07-0.1-0.13-0.2-0.17-0.31 l-0.01-0.03c-1.07-2.65-2.27-5.18-3.74-7.47c-1.46-2.28-3.2-4.32-5.34-6.01c-2.14-1.69-4.7-3.04-7.84-3.94 c-3.16-0.91-6.9-1.37-11.36-1.26c-0.11,0-0.21,0-0.3-0.02c-0.09-0.01-0.18-0.04-0.27-0.06l-0.16-0.05 c-0.85,0.59-1.6,1.21-2.25,1.87c-0.7,0.7-1.28,1.42-1.76,2.18c-0.48,0.77-0.86,1.57-1.14,2.4c-0.28,0.84-0.46,1.71-0.54,2.61 c-0.04,0.43-0.23,0.8-0.52,1.08c-0.28,0.27-0.64,0.44-1.04,0.47c-0.03,0-0.06,0.01-0.09,0.01h-0.01c-1.55,0.09-2.91,0.42-4.09,0.96 c-1.25,0.57-2.31,1.37-3.19,2.37c-0.92,1.03-1.66,2.27-2.24,3.68c-0.61,1.46-1.05,3.1-1.33,4.86c0.19,0.46,0.34,0.94,0.46,1.43 c0.13,0.52,0.23,1.05,0.34,1.58c0.16,0.84,0.33,1.68,0.6,2.34c0.24,0.58,0.57,1.02,1.08,1.19c0.45,0.15,0.8,0.46,0.99,0.86 c0.2,0.39,0.25,0.86,0.1,1.31c-0.15,0.45-0.47,0.8-0.86,0.99c-0.39,0.2-0.86,0.25-1.31,0.1l-0.04-0.02 c-1.47-0.5-2.34-1.42-2.91-2.54c-0.55-1.09-0.79-2.33-1.03-3.58c-0.06-0.32-0.12-0.63-0.2-0.99l-0.01-0.04 c-0.05-0.24-0.11-0.48-0.18-0.7c-1.66-1.25-3.57-0.82-5.42,0.29v0c-1.99,1.19-3.94,3.14-5.5,4.7c-0.33,0.33-0.65,0.65-0.95,0.94 c-0.3,0.29-0.59,0.57-0.89,0.84c-0.35,0.32-0.8,0.46-1.24,0.44c-0.43-0.02-0.85-0.21-1.16-0.55l0,0c-0.02-0.02-0.04-0.04-0.05-0.06 c-0.29-0.35-0.42-0.78-0.4-1.2c0.02-0.43,0.21-0.85,0.55-1.16l0,0c0.02-0.02,0.04-0.03,0.06-0.05c0.44-0.4,1.02-0.98,1.65-1.61 c0-0.01,0.03-0.03,0.04-0.04c1.71-1.72,3.8-3.81,6.11-5.23c2.22-1.36,4.63-2.08,7.07-1.25c0.36-1.68,0.86-3.25,1.5-4.69 c0.69-1.54,1.56-2.93,2.62-4.12c1.09-1.22,2.37-2.23,3.85-2.98c1.31-0.66,2.79-1.13,4.44-1.35c0.16-0.84,0.38-1.66,0.68-2.46 c0.34-0.92,0.78-1.8,1.32-2.65c0.45-0.72,0.98-1.41,1.57-2.07c0.39-0.44,0.81-0.86,1.26-1.27c-1.68-0.44-3.35-0.85-5.01-1.22 c-1.91-0.42-3.8-0.78-5.67-1.07l-0.07,0.03c-0.62,0.23-1.2,0.68-1.73,1.29c-0.62,0.71-1.18,1.64-1.67,2.66 c-0.65,1.36-1.16,2.87-1.54,4.31c-0.49,1.84-0.77,3.59-0.87,4.82c-0.04,0.47-0.27,0.89-0.6,1.17c-0.33,0.28-0.77,0.44-1.23,0.4 l-0.04,0c-0.46-0.04-0.87-0.27-1.15-0.6c-0.28-0.33-0.44-0.77-0.4-1.23l0-0.04c0.12-1.38,0.44-3.35,0.99-5.42 c0.43-1.64,1.01-3.35,1.75-4.9c0.36-0.75,0.75-1.47,1.2-2.13c0.22-0.33,0.44-0.64,0.68-0.93c-0.85-0.07-1.69-0.12-2.54-0.16 c-1.17-0.05-2.34-0.05-3.5-0.02c-4.09,0.12-8.15,0.76-12.21,2.09c-3.89,1.28-7.77,3.19-11.69,5.91c0.45,0.29,0.87,0.61,1.28,0.94 c0.61,0.51,1.17,1.06,1.68,1.65c0.71,0.83,1.3,1.75,1.76,2.72c0.45,0.95,0.76,1.95,0.92,2.98c0.07,0.47-0.06,0.92-0.32,1.28 c-0.26,0.35-0.66,0.61-1.13,0.68c-0.47,0.07-0.92-0.06-1.28-0.32c-0.35-0.26-0.61-0.66-0.68-1.13c-0.11-0.71-0.33-1.4-0.64-2.06 c-0.32-0.68-0.75-1.33-1.26-1.93c-0.52-0.61-1.13-1.17-1.82-1.66c-0.66-0.47-1.38-0.88-2.15-1.19c-0.78,0.42-1.55,0.85-2.29,1.3 c-0.82,0.49-1.62,1.01-2.39,1.54c-1.08,0.75-2.11,1.56-3.09,2.44c-0.85,0.76-1.65,1.57-2.39,2.44c1.92,1.57,2.68,3.24,2.82,4.99 c0.15,1.82-0.38,3.69-0.94,5.65c0,0.02-0.01,0.04-0.02,0.07c-1.01,3.57-2.13,7.57,2.81,11.79c0.36,0.31,0.56,0.74,0.6,1.17 c0.03,0.44-0.1,0.89-0.41,1.25c-0.31,0.36-0.74,0.56-1.17,0.6c-0.44,0.03-0.89-0.1-1.25-0.41c-3.31-2.82-4.6-5.54-4.9-8.13 c-0.3-2.57,0.38-4.97,1.02-7.23c0.42-1.48,0.82-2.89,0.75-4.14c-0.06-1.08-0.49-2.1-1.6-3.02c-1.48,1.67-2.85,3.4-4.07,5.23 c-1.3,1.95-2.41,4.02-3.29,6.24c-0.98,2.49-1.66,5.19-1.95,8.14c-0.29,2.96-0.19,6.19,0.38,9.75c0.3,1.88,0.64,3.55,1.08,5.04 c0.44,1.46,0.98,2.76,1.7,3.91c0.7,1.12,1.59,2.13,2.75,3.07C10.68,66.04,12.12,66.91,13.9,67.74L13.9,67.74z M86.82,42.45 c2.21,2.05,2.91,3.61,2.65,5.16c-0.26,1.56-1.5,2.97-3.15,4.87l0,0c-0.78,0.89-1.67,1.92-2.52,3.07c-0.28,0.38-0.69,0.61-1.13,0.68 c-0.43,0.06-0.89-0.04-1.27-0.32c-0.38-0.28-0.61-0.69-0.68-1.13c-0.06-0.43,0.04-0.89,0.32-1.27c1-1.34,1.9-2.38,2.68-3.28 l0.01-0.01c1-1.15,1.75-2.01,1.93-2.8c0.15-0.67-0.12-1.37-1.05-2.32l-0.37,0.14v0c-0.2,0.07-0.49,0.18-0.83,0.3 c-0.32,0.11-0.67,0.24-1.03,0.37c-0.38,0.14-0.8,0.31-1.23,0.49c-0.17,0.07-0.32,0.14-0.47,0.21l-0.48,0.22 c-0.36,0.17-0.73,0.34-1.1,0.5c-0.39,0.16-0.78,0.31-1.18,0.43c-0.53,0.16-1.09,0.34-1.56,0.49l-0.03,0.01 c-1.28,0.4-1.96,0.62-2.9,0.66c-0.5,0.02-1-0.02-1.63-0.13c-0.62-0.1-1.34-0.26-2.33-0.47l-0.95-0.2 c-0.03-0.01-0.05-0.01-0.08-0.02l-0.1-0.03l-3.98-1.33c-0.03-0.01-0.05-0.01-0.07-0.02c-0.44-0.15-0.77-0.46-0.97-0.85 c-0.19-0.38-0.24-0.84-0.11-1.28l0.02-0.06c0.15-0.44,0.46-0.77,0.85-0.97c0.39-0.19,0.84-0.24,1.28-0.11 c0.03,0.01,0.05,0.02,0.07,0.03l3.85,1.28l0.9,0.19c0.88,0.19,1.53,0.33,2.04,0.41c0.48,0.08,0.81,0.12,1.08,0.11 c0.43-0.02,0.97-0.19,1.98-0.51c0.25-0.07,0.49-0.16,0.74-0.23c0.3-0.09,0.61-0.19,0.91-0.28c0.61-0.18,1.21-0.46,1.81-0.74 l0.52-0.24c0.18-0.08,0.36-0.16,0.55-0.24c1.06-0.45,1.83-0.72,2.45-0.94c0.62-0.22,0.94-0.33,1.02-0.55 c0.13-0.32,0.08-1-0.03-2.36c-0.12-1.56-0.17-2.8-0.09-3.87c0.08-1.1,0.31-2.01,0.76-2.87c0.44-0.85,1.05-1.58,1.91-2.31 c0.83-0.71,1.89-1.43,3.24-2.29L89.15,28c0.42-0.27,0.74-0.46,1.01-0.63l0.05-0.03c0.77-0.47,1.21-0.74,1.42-1.12 c0.23-0.4,0.29-1.04,0.31-2.26c0.01-0.71,0.04-1.36,0.13-1.98c0.09-0.65,0.24-1.25,0.5-1.82c0.3-0.64,0.71-1.2,1.28-1.68 c0.56-0.47,1.28-0.85,2.19-1.14c0.45-0.14,0.92-0.09,1.31,0.11c0.39,0.2,0.7,0.56,0.85,1.01c0.14,0.45,0.09,0.92-0.11,1.31 c-0.2,0.39-0.56,0.7-1.01,0.85c-0.42,0.13-0.73,0.29-0.96,0.46c-0.2,0.15-0.34,0.33-0.43,0.52c-0.12,0.26-0.2,0.6-0.24,0.99 c-0.05,0.43-0.07,0.91-0.08,1.43c-0.04,2.07-0.16,3.17-0.66,4.02c-0.51,0.87-1.31,1.36-2.74,2.24l-0.51,0.31l-0.45,0.28l-0.1,0.07 c-1.14,0.73-2.02,1.31-2.67,1.84c-0.62,0.5-1.03,0.95-1.27,1.42c-0.24,0.47-0.36,1.04-0.4,1.8c-0.04,0.8,0.01,1.82,0.11,3.11 c0.06,0.82,0.11,1.49,0.14,2.1C86.84,41.71,86.84,42.11,86.82,42.45L86.82,42.45z M67.07,67.85c0.36,0.28,0.58,0.67,0.65,1.09 c0.07,0.43-0.02,0.89-0.3,1.28l-0.01,0.01c-0.28,0.38-0.68,0.61-1.11,0.68c-0.43,0.07-0.89-0.02-1.28-0.3l0,0 c-0.25-0.18-0.48-0.37-0.69-0.58c-0.22-0.21-0.42-0.44-0.6-0.68c-0.54-0.71-0.93-1.53-1.16-2.41c-0.24-0.91-0.32-1.89-0.25-2.86 c0.06-0.92,0.26-1.86,0.58-2.75c0.31-0.87,0.74-1.71,1.28-2.46l0,0c0.25-0.34,0.52-0.67,0.81-0.98c0.29-0.3,0.59-0.57,0.92-0.82 L65.99,57c0.48-0.36,0.99-0.68,1.53-0.96c0.54-0.28,1.11-0.52,1.7-0.72c0.6-0.2,1.22-0.37,1.87-0.5c0.64-0.13,1.31-0.22,2-0.28 l0.14-0.01h6c0.48,0,0.91,0.19,1.22,0.5l0.03,0.03c0.29,0.31,0.47,0.73,0.47,1.18c0,0.48-0.19,0.91-0.5,1.22 c-0.31,0.31-0.74,0.5-1.22,0.5h-5.95c-0.53,0.05-1.04,0.12-1.54,0.22c-0.5,0.1-0.98,0.22-1.42,0.37c-0.42,0.14-0.83,0.31-1.21,0.51 c-0.37,0.19-0.72,0.4-1.04,0.64L68,59.79c-0.19,0.15-0.37,0.31-0.54,0.48c-0.18,0.18-0.34,0.38-0.49,0.59 c-0.35,0.48-0.63,1.03-0.84,1.61c-0.21,0.59-0.34,1.21-0.38,1.82l0,0.01c-0.04,0.59,0,1.16,0.13,1.67 c0.12,0.48,0.31,0.91,0.59,1.27l0.02,0.03c0.08,0.1,0.16,0.19,0.25,0.28l0,0c0.09,0.09,0.19,0.17,0.3,0.25L67.07,67.85L67.07,67.85 z M40.58,65.49c-0.45,0.11-0.9,0.03-1.28-0.2l0,0c-0.38-0.23-0.67-0.6-0.79-1.06c-0.12-0.46-0.03-0.92,0.19-1.3l0,0 c0.23-0.38,0.6-0.67,1.06-0.79c3.91-0.99,6.27-1.06,8.13-0.4c1.88,0.67,3.15,2.04,4.93,3.94l0.2,0.22c0.73,0.78,1.33,1.41,1.87,1.9 c0.51,0.47,0.97,0.82,1.42,1.05c0.43,0.22,0.9,0.36,1.49,0.44c0.62,0.09,1.36,0.11,2.28,0.1h0c0.47-0.01,0.9,0.18,1.22,0.48 c0.31,0.3,0.51,0.73,0.52,1.21v0.01h0l0,0.05c-0.01,0.45-0.19,0.87-0.48,1.17c-0.3,0.31-0.73,0.51-1.2,0.52h-0.01v0l-0.04,0 c-1.18,0.02-2.14-0.02-2.98-0.16c-0.88-0.14-1.64-0.38-2.37-0.76c-0.71-0.36-1.35-0.83-2.03-1.44c-0.66-0.59-1.36-1.32-2.2-2.22 l-0.2-0.22c-1.33-1.43-2.29-2.46-3.6-2.92c-1.33-0.46-3.1-0.39-6.09,0.37L40.58,65.49L40.58,65.49z M77.6,23.75 c-0.11-0.31-0.24-0.6-0.39-0.88c-0.2-0.36-0.44-0.69-0.69-0.97c-0.28-0.32-0.58-0.59-0.87-0.81c-0.31-0.23-0.61-0.4-0.88-0.51l0,0 c-0.44-0.17-0.77-0.51-0.95-0.91c-0.18-0.4-0.2-0.87-0.03-1.31l0,0c0.17-0.44,0.51-0.77,0.91-0.95c0.4-0.18,0.87-0.2,1.31-0.03 c0.52,0.2,1.08,0.51,1.63,0.91c0.5,0.37,1,0.82,1.46,1.35c0.28,0.32,0.55,0.67,0.79,1.04c0.14,0.21,0.27,0.43,0.39,0.65 c0.23-0.11,0.47-0.22,0.74-0.34l0.03-0.01c0.43-0.19,0.91-0.39,1.45-0.61c0.54-0.22,1.14-0.47,1.83-0.77 c0.68-0.3,1.44-0.64,2.3-1.06c0.43-0.21,0.9-0.22,1.31-0.07c0.42,0.14,0.78,0.45,0.98,0.88c0.21,0.43,0.22,0.9,0.07,1.31 c-0.14,0.42-0.45,0.78-0.88,0.98c-0.87,0.42-1.67,0.79-2.39,1.1c-0.69,0.3-1.32,0.56-1.89,0.8c-0.02,0.01-0.05,0.02-0.08,0.03 c-2.72,1.13-3.31,1.39-3.6,4.54l-0.01,0.11c-0.18,1.89-0.31,3.36-0.83,4.76c-0.52,1.42-1.41,2.71-3.08,4.2 c-0.35,0.32-0.8,0.46-1.24,0.43c-0.44-0.03-0.87-0.22-1.19-0.57c-0.32-0.35-0.46-0.8-0.43-1.24c0.03-0.44,0.22-0.87,0.57-1.19 c1.18-1.05,1.8-1.97,2.16-2.98c0.37-1.04,0.48-2.21,0.62-3.71l0.01-0.11c0.09-0.99,0.2-1.8,0.35-2.47 C77.22,24.71,77.39,24.19,77.6,23.75L77.6,23.75z M4.86,45.88c0-0.02,0-0.05,0-0.07c0.03-0.45,0.23-0.86,0.54-1.15 c0.32-0.3,0.75-0.48,1.21-0.46v0c0.02,0,0.05,0,0.07,0c0.45,0.03,0.86,0.23,1.15,0.54c0.3,0.32,0.48,0.76,0.46,1.23 c-0.06,1.82,0.52,2.94,1.45,3.73c0.98,0.83,2.38,1.34,3.86,1.88c2.21,0.81,4.55,1.66,6.46,3.42c1.92,1.77,3.37,4.41,3.71,8.74 c0.04,0.47-0.12,0.92-0.41,1.25c-0.29,0.34-0.7,0.56-1.17,0.6c-0.47,0.04-0.92-0.12-1.25-0.41c-0.34-0.29-0.56-0.7-0.6-1.17 c-0.26-3.26-1.35-5.23-2.8-6.54l-0.03-0.03c-1.46-1.31-3.33-1.99-5.09-2.63c-2.01-0.73-3.91-1.43-5.32-2.71 C5.66,50.79,4.77,48.92,4.86,45.88L4.86,45.88L4.86,45.88z M85.28,72.59c0.68,0.3,1.37,0.54,2.09,0.73 c1.15,0.3,2.34,0.48,3.57,0.53c1.69,0.07,3.46-0.08,5.3-0.42c1.85-0.34,3.77-0.87,5.75-1.56c0.45-0.16,0.92-0.12,1.31,0.08 c0.4,0.19,0.72,0.53,0.87,0.98c0.16,0.45,0.12,0.92-0.08,1.31c-0.19,0.4-0.53,0.72-0.98,0.87c-2.16,0.76-4.28,1.34-6.33,1.71 c-2.06,0.37-4.06,0.54-5.99,0.46c-1.91-0.08-3.75-0.4-5.49-0.99c-1.68-0.57-3.28-1.38-4.77-2.47l-5.46,1.41 c1.13,1.38,2.32,2.56,3.59,3.54c1.44,1.11,2.98,1.94,4.63,2.49c1.8,0.59,3.75,0.84,5.85,0.71c2.12-0.13,4.4-0.65,6.85-1.57 c0.44-0.17,0.91-0.14,1.31,0.04c0.4,0.18,0.73,0.52,0.9,0.96c0.17,0.44,0.14,0.91-0.04,1.31c-0.18,0.4-0.52,0.73-0.96,0.9 c-2.82,1.07-5.47,1.66-7.96,1.8c-2.5,0.14-4.84-0.16-7.02-0.88c-2.09-0.69-4.03-1.76-5.83-3.17c-1.69-1.33-3.26-2.97-4.71-4.89 c-0.49,0.2-0.99,0.41-1.51,0.62c-0.41,0.17-0.83,0.34-1.26,0.51c1.12,1.61,2.29,3.04,3.5,4.29c1.34,1.39,2.72,2.55,4.14,3.48 c1.29,0.84,2.59,1.49,3.91,1.92c1.28,0.42,2.56,0.65,3.84,0.67l0.11-0.02l0.04,0c0.05-0.01,0.09-0.01,0.13-0.01 c4.35-0.23,7.99-0.77,10.98-1.69c2.96-0.91,5.3-2.19,7.08-3.92c1.67-1.63,2.88-3.68,3.7-6.24c0.78-2.44,1.19-5.33,1.3-8.73 l-7.54,1.47L85.28,72.59L85.28,72.59z M86.57,91.21l1.75,15.59c0.05,0.46-0.1,0.91-0.37,1.25c-0.27,0.34-0.68,0.58-1.15,0.63 l-0.02,0c-0.46,0.05-0.91-0.1-1.25-0.37c-0.34-0.27-0.58-0.68-0.63-1.15l-1.78-15.84c-1.37-0.12-2.73-0.42-4.07-0.89 c-1.49-0.52-2.96-1.26-4.39-2.2c-1.67-1.1-3.31-2.47-4.87-4.11c-1.47-1.54-2.87-3.31-4.19-5.29c-0.77,0.28-1.54,0.54-2.29,0.78 c-0.89,0.29-1.75,0.54-2.58,0.77l-0.24,0.06c1.57,2.8,3.3,4.92,5.06,6.65c1.88,1.85,3.8,3.25,5.58,4.54 c2.64,1.93,5.01,3.66,6.7,6.18c1.7,2.54,2.68,5.83,2.51,10.85c-0.02,0.47-0.22,0.9-0.54,1.2c-0.32,0.3-0.76,0.48-1.23,0.46 c-0.47-0.01-0.9-0.22-1.2-0.54c-0.3-0.32-0.48-0.76-0.46-1.23c0.14-4.14-0.67-6.85-2.07-8.92c-1.41-2.09-3.45-3.58-5.73-5.23 c-1.97-1.44-4.1-2.99-6.2-5.09c-2.06-2.06-4.09-4.63-5.92-8.12c-1.26,0.2-2.47,0.31-3.6,0.29c-1.24-0.01-2.38-0.17-3.43-0.48 c-2.2-0.12-4.31-0.34-6.31-0.71c-2.03-0.37-3.94-0.88-5.71-1.55c-1.72-0.66-3.32-1.47-4.76-2.48c-1.37-0.95-2.61-2.06-3.69-3.36 c-1.42,0.18-2.81,0.3-4.18,0.34c-1.46,0.04-2.89,0-4.28-0.13c-1.52-0.14-3-0.4-4.43-0.77c-1.43-0.37-2.82-0.87-4.16-1.49 c-2.1-0.98-3.8-2.02-5.2-3.16c-1.41-1.16-2.52-2.42-3.41-3.84c-0.87-1.39-1.52-2.91-2.03-4.61c-0.5-1.67-0.88-3.53-1.22-5.61 c-0.63-3.88-0.73-7.42-0.41-10.67c0.32-3.27,1.08-6.25,2.17-9.01c1.08-2.75,2.48-5.27,4.12-7.62c1.63-2.35,3.48-4.53,5.46-6.62 c0.98-1.23,2.05-2.35,3.18-3.39c1.13-1.03,2.34-1.98,3.6-2.87c1.24-0.86,2.53-1.66,3.86-2.41c1.32-0.75,2.67-1.44,4.03-2.09 c4.37-3.09,8.72-5.25,13.07-6.67c4.36-1.43,8.73-2.11,13.13-2.24c4.34-0.13,8.7,0.29,13.12,1.07c4.39,0.77,8.84,1.9,13.39,3.21 c4.81-0.09,8.87,0.43,12.33,1.46c3.5,1.03,6.39,2.57,8.82,4.49c2.41,1.9,4.34,4.15,5.97,6.64c1.6,2.45,2.89,5.11,4.03,7.89 c1.28,1.17,2.51,2.47,3.68,3.87c1.18,1.42,2.28,2.93,3.28,4.51c1.49,2.36,2.75,4.88,3.69,7.45c0.89,2.44,1.48,4.92,1.69,7.37 c0.24,2.69,0.02,5.34-0.75,7.85c-0.72,2.33-1.92,4.52-3.69,6.5c-0.6,0.66-1.25,1.3-1.96,1.89c-0.69,0.58-1.44,1.13-2.26,1.65 c-0.1,0.07-0.21,0.14-0.33,0.19c-0.11,0.05-0.23,0.09-0.36,0.11l-2.35,0.46c-0.07,4.06-0.55,7.53-1.49,10.48 c-0.99,3.08-2.48,5.6-4.57,7.63c-2.02,1.97-4.57,3.44-7.71,4.5C94.3,90.26,90.74,90.89,86.57,91.21L86.57,91.21z",
      description: "Lorem ipsum dolor sit amet catetur, adipisicing elit.",
      href: "#",
    },
    {
      heading: "Urology",
      icon: "M85.05,72.26c2.7,1.19,5.92,1.73,9.47,1.79c4.2,0.07,8.88-0.51,13.73-1.45c1.18-0.23,2.32,0.55,2.54,1.73 c0.23,1.18-0.55,2.32-1.73,2.54c-5.09,0.99-10.05,1.6-14.61,1.52c-4.18-0.07-8.02-0.73-11.31-2.22c-2.19,2.31-3.39,5.39-3.57,8.53 c-0.09,1.66,0.1,3.33,0.59,4.91c0.48,1.56,1.25,3.04,2.31,4.31c2.15,2.59,5.56,4.43,10.29,4.7l0.06,0l0,0 c2.96,0.25,5.6-0.1,7.94-0.99c2.34-0.89,4.43-2.33,6.3-4.25c5.88-6.07,9.28-15.81,10.52-26.11c1.41-11.67,0.05-23.95-3.6-32.48 c-1.98-4.63-4.7-8.8-8.21-12.05c-3.14-2.91-6.91-5.09-11.36-6.21c-3.22-0.81-6.19-0.72-8.76,0.31c-2.5,1-4.7,2.9-6.47,5.75 c-1.12,1.79-1.94,3.93-2.44,6.21c-0.77,3.5-0.76,7.28,0.12,10.6c0.84,3.14,2.46,5.85,4.97,7.41c0.89,0.56,1.9,0.97,3.04,1.22 c2.54,0.56,5.27-0.18,7.6-1.93c2.36-1.77,4.31-4.57,5.29-8.13c0.32-1.15,1.51-1.83,2.67-1.51c1.15,0.32,1.83,1.51,1.51,2.67 c-1.25,4.52-3.78,8.12-6.87,10.44c-2.76,2.08-5.97,3.15-9.15,2.98c-1.01,1.65-1.62,3.35-1.81,4.91c-0.19,1.62,0.08,3.03,0.85,3.97 c0.83,1,2.3,1.2,3.92,0.99c2.95-0.39,6.22-2.09,8.07-3.37c0.99-0.68,2.34-0.43,3.02,0.55c0.68,0.99,0.43,2.34-0.55,3.02 c-2.24,1.54-6.25,3.6-9.97,4.1c-1.03,0.14-2.04,0.16-3.01,0.04c-0.36,0.88-0.65,1.77-0.88,2.64C85.3,70.34,85.13,71.3,85.05,72.26 L85.05,72.26z M40.03,76c0.36,0.89,0.67,1.79,0.93,2.69c3.48-5.67,6.11-9.7,9.65-10.96c0.01-0.65,0.01-1.29,0.02-1.94 c-1.08-0.08-3.56,1.51-5.62,2.83c-0.8,0.51-1.56,1-2.26,1.39c-0.11,1.96-0.74,3.73-1.91,5.14C40.59,75.47,40.32,75.75,40.03,76 L40.03,76z M42.62,84.3c2.83,3.07,4.39,7.07,4.62,11.13c0.12,2.16-0.13,4.35-0.77,6.42c-0.65,2.09-1.69,4.07-3.13,5.81 c-2.87,3.45-7.29,5.9-13.32,6.26l0,0c-3.61,0.31-6.87-0.14-9.83-1.26c-2.96-1.12-5.58-2.91-7.88-5.29 C5.7,100.56,1.92,89.91,0.57,78.75c-1.5-12.37-0.01-25.49,3.92-34.69c2.21-5.16,5.28-9.85,9.25-13.53 c3.66-3.39,8.07-5.94,13.26-7.25c4.1-1.03,7.96-0.88,11.41,0.5c3.38,1.35,6.29,3.83,8.56,7.48c1.12,1.79,1.99,3.83,2.6,6 c-0.66-8.16-1.66-16.38-3.01-24.65c-0.08-0.51-0.2-1.05-0.31-1.59c-0.75-3.63-1.46-7.03,2.8-9.76c1.1-0.7,2.35-1.12,3.61-1.22 c1.23-0.11,2.48,0.09,3.62,0.58c1.18,0.52,2.21,1.35,2.96,2.52c0.61,0.95,1.02,2.11,1.15,3.47c0.82,4.91,1.51,9.86,2.09,14.87 c0.17-2.34,0.35-4.67,0.53-7c0.07-0.82,0.09-1.54,0.12-2.28c0.18-5.37,0.39-11.62,7.64-12.07c0.53-0.03,1.07-0.01,1.61,0.08 c1.85,0.3,3.64,1.32,5.01,3.35c1.19,1.78,2.06,4.36,2.28,7.97c0.07,1.17,0.08,2.47,0.01,3.9c1.35-1.12,2.81-1.98,4.38-2.61 c3.45-1.38,7.31-1.53,11.41-0.5c5.19,1.31,9.6,3.85,13.26,7.25c3.97,3.69,7.04,8.37,9.25,13.53c3.93,9.2,5.42,22.31,3.92,34.69 c-1.35,11.16-5.13,21.81-11.73,28.63c-2.31,2.38-4.92,4.17-7.88,5.29c-2.96,1.12-6.22,1.56-9.83,1.26l0,0 c-6.03-0.36-10.45-2.8-13.32-6.26c-1.44-1.74-2.48-3.72-3.13-5.81c-0.64-2.08-0.9-4.26-0.77-6.42c0.25-4.44,2.09-8.81,5.45-11.96 c0.01-0.24,0.03-0.48,0.05-0.72c-1.98-0.48-3.15-0.65-5.68-0.09c-0.13,0.03-0.27,0.05-0.4,0.05l-3.74,42.09 c0,0.03,0,0.06-0.01,0.09c-0.05,0.55-0.18,1.32-0.34,2.17c-0.15,0.81-0.33,1.7-0.5,2.52c-0.26,1.27-1.06,2.41-2.09,3.17 c-0.71,0.52-1.56,0.89-2.45,1.01c-0.97,0.13-1.97-0.02-2.9-0.55c-0.84-0.47-1.58-1.23-2.13-2.35c-0.92,1.2-2.06,2.02-3.28,2.49 c-1.14,0.45-2.34,0.58-3.49,0.44c-1.16-0.14-2.27-0.55-3.25-1.21c-2.27-1.53-3.78-4.34-3.24-8.04l0-0.03 c1.77-13.4,2.93-26.98,3.29-40.74c-1.86,1.64-3.89,4.95-6.51,9.23C43.55,82.79,43.07,83.57,42.62,84.3L42.62,84.3z M50.32,49.05 c-0.13,0.82-0.3,1.63-0.51,2.42c-0.55,2.06-1.38,3.99-2.5,5.69c0.16,0.01,0.33,0.02,0.5,0.02c0.87,0.01,1.79-0.1,2.76-0.26 C50.52,54.3,50.44,51.68,50.32,49.05L50.32,49.05z M43.87,60.84c-0.3,0.22-0.61,0.43-0.92,0.63c-0.62,0.39-1.28,0.73-1.98,1.02 c0.48,0.94,0.87,1.89,1.17,2.84c0.18-0.11,0.36-0.23,0.54-0.35c2.5-1.6,5.38-3.45,7.96-3.5l0-0.18c-0.96,0.14-1.91,0.22-2.83,0.22 C46.42,61.5,45.1,61.3,43.87,60.84L43.87,60.84z M36.56,63.51c-3.18,0.17-6.39-0.9-9.15-2.98c-3.09-2.32-5.62-5.92-6.87-10.44 c-0.32-1.15,0.36-2.35,1.51-2.67c1.15-0.32,2.35,0.36,2.67,1.51c0.98,3.56,2.93,6.35,5.29,8.13c2.33,1.75,5.05,2.49,7.6,1.93 c1.14-0.25,2.15-0.67,3.04-1.22c2.51-1.56,4.13-4.27,4.97-7.41c0.88-3.32,0.88-7.09,0.12-10.6c-0.5-2.28-1.32-4.42-2.44-6.21 c-1.77-2.84-3.97-4.75-6.47-5.75c-2.57-1.03-5.54-1.12-8.76-0.31c-4.44,1.12-8.22,3.3-11.36,6.21c-3.51,3.26-6.23,7.43-8.21,12.05 c-3.65,8.53-5.01,20.81-3.6,32.48c1.25,10.3,4.64,20.04,10.52,26.11c1.87,1.93,3.96,3.37,6.3,4.25c2.35,0.89,4.98,1.24,7.94,0.99 l0,0l0.06,0c4.73-0.27,8.13-2.11,10.29-4.7c1.06-1.28,1.83-2.75,2.31-4.31C42.81,99,43,97.33,42.9,95.67 c-0.18-3.14-1.38-6.22-3.57-8.53c-3.29,1.49-7.13,2.15-11.31,2.22c-4.56,0.08-9.52-0.53-14.61-1.52c-1.18-0.23-1.95-1.36-1.73-2.54 c0.23-1.18,1.36-1.95,2.54-1.73c4.85,0.94,9.53,1.53,13.73,1.45c3.55-0.06,6.77-0.6,9.47-1.79c-0.08-0.96-0.25-1.91-0.5-2.87 c-0.23-0.88-0.53-1.76-0.88-2.64c-0.97,0.12-1.98,0.1-3.01-0.04c-3.73-0.5-7.74-2.55-9.97-4.1c-0.99-0.68-1.23-2.03-0.55-3.02 c0.68-0.99,2.03-1.23,3.02-0.55c1.85,1.28,5.12,2.98,8.07,3.37c1.62,0.22,3.09,0.02,3.92-0.99c0.77-0.93,1.05-2.35,0.85-3.97 C38.18,66.87,37.57,65.17,36.56,63.51L36.56,63.51z M56.06,7.01c-0.05-0.64-0.22-1.15-0.47-1.53c-0.26-0.41-0.63-0.71-1.04-0.89 c-0.45-0.2-0.98-0.27-1.53-0.23c-0.57,0.05-1.13,0.23-1.62,0.54c-1.75,1.12-1.34,3.11-0.9,5.22c0.12,0.58,0.24,1.16,0.34,1.78 c2.87,17.53,4.13,34.85,4.12,51.91c-0.01,17.05-1.27,33.82-3.45,50.29c0,0.04-0.01,0.07-0.02,0.11c-0.26,1.81,0.39,3.13,1.38,3.8 c0.4,0.27,0.86,0.44,1.33,0.5c0.47,0.06,0.95,0,1.4-0.17c1.27-0.49,2.37-1.96,2.65-4.68l0,0c0.73-8.83,1.31-17.59,1.69-26.26 c0.04-9.28,0.21-18.32,0.49-27.19c0-0.37-0.01-0.74-0.01-1.11c-0.23-17.76-1.55-35.11-4.35-51.9C56.08,7.13,56.07,7.07,56.06,7.01 L56.06,7.01L56.06,7.01z M64.79,60.3c0.09,9.05-0.09,18.19-0.49,27.4c-0.02,4.28-0.01,8.62,0.03,13c0.01,1.83-0.14,3.87-0.3,5.99 c-0.31,4.18-0.65,8.72,0.22,10.99c0.17,0.44,0.34,0.68,0.51,0.77c0.05,0.03,0.11,0.03,0.19,0.02c0.15-0.02,0.31-0.1,0.46-0.21 c0.22-0.16,0.37-0.35,0.41-0.54c0.16-0.79,0.34-1.65,0.48-2.44c0.14-0.75,0.25-1.4,0.29-1.8l0.01-0.07l6.27-70.46 c0.03-0.33,0.13-0.64,0.29-0.91c-0.18-0.52-0.34-1.04-0.48-1.58c-1.06-3.99-1.07-8.49-0.17-12.62c0.49-2.22,1.24-4.35,2.24-6.25 c-0.04-0.23-0.05-0.48-0.01-0.73c0.6-3.71,0.76-6.71,0.61-9.11c-0.17-2.78-0.76-4.64-1.55-5.82c-0.62-0.92-1.36-1.37-2.09-1.48 c-0.21-0.03-0.43-0.04-0.66-0.03c-3.32,0.21-3.46,4.33-3.58,7.87c-0.03,0.92-0.06,1.82-0.12,2.49c-1.1,13.77-1.92,27.6-2.43,41.74 C64.87,57.8,64.83,59.05,64.79,60.3L64.79,60.3z M76.75,48.2l-0.85,9.55c1.44-0.15,2.54-0.04,3.81,0.22 c0.01-0.34,0.04-0.68,0.08-1.03c0.21-1.76,0.79-3.61,1.73-5.43c-0.7-0.29-1.36-0.63-1.98-1.02C78.5,49.84,77.57,49.07,76.75,48.2 L76.75,48.2z M82.45,65.03c-0.29-0.25-0.56-0.53-0.82-0.84c-0.39-0.47-0.72-0.98-0.99-1.53c-2.02-0.51-3.14-0.78-5.13-0.47 l-0.45,5.07c2.8-0.53,4.25-0.31,6.52,0.25C81.82,66.67,82.12,65.84,82.45,65.03L82.45,65.03z",
      description: "Lorem ipsum dolor sit amet catetur, adipisicing elit.",
      href: "#",
    },
  ];

  return (
    <ChakraProvider>
      <Box>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Experts from Doctorsqueries
          </Heading>
          <Text color={"gray"} fontSize={{ base: "sm", sm: "lg" }}>
          Doctors Queries provides Quality treatment from Experienced Doctors and Specialists., we offer treatment for Gynecologists,  Kidney Transplant, Laparoscopic Surgeon, Neuro Surgeon, Oncologist, Orthopaedic Oncology, , Pulmonology, Thoracic Surgeon etc.
          </Text>
        </Stack>

        <Container maxW={"9xl"} mt={12}>
          <Flex gridGap={4} justify="center" wrap="wrap">
            {cards.map((card, index) => (
              <Card
                key={index}
                heading={card.heading}
                icon={card.icon}
                description={card.description}
                href={card.href}
              />
            ))}
          </Flex>
        </Container>
      </Box>
    </ChakraProvider>
  );
}