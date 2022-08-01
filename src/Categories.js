import Card from 'react-bootstrap/Card';
import electric_guitar from './Images/guitar_bass.jpg'
import piano from './Images/Piano.jpg'
import drums from './Images/drums.jpg'
import keyboard from './Images/keyboard.jpg'
import sitar from './Images/sitar.jpg'
import saxophone from './Images/saxophone.jpg'
function ImgOverlayExample() {
    return (
        <div className='container'>
            <div className='row mb-5'>
                <div className='col-md-4'>
                    <a href='/products#acoustic_guitars'>
                    <Card className="bg-dark text-white">
                        <Card.Img src={electric_guitar} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className='text-center'>Guitars & Bass</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    </a>
                </div>
                <div className='col-md-4'>
                <a href='/products#pianos'>
                    <Card className="bg-dark text-white">
                        <Card.Img src={piano} alt="Card image"/>
                        <Card.ImgOverlay>
                            <Card.Title className='text-center'>Piano</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </a>
                </div>
                <div className='col-md-4'>

                    <Card className="bg-dark text-white">
                        <Card.Img src={drums} alt="Card image"/>
                        <Card.ImgOverlay>
                            <Card.Title className='text-center'>Drums</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>

            </div>
            <div className='row mt-5'>
                <div className='col-md-4'>
                    <Card className="bg-dark text-white">
                        <Card.Img src={keyboard} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className='text-center'>Keyboard and DMI</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <div className='col-md-4'>
                    <Card className="bg-dark text-white ">
                        <Card.Img src={sitar} alt="Card image"/>
                        <Card.ImgOverlay>
                            <Card.Title className='text-center'>Indian instruments</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <div className='col-md-4'>
                    <Card className="bg-dark text-white">
                        <Card.Img src={saxophone} alt="Card image"/>
                        <Card.ImgOverlay>
                            <Card.Title className='text-center'>Wind Instruments</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>

            </div>
        </div>

    );
}

export default ImgOverlayExample;