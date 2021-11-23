import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Link as StyledLink, Flex } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Flex justifyContent="center" alignItems="center" height="80vh" direction="column">
      <Text fontSize="9xl">404</Text>
      <Text fontSize="xl">Chúng tôi không tìm thấy trang mà bạn đang tiến tới</Text>
      <StyledLink opacity="0.8" mt={4} as={Link} to="/">Quay trở về trang chủ</StyledLink>
    </Flex>
  )
}