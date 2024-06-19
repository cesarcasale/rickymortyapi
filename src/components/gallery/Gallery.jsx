export default function Gallery({data}){
    return <div className="row">
        {data.map((item, index) => <div key={index} className="col-3">
            <div className="c-gallery_item">
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name}/>
            <button className="b-btn">Details</button>
            </div>
        </div>)}
    </div>
}