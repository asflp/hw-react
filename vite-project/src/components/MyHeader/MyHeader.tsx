import collection from '../../images/collection.svg'
import plus from '../../images/plus.svg'
import short_logo from '../../images/short-logo.svg'
import search from '../../images/search.svg'
import profile_photo from '../../images/profile-photo.png'
import './MyHeader.css'
import {useNavigate} from "react-router-dom";
import collection_click from '../../images/collection-click.svg'


interface propsHeader {
    isCollection: boolean,
    isAdd: boolean,
    isSearch: boolean
}

const MyHeader= (props: propsHeader) => {


    const navigate = useNavigate();
    const navigateToCollections = () => {
        navigate('/collections');
    };

    return (
        <div className='head'>
            <div className='text'>
                <img onClick={navigateToCollections} src={props.isCollection ? collection_click : collection}/>
                <div className='text__item' style={props.isAdd ? {backgroundColor: "#002DFF"} : {}}>
                    <img src={plus}/>
                    Добавить
                </div>
            </div>

            <div className='logo__small'>
                <img src={short_logo}/>
            </div>

            <div className='search'>
                <div className='search_item' style={props.isSearch ? {backgroundColor: "#002DFF"} : {}}>
                    <img src={search}/>
                    Поиск
                </div>
                <img className='avatar' src={profile_photo}/>
            </div>
        </div>
    );
};

export default MyHeader;
