import React from 'react';
import Banner from '../../components/Banner/Banner';
import homeBanner from '../../assets/img/bannerHome-kasa.webp'

const HomeBanner = () => {
    return(
        <Banner
            title='Chez vous, partout et ailleurs'
            src={homeBanner}
        />
    )
}

export default HomeBanner;