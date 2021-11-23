import React from 'react';
import { HeaderContainer, Button, StyledButton, AlertDiv } from '../styles/headerStyles';
import { useDisclosure } from '@chakra-ui/react';

import CustomModal from './Modal';

//import logoText from '../assets/logo_text.svg';
//import logoIcon from '../assets/logo.svg';
import downIcon from '../assets/down_icon.svg';
//import forum_logo from '../assets/Mediamodifier-Design.svg';

//import special_logo from '../assets/Extreme_Conditioning_pro_perk_MW3.png';

import { useDispatch, useSelector } from 'react-redux';
import { logout as userLogout } from '../redux/actions/userLogin';

import { useHistory } from 'react-router-dom';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(state => state.user?.user);

  const logout = () => {
    onClose();
    history.push('/app')
    dispatch(userLogout());
  }

  const redirect = (path) => {
    onClose();
    history.push(path);
  }
  //<img className='logo-text' src={logoText} alt='celloverflow' />

  return (
    <HeaderContainer>
      <div style={{ cursor: 'pointer' }} onClick={() => history.push('/app')}>
        <span className="logo_text_header">StackofQuestion</span>
      </div>

      <div style={{cursor: 'pointer'}} onClick={() => history.push('/policy')}>
        <span className="policy_header">Điều luật</span>        
      </div>

      {!user && <Button onClick={() => history.push('/login')}>Đăng nhập</Button>}
      {user && <CustomModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        ui={
          <Button>
            <p>{user.username}</p>
            <img src={downIcon} alt="more" />
          </Button>
        }
        title='Lựa chọn'
      >
        <AlertDiv>
          <StyledButton onClick={() => redirect(`/ask`)} style={{ background: 'var(--accent-color)' }}>Đặt câu hỏi</StyledButton>
          <StyledButton onClick={() => redirect(`/user/${user?.username}`)} style={{ background: 'var(--accent-color)' }}>Hồ sơ</StyledButton>
        </AlertDiv>
        <AlertDiv>
          <StyledButton onClick={() => redirect(`/settings`)} style={{ background: 'var(--accent-color)' }}>Cài đặt</StyledButton>
          <StyledButton onClick={logout} style={{ background: 'var(--error-color)' }}>Đăng xuất</StyledButton>
        </AlertDiv>
      </CustomModal>}
    </HeaderContainer>
  )
}
