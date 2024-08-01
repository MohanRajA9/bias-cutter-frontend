import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { URL } from '../global'

function RecipeDetails() {
    const [recipeDetails, setRecipeDetails] = useState({})
    useEffect(() => {
        try {
            axios.get(`${URL}/recipe-details/details/1`)
                .then((res) => {
                    // console.log(res)
                    setRecipeDetails(res.data)
                })
        } catch (error) { console.error(error.message) }
    }, [])
    console.log(recipeDetails)
    return (
        <div className='recipe-details' >

            <div className='recipe-details-heading' >
                <header><h3>Recipe Details</h3></header>
            </div>

            <div className='recipe-details-contents' >

                <div className='recipe-details-elements' style={{display:"flex"}}>
                    <div>
                        <p><span>RECIPE NAME    </span></p>
                        <p><span>SAP NAME       </span></p>
                        <p><span>FABRIC CODE    </span></p>
                        <p><span>CUTTING WIDTH  </span></p>
                        <p><span>CUTTING ANGLE  </span></p>
                    </div>
                    <div>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                    </div>
                    <div>
                        <p><span></span>{recipeDetails.recipeName}</p>
                        <p><span></span>{recipeDetails.SAPname}</p>
                        <p><span></span>{recipeDetails.fabricCode}</p>
                        <p><span></span>{recipeDetails.cuttingWidth}</p>
                        <p><span></span>{recipeDetails.cuttingAngle}</p>
                    </div>
                </div>

                <div className='recipe-details-table' >
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th id='angle' >ANGLE</th>
                                <th id='width' >WIDTH</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipeDetails.angleWidth?.map((items, index) => {
                                return <tr>
                                    <td id='cut' key={1} >{items[0]} :</td>
                                    <td id='angle' key={2} >{items[1]}</td>
                                    <td id='width' key={3} >{items[2]}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default RecipeDetails