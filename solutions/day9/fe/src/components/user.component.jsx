import React from 'react';
import Moment from 'react-moment';
import {
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  CardHeader,
  Box,
} from '@chakra-ui/react';

function User({user}) {
  return (
    <Card
      direction={{base: 'column', sm: 'row'}}
      overflow='hidden'
      variant='outline'
      padding='5px'
      margin='5px'
    >
      <Stack>
        <CardHeader>
          <Box>
            <Heading size='md'>{user.name}</Heading>
            <Text>
              Date of birth: <Moment format="MMM DD YYYY">{user.birthday}</Moment>
            </Text>
          </Box>
        </CardHeader>
        <CardBody>
          <Text>
            Username: {user.username}
          </Text>
        </CardBody>
        <CardFooter>
          <Heading size='sm'>
            Location: {user.location}
          </Heading>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default User;