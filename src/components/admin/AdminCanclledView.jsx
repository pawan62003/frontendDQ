import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Grid, Badge, Flex, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AdminCanclledView = () => {
  const [userAppointment, setUserAppointment] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://drab-blue-mite-belt.cyclic.app/appointment?status=cancel`
      )
      .then((res) => setUserAppointment(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          height: "530px",
          fontSize: "44px",
          color: "red",
        }}
      >
        Loading...
      </div>
    );
  }

  
  return (
    <div>
      <Box textAlign="center" py={10} px={6}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={'red.500'}
          rounded={'50px'}
          w={'55px'}
          h={'55px'}
          textAlign="center">
          <CloseIcon boxSize={'20px'} color={'white'} />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        {`Total ${userAppointment.length} appointments are cenelled`}
      </Heading>
      <Text color={'red'}>
      See all canclled appointment details on below the page.
      </Text>
    </Box>

    {userAppointment.map((item) => (
        <Box
          bg="white"
          p={6}
          rounded="md"
          boxShadow="md"
          width="100%"
          marginTop={"12px"}
          marginBottom={'20px'}
          // maxW="400px"
        >
          <Heading size="lg" mb={4} color="red.400">
            Patient Information
          </Heading>
          <Grid templateColumns="2fr 2fr" gap={5}>
            <Text fontWeight="bold" color="gray.600">
              Name:
            </Text>
            <Text>{item.name}</Text>
            <Text fontWeight="bold" color="gray.600">
              Age:
            </Text>
            <Text>{item.age}</Text>
            <Text fontWeight="bold" color="gray.600">
              Gender:
            </Text>
            <Text>{item.gender}</Text>
            <Text fontWeight="bold" color="gray.600">
              Address:
            </Text>
            <Text>{item.address}</Text>
            <Text fontWeight="bold" color="gray.600">
              Email:
            </Text>
            <Text>{item.email}</Text>
            <Text fontWeight="bold" color="gray.600">
              Mobile:
            </Text>
            <Text>{item.mobile}</Text>
          
          <Text fontWeight="bold" color="gray.600" mt={4}>
            Reason for Visit: 
          </Text>
          <Text as="span">{item.reason}</Text>
         
          <Text fontWeight="bold" color="gray.600">
            Doctor:
          </Text>
          <Text as="span">{item.doctor}</Text>
          <Text fontWeight="bold" color="gray.600">
            Specialty:
          </Text>
          <Text as="span">{item.specilaty}</Text>
          <Text fontWeight="bold" color="gray.600">
            Date:
          </Text>
          <Text as="span">{item.date}</Text>
          <Text fontWeight="bold" color="gray.600">
            Time: 
          </Text>
          <Text as="span">{item.time}</Text>
          </Grid>
          <Flex alignItems="center">
            <Text fontWeight="bold" color="gray.600">
              Status:
            </Text>
            <Badge
              fontSize={"16px"}
              colorScheme={
                item.status === "approved"
                  ? "green"
                  : item.status === "visited"
                  ? "blue"
                  : item.status === "cancel"
                  ? "red"
                  : "yellow"
              }
              ml={2}
            >
              {item.status}
            </Badge>
          </Flex>
          <Box display={'flex'} justifyContent={'space-between'}>
          <Box></Box>
          <Button colorScheme="red"><Link to={`/doctors/${item.doctorName}`}>See More About Doctor</Link></Button>
          </Box>
          
        </Box>
      ))}
    </div>
  );
};

export default AdminCanclledView;
