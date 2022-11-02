import CustomerCard from '../../customer-card/customer-card.component';
import Navbar from '../../navbar/navbar-component';

const CustomerSection = () => {
    return (
        <section className="customer-section">
            <h1 className="section-heading">Customers</h1>
            <div className="customer-wrapper">
                <CustomerCard
                    customerText={
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ullam dolore molestiae id officiis debitis iste voluptatum voluptate cupiditate voluptatem ex fuga aperiam vel architecto officia cumque eligendi sit assumenda!'
                    }
                    img={require('../../../images/customer-img-1.jpg')}
                    imgAlt="customer-1"
                    customerName={'Jane Lee'}
                    rating={'fas fa-star-half-alt'}
                />
                <CustomerCard
                    customerText={
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ullam dolore molestiae id officiis debitis iste voluptatum voluptate cupiditate voluptatem ex fuga aperiam vel architecto officia cumque eligendi sit assumenda!'
                    }
                    img={require('../../../images/customer-img-2.jpg')}
                    imgAlt="customer-2"
                    customerName={'Bob Smith'}
                    rating={'fas fa-star'}
                />
                <CustomerCard
                    customerText={
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ullam dolore molestiae id officiis debitis iste voluptatum voluptate cupiditate voluptatem ex fuga aperiam vel architecto officia cumque eligendi sit assumenda!'
                    }
                    img={require('../../../images/customer-img-3.jpg')}
                    imgAlt="customer-3"
                    customerName={'Ann Brown'}
                    rating={'far fa-star'}
                />
            </div>
        </section>
    );
};

export default CustomerSection;
