import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')" }}>
            <div className="bg-white bg-opacity-80 p-8 rounded-lg text-center max-w-2xl">
                <h1 className="text-4xl font-bold mb-4 text-green-800">Paradise Nursery</h1>
                <p className="mb-6 text-lg text-gray-700">
                    Welcome to Paradise Nursery, your destination for beautiful, high-quality houseplants.
                    We offer a diverse collection of plants for every environment, from low-maintenance succulents to exotic tropical varieties.
                    Our expert staff is here to help you find the perfect green companions and ensure your indoor garden thrives.
                </p>
                <Link to="/products" className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-300 inline-block">
                    Get Started
                </Link>
            </div>
        </div>
    );
}