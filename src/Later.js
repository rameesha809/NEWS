import { useDispatch, useSelector } from 'react-redux';
import { delLater } from './Laterslice.js';

export default function Later() {
    const dispatch = useDispatch();
    console.log("here in later")
  const laters = useSelector((state) => state.later);
   if (laters.length===0) return <div style={{display:"flex", alignItems:"center", justifyContent:"center", padding: "0 15px", margin: "0 auto", marginTop:"100px"}}>No news selected</div>;

 const handleDelete = (index) =>{
    dispatch(delLater(index)); 
 }

  return (
      <div>
       <div className='row' style={{display:"flex", alignItems:"center", justifyContent:"center", padding: "0 15px", margin: "0 auto", marginTop:"100px"}}>

        {laters.map(({ item }, index) => (
        <div className="col s4" key={`${item.url}-${index}`} style={{ display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center", textAlign: "center", maxWidth: "20rem" }}>
          <div className="card medium">
            <div className="card-image">
              <img alt="Card" src={item.urlToImage} />
              <h6 className="News">{item.title}</h6>
            </div>
            <div className="card-text">
              <p className="card-text"><small className="text-muted">Last updated on {new Date(item.publishedAt).toUTCString()}</small></p>
            </div>
            <p>Author: {item.author}</p>
            <div className="card-action" style={{ backgroundColor: "#363434", alignItems: "center", justifyContent: "center", paddingBottom: "5px", paddingTop: "5px", display: "flex", flexWrap: "wrap" }}>
              <a className="btn-floating waves-effect waves-light red"><i className="material-icons" onClick={()=>handleDelete(index)}>delete</i></a>
              <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: "white", paddingLeft: "15px" }}>See Details...</a>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
