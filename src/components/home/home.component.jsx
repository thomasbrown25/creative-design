import CustomerSection from '../sections/customer-section/customer-section.component';
import LandingSection from '../sections/landing-section/landing-section.component';
import TeamSection from '../sections/team-section/team-section.component';

const Home = () => {
    return (
        <div className="container">
            <LandingSection />
            <CustomerSection />
            <TeamSection />
        </div>
    );
};

export default Home;
