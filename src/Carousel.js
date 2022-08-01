import Carousel from 'react-bootstrap/Carousel';
import guitar1 from './Images/guitar1.jpg';
import guitar2 from './Images/guitar2.jpg';
import guitar3 from './Images/guitar3.jpg';
function HomeCarousel() {
  return (
    <div className='container text-white-smoke'>
     <div class="row mt-5">
     <div class="col">
     <Carousel variant="dark" >
      <Carousel.Item>
        <img
          className="d-block w-100 carouselimage"
          src={guitar1}
          alt="First slide"
        />
        <Carousel.Caption className='text-white-smoke'>
          <h5>Black Rose</h5>
          <p>Pretty sound with ambiatic acoustics</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselimage"
          src={guitar2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Golden Forest</h5>
          <p>Low action maple wood neck acoustic guitar</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselimage"
          src={guitar3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>White Rose</h5>
          <p>
            Low action maple wood neck acoustic guitar
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div> 

 </div>

</div>
    

  );
}

export default HomeCarousel;