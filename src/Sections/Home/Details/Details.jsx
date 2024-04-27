import { useLoaderData } from "react-router-dom";


const Details = () => {
    const art = useLoaderData();
    console.log(art);
    return (
        <div>
            {
                art.item_name
            }
        </div>
    );
};

export default Details;