import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const heroImage = [
    {imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch'},
    {imgUrl: '/assets/images/hero-2.svg', alt: 'bag'},
    {imgUrl: '/assets/images/hero-3.svg', alt: 'lamp'},
    {imgUrl: '/assets/images/hero-4.svg', alt: 'air fryer'},
    {imgUrl: '/assets/images/hero-5.svg', alt: 'chair'},
]

const Herocarousel = () => {
    return (
        <div>
            <Carousel>
                
            </Carousel>
        </div>
    )
}

export default Herocarousel