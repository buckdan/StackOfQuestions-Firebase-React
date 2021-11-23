import React, { useState } from 'react';
import AuthWrapper from '../components/auth/AuthWrapper';
import MarkdownPreview from '../components/MarkdownPreview';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container } from '../styles/askStyles';
import { ButtonContainer } from '../styles/settingStyles';
import { Spinner, useToast } from '@chakra-ui/react';
import { saveQuestionToFirestore } from '../firebase/helpers/questionHelper';

export default function Ask() {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');

  const [tagInputValue, setTagInputValue] = useState('');
  const [isMarkdownPreview, setIsMarkdownPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const showToast = useToast();
  const user = useSelector(state => state.user?.user);

  const isNotEmpty = (str) => str.trim().length !== 0;
  const canAskQuestion = isNotEmpty(title) && isNotEmpty(description) && isNotEmpty(body) && tags.length !== 0;

  const askQuestion = () => {
    setIsLoading(true);
    saveQuestionToFirestore({
      title,
      description,
      tags,
      body,
      username: user?.username,
      userEmail: user?.email,
    }).then(() => {
      setIsLoading(false);
      showToast({
        title: 'Đặt câu hỏi thành công',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
        status: 'success',
      });
      history.push('/app');
    }).catch((err) => {
      console.log(err);
      showToast({
        title: 'Đã xảy ra lỗi khi đặt câu hỏi',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
        status: 'error',
      });
    })
  }

  return (
    <AuthWrapper authenticationRequired={true}>
      <Container>
        <h2>Hỏi về những thứ bạn muốn biết ?</h2>
        <div className='input'>
          <h3>Tiêu đề ( {title.length} / 100 )</h3>
          <input
            placeholder='C là gì ?'
            value={title}
            onChange={(e) => {
              if (e.target.value.length > 100) return;
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className='input'>
          <h3>Nhãn ( tách đôi nhãn bằng a , )</h3>
          {tags.length > 0 && <div className='tags'>
            {tags.map((tag, idx) => <span key={idx}>{tag}</span>)}
          </div>}
          <input
            placeholder='Lập trình, học tập, giải trí...'
            value={tagInputValue}
            onChange={(e) => {
              let inputVal = e.target.value;
              let tagsFromValue = inputVal.split(',').filter(tag => tag.trim().length !== 0);
              setTagInputValue(inputVal);
              setTags(tagsFromValue)
            }}
          />
        </div>
        <div className='input'>
          <h3>Mô tả ngắn( {description.length} / 250 )</h3>
          <textarea
            placeholder='Một mô tả ngắn về vấn đề của bạn (Nó sẽ hiển thị ở trang câu hỏi)'
            value={description}
            style={{ resize: 'none' }}
            onChange={(e) => {
              if (e.target.value.length > 250) return;
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className='input markdown-edit'>
          <h3>Chi tiết về câu hỏi của bạn (hỗ trợ trang trí Markdown)</h3>
          <button
            onClick={() => setIsMarkdownPreview(!isMarkdownPreview)}
            style={{ background: isMarkdownPreview ? 'var(--accent-color)' : 'var(--secondary-color)' }}
          >Hiện {isMarkdownPreview ? 'đầy đủ' : 'bản sẽ xuất hiện'}</button>
          {isMarkdownPreview ? <MarkdownPreview markdown={body} /> : <textarea
            placeholder='Tui không biết C là gì ? Nó có phải là ngôn ngữ lập trình hay là điểm vậy ?'
            rows="20"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />}
        </div>
        <ButtonContainer>
          <ButtonContainer>
            <button
              onClick={askQuestion}
              style={isLoading || !canAskQuestion ? {
                opacity: '0.5',
                cursor: 'not-allowed',
              } : {}}
            >{isLoading ? <Spinner /> : 'Hỏi'}
            </button>
            <button
              onClick={() => history.push('/app')}
              style={isLoading ? {
                background: 'var(--error-color)',
                marginLeft: '10px',
                opacity: '0.5',
                cursor: 'not-allowed',
              } : {
                background: 'var(--error-color)',
                marginLeft: '10px',
              }}
              disabled={isLoading}
            >Hủy</button>
          </ButtonContainer>
        </ButtonContainer>
      </Container>
    </AuthWrapper>
  )
}
