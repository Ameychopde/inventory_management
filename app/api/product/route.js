import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";



export async function GET(request) {

    const uri = "mongodb+srv://amey_dev1:pass123@cluster0.4sseypf.mongodb.net/";
    const client = new MongoClient(uri);
    
    try {
        await client.connect(); // Connect to the MongoDB server
    
        const database = client.db('stock');
        const inventory = database.collection('inventory');
        
        const query = {};
        const products = await inventory.find(query).toArray();
        
        // Assuming you are using some framework that provides NextResponse
        return NextResponse.json({ products });
    } finally {
        await client.close();
    }

}
export async function POST(request) {


    let body = await request.json()
    const uri = "mongodb+srv://amey_dev1:pass123@cluster0.4sseypf.mongodb.net/"
    const cliet = new MongoClient(uri);
    try{
        const database = cliet.db('stock');
        const inventory = database.collection('inventory');
        const Product = await inventory.insertOne(body);
        return NextResponse.json({Product , ok : true })

    } finally{
        await cliet.close();
    }

}