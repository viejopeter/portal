import React from 'react'
import { useState } from 'react'

const ListProducts = () => {
    
        const [products,setProducts] = useState([])
        const [productForm,setProductForm] = useState(
            {name:'',price:0,inStock:false}
        )
        const [message,setMessage] = useState({
            message:'',type:""
        })

        const handleForm = (e) => {
            const {name,type,checked,value} = e.target

            setProductForm(
                prev => (
                    {...prev,
                        [name]: type==="checkbox" ? checked : value
                    }
                )
            )
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            //Lack customized message
            setProducts(
                prev => [...prev,productForm]
            )
            setProductForm({
                name:'',price:0,inStock:false
            })
        }

    return (
        <>
        <ul>
            {products.map(
                product => (<li>{product.name}-{product.price}
                      {product.inStock === true ? "✅" : "❌"}
                   </li>)
            )}
        </ul>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:
            </label>
            <input type='text'
                   name='name'
                   value={productForm.name}
                   onChange={(e) => handleForm(e)} />
            <label htmlFor="price">
                Price:
            </label>
            <input type='text'
                   name='price'
                   value={productForm.price}
                   onChange={(e) => handleForm(e)} />
            <label htmlFor="instock">
                inStock:
            </label>
            <input type='checkbox'
                   name='inStock'
                   checked={productForm.inStock}
                   onChange={(e) => handleForm(e)} />
            <button type="submit">Add product</button>
        </form>
        </>
    )
}

export default ListProducts