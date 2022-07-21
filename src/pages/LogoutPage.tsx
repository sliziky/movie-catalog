import React from 'react'
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../recoil/atoms';
import styles from './LogoutPage.module.scss';
function LogoutPage() {
  const user = useRecoilValue(userAtom);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      setTimeout(() => {
        localStorage.removeItem('currentUser');
        navigate('/');
      }, 1000)
    }
  }, [])

  return (
    <Spinner className={styles.logoutPageSpinner} animation="border" role="status" >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default LogoutPage