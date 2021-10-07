//import './Login.css'
import { Button } from '@chakra-ui/button';
import { signInWithGoogle } from './services/firebase';
//import { Redirect } from 'react-router-dom';

export const Login = () => (
    <Button
      alignSelf='center'
      leftIcon={<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png"} alt=''/>}
      onClick={signInWithGoogle}>
      Continue with Google
    </Button>
  );