import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'
import CreateType from '../components/modals/CreateType'
import DeleteBrandOrType from "../components/modals/DeleteBrandOrType";
const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [deleteBrandOrType, setDeleteBrandOrType] = useState(false);
    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-3 p-3' onClick={() => setTypeVisible(true)} >Добавить тип</Button>
            <Button variant={'outline-dark'} className='mt-3 p-3' onClick={() => setBrandVisible(true)} >Добавить бренд</Button>
            <Button variant={'outline-dark'} className='mt-3 p-3' onClick={() => setDeviceVisible(true)}  >Добавить айтем</Button>
            <Button onClick={() => setDeleteBrandOrType(true)} variant="outline-dark" className="mt-3 p-3" > Удалить тип или бренд</Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <DeleteBrandOrType show={deleteBrandOrType} onHide={() => setDeleteBrandOrType(false)} />
        </Container>
    )
}

export default Admin