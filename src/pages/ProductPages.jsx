import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Order from "../components/Order";

function Products() {
    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState([]);
    const url = "http://localhost:3000";

    useEffect(() => {
        async function onLoaded() {
            try {
                setLoading(true);
                const { data } = await axios.get(`${url}/product`);
                console.log(data);
                setProductData(data);

                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            } catch (error) {
                setLoading(false);
                console.error("Error fetching product data", error);
            }
        }

        onLoaded();
    }, []);

    const navigate = useNavigate();
    const handelBuy = (e, item) => {
        const checkIsLogin = localStorage.getItem("token")
        if (!checkIsLogin) return navigate("/singUp")
        navigate(`/order/${item._id}`);
        console.log(item)
    };

    return (
        <div className="p-4 md:p-6">
            <h1 className="mt-10 text-3xl md:text-5xl mb-6 font-bold text-center capitalize">Products</h1>

            {loading ? (
                <div className="text-center text-lg font-semibold">Loading...</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {productData.map((product) => (
                        <div
                            className="p-4 rounded-lg shadow-md border bg-white flex flex-col items-center"
                            key={product._id}
                        >
                            <img
                                src={product.img}
                                className="w-full max-w-[210px] h-auto object-cover rounded"
                                alt={product.name}
                            />
                            <p className="mt-3 font-black text-lg text-center">{product.name}</p>
                            <p className="text-gray-600 text-center">{product.Description}</p>
                            <p className="font-bold text-[#be7f03]">${product.price}</p>

                                <button
                                    className="mt-2 cursor-pointer bg-[#be7f03] text-white py-2 w-full px-3 rounded capitalize"
                                    onClick={(event) => handelBuy(event, product)}
                                >
                                    Buy Now
                                </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Products;
