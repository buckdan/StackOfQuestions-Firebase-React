import React, { useEffect, useState } from 'react';
import { getAllAnswers } from '../../firebase/helpers/answerHelper';
import { useToast } from '@chakra-ui/react';
import { AnswerContainer } from '../../styles/questionStyles';
import Answer from './Answer';

export default function Answers({ questionId }) {
  const [answers, setAnswers] = useState([]);
  const showToast = useToast();

  useEffect(() => {
    getAllAnswers(questionId).then(data => {
      setAnswers(data);
    }).catch(() => {
      showToast({
        title: 'Thất bại lấy câu trả lời',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
        status: 'error',
      });
    })
  }, [questionId, showToast]);

  return (
    <AnswerContainer>
      <h2>Tất cả câu trả lời</h2>
      {answers.length === 0 && <p className="nop">Có vẻ như chưa có ai trả lời câu hỏi này</p>}
      {answers.map(answer => <Answer key={answer?.id} answer={answer} />)}
    </AnswerContainer>
  )
}
