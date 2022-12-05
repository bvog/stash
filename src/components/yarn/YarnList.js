import { useEffect, useState } from "react"



export const YarnList = () => {

    const [yarns, setYarns] = useState([])

    useEffect (
        () => {
            fetch(`http://localhost:8088/yarn`)
                .then(response => response.json())
                .then((yarnArray) => {
                    setYarns(yarnArray)
                })
        },
        []
    )
//Questions for return: how to I get to brandName, type and color?  Do I need to embed?  How? - I'm getting an emtpy table
//Do I want to add a picture here?  How?
    return<>
        <h2>My Inventory</h2>

        <article classname="list_of_yarn">
            {
                yarns.map(
                    (yarn) => {
                        return <section className="individual_yarn">
                            <div>Price: ${yarn.price}</div>
                        </section>
                    }
                )
            }
        </article>
    
    
    
    
    
    
    
    
    
    </>

}