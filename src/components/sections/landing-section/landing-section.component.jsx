import Navbar from '../../navbar/navbar-component';

const LandingSection = () => {
    return (
        <section className="landing-section">
            <Navbar />
            <div className="floating-bg"></div>
            <h1 className="landing-section-heading">Creative Design</h1>
            <div className="logo">
                <i className="fas fa-bezier-curve"></i>
            </div>
        </section>
    );
};

export default LandingSection;
