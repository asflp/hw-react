import './CollectionPage.css'
import MyHeader from "../MyHeader/MyHeader.tsx";
import list from '../../images/list.svg'
import FullMove from "../Movies/FullMove.tsx";
import img from '../../images/movies-towatch/img.png'
import img1 from '../../images/movies-towatch/img_1.png'
import img2 from '../../images/movies-towatch/img_2.png'
import img3 from '../../images/movies-towatch/img_3.png'
import img4 from '../../images/movies-towatch/img_4.png'
import img5 from '../../images/movies-towatch/img_5.png'
import img6 from '../../images/movies-towatch/img_6.png'
import img7 from '../../images/movies-towatch/img_7.png'
import img8 from '../../images/movies-towatch/img_8.png'

const CollectionPage = () => {
    return (
        <div className='window__collection'>
            <MyHeader isCollection={true} isAdd={false} isSearch={false}/>

            <div className='container__collection'>
                <div className='container_rectangle'>
                    <div className='text_collection'>Коллекция</div>
                    <div className='menu'>
                        <div className='select'>
                            <div className='select first'>Буду смотреть</div>
                            <div className='select second'>Просмотрено</div>
                        </div>

                        <img className='select__img' src={list}/>
                    </div>

                    <div className='movies'>
                        <table>
                            <tr>
                                <th>
                                    <FullMove name={"Минари"} img={img} points={6.9}/>
                                </th>
                                <th>
                                    <FullMove name={"Солнцестояние"} img={img1} points={6.6}/>
                                </th>
                                <th>
                                    <FullMove name={"Манк"} img={img2} points={7.1}/>
                                </th>
                                <th>
                                    <FullMove name={"Девушка, пода.."} img={img3} points={6.8}/>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <FullMove name={"Земля кочевни.."} img={img4} points={7.3}/>
                                </th>
                                <th>
                                    <FullMove name={"Отец"} img={img5} points={7.9}/>
                                </th>
                                <th>
                                    <FullMove name={"Еще по одной"} img={img6} points={7.5}/>
                                </th>
                                <th>
                                    <FullMove name={"Душа"} img={img7} points={8.3}/>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <FullMove name={"Годзилла"} img={img8} points={6.9}/>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CollectionPage;