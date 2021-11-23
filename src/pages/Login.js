import React, { useState } from 'react';
import AuthWrapper from '../components/auth/AuthWrapper';
import getUserObject from '../utils/loginHelper';
import { Flex, Heading, Button, Link, Text, Spinner, useToast } from '@chakra-ui/react';
import { auth, provider, fbprovider } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { Login as userLogin } from '../redux/actions/userLogin';
import { saveUser as saveUserToFirestore } from '../firebase/helpers/userHelper';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const showToast = useToast();
  const dispatchAction = useDispatch();

  const loginWithGoogle = () => {
    setIsLoading(true);
    auth.signInWithPopup(provider).then(userData => {
      const user = getUserObject(userData.user); // getting wanted user data from user data 

      saveUserToFirestore(user).then(newUserData => {
        setIsLoading(false);
        dispatchAction(userLogin(newUserData));
      }).catch(() => {
        setIsLoading(false);
        showToast({
          title: 'Đăng nhập thất bại có vẻ như có lỗi. Kiểm tra console đi',
          position: 'top-right',
          duration: 3000,
          status: 'error',
          isClosable: true,
        });
      });
    }).catch(err => {
      console.log(err);
      showToast({
        title: 'Đăng nhập với google thất bại có vẻ như có lỗi. Kiểm tra console đi',
        position: 'top-right',
        duration: 3000,
        status: 'error',
        isClosable: true,
      });
    })
  }

  const loginWithFacebook = () => {
    setIsLoading(true);
    auth.signInWithPopup(fbprovider).then(userData => {
      const user = getUserObject(userData.user); // getting wanted user data from user data 

      saveUserToFirestore(user).then(newUserData => {
        setIsLoading(false);
        dispatchAction(userLogin(newUserData));
      }).catch(() => {
        setIsLoading(false);
        showToast({
          title: 'Đăng nhập thất bại có vẻ như có lỗi. Kiểm tra console đi',
          position: 'top-right',
          duration: 3000,
          status: 'error',
          isClosable: true,
        });
      });
    }).catch(err => {
      console.log(err);
      showToast({
        title: 'Đăng nhập với facebook thất bại có vẻ như có lỗi. Kiểm tra console đi',
        position: 'top-right',
        duration: 3000,
        status: 'error',
        isClosable: true,
      });
    })
  }

  return (
    <AuthWrapper authenticationRequired={false}>
      <Flex height="90vh" alignItems="center" justifyContent="center" >
        <Flex direction="column" width="45vh" background="var(--secondary-color)" p={12} rounded={6}>
          <Heading mb={4}>Bắt đầu tham gia nào !</Heading>
          <Text mb={4} opacity="0.5">
            Bằng cách đăng nhập vào bạn đồng ý với
            <Link href='/page/terms'> Điều khoản và điều luật của chúng tôi</Link>
          </Text>
          <Button onClick={loginWithGoogle} size="lg" width='110%' marginBottom="20px" disabled={isLoading} style={{ background: 'var(--accent-color)' }}>
            {isLoading ? <Spinner /> : 'Đăng nhập bằng Google'}
          </Button>
          <Button onClick={loginWithFacebook} size="lg" width='112%' disabled={isLoading} style={{ background: 'var(--accent-color)' }}>
            {isLoading ? <Spinner /> : 'Đăng nhập bằng Facebook'}
          </Button>
        </Flex>
      </Flex>
    </AuthWrapper>
  )
}
