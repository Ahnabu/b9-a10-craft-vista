import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Slider from "../Header/Slider/Slider";
import Art from "./Art/Art";





const Home = () => {
  const{state}=useContext(AuthContext)
    const [arts, setArts] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/arts')
            .then(res => res.json())
            .then(data => {
            setArts(data)
        })
    }, [state])
 
    return (
        
        <div className="h-full">
            <Slider></Slider>
            <h1 className="text-center my-3">Art and Crafts</h1>
            <p className="text-center">Art and craft, though sometimes used interchangeably, differ slightly. Art focuses on expressing ideas and emotions, while crafts prioritize creating functional or decorative objects. Both involve creativity and skill, using a wide range of materials like paint, clay, fabric, or even recycled items!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-around gap-5 text-center mt-6">
                {
                    arts.map(art => {
                       
                        return (<Art art={art} key={art._id}></Art>)
                    })
                }
            </div>
           
            
        </div>
    );
};

export default Home;