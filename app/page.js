"use client"
import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


export default function Home() {
  const [productForm ,setProductForm] = useState({})
  const [products, setProducts] = useState([]);
  const [Alert, setAlert] = useState("")

  // create a get requst to fetch product form the database as name products with the help of use effect and usestate 
  // Get the product form data when the page loads.


  

  const fetchProducts = async () => {
    
    const response = await fetch('/api/product');

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    let rjson = await response.json();

    setProducts(rjson.products);
  
  }

useEffect(() => {
  


  fetchProducts();
}, []);

  
 



  const addProduct = async () => {
    try {
      const response = await fetch('/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productForm),
      });

      if (response.ok) {
      //  alert('Product added successfully!');
       setAlert('Your product has been added!');
       setProductForm({});
      
        // You can perform additional actions here, such as updating the UI or resetting the form
      } else {
        console.error('Failed to add product.');
        // Handle error, show user feedback, etc.
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error, show user feedback, etc.
    }
  };

  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.
      value })
  }
    

    
  
  


  return (



    <>
      <Header />

      <div className=' text-green-500 text-center' >{Alert}</div>

      {/* Add Product Section */}
      <div className="  container  mt-8 mb-4 flex flex-col items-center justify-start w-full  text-gray-700 bg-white rounded-lg dark @media(min-width=1280) {w-3/5 m 4}">
        <h1 className='text-3xl font-bold mb-4'>Adding Product</h1>

        {/* Form for adding a new product */}
        <div className="flex items-center  border-gray-300 space-x-4 ">
          <input
            value={productForm?.name  || ""}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Product Name"
            className="border p-2"
          />
          <input
             value={productForm?.quantity  || ""}
            onChange={handleChange}
            type="number"
            name="quantity"
            placeholder="Quantity"
            className="border p-2"
          />
          <input
            value={productForm?.price  || ""}
            onChange={handleChange}
            type="number"
            name="price"
            placeholder="Price"
            className="border p-2"
          />
          <button onClick={addProduct} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Product
          </button>
        </div>
      </div>

      {/* Search Product Section */}
      <div className=" container mt-8 mb-4 flex flex-col items-center justify-start w-full text-gray-700 bg-white rounded-lg dark @media(min-width=1280) {w-3/5 m 4}">
        <h1 className='text-3xl font-bold mb-4'>Search for a Product</h1>

        {/* Search input and dropdown */}
        <div className="flex items-center justify-center space-x-4">
          <input
            type="text"
            name="search"
            placeholder="Enter product name"
            className="border p-2"
          />
          
          {/* Dropdown menu */}
          <select  className="border p-2">
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
            {/* Add more categories as needed */}
          </select>
          
          <button  className="bg-blue-500 text-white px-4 py-2 rounded">
            Search
          </button>
        </div>
      </div>

      {/* Display Current Stock Section */}
      <div className=" container mt-8 mb-4  flex flex-col items-center justify-srart w-full h-96 text-gray-700 bg-white rounded-lg dark @media(min-width=1280) {w-3/5 m 4}">
        <h1 className='text-3xl font-bold mb-4'>Display Current Stock</h1>

        {/* Table for Stock (same as before) */}
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
      <th className="border bg-gray-100 px-4 py-2">Product Name</th>
              <th className="border bg-gray-100 px-4 py-2">Quantity</th>
              <th className="border bg-gray-100 px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {/* {
              /* Map through the stock array to display each item in the table. */


            }{products.map(products=>{
                return  <tr key={products.name}>
                <td className="border px-4 py-2">{products.name}</td>
                <td className="border px-4 py-2">{products.quantity}</td>
                <td className="border px-4 py-2">Rs{products.price}</td>
              </tr>
              })} 
            {/* Dummy data (replace with your actual stock data) */}
            
            {/* Add more items as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
}
