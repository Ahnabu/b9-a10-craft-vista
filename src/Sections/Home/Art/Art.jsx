/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
   
} from "@material-tailwind/react";

import { IoMdPricetag } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
const Art = ({ art }) => {
    const { image_url,
        item_name,
        subcategory_Name,
        short_description,
        price,
        rating,
        customization,
        processing_time,
        stockStatus,
        User_Email,
        User_Name, } = art
   
   
    return (
        <div className="mx-auto">

            <Card className="max-w-[24rem] overflow-hidden ">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <div
                        // src={`${image_url}`}
                        style={{ backgroundImage: `url(${image_url})` }}
                        alt=""
                        className="bg-cover object-cover h-[240px] "
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h4" color="blue-gray">
                        {item_name}
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-3 font-normal">
                        {subcategory_Name}
                    </Typography>
                </CardBody>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div>
                            <IoMdPricetag /> {price}
                        </div>
                        <div>
                            {stockStatus}
                        </div>
                    
                    </div>
                    <Typography className="font-normal">
                        <FaRegStar /> {rating}
                    </Typography>
                </CardFooter>
            </Card>

        </div>
    );
};

export default Art;