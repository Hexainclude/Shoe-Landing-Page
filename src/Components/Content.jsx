import React from 'react'
import '../App.css'
import brandImg from '../assets/images/shoe_image.svg'
import flipkartImg from '../assets/images/flipkart.png'
import amazonImg from '../assets/images/amazon.png'

export default function Content() {
  return (
    <div className='content-wrapper flex fx-center'>
        <div className='brand-text'>
            <h1 className='hero-text'>YOUR FEET DESERVE <br/>THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>  
            <div className='btn-wraper flex'>
                <button>Shop Now</button>
                <button>Category</button>
            </div>     
            <div  className='shopping'>
                <p>Also Available On </p>
                <img src={flipkartImg} alt='Flipkart'/>
                <img src={amazonImg} alt='Amazon'/>
            </div>
        </div>
        <div>
            <div className='brand-img'>
                <img src={brandImg} alt='Shoe Image'/>
            </div>
        </div>
    </div>
  )
}
