import { Container, Row, Col } from 'react-bootstrap';
import "../styles/Section2.css";
import secImg1 from '../assets/sec2one.jpg';
import secVid1 from '../assets/sec2two.mp4';
import secImg2 from '../assets/sec2three.jpg';
import secImg3 from '../assets/four.jpg';
import secVid2 from '../assets/sec2five.mp4';

const Section2 = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <div className="sidebar-section">
                        <h5>Recent News</h5>
                        <ul>
                            <li><a href="#">All Stories</a></li>
                        </ul>
                    </div>

                    <div className="sidebar-section">
                        <h5>Categories</h5>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Messenger</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">WhatsApp</a></li>
                            <li><a href="#">Threads</a></li>
                            <li><a href="#">Meta Quest</a></li>
                            <li><a href="#">Workplace</a></li>
                        </ul>
                    </div>

                    <div className="sidebar-section">
                        <h5>Topics</h5>
                        <ul>
                            <li><a href="#">Company News</a></li>
                            <li><a href="#">Technology and Innovation</a></li>
                            <li><a href="#">Data and Privacy</a></li>
                            <li><a href="#">Safety and Expression</a></li>
                            <li><a href="#">Combating Misinformation</a></li>
                            <li><a href="#">Economic Opportunity</a></li>
                            <li><a href="#">Election Integrity</a></li>
                            <li><a href="#">Strengthening Communities</a></li>
                            <li><a href="#">Diversity and Inclusion</a></li>
                        </ul>
                    </div>
                </Col>
                <Col md={9}>
                    <div className="news-cards">
                        <div className="news-card">
                            <div className="news-content">
                            <span className="marked-h5">Facebook</span>
                                <h4>Review of Fact-Checking Label and Meta AI Responses</h4>
                                <p>There were two noteworthy issues that occurred on our platforms in the past week which we investigated and have addressed.</p>
                                <p><small>July 30, 2024</small></p>
                            </div>
                            <div className="news-media">
                                <img src={secImg1} alt="Fact-Checking Label" className="news-img" />
                            </div>
                        </div>

                        <div className="news-card">
                            <div className="news-content">
                            <span className="marked-h5">Facebook</span>
                                <h4>Our New AI Model Can Segment Anything – Even Video</h4>
                                <p>We’re introducing Segment Anything Model 2, the first unified model that can identify which pixels belong to a target object in an image or video.</p>
                                <p><small>July 29, 2024</small></p>
                            </div>
                            <div className="news-media">
                                <video autoPlay loop muted className="news-video">
                                    <source src={secVid1} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                        <div className="news-card">
                            <div className="news-content">
                            <span className="marked-h5">Facebook</span>
                                <h4>Combating Financial Sextortion Scams From Nigeria</h4>
                                <p>We’ve removed around 63,000 accounts in Nigeria attempting to target people with financial sextortion scams, including a coordinated network of around 2,500 accounts.</p>
                                <p><small>July 24, 2024</small></p>
                            </div>
                            <div className="news-media">
                                <img src={secImg2} alt="Financial Sextortion Scams" className="news-img" />
                            </div>
                        </div>

                        <div className="news-card">
                            <div className="news-content">
                            <span className="marked-h5">Facebook</span>
                                <h4>Building Accessibility Into Our Mixed Reality Products</h4>
                                <p>We recently partnered with people with disabilities and disability advocates to integrate accessibility into our mixed reality technology.</p>
                                <p><small>July 16, 2024</small></p>
                            </div>
                            <div className="news-media">
                                <img src={secImg3} alt="Accessibility in Mixed Reality" className="news-img" />
                            </div>
                        </div>

                        <div className="news-card">
                            <div className="news-content">
                            <span className="marked-h5">Facebook</span>
                                <h4>What Is the Fediverse?</h4>
                                <p>The fediverse is a global social network of interconnected servers that allows people to communicate across different platforms.</p>
                                <p><small>June 25, 2024</small></p>
                            </div>
                            <div className="news-media">
                                <video autoPlay loop muted className="news-video">
                                    <source src={secVid2} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="See More News">
                        <button className="see-more-button">
                            See More <span className="caret">&#9660;</span>
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Section2;
