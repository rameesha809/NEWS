import React, { useEffect, useState } from 'react';
import ComponentItem from './ComponentItem.js';
import Spinner from './Spinner.js';
import InfiniteScroll from 'react-infinite-scroll-component';

const ComponentContainer = (props) => {
  const [news, setNews] = useState([]);
  const [pagesize, setPagesize] = useState(10);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState(props.lang || "en");
  console.log(lang);
  let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${props.api}&language=${lang}&page=${page}&pageSize=${pagesize}`;
  console.log(url)
  useEffect(() => {
    setLang(props.lang);
  }, [props.lang]);

  const fetchNews = async (pageNumber = page) => {
    try {
      props.setProgress(10);
      setLoading(true);
      let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${props.api}&language=${lang}&page=${page}&pageSize=${pagesize}`;
      let response = await fetch(url);
      props.setProgress(30);

      let parsedData = await response.json();
      props.setProgress(50);

      setNews((prevNews) => pageNumber === 1 ? parsedData.articles : [...prevNews, ...parsedData.articles]);
      setTotal(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    setNews([])
    setPage(1);
    fetchNews(1); 

  }, [lang]);

  if (loading) {
    return <div>Loading...
      <Spinner />
    </div>;

  }
  const fetchMoreData = async () => {
    setTimeout(async() => {try {
      const nextPage = page + 1;
      let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${props.api}&language=${lang}&page=${nextPage}&pageSize=${pagesize}`;
      let response = await fetch(url);
      let parsedData = await response.json();
      setNews(news.concat(parsedData.articles));
      setTotal(parsedData.totalResults);
      setPage(nextPage);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  },1500)
  };

  return (
    <>
      <InfiniteScroll style={{marginTop:"100px"}}
        dataLength={news.length}
        next={fetchMoreData}
        hasMore={news.length < total}
        loader={<Spinner />}
      >
        <div className='row' style={{display:"flex", alignItems:"center", justifyContent:"center", padding: "0 15px", margin: "0 auto"}}>
          {console.log(news)}
          {news.length > 0 ? <ComponentItem news={news} /> : <div>No news available</div>}
       </div>
      </InfiniteScroll>
    </>
  );
}

export default ComponentContainer;
