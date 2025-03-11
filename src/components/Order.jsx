import axios from "axios"
import { useEffect, useState } from "react"
import { RotatingLines } from "react-loader-spinner"
import { Navigate, useParams } from "react-router"

function Order() {
    const url = "http://localhost:3000"
    const [qty, setQty]=useState(1)    
    const [product, setProduct] = useState()
    const [paymentNumber, setPaymentNumber] = useState("")
    const [loading, setLoading]=useState(false)



    const { id } = useParams()
    console.log(id)
    useEffect(() => {
       
    //     function checkIsLogin() {
    // const token = localStorage.getItem("token");
    // if (!token) {
    //     window.location.href = "/login";
    //         }
            
// }

        
        async function getProduct() {
            try {
                const { data } = await axios.get(url + '/product/' + id)
                console.log(data)
                setProduct(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    }, [id])

    const handelQty = (type) => {
        const change =type === "increase" ? qty + 1 : Math.max(1, qty - 1)
        setQty(change)
    }

    const totalAmount = product?.price * qty

   
    // const waafiPay = async () => {
    //     try {
    //         // Ensure all required fields are present
    //         if (!product?._id || !paymentNumber || !totalAmount || !qty) {
    //             console.error("Missing payment details!");
    //             return;
    //         }

    //         const orderData = {
    //             productId: product._id,  // ✅ Fix: Ensure productId is included
    //             accountNo: paymentNumber,
    //             amount: totalAmount,
    //             Qty: qty,
    //             price: product.price,  // ✅ Fix: Include price
    //             totalAmount: totalAmount, // ✅ Fix: Explicitly include total amount
    //             // paymentMethod: "cash",  // ✅ Optional: Specify a payment method
    //         };

    //         console.log("Sending payment request...", orderData);

    //         const { data } = await axios.post(`${url}/order`, orderData);
    //         console.log("Payment Successful:", data);
    //     } catch (error) {
    //         console.error("Payment Failed:", error.response?.data || error.message);
    //     }
    // };



    const waafiPay = async () => {
        const productData = {
            accountNo: paymentNumber,  
            amount: totalAmount,  
            Qty: qty,
            productId: id,
            
        };

        try {
            setLoading(true)
            const { data } = await axios.post(`${url}/order`, productData);
             const headers=  {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token"),
            };
            setLoading(false)
            console.log("Order Data:", data);
        } catch (error) {
            console.log("Error making request:", error);
        }
    };



    
    // const waafiPay =async () => {
    //     // alert("called")
    //     const productData =  {
    //         accountNo: paymentNumber,
    //         amount: totalAmount,
    //         qty,
    //             productId:id
    //     }   
    //     const { data } = await axios.post(`${url}/order`, productData);        console.log("called ", data)
    //     console.log("productData", productData)
    // }

    return (
        <>
            

            <div className="flex flex-col md:flex-row justify-center mt-19 px-4 md:px-0">
                <div className="flex flex-col md:flex-row justify-between w-full md:w-90 shadow-lg p-6 md:p-9 gap-7">
                    {/* Product Details */}
                    <div className="w-full md:w-1/2">
                        <h3 className="font-bold text-2xl">Your Cart</h3>
                        <p>{product?.name}</p>
                        <strong>{product?.price}$</strong> <span className="font-thin">each</span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => handelQty("decrease")}
                            className="bg-gray-200 px-4 py-2 text-2xl"
                        >-</button>
                        <p className="text-2xl">{qty}</p>
                        <button
                            onClick={() => handelQty("increase")}
                            className="bg-gray-200 px-4 py-2 text-2xl"
                        >+</button>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="w-full md:w-auto p-6 md:p-9 shadow-lg flex flex-col">
                    <h3 className="font-bold text-lg">Order Summary</h3>

                    {/* Total Amount */}
                    <div className="flex justify-between items-center my-3">
                        <span className="font-black">Total:</span>
                        <h2 className="font-black">{totalAmount}$</h2>
                    </div>

                    {/* Phone Input */}
                    <label htmlFor="phone" className="my-3 text-sm">Enter your phone</label>
                    <input
                        id="phone"
                        type="number"
                        placeholder="Enter your phone"
                        value={paymentNumber}
                        onChange={(e) => setPaymentNumber(e.target.value)}
                        className="border-2 border-[#be7f03] py-2 px-4 rounded-full w-full"
                    />

                    {/* Pay Button */}
                    <button
                        className="bg-[#be7f03] w-full py-3 rounded-full mt-5 text-white"
                        onClick={waafiPay}
                    >
                        {loading ? (
                            <div className="flex justify-center">
                                <RotatingLines
                                    visible={true}
                                    height="36"
                                    width="36"
                                    color="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    ariaLabel="rotating-lines-loading"
                                />
                            </div>
                        ) : (
                            <>Pay Now</>
                        )}
                    </button>
                </div>
            </div>

            

            {/* <button onClick={handelCart}>0</button> */}
            {/* <div className="flex capitalize justify-center mt-19">
                <div className="flex justify-between capitalize w-90 shadow-lg p-9.5 gap-7">
                    <div>
                        <h3 className=" font-bold text-2xl capitalize">your cart</h3>
                        <p>{product?.name} </p>
                        <strong className="">{product?.price}$</strong>
                        <span className=" font-thin "> by each</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => handelQty("decrease")}
                            className=" bg-gray-200 px-2  text-3xl cursor-pointer">-</button>
                        <p className="text-2xl">{qty}</p>
                        <button
                            onClick={() => handelQty("increase")}
                            className=" bg-gray-200 px-2  text-3xl cursor-pointer">+</button>
                    </div>
                </div>
                <div className="flex items-center p-9 shadow-lg justify-between">
                    <div className=" flex flex-col ">
                        <h3 className=" font-bold">
                            order summary
                        </h3>
                        <div className=" flex justify-between items-center">
                            <span className=" font-black my-3">total :</span>
                            <h2 className=" font-black ">{totalAmount}</h2>
                        </div>
                        <label htmlFor="" className=" my-3">inter your phone</label>
                        <input
                            type="number"
                            placeholder="enter your phone"
                            value={paymentNumber}
                            onChange={(e)=>setPaymentNumber(e.target.value)}
                            className=" border-2 border-[#be7f03] py-1 px-9 rounded-full"
                        />
                        <button className="bg-[#be7f03] w-39 py-3 rounded-full mt-5 text-white cursor-pointer"
                        onClick={(waafiPay)}
                        >
                            {
                                loading ?
                                    <div className=" flex justify-center" >
                                        <RotatingLines
                                            visible={true}
                                            height="36"
                                            width="36"
                                            color="grey"
                                            strokeWidth="5"
                                            animationDuration="0.75"
                                            ariaLabel="rotating-lines-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                        />
                                    </div> :
                                    <>pay now
                                    </>
                            }
                           
                            </button>
                    </div>
                    
                </div>
            </div> */}
        </>
    )
}

export default Order