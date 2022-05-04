import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
// import Row from 'react-bootstrap/esm/Row'
import { Context } from '..'
import Card from 'react-bootstrap/Card'


const BrandBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginRight: 2 }}>
            {device.brands.map(brand =>
                <Card
                    style={{ cursor: 'pointer' }}
                    key={brand.id}
                    className='p-3 mx-1'
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'success' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </div>

    )
})

export default BrandBar