import React from 'react'
import Table from './Table'
import Button from './Button'

const Plans = () => {
    return (
        <div className="plans-content">
             <div className="plans-content-heading">
                <h3>PLANS</h3>
            </div>
            <div className="plans-content-description">
                <p>The pricing in the plans serve as a basline and may change depending on the customer's specifications.</p>
                <br /><br />
                <div className="plans-build">
                    <h3>Website Plans</h3>
                    <Table desktop={true} build={true} />
                    <br /><br /><br />
                    <h3>Website Updates</h3>
                    <Table desktop={true} build={false} />
                    <br /><br /><br />
                </div>
                <div className="plans-build-mobile">
                    <h3>Website Plans</h3>
                    <div className="plans-build-mobile-table">
                        <div className="plans-build-mobile-table-heading">
                        </div>
                        <Table desktop={false} build={true} />
                    </div>
                    <br /><br /><br />
                    <h3>Website Updates</h3>
                    <div className="plans-build-mobile-table">
                        <div className="plans-update-mobile-table-heading">
                        </div>
                        <Table desktop={false} build={false} />
                    </div>
                    <br /><br /><br />
                </div>
            </div>
        </div>
    )
}

export default Plans