import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../styles/Section2.css";

const Section2 = () => {
    const [newsData, setNewsData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [visibleItems, setVisibleItems] = useState(5); // Number of items to show initially
    const [hasMoreItems, setHasMoreItems] = useState(true); // Flag to control "See More" button

    useEffect(() => {
        fetch('/news_data.json')  // Replace with your JSON file path
            .then(response => response.json())
            .then(data => {
                setNewsData(data);
                setHasMoreItems(data.length > 5); // Determine if there are more items to load
            });
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setVisibleItems(5); // Reset visible items when category changes
    };

    const handleLoadMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 5);
    };

    const filteredNewsData = selectedCategory === 'All'
        ? newsData
        : newsData.filter(item => item.Category === selectedCategory);

    const displayedNewsData = filteredNewsData.slice(0, visibleItems);

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <div className="sidebar-section">
                        <h5>Recent News</h5>
                        <ul>
                            <li><a onClick={() => handleCategoryClick('All')}>All Stories</a></li>
                        </ul>
                    </div>

                    <div className="sidebar-section">
                        <h5>Categories</h5>
                        <ul>
                            <li><a onClick={() => handleCategoryClick('Facebook')}>Facebook</a></li>
                            <li><a onClick={() => handleCategoryClick('Messenger')}>Messenger</a></li>
                            <li><a onClick={() => handleCategoryClick('Instagram')}>Instagram</a></li>
                            <li><a onClick={() => handleCategoryClick('WhatsApp')}>WhatsApp</a></li>
                            <li><a onClick={() => handleCategoryClick('Threads')}>Threads</a></li>
                            <li><a onClick={() => handleCategoryClick('Meta Quest')}>Meta Quest</a></li>
                            <li><a onClick={() => handleCategoryClick('Workplace')}>Workplace</a></li>
                        </ul>
                    </div>

                    <div className="sidebar-section">
                        <h5>Topics</h5>
                        <ul>
                            <li><a onClick={() => handleCategoryClick('Company News')}>Company News</a></li>
                            <li><a onClick={() => handleCategoryClick('Technology and Innovation')}>Technology and Innovation</a></li>
                            <li><a onClick={() => handleCategoryClick('Data and Privacy')}>Data and Privacy</a></li>
                            <li><a onClick={() => handleCategoryClick('Safety and Expression')}>Safety and Expression</a></li>
                            <li><a onClick={() => handleCategoryClick('Combating Misinformation')}>Combating Misinformation</a></li>
                            <li><a onClick={() => handleCategoryClick('Economic Opportunity')}>Economic Opportunity</a></li>
                            <li><a onClick={() => handleCategoryClick('Election Integrity')}>Election Integrity</a></li>
                            <li><a onClick={() => handleCategoryClick('Strengthening Communities')}>Strengthening Communities</a></li>
                            <li><a onClick={() => handleCategoryClick('Diversity and Inclusion')}>Diversity and Inclusion</a></li>
                        </ul>
                    </div>
                </Col>
                <Col md={9}>
                    <div className="news-cards">
                        {displayedNewsData.length > 0 ? (
                            displayedNewsData.map((item, index) => (
                                <div className="news-card" key={index}>
                                    <div className="news-card-content">
                                        <div className="news-card-category">{item.Category}</div>
                                        <span className="news-card-title">{item.Title}</span>
                                        <p className="news-card-description">{item.Description}</p>
                                        <small className="news-card-date">{item.Date}</small>
                                    </div>
                                    <div className="news-card-media">
                                        {item.MediaType === 'image' && <img src={item.MediaURL} alt={item.Title} />}
                                        {item.MediaType === 'video' && (
                                            <video autoPlay loop muted playsInline>
                                                <source src={item.MediaURL} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No news available</p>
                        )}
                    </div>
                    {hasMoreItems && filteredNewsData.length > visibleItems && (
                        <Button variant="primary" className='pown' onClick={handleLoadMore}>See More</Button>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Section2;
