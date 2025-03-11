import axios from "axios";
import React, { useEffect, useState } from "react";

const PurchaseTable = () => {
    const [purchases, setPurchases] = useState([]);
    const url = "http://localhost:3000";  // Adjust your URL if needed

    useEffect(() => {
        async function getMyPurchase() {
            try {
                const { data } = await axios.get(`${url}/order/loggedInUser`, {
                    headers: {
                        "Content-Type": "application/json",
                        "token": localStorage.getItem("token") || "not found"
                    }
                });
                setPurchases(data);
            } catch (error) {
                console.error("Error fetching purchases:", error);
            }
        }
        getMyPurchase();
    }, []);

    // Group purchases by status
    const groupedPurchases = purchases.reduce((acc, purchase) => {
        const status = purchase.status || "Unknown";
        if (!acc[status]) acc[status] = [];
        acc[status].push(purchase);
        return acc;
    }, {});

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4">Purchase History</h2>

            {Object.keys(groupedPurchases).map((status) => (
                <div key={status} className="mb-8">
                    <h3 className="text-xl font-bold mb-3">{status} Orders</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-3 px-6 text-left border-b">#</th>
                                    <th className="py-3 px-6 text-left border-b">Order ID</th>
                                    <th className="py-3 px-6 text-left border-b">Item</th>
                                    <th className="py-3 px-6 text-left border-b">Qty</th>
                                    <th className="py-3 px-6 text-left border-b">Price</th>
                                    <th className="py-3 px-6 text-left border-b">Date</th>
                                    <th className="py-3 px-6 text-left border-b">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {groupedPurchases[status].map((order, index) => (
                                    <tr key={order._id} className="border-b hover:bg-gray-50">
                                        <td className="py-3 px-6">{index + 1}</td>
                                        <td className="py-3 px-6">{order._id}</td>
                                        <td className="py-3 px-6">{order?.productId?.name || "N/A"}</td>
                                        <td className="py-3 px-6">{order?.Qty || 1}</td>
                                        <td className="py-3 px-6">${order?.productId?.price || "0.00"}</td>
                                        <td className="py-3 px-6">{new Date(order.createdAt).toLocaleDateString()}</td>
                                        <td
                                            className={`py-3 px-6 font-medium ${status === "Delivered" ? "text-green-600" :
                                                    status === "Shipped" ? "text-blue-600" :
                                                        "text-yellow-600"
                                                }`}>
                                            {status}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PurchaseTable;
