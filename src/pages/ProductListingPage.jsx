import React from 'react';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';

const products = [
    { id: 1, name: 'Snake Plant', price: 25, category: 'Low Light Plants', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
    { id: 2, name: 'ZZ Plant', price: 30, category: 'Low Light Plants', image: 'https://images.unsplash.com/photo-1606256419855-d72ce8675863?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8enolMjBwbGFudHxlbnwwfHwwfHx8Mg%3D%3D' },
    { id: 3, name: 'Pothos', price: 20, category: 'Medium Light Plants', image: 'https://images.unsplash.com/photo-1614346775943-4bf1cc2decfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG90aG9zfGVufDB8fDB8fHww' },
    { id: 4, name: 'Monstera Deliciosa', price: 35, category: 'Medium Light Plants', image: 'https://images.unsplash.com/photo-1604866830513-d54766457f45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uc3RlcmF8ZW58MHx8MHx8fDA%3D' },
    { id: 5, name: 'Fiddle Leaf Fig', price: 45, category: 'High Light Plants', image: 'https://images.unsplash.com/photo-1643819131782-474a409da244?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlkZGxlJTIwbGVhZiUyMGZpZ3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 6, name: 'Bird of Paradise', price: 50, category: 'High Light Plants', image: 'https://images.unsplash.com/photo-1599685315640-9ceab2f58148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
    { id: 7, name: 'Chinese Evergreen', price: 28, category: 'Low Light Plants', image: 'https://images.unsplash.com/photo-1597305877032-0668b3c6413a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
    { id: 8, name: 'Peace Lily', price: 32, category: 'Medium Light Plants', image: 'https://images.unsplash.com/photo-1652731706550-c85ae3f0617a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVhY2UlMjBsaWx5fGVufDB8fDB8fHww' },
    { id: 9, name: 'Rubber Plant', price: 40, category: 'High Light Plants', image: 'https://images.unsplash.com/photo-1477554193778-9562c28588c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cnViYmVyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D' },
];

function ProductListingPage() {
    const { addToCart } = useCart();

    return (
        <>
            <Header />

            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-8">Our Plants</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="border rounded-lg p-4">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600 mb-2">{product.category}</p>
                            <p className="text-lg font-bold mb-4">${product.price}</p>
                            <button
                                onClick={() => addToCart(product)}
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductListingPage;