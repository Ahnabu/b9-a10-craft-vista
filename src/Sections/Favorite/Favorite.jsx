/* eslint-disable react/prop-types */


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useContext, useEffect, useState } from "react"; 


import FavoriteCard from './FavoriteCard/FavoriteCard';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
// ..
AOS.init();
const Favorite = () => {
    const { getLoved } = useContext(AuthContext)
    const [arts, setArts] = useState([])
    const loved = getLoved()

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/arts');
            
            const data = await response.json();
           
            const exist = data.filter(item => loved.includes(item._id));
          
            if (exist) {
                setArts(exist)
            }

        };
        fetchData();
    }, [])







    return (

        <div className='mt-4'>
            <h1 className='text-3xl text-center my-3'> Your Favorite</h1>
            {
                arts.map(art => <FavoriteCard key={art._id} art={art}></FavoriteCard>)|| <h1>Add to favorite to see here</h1>
            }


        </div>

    );
};

export default Favorite;