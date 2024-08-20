import PropTypes from 'prop-types';
import "../styles/Section.css";

const FullWidthImage = ({ src, alt }) => {
    return (
        <div className='full-width-image'>
            <img src={src} alt={alt} className="img-fluid" />
        </div>
    );
};

FullWidthImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default FullWidthImage;
