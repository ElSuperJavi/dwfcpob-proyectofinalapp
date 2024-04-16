import React from "react"
import "./estilo.css"

export const Delivery=()=>{
    const datos=[
        {
            cover: <i class='fa-solid fa-truck-fast'></i>,
            title: "Worldwide Delivery",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i class='fa-solid fa-id-card'></i>,
            title: "Safe Payment",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i class='fa-solid fa-shield'></i>,
            title: "Shop With Confidence ",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i class='fa-solid fa-headset'></i>,
            title: "24/7 Support ",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
    ]
    
    return(
        <>
        <section className='wrapper background'>
            <div className='container grid2'>
                {datos.map((val, index) => {
                    return (
                        <div className='product' key={index}>
                            <div className='img icon-circle'>
                                <i>{val.cover}</i>
                            </div>
                            <h3>{val.title}</h3>
                            <p>{val.decs}</p>
                        </div>
                    )
                })}
            </div>
        </section>
        </>
    )
}