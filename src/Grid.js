import drums from './Products/drums.jpg'
import electric_guitar from './Products/electric_guitar.jpg'
import acoustic_guitar from './Products/acoustic_guitar.jpg'
function GridHome() {
    return (<div className="container mt-5">
        <div className="row">
            <div className="col-md-4">
                <img
                    className="d-block w-100 "
                    src={electric_guitar}
                    alt="Second slide"
                />
            </div>
            <div className="col-md-4">
                <img
                    className="d-block w-100 "
                    src={drums}
                    alt="Second slide"
                />
            </div>
            <div className="col-md-4">
                <img
                    className="d-block w-100 "
                    src={acoustic_guitar}
                    alt="Second slide"
                />
            </div>

        </div>
    </div>
    );
}
export default GridHome;