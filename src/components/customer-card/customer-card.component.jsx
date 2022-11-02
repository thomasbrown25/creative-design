const CustomerCard = ({ customerText, rating, img, imgAlt, customerName }) => {
    return (
        <div className="customer-card">
            <i className="fas fa-quote-left"></i>
            <p className="customer-text">{customerText}</p>
            <div className="customer-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className={rating}></i>
            </div>
            <img src={img} alt={imgAlt} className="customer-img" />
            <h4 className="customer-name">{customerName}</h4>
        </div>
    );
};

export default CustomerCard;
