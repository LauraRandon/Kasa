import React from 'react';

const RatingScale = (props) => {
    const scaleValue = props.scaleValue

    const range = [1, 2, 3, 4, 5]

    return (
        <div className='housing_page_header_hoster_ratings'>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? 
                    <span key={rangeElem.toString()} className='housing_page_header_hoster_ratings_star'><i class="fas fa-star"></i></span> 
                    : <span key={rangeElem.toString()} className='housing_page_header_hoster_ratings_star housing_page_header_hoster_ratings_star_grey'><i class="fas fa-star"></i></span>
            )}
        </div>
    )
}

export default RatingScale;