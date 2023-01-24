import React from 'react';
import { 
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
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
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>{exercise.username}</Heading>

            <Text py='2'>
              {exercise.description}
            </Text>
          </CardBody>

          <CardFooter>
            <Text py='1'>{exercise.duration}</Text>
            <Text py='1'>{exercise.date}</Text>
          </CardFooter>
        </Stack>
      </Card>
      {/* <div className='col-md-3'>{exercise.username}</div>
      <div className='col-md-3'>
        {exercise.description}
      </div>
      <div className='col-md-3'>{exercise.duration}</div>
      <div className='col-md-3'>{exercise.date}</div> */}
    </div>
  )
}

export default Exercise;