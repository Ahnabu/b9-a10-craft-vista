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
            {
                arts.map(data => {
                    console.log(data);
                  <Art data={data}></Art>
                })
          }
            
        </div>
    );
};

export default Home;