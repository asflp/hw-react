import logo from '../../images/logo.svg'
import './LoginPage.css'

const LoginPage = () => {
    return (
        <div className='window'>
            <div className='container'>
                <img src={logo} className='logo'/>

                <form className='inputs'>
                    <label className='inputs'>
                        <input className='inputs' type='text' placeholder='Адрес электронной почты'/>
                    </label>

                    <label className='inputs'>
                        <input className='inputs' type='text' placeholder='Пароль'/>
                    </label>
                </form>

                <div className='error'>
                    Сообщение об ошибке
                </div>

                <button className='enter'>
                    Войти
                </button>

                <span className='enter'>
                Еще не зарегистрированы?
                <a className='enter'>
                    Регистрация
                </a>
            </span>
            </div>
        </div>
    );
};

export default LoginPage;