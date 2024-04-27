import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Slider from "../Header/Slider";
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
        
        <div>
            <Slider></Slider>
            {
                arts.length
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-around gap-5 text-center">
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