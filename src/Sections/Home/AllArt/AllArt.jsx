import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import './table.css'
import { Helmet } from "react-helmet";

const AllArt = () => {
    const { state } = useContext(AuthContext)
    const [arts, setArts] = useState([])
    useEffect(() => {
        fetch('https://a10-server-opal.vercel.app/arts')
            .then(res => res.json())
            .then(data => {
                setArts(data)
            })
    }, [state])
    return (
        <div>
            <h1 className="text-center my-2">All Art and Crafts</h1>
            <Helmet>
                <title>CraftVista || All Art</title>
            </Helmet>
            <table className="custom-table">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock Status</th>
                        <th>Rating</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {arts.map(item => (
                        <tr key={item._id}>
                            <td>{item.item_name}</td>
                            <td>{item.subcategory_Name}</td>
                            <td>{item.price}</td>
                            <td>{item.stockStatus}</td>
                            <td>{item.rating}</td>
                            <td><Link to={`/details/${item._id}`}><Button>View Details</Button> </Link>  </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllArt;