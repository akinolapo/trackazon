import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const heroImage = [
    {imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch'},
    {imgUrl: '/assets/images/hero-2.svg', alt: 'smartwatch'},
    {imgUrl: '/assets/images/hero-3.svg', alt: 'smartwatch'},
    {imgUrl: '/assets/images/hero-4.svg', alt: 'smartwatch'},
    {imgUrl: '/assets/images/hero-5.svg', alt: 'smartwatch'},
]

const Herocarousel = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Herocarousel