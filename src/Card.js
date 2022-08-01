import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import guitar from "./Images/guitar.jpg"
import yamaha_LL6_ARE from './Products/yamaha_LL6_ARE.webp'
import gibson from "./Products/Gibson_ES-175.png"
import yamaha_fs80c from "./Products/yamaha-fs80c.jpg"
import Yamaha_piano_JUJX_series from './Products/Yamaha_piano_JUJX_series.webp'
import yamaha_cf6 from './Products/yamaha_cf6.jpg'
import yamaha_cf4 from './Products/yamaha_cf4.jpg'
import yamaha_gc2 from './Products/yamaha_gc2.jpg'
import yamaha_pacidier_black from './Products/yamaha_pacifier_black.jpg'
import yamaha_pacidier from './Products/yamaha_pacifier.png'
import yamaha_RSP20 from './Products/yamaha_RSP20.webp'
import yamaha_FGX5 from './Products/yamaha_FGX5.webp'
function ProductCard() {
    return (
        <>
            <div className='container text-white-smoke'>
                <h1 className='text-center' id='acoustic_guitars'>Acoustic Guitars</h1>
                <div class="card-group">
                    <Card style={{ width: '18rem' }} bg='dark' key='Dark' className='mb-3 mx-3'>
                        <Card.Img variant="top" className='carouselimage' src={guitar} />
                        <Card.Body>
                            <Card.Title>Fender fx2300</Card.Title>
                            <Card.Text>
                                Beautiful ambience with wide acoustics
                            </Card.Text>
                            <Button variant="light">Add to cart</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', }} bg='dark' key='Dark' className='mb-3 mx-3'>
                        <Card.Img variant="top" className='carouselimage' src={yamaha_LL6_ARE} />
                        <Card.Body>
                            <Card.Title>yamaha LL6 ARE</Card.Title>
                            <Card.Text>
                            L6 offers full of Yamaha's exclusivities. The solid Engelmann Spruce top is treated with A.R.E.
                            </Card.Text>
                            <Button variant="light">Add to cart</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} bg='dark' key='Dark' className='mb-3 mx-3'>
                        <Card.Img variant="top" className='carouselimage' src={yamaha_fs80c} />
                        <Card.Body>
                            <Card.Title>Yamaha fs80c</Card.Title>
                            <Card.Text>
                                Beautiful ambience with wide acoustics
                            </Card.Text>
                            <Button variant="light">Add to cart</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg='dark' key='Dark' className='mb-3 mx-3'>
                        <Card.Img variant="top" className='carouselimage' src={yamaha_FGX5} />
                        <Card.Body>
                            <Card.Title>yamaha FGX5</Card.Title>
                            <Card.Text>
                            1960s aesthetics and modern craft, refined over 50+ years of Yamaha guitar development
                            </Card.Text>
                            <Button variant="light">Add to cart</Button>
                        </Card.Body>
                    </Card>

                </div>
                <h1 className='text-center' id='pianos'>Pianos</h1>
                <div class="card-group">
                    <Card style={{ width: '18rem' }} bg='dark' key='Dark' className='mb-3 mx-3'>
                        <Card.Img variant="top" className='carouselimage' src={Yamaha_piano_JUJX_series} />
                        <Card.Body>
                            <Card.Title>Yamaha JU/JX series</Card.Title>
                            <Card.Text>
                            The compact JU/JX series represents a distillation of Yamaha’s entire upright piano design philosophy
                            </Card.Text>
                            <Button variant="light">Add to cart</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', }} bg='dark' key='Dark' className='mb-3 mx-3'>
                        <Card.Img variant="top" className='carouselimage' src={yamaha_cf6} />
                        <Card.Body>
                            <Card.Title>Yamaha cf6</Card.Title>
                            <Card.Text>
                            The choice of mid-sized concert halls. Concert grand DNA, sound and resonance to make every performance bigger than the stage.
                            </Card.Text>
                            <Button variant="light">Add to cart</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} bg='dark' key='Dark' className='mb-3 mx-3'>
                        <Card.Img variant="top" className='carouselimage' src={yamaha_cf4} />
                        <Card.Body>
                            <Card.Title>Yamaha cf4</Card.Title>
                            <Card.Text>
                            Big tone for intimate venues. There are no small performances, only small stages. A concert grand piano with sound that transcends its size.
                            </Card.Text>
                            <Button variant="light">Add to cart</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg='dark' key='Dark' className='mb-3 mx-3'>
                        <Card.Img variant="top" className='carouselimage' src={yamaha_gc2} />
                        <Card.Body>
                            <Card.Title>Yamaha GC2</Card.Title>
                            <Card.Text>
                            The larger volume and an affordable price of the GC2 make this a very popular size instrument. With a superb sound and excellent resonance, the GC2 is a delight to play.
                            </Card.Text>
                            <Button variant="light">Add to cart</Button>
                        </Card.Body>
                    </Card>

                </div>
                <h1 className='text-center' id='electric_guitars'>Electric guitars</h1>
                <div class="card-group">
                    <Card style={{ width: '18rem' }} bg='dark' key='Dark' className='mb-3 mx-3'>
                        <Card.Img variant="top" className='carouselimage' src={yamaha_pacidier_black} />
                        <Card.Body>
                            <Card.Title>Yamaha pacifier black</Card.Title>
                            <Card.Text>
                            The compact JU/JX series represents a distillation of Yamaha’s entire upright piano design philosophy
                            </Card.Text>
                            <Button variant="light">Add to cart</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', }} bg='dark' key='Dark' className='mb-3 mx-3'>
                        <Card.Img variant="top" className='carouselimage' src={yamaha_pacidier} />
                        <Card.Body>
                            <Card.Title>Yamaha Pacifier</Card.Title>
                            <Card.Text>
                            The choice of mid-sized concert halls. Concert grand DNA, sound and resonance to make every performance bigger than the stage.
                            </Card.Text>
                            <Button variant="light">Add to cart</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} bg='dark' key='Dark' className='mb-3 mx-3'>
                        <Card.Img variant="top" className='carouselimage' src={gibson} />
                        <Card.Body>
                            <Card.Title>Gibson</Card.Title>
                            <Card.Text>
                            Big tone for intimate venues. There are no small performances, only small stages. A concert grand piano with sound that transcends its size.
                            </Card.Text>
                            <Button variant="light">Add to cart</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg='dark' key='Dark' className='mb-3 mx-3'>
                        <Card.Img variant="top" className='carouselimage' src={yamaha_RSP20} />
                        <Card.Body>
                            <Card.Title>yamaha RSP20</Card.Title>
                            <Card.Text>
                            The Japanese-made RSP20 features carbon reinforcement in the neck and chambered body, dual humbucking pickups, 5-way switching, and a Focus Switch, providing exceptional versatility.
                            </Card.Text>
                            <Button variant="light">Add to cart</Button>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </>


    );
}

export default ProductCard;