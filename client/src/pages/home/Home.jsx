import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <Navbar type="home" />
      <div className="navHed">
        <Header type="home" />
      </div>
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties />
        <MailList />
      </div>
      <div className="footerCont">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
