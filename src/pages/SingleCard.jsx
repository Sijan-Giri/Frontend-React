import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/Navbar";

const SingleCard = () => {

    const [datas , setDatas] = useState([]);

    const {id} = useParams();
    const navigate = useNavigate()

    const fetchSingleBlog = async() => {
        try {
            const response = await axios.get(`http://localhost:3000/blog/${id}`);
            setDatas(response.data.data);

        } catch (error) {
            console.log(error)
            setDatas(null)
        }
    }

    const handleDelete = async() => {
        try {
            await axios.delete(`http://localhost:3000/blog/${id}`);
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchSingleBlog();
    },[])

  return (
    <>
    <Navbar />
    <div class="bg-gray-100 dark:bg-gray-800 py-8 mt-28">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img class="w-full h-full object-cover" src={datas?.image} alt="Product Image" />
                </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                        <Link to={`/editBlog/${datas?._id}`}><button class="w-full bg-green-900 dark:bg-green-600 text-white py-2 px-4 rounded-full font-bold hover:bg-green-800 dark:hover:bg-green-700">Edit Product</button></Link>
                    </div>
                    <div class="w-1/2 px-2">
                        <button onClick={handleDelete} class="w-full bg-gray-200 dark:bg-red-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-red-500 dark:hover:bg-red-600">Delete Product</button>
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{datas?.title}</h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {datas?.subtitle}
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span class="text-gray-600 dark:text-gray-300">$29.99</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span class="text-gray-600 dark:text-gray-300">In Stock</span>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                    <div class="flex items-center mt-2">
                        <button class="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                    <div class="flex items-center mt-2">
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                    </div>
                </div>
                <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {datas?.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default SingleCard