import React from 'react';
import AuthWrapper from '../components/auth/AuthWrapper';
//import stethoscope from '../assets/stethoscope.svg';
import { useHistory } from 'react-router-dom';
import { Container, Main, Content } from '../styles/homeStyles';

export default function Home() {
  const history = useHistory();

  return (
    <AuthWrapper authenticationRequired={false}>
      <Container>
        <Main>
          <div>
            <h1>
              Hãy cùng nhau<br />
              Trả lời <span>câu hỏi của mọi người</span><br />
            </h1>
            <button onClick={() => history.push('/login')}>Tham gia</button>
          </div>
        </Main>
        <Content>
          <h2>StackofQuestion, là cái gì ??</h2>
          <p>
            <span>StackofQuestion</span> là một cộng đồng trực tuyến trên internet sẽ giúp bạn giải quyết
            vấn đề của bạn . Và bạn còn có thể giúp đỡ người khác nữa .
            Nói một cách ngắn gọn nó là <span>StackOverflow</span> nhưng cho một cộng đồng riêng tư :))
          </p>
          <button onClick={() => history.push('/page/guilty')}>Đừng có bấm cái nút này</button>
        </Content>
      </Container>
    </AuthWrapper>
  )
}
