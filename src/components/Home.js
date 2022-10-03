import React, { useState } from 'react';

import Slider from 'react-slick';
import { Carousel, Button } from 'react-bootstrap';

import banner from '../assets/img/banner.jpg';

import '../assets/scss/home.scss';

const Home = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
  
    return (
        <div className="w-100">
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner} alt="First slide" />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner} alt="Second slide" />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner} alt="Third slide" />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="sliderWrp">
                <h1>ipsum dolor sit amet</h1>

                <Slider className="sliderNav"
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    <div>
                        <Button variant="primary">Slick Button 1</Button>
                    </div>
                    <div>
                        <Button variant="primary">Slick Button 2</Button>
                    </div>
                    <div>
                        <Button variant="primary">Slick Button 3</Button>
                    </div>
                    <div>
                        <Button variant="primary">Slick Button 4</Button>
                    </div>
                </Slider>
                <Slider className="sliderNavFor"
                    asNavFor={nav2} 
                    ref={(slider1) => setNav1(slider1)}
                    fade={true}
                >
                    <div>
                        <p>
                            consectetur adipiscing elit. Ut fermentum leo ante, ac finibus erat consectetur non. 
                            Proin quis arcu varius, blandit erat in, maximus ligula. Etiam fringilla scelerisque 
                            erat, a dignissim purus laoreet at. Ut id ipsum urna. Sed dictum, ligula eu accumsan 
                            ullamcorper, est est molestie magna, eget gravida libero libero id nulla. Phasellus 
                            vitae ante nunc. Nam tempor laoreet ipsum, nec eleifend urna consequat ac. Mau
                        </p>
                    </div>
                    <div>
                        <p>
                            Vestibulum pharetra ligula ac eros hendrerit rhoncus eu eu nibh. Proin tincidunt est nec 
                            pharetra luctus. Sed accumsan dui nec felis interdum, sit amet accumsan tellus fermentum. 
                            Fusce eget condimentum mauris, ac pretium ligula. Integer sit amet aliquet eros. Sed nec 
                            dolor at ipsum tempus euismod non ut libero. Curabitur imperdiet fermentum lorem vestibulum 
                            luctus. Phasellus tristique, justo finibus iaculis lacinia, libero orci sagittis neque, sit 
                            amet volutpat tortor nisi sit amet sapien. Praesent mattis augue enim. Mauris fringilla diam 
                            felis, quis cursus libero finibus non.
                        </p>
                    </div>
                    <div>
                        <p>
                            hasellus sagittis nunc elit, eget pharetra lectus rutrum eget. Suspendisse congue egestas 
                            nisl vel euismod. Integer ultricies ligula mattis egestas eleifend. Quisque bibendum mauris 
                            sit amet lacus facilisis, sed tincidunt leo tempor. In condimentum tempor pharetra. 
                            Vestibulum a
                        </p>
                    </div>
                    <div>
                        <p>
                            Donec sit amet arcu eget odio fringilla ornare. Donec volutpat tellus ac neque dapibus, 
                            eget consequat ex bibendum. In purus sapien, bibendum accumsan tincidunt ac, condimentum 
                            eu arcu. Curabitur et purus at quam gravida placerat et in libero. Vivamus feugiat 
                            libero ut nulla maximus, eu convallis neque viverra
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export { Home };
