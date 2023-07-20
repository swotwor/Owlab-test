import style from './News.module.scss';
import NewsItem from './components/newsItem/NewsItem';
import { newsState } from '../../state/news';

const News = () => {
    
    return (
        <div className={style.news}>
            <h1 className={style.title}>Новости</h1>
            {newsState.map(newsItem => <NewsItem key={newsItem.id} item={newsItem}/>)}
        </div>
    );
};

export default News;
