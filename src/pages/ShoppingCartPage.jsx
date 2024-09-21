import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';

function ShoppingCartPage() {
    const { cart, removeFromCart, updateQuantity } = useCart();

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <>
            <Header />

            <div className="container mx-auto py-8 px-8">
                <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <div className="mb-4">
                            <p className="text-xl">Total Items: {totalItems}</p>
                            <p className="text-xl font-bold">Total Cost: ${totalCost.toFixed(2)}</p>
                        </div>
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center justify-between border-b py-4">
                                <div className="flex items-center">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                                    <div>
                                        <h2 className="text-lg font-semibold">{item.name}</h2>
                                        <p className="text-gray-600">${item.price} each</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="bg-gray-200 px-2 py-1 rounded"
                                    >
                                        -
                                    </button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="bg-gray-200 px-2 py-1 rounded"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="ml-4 text-red-600"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="mt-8 flex justify-between">
                            <Link to="/products" className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                                Continue Shopping
                            </Link>
                            <button
                            onClick={() => {
                                alert('Coming Soon...')
                            }}
                            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default ShoppingCartPage;