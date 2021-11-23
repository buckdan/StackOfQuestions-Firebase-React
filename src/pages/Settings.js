import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SettingContainer, ButtonContainer } from '../styles/settingStyles';
import { useToast, Spinner } from '@chakra-ui/react';
import { saveUser as saveUserDataToFirestore } from '../firebase/helpers/userHelper';
import { Login as userLogin } from '../redux/actions/userLogin';
import AuthWrapper from "../components/auth/AuthWrapper";

export default function Settings() {
    const [isLoading, setIsLoading] = useState(false);
    const [occupation, setOccupation] = useState('');
    const [website, setWebsite] = useState('');
    const [bio, setBio] = useState('');
    //const [username, setUsername] = useState('');

    const user = useSelector(state => state.user?.user);
    const dispatch = useDispatch();
    const showToast = useToast();
    const history = useHistory();

    useEffect(() => {
        //setUsername(user?.username);
        setOccupation(user?.occupation);
        setWebsite(user?.website);
        setBio(user?.bio);
    }, [user])

    const saveSettings = () => {
        setIsLoading(true);

        const newUserData = { ...user, website, occupation, bio, /*username*/ }

        saveUserDataToFirestore(newUserData, true).then(userData => {
            setIsLoading(false);
            dispatch(userLogin(userData));
            history.push('/app');
        }).catch(() => {
            setIsLoading(false);
            showToast({
                title: 'Lưu cài đặt thất bại',
                position: 'top-right',
                duration: 3000,
                status: 'error',
                isClosable: true,
            });
        })
    }

    return (
        <AuthWrapper authenticationRequired={true}>
            <SettingContainer>
                <div>
                    <h3>Nghề nghiệp của bạn</h3>
                    <input
                        placeholder='Lập trình viên, học sinh, thằng thiểu năng, luật sư...'
                        value={occupation}
                        onChange={(e) => setOccupation(e.target.value)}
                    />
                </div>
                <div>
                    <h3>URL của trang web riêng</h3>
                    <input
                        type="url"
                        placeholder='https://therickroll.com/'
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div>
                    <h3>Mô tả rõ ràng hơn</h3>
                    <textarea
                        placeholder='Nói với mọi người bạn là ai !'
                        rows='5'
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </div>
            </SettingContainer>
            <ButtonContainer>
                <button
                    onClick={saveSettings}
                    style={isLoading ? {
                        opacity: '0.5',
                        cursor: 'not-allowed',
                    } : {}}
                >{isLoading ? <Spinner /> : 'Lưu'}
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
        </AuthWrapper>
    );
}