import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useToast, Text } from '@chakra-ui/react';
import { PostContainer, Post } from '../../styles/appStyles';
import { getAllQuestions } from '../../firebase/helpers/questionHelper';
//import { getAllAnswers } from '../../firebase/helpers/answerHelper';

export default function PostSection({ targetUsername }) {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const showToast = useToast();
  const user = useSelector(state => state.user?.user);
  const history = useHistory();

  useEffect(() => {
    if (!user) return;
    getAllQuestions(targetUsername).then(questionsFromFirestore => {
      setQuestions(questionsFromFirestore);
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
      showToast({
        title: 'Lấy dữ liệu thất bại',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
        status: 'error',
      });
    })
    return () => {
      setQuestions([]);
    }
  }, [showToast, user, targetUsername])

  return (
    <PostContainer>
      {isLoading && (
        <SkeletonTheme color="var(--secondary-color)" highlightColor="#444">
          <Skeleton height={260} count={3} style={{ borderRadius: '25px', marginBottom: "10px" }} />
        </SkeletonTheme>
      )}
      {!isLoading && questions.map(question => (
        <Post onClick={() => history.push(`/question/${question?.id}`)} key={question?.id}>
          <h3>{question?.title}</h3>
          <p>{question?.description}</p>
          <p>Số bầu chọn: {question?.votes}</p>
          <div className='bottom'>
            <div className='tags'>
              {question?.tags.map((tag, idx) => <span key={idx}>{tag}</span>)}
            </div>
            <p>Hỏi bởi <span onClick={() => history.push(`/user/${question?.username}`)}>@{question?.username}</span></p>
          </div>
        </Post>
      ))}
      {!isLoading && questions.length === 0 && (
        <Text fontSize="xl">Có vẻ như vẫn chưa có câu hỏi nào</Text>
      )}
    </PostContainer>
  );
}