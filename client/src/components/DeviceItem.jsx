import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/Image'
import { useNavigate } from 'react-router-dom'
import Star from '../assets/Star 12.svg'
import { DEVICE_ROUTE } from '../utils/consts'

const DeviceItem = ({ device }) => {
    const navigate = useNavigate()

    return (
        <Col md={3} className={'mt-2'} onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>

            <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
                <div className='mt-1 d-flex justify-content-between align-items-center'>
                    <div>{device.name}</div>
                    <div className='d-flex align-items-center'>
                        <div className='mx-1'>{device.rating}</div>
                        <Image width={16} height={16} src={Star} />
                    </div>
                </div>

            </Card>
        </Col>
    )
}

export default DeviceItem