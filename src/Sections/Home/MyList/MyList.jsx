import { useContext, useEffect, useState } from "react";

import MyAll from "./MyAll/MyAll";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const MyList = () => {
    const { state,user } = useContext(AuthContext)
    const [arts, setArts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myArt/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setArts(data)
            })
    }, [state, user])
  
    return (
        <div>
            <h2 className="mt-6 mb-4 text-center text-3xl font-bold">My Art & Crafts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               
               
                {
                    arts.map(art => {
                        return <MyAll key={art._id} art={art}></MyAll>
                    })
                }
            </div>
        </div>
       
    );
};

export default MyList;