import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts';


const Product = () => {

  const { productId } = useParams();
  const { products, currency , addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0])
        //console.log(item);

        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [products,productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/*Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-nomral sm:w-[18.7%] w-full '>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>

          <div className='w-full sm:w[80%]'>
            <img className='w-full h-auto' src={image} alt='' />
          </div>
        </div>
        {/*products info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt=" " className='w-3 5' />
            <img src={assets.star_icon} alt=" " className='w-3 5' />
            <img src={assets.star_icon} alt=" " className='w-3 5' />
            <img src={assets.star_icon} alt=" " className='w-3 5' />
            <img src={assets.star_dull_icon} alt=" " className='w-3 5' />
            <p className='p1-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2 '>
              {
                productData.sizes.map((item, index) => (
                  <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''} `} key={index} >{item}</button>
                ))
              }
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5 ' />
          <div className='text-sm text-gray-500 mt-5 fkex flex-col gap 1'>
            <p>Authentic and Genuine Product Guaranteed.</p>
            <p>Cash on Delivery option available for this item.</p>
            <p>Hassle-free returns and exchanges within 7 days of purchase.</p>
          </div>
        </div>
      </div>

      {/*Description and Review Section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>At Forever we believe in redefining your shopping experience. With a wide range of categories and seamless navigation, we make shopping fun, easy, and hassle-free. Trusted by thousands, ShopEase is here to bring the best to your fingertips.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      {/*Display Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'></div>
  
}

export default Product