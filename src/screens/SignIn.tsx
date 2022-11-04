import { Center, Text, Icon } from "native-base";
import { Fontisto } from '@expo/vector-icons'
import { useAuth } from "../Hooks/useAuth";

import Logo from '../assets/logo.svg'
import { Button } from "../components/Button";

 export function SignIn(){
  const { siginIn, isUserLoading } = useAuth()

  return(
    <Center 
      flex={1} 
      bgColor='gray.900'
      p={7}
    >
      <Logo width={212} height={40}/>
    
      <Button 
        type='SECONDARY'
        title="ENTRAR COM O GOOGLE"
        leftIcon={<Icon as={Fontisto} name='google' color='white' size='md' />}
        mt={12}
        onPress={siginIn}
        isLoading={isUserLoading}
        _loading={{_spinner:  { color: 'white' }}}
      />

      <Text 
        color='white'
        textAlign='center'
        mt={4}
      >
        Não utilizamos nenhuma informaççao além {'\n'}
        do seu e=mail para criação de sua conta.
      </Text>
  </Center>
  ) 

 }