import basketImg from '../assets/ecomm-bag-icon.svg';

export default function Item ({image, title, category, price, wasPrice, discount, stars}){
    return(
      <div className="cs-item">
                  <a href="" className="cs-link">
                    <div className="cs-picture-group">
                      <img src={image} className="cs-picture"/>
                      <span className="cs-offer">-{discount}%</span>
                    </div>
                    <div className="cs-details">
                      <span className="cs-category">{category}</span>
                      <h3 className="cs-name">{title}</h3>
                      <div className="cs-actions">
                        <div className="cs-flex">
                          <span className="cs-price">${price} </span>
                          <span className="cs-was-price">${wasPrice}</span>
                          <div className="cs-stars">                          
                          </div>
                        </div>
                        <button className="cs-buy">
                          <img src={basketImg} className="cs-basket" />
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
    );  
}