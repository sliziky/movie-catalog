import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.scss';

function LoginPage() {

  const navigate = useNavigate();

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    const [login, pw] = [e.target[0].value, e.target[1].value];
    localStorage.setItem('currentUser', JSON.stringify({ login, pw }));
    navigate('/');
  }
  return (
    <Form className={styles.loginForm} onSubmit={(p) => onSubmitForm(p)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control type="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  )
}

export default LoginPage