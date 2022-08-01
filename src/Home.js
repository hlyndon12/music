import React from "react";
import HomeCarousel from "./Carousel";
import ImgOverlayExample from "./Categories";
import GridHome from "./Grid"
class Home extends React.Component{
    render(){
        return(
            <div>
                <HomeCarousel/>
                <GridHome/>
                <h1 className="text-center mt-3 text-white-smoke" >
                    Popular Categories
                </h1>
                <ImgOverlayExample/>
            </div>
        );
    }
}
export default Home;