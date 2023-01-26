import React from 'react';
import Moment from 'react-moment';
import { 
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  CardHeader,
  Box,
} from '@chakra-ui/react';

function Exercise ({exercise}) {
  return (
    <div className='row'>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        padding="5px"
        margin="5px"
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src='https://dgtzuqphqg23d.cloudfront.net/sjPfBmbjgLzxk708_Jd14RjJEXY6wfs3WQUnECGcuOk-2048x1152.jpg'
          alt='Fitness'
        />

        <Stack>
          <CardHeader>
            <Box>
              <Heading size='sm'>{exercise.username}</Heading>
              <Text>
                <Moment format="MMM DD YYYY HH:MM">{exercise.date}</Moment>
              </Text>
            </Box>
          </CardHeader>

          <CardBody>
            <Text>
              {exercise.desscription}
            </Text>
          </CardBody>

          <CardFooter>
            <Text py='1'>{exercise.duration} minutes </Text>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  )
}

export default Exercise;