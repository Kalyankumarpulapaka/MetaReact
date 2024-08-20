import "../styles/Section3.css"; // Ensure this file is created for styling

const Section3 = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="press-links">
                        <div className="press-links-item">
                            <h5>Press Links</h5>
                        </div>
                        <div className="press-links-item">
                            <a href="mailto:press@meta.com" className="link-item">press@meta.com</a>
                        </div>
                        <div className="press-links-item">
                            <a href="https://www.twitter.com/MetaNewsroom" target="_blank" rel="noopener noreferrer" className="link-item">Media Gallery</a>
                        </div>
                        <div className="press-links-item">
                            <a href="https://www.twitter.com/MetaNewsroom" target="_blank" rel="noopener noreferrer" className="link-item">@MetaNewsroom</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;
