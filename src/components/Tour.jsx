
const Tour = (props) => {
  return (
          <article className="tour-card">
            <div className="tour-img-container">
              <img src={props.img} className="tour-img" alt="" />
              <p className="tour-date">{props.date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{props.title}</h4>
              </div>
              <p>{props.text}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>
                  {props.place}
                </p>
                <p>{props.days} days</p>
                <p>from ${props.price}</p>
              </div>
            </div>
          </article>
  );
}
export default Tour