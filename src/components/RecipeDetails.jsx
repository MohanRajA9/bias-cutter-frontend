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

                <div className='recipe-details-elements' >
                    <p><span>RECIPE NAME    :</span>{recipeDetails.recipeName}</p>
                    <p><span>SAP NAME       :</span>{recipeDetails.SAPname}</p>
                    <p><span>FABRIC CODE    :</span>{recipeDetails.fabricCode}</p>
                    <p><span>CUTTING WIDTH  :</span>{recipeDetails.cuttingWidth}</p>
                    <p><span>CUTTING ANGLE  :</span>{recipeDetails.cuttingAngle}</p>
                </div>

                <div className='recipe-details-table' >
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>ANGLE</th>
                                <th>WIDTH</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipeDetails.angleWidth?.map((items, index) => {
                                return <tr>
                                    <td key={1}>{items[0]} :</td>
                                    <td key={2} >{items[1]}</td>
                                    <td key={3} >{items[2]}</td>
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