import { useDispatch } from 'react-redux';
import { addLater } from './Laterslice.js';
export default function ComponentItem({ news }) {
  const dispatch = useDispatch();

  const later = (item, index) => {
    dispatch(addLater({ item, index }));
  };
  return (
    <>
      {news.map((item, index) => (

        <div className="col s4" key={`${item.url}-${index}`} style={{ display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center", textAlign: "center", maxWidth: "20rem" }}>
          <div className="card medium" >
            <div className="card-image">
              <img alt="Card" src={item.urlToImage} />

              <h6 className="News">{item.title}</h6>
            </div>
            <div className="card-text">
              <p class="card-text"><small class="text-muted">Last updated on {new Date(item.publishedAt).toUTCString()}</small></p>
            </div>

            <p>Author: {item.author}</p>
            <div className="card-action" style={{ backgroundColor: "#363434", alignItems: "center", justifyContent: "center", paddingBottom: "5px", paddingTop: "5px", display: "flex", flexWrap: "wrap" }}>
              <a className="btn-floating waves-effect waves-light red"><i className="material-icons" onClick={()=>later(item,index)}>add</i></a>
              <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: "white", paddingLeft: "15px" }}>See Details...</a>
            </div>
          </div>
        </div>
      ))}
                {/* {showlater? <Later laters={laterData} /> : <div>No news available</div>} */}

    </>
  )
}
