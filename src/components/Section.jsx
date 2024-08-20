import { Container, Row, Col } from 'react-bootstrap';
import "../styles/Section.css";
import videoSrc from "../assets/Recording 2024-08-20 033234.mp4";
import threadImg1 from "../assets/thread1.jpg";
import threadImg2 from "../assets/thread2.jpg";
import threadImg3 from "../assets/thread3.jpg";
import mark from "../assets/mark.jpg";
import FullWidthImage from '../components/FullWidthImage'; // Import the new component

const Section = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div className='ro2'>
                        <h1>Newsroom</h1>
                    </div>
                    <div className='ro2 top-stories'>
                        <h4>Top Stories</h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <div className="column-content">
                        <video width="100%" height="auto" autoPlay loop muted>
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        <span className="marked-h5">Meta</span>
                        <h3 style={{ marginTop: '4%' }}>Meta AI Is Now Multilingual, More Creative and Smarter</h3>
                        <p>
                            We’re expanding access to Meta AI, adding new creative tools and giving you the option to use our most advanced open-source model inside Meta AI for tough math and coding questions.
                        </p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="column-content">
                        <div className='thread1'>
                            <h4>New Threads Features for Creators and Businesses</h4>
                            <p>We’re introducing new web features to help you understand how your Threads content is performing and simplify the planning process. August 15, 2024</p>
                        </div>
                        <div className='thread1'>
                            <img src={threadImg1} alt="New Threads Features" />
                        </div>
                    </div>

                    <div className="column-content">
                        <div className='thread1'>
                            <h4>Encouraging Impactful Uses of AI Through Llama Impact Grants Program</h4>
                            <p>Applications are open for the Llama 3.1 Impact Grants program, designed to support the most compelling uses of our open source AI model for societal benefit. August 5, 2024</p>
                        </div>
                        <div className='thread1'>
                            <img src={threadImg2} alt="Llama Impact Grants Program" />
                        </div>
                    </div>

                    <div className="column-content">
                        <div className='thread1'>
                            <h4>Create Your Own Custom AI With AI Studio</h4>
                            <p>We’re rolling out AI Studio, a place for people to create, share and discover AIs to chat with – no tech skills required. July 29, 2024</p>
                        </div>
                        <div className='thread1'>
                            <img src={threadImg3} alt="AI Studio" />
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Add the FullWidthImage component here */}
            <Row>
                <Col md={12}>
                    <FullWidthImage 
                        src1={mark} 
                        alt1="Mark Image" />
                </Col>
            </Row>
        </Container>
    );
};

export default Section;
