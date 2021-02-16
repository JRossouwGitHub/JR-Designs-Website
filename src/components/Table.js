import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import TableData from './TableData'
import Button from './Button'

const Table = ({desktop, build}) => {
    const [active, setActive] = useState([
        {
            id: "Basic",
            active: true
        },
        {
            id: "Standard",
            active: false
        },
        {
            id: "Premium",
            active: false
        }
    ])

    const [active2, setActive2] = useState([
        {
            id: "Small",
            active: true
        },
        {
            id: "Medium",
            active: false
        },
        {
            id: "Large",
            active: false
        }
    ])

    const onClick = (id) => {
        setActive(active.map((active) => active.id == id ? ({...active, active: true}) : ({...active, active: false})))
    }

    const isActive = (id) => {
        let res
        active.map((active) => active.id == id ? res = active.active : active)
        return res
    }

    const onClick2 = (id) => {
        setActive2(active2.map((active) => active.id == id ? ({...active, active: true}) : ({...active, active: false})))
    }

    const isActive2 = (id) => {
        let res
        active2.map((active) => active.id == id ? res = active.active : active)
        return res
    }

    return (
        <>
            {desktop ? (<>
                {build ? (<>
                    <table className="plans-build-table">
                        <tr>
                            <TableData heading="Plan" price={['NZ$5.00', 'NZ$35.00', 'NZ$150.00']} />
                        </tr>
                        <tr>
                            <TableData headingH2={['Basic', 'Standard', 'Premium']} />
                        </tr>
                        <tr>
                            <TableData headingH3={['Display Page', 'Small Business', 'Custom']} />
                        </tr>
                        <tr>
                            <TableData desc={['The "Display Page" plan includes 1 Page with 1 Revision.', 
                                            'The "Small Business" plan includes 3 Pages with 3 Revisions.', 
                                            'The "Custom" plan includes 3+ Pages with Unlimited Revisions.']} />
                        </tr>
                        <tr>
                            <TableData heading='Design Customization' desc={['✔', '✔', '✔']} />
                        </tr>
                        <tr>
                            <TableData heading='Responsive Design' desc={['✔', '✔', '✔']} />
                        </tr>
                        <tr>
                            <TableData heading='Revisions' desc={['1', '3', 'Unlimited']} />
                        </tr>
                        <tr>
                            <TableData heading='Free Updates' desc={['1', '1', '3']} />
                        </tr>
                        <tr>
                            <TableData heading='Expected Delivery Time' desc={['1 Day', '7 Days', '14 Days']} />
                        </tr>
                        <tr>
                            <td></td>
                            <td className="middle"><Link to="/contact"><button>CONTACT</button></Link></td>
                            <td className="middle"><Link to="/contact"><button>CONTACT</button></Link></td>
                            <td className="middle"><Link to="/contact"><button>CONTACT</button></Link></td>
                        </tr>
                    </table>
                </>) : (<>
                    <table className="plans-update-table">
                        <tr>
                            <TableData heading="Update" price={['NZ$10.00', 'NZ$25.00', 'NZ$50.00']} />
                        </tr>
                        <tr>
                            <TableData headingH2={['Small', 'Medium', 'Large']} />
                        </tr>
                        <tr>
                            <TableData headingH3={['Fix', 'Edit', 'Insert']} />
                        </tr>
                        <tr>
                            <TableData desc={['The "Fix" update is intended for spelling, grammar and image sizing.', 
                                            'The "Edit" update is intended for replacing content, mainly images but also text.', 
                                            'The "Insert" update is intended for adding new content, text and/or images.']} />
                        </tr>
                        <tr>
                            <TableData heading='Revisions' desc={['1', '1', '1']} />
                        </tr>
                        <tr>
                            <TableData heading='Expected Delivery Time' desc={['1 Day', '3 Days', '7 Days']} />
                        </tr>
                        <tr>
                            <td></td>
                            <td className="middle"><Link to="/contact"><button>CONTACT</button></Link></td>
                            <td className="middle"><Link to="/contact"><button>CONTACT</button></Link></td>
                            <td className="middle"><Link to="/contact"><button>CONTACT</button></Link></td>
                        </tr>
                    </table>
                </>)}
            </>) : (<>
                {build ? (<>
                    <Button plan={true} text="Basic" onClick={onClick} active={isActive("Basic")}></Button><Button plan={true} text="Standard" onClick={onClick} active={isActive("Standard")}></Button><Button plan={true} text="Premium" onClick={onClick} active={isActive("Premium")}></Button>
                    <div className={`basic ${isActive("Basic") ? "show" : "hide"}`}>
                        <div>
                            <p>NZ$5.00</p>
                            <p><strong>Display Page</strong></p>
                        </div>
                        <div>
                            <p><strong>The "Display Page" plan includes 1 Page with 1 Revision.</strong></p>
                        </div>
                        <div>
                            <p>✔ Design Customization</p>
                            <p>✔ Responsive Design</p>
                            <p>1 Revision</p>
                            <p>1 Free Update</p>
                            <p>1 Day Expected Delivery Time</p>
                        </div>
                    </div>
                    <div className={`standard ${isActive("Standard") ? "show" : "hide"}`}>
                        <div>
                            <p>NZ$35.00</p>
                            <p><strong>Small Business</strong></p>
                        </div>
                        <div>
                            <p><strong>The "Small Business" plan includes 3 Pages with 3 Revisions.</strong></p>
                        </div>
                        <div>
                            <p>✔ Design Customization</p>
                            <p>✔ Responsive Design</p>
                            <p>3 Revision</p>
                            <p>1 Free Update</p>
                            <p>7 Days Expected Delivery Time</p>
                        </div>
                    </div>
                    <div className={`premium ${isActive("Premium") ? "show" : "hide"}`}>
                        <div>
                            <p>NZ$150.00</p>
                            <p><strong>Custom</strong></p>
                        </div>
                        <div>
                            <p><strong>The "Custom" plan includes 3+ Pages with Unlimited Revisions.</strong></p>
                        </div>
                        <div>
                            <p>✔ Design Customization</p>
                            <p>✔ Responsive Design</p>
                            <p>Unlimited Revision</p>
                            <p>3 Free Update</p>
                            <p>14 Days Expected Delivery Time</p>
                        </div>
                    </div>
                    <br />
                    <Link to="/contact"><button>CONTACT</button></Link>
                    <br />
                    <br />
                </>) : (<>
                    <Button plan={false} text="Small" onClick2={onClick2} active2={isActive2("Small")}></Button><Button plan={false} text="Medium" onClick2={onClick2} active2={isActive2("Medium")}></Button><Button plan={false} text="Large" onClick2={onClick2} active2={isActive2("Large")}></Button>
                    <div className={`small ${isActive2("Small") ? "show" : "hide"}`}>
                        <div>
                            <p>NZ$10.00</p>
                            <p><strong>Fix</strong></p>
                        </div>
                        <div>
                            <p><strong>The "Fix" update is intended for spelling, grammar and image sizing.</strong></p>
                        </div>
                        <div>
                            <p>1 Revision</p>
                            <p>1 Day Expected Delivery Time</p>
                        </div>
                    </div>
                    <div className={`medium ${isActive2("Medium") ? "show" : "hide"}`}>
                        <div>
                            <p>NZ$25.00</p>
                            <p><strong>Edit</strong></p>
                        </div>
                        <div>
                            <p><strong>The "Edit" update is intended for replacing content, mainly images but also text.</strong></p>
                        </div>
                        <div>
                            <p>1 Revision</p>
                            <p>3 Days Expected Delivery Time</p>
                        </div>
                    </div>
                    <div className={`large ${isActive2("Large") ? "show" : "hide"}`}>
                        <div>
                            <p>NZ$50.00</p>
                            <p><strong>Insert</strong></p>
                        </div>
                        <div>
                            <p><strong>The "Insert" update is intended for adding new content, text and/or images.</strong></p>
                        </div>
                        <div>
                            <p>1 Revision</p>
                            <p>7 Days Expected Delivery Time</p>
                        </div>
                    </div>
                    <br />
                    <Link to="/contact"><button>CONTACT</button></Link>
                    <br />
                    <br />
                </>)}
            </>)}
        </>
    )
}

export default Table
