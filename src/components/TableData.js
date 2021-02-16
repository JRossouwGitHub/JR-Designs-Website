import React from 'react'

const TableData = ({heading, headingH2, headingH3, price, desc}) => {
    return (
        <>
            {heading ? <th>{heading}</th> : <td></td>}
            {price ? 
                (<>
                <td><big>{price[0]}</big></td>
                <td><big>{price[1]}</big></td>
                <td><big>{price[2]}</big></td>
                </>)
                : null}
            {desc ? 
                (<>
                <td className="middle">{desc[0] || null}</td>
                <td className="middle">{desc[1] || null}</td>
                <td className="middle">{desc[2] || null}</td>
                </>)
                : null}
            {headingH2 ? (<>
                <th><h2>{headingH2[0]}</h2></th>
                <th><h2>{headingH2[1]}</h2></th>
                <th><h2>{headingH2[2]}</h2></th>
            </>) : null}
            {headingH3 ? (<>
                <th><h2>{headingH3[0]}</h2></th>
                <th><h2>{headingH3[1]}</h2></th>
                <th><h2>{headingH3[2]}</h2></th>
            </>) : null}
        </>
    )
}

export default TableData
