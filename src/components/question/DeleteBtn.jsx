import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDisclosure, Button, useToast, Spinner } from '@chakra-ui/react';
import { deleteQuestion as requestDeleteQuestion } from '../../firebase/helpers/questionHelper';
import { deleteAnswer as requestDeleteAnswer } from '../../firebase/helpers/answerHelper';
import CustomModal from '../Modal';

export default function DeleteBtn({ questionId, answerId, isAnswer }) {
  const [isLoading, setIsLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();

  const showToast = useToast();
  const history = useHistory();

  const deleteThing = () => {
    setIsLoading(true)
    if (!isAnswer) {
      requestDeleteQuestion(questionId).then(() => {
        setIsLoading(false)
        history.push('/')
        onClose();
      }).catch(err => {
        setIsLoading(false)
        showToast({
          title: 'Failed to delete',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
          status: 'error',
        });
      })
    } else {
      requestDeleteAnswer(questionId, answerId).then(() => {
        setIsLoading(false)
        window.location.reload();
        onClose();
      }).catch(err => {
        setIsLoading(false)
        showToast({
          title: 'Xóa thất bại',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
          status: 'error',
        });
      })
    }
  }

  return (
    <CustomModal
      ui={<i className="delete fas fa-trash-alt"></i>}
      title="Bạn có chắc không"
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <Button
        _hover={{ opacity: 0.8 }}
        backgroundColor="var(--accent-color)"
        size="lg"
        width="48%"
        onClick={onClose}
        disabled={isLoading}
      >Khỏi</Button>
      <Button
        _hover={{ opacity: 0.8 }}
        backgroundColor="var(--error-color)"
        size="lg"
        ml={2}
        width="48%"
        disabled={isLoading}
        onClick={deleteThing}
      >{isLoading ? <Spinner /> : 'Đúng vậy'}</Button>
    </CustomModal>
  )
}
