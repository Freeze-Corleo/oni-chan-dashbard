import LoginForm from '../../components/molecules/forms/Login';
import HomeRoot from '../../components/organisms/HomeRoot';

const Login = () => {
  return (
    <div>
      <HomeRoot children={<LoginForm />} />
    </div>
  );
};

export default Login;
