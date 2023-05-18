import './MyComponents.css'
import React from 'react'

const MyComponents = () => {
    return (
        <div>
            <h1>CSS components</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod minima, dignissimos commodi hic iste quia culpa! Aliquid laborum, blanditiis ipsum ad quam enim explicabo cupiditate vitae, dignissimos maiores labore debitis.</p>
            <p className='my-comp-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, consectetur aliquam itaque molestias voluptatibus, dolorem optio perspiciatis debitis eum facilis a quos. Adipisci natus sequi tempora ad accusamus, optio quo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quos dicta veritatis fuga id ipsum praesentium. Fugiat, natus? Voluptate sunt autem quo ut quod praesentium alias architecto debitis fugiat aliquam.</p>
            <p style={{color: 'magenta'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod minima, dignissimos commodi hic iste quia culpa! Aliquid laborum, blanditiis ipsum ad quam enim explicabo cupiditate vitae, dignissimos maiores labore debitis.</p>
            <p style={{color: 'blue'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod minima, dignissimos commodi hic iste quia culpa! Aliquid laborum, blanditiis ipsum ad quam enim explicabo cupiditate vitae, dignissimos maiores labore debitis.</p>
        </div>
    )
}

export default MyComponents