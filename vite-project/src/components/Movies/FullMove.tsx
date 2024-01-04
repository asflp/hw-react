import './FullMovie.css'

interface propsMovie {
    name: string,
    img: string,
    points: number
}

const FullMove = (props: propsMovie) => {
    return (
        <div className='container__movie'>
            <img src={props.img} className='container'/>
            <div className='points'>{props.points}</div>
            {props.name}
        </div>
    );
};

export default FullMove;