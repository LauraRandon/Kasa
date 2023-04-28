import React from 'react';
import Banner from '../../components/Banner/Banner';
import bannerAbout from '../../assets/img/bannerAbout-kasa.webp'

const BannerAbout = () => {
    return(
        <Banner
            title='À propos'
            src={bannerAbout}
        />
    )
}

export default BannerAbout;