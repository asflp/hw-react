import MyHeader from "../MyHeader/MyHeader.tsx";
import './MainPage.css'
import logo from '../../images/logo.svg'
import agona from '../../images/agona.svg'

const MainPage= () => {

    return (
        <div className='window__main'>
            <MyHeader isSearch={false} isAdd={false} isCollection={false}/>
            <div className='images'>
                <img className='images first' src={logo}/>
                <img src={agona}/>
            </div>
        </div>
    );
};

export default MainPage;