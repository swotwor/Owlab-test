import style from './NewsItem.module.scss';

const NewsItem = ({item}) => {
    const {time, text} = item;
    
    return (
        <div>
            <p className={style.newsTime}>{time}</p>
            <p className={style.newsText}>{text}</p>
        </div>
    );
};

export default NewsItem;
