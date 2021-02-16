import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div className="about-content">
            <div className="about-content-heading">
                <h3>ABOUT</h3>
                <div className="about-content-description">
                    <p>JR Designs is a business that provides a website building/design service.</p>
                    <br />
                    <div className="services">
                        <h3>Services:</h3>
                        <ul>
                            <li>HTML, CSS and JavaScript</li>
                            <li>Build your website from scratch</li>
                            <li>Multi browser compatibility</li>
                            <li>Multi device compatibility</li>
                            <li>User friendly design</li>
                            <li>Custom layouts/design</li>
                            <li>Full website launch/deploy advice</li>
                            <li>Remote/online operation - no need to meet physically</li>
                        </ul>
                        <br />
                        <h3>What to expect:</h3>
                        <ol>
                            <strong><li>Contact</li></strong>
                            <p>This is when you have decided to take your business to the next step and would like to have an online presence! Simply email or call and we'll get started.</p>
                            <strong><li>Plan the website</li></strong>
                            <p>If you have already decided on any of the layouts we currently have, skip to step <strong>4</strong>. Otherwise we will discuss what kind of website you would like (any references of other websites is helpful).</p>
                            <strong><li>Build the website</li></strong>
                            <p>After having gone over the plan, the website will be created fully. At this point, you will need to send us all the information (text/images) required to populate your website.The time it takes to create the website will be dependant on the depth/scope from the plan.</p>
                            <strong><li>Revision</li></strong>
                            <p>Review the website to ensure that the customer is happy with the outcome. Once checked off, we will continue with the contract. If at this point, the customer decides to make any changes, we go back to step <strong>3</strong> and move forward. The number of revisions will depend on the <Link className="more" to="/plans">Plan</Link> the customer has chosen.</p>
                            <strong><li>Complete the contract</li></strong>
                            <p>After reviewing the website and the customer is satisfied, payment will be requested. <strong><u>Only after</u></strong> payments has been made, will you recieve the entire contents of the website (the website files).</p>
                            <strong><li>Launch/Deploy support</li></strong>
                            <p>At this point, you will have recieved all of the files that make up your website.</p>
                            <p>Now you need to host it! <strong><u>We do not offer any Domain/Web Hosting services</u></strong>.</p>
                            <p>How do you host your website? That's easy! Just select from any of these NZ Webhost Companies:</p>
                            <div>
                                <ul>
                                    <li><Link className="more" to="https://www.openhost.co.nz/" target="_blank">openhost</Link></li>
                                    <li><Link className="more" to="https://www.freeparking.co.nz/web-hosting" target="_blank">Freeparking</Link></li>
                                    <li><Link className="more" to="https://www.spark.co.nz/business/shop/get-online/web-hosting/" target="_blank">Spark</Link></li>
                                </ul>
                            </div>
                            <p>Once you've chosen the right hosting company for you, it should be as simple as copying and pasting the website files. If you have any issues that cannot be resolved by the support team of the web hosting company, feel free to <Link className="more" to="/contact">Contact</Link> us and we'll get you sorted!</p>
                            <strong><li>Updates</li></strong>
                            <p>If you would like, we will keep a copy of your website to use for updating in the future. Updating the website will come at a cost, so please keep this in mind when planning your website. You can see update prices when you select a <Link className="more" to="/plans">Plan</Link>.</p>
                            <p><strong><i>Note:</i></strong> Updating your website will have a similar process to building it. The updates will be made and you will recieve all the files after payment, then you can copy and paste the new files <strong><u>OVER</u></strong> the old ones. Or just simply delete the old files and copy/paste the new files in. We will keep a record of both as a back up!</p>
                        </ol>
                    </div>
                    <p>If you have any questions please <Link className="more" to="/contact">Contact</Link> us.</p>
                    <br /><br />
                </div>
            </div> 
        </div>
    )
}

export default About