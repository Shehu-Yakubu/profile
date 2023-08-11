import Hero from '../components/Hero';
import Card from '../components/Card';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Card />
            <SocialMedia />
            {/* <Footer /> */}
        </div>
    )
}

export default Home;
