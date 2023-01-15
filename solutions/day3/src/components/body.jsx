import { 
  Card, 
  CardBody, 
  CardFooter,
  Stack,
  Image,
  Text,
  Heading,
  Badge,
} from '@chakra-ui/react';
import milkMan from '../images/milkman.jpeg';

export function Bodily() {
  const skills = ['HTML', 'CSS', 'Java', 'JavaSript', 'React', 'Ruby', 'Rails', 'Node']
  const formatSkills = skills.map((skill) => <Badge ml='1' fontSize='0.8em' colorScheme='green' key={skill}>{skill}</Badge>);

  return(
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={milkMan}
        alt='Milk Man'
      />

      <Stack>
        <CardBody>
          <Heading size='md'>Matt Holloway</Heading>
          <Text py='2'>
            Code Warrior, Canada
          </Text>
        </CardBody>
        <CardFooter>
          <Heading size='md'>Skills</Heading>
          {formatSkills}
        </CardFooter>
      </Stack>

    </Card>
  );
}