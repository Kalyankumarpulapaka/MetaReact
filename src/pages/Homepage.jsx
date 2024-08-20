import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import FullWidthImage from "../components/FullWidthImage";
import mark from "../assets/mark.jpg"; // Make sure to import the image
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Section />
            <FullWidthImage src={mark} alt="Mark Image" /> {/* Pass the correct props */}
            <Section2 />
            <Section3/>
            <Footer />
        </>
    );
};

export default Homepage;
