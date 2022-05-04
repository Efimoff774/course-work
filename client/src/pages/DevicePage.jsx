import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/esm/Image'
import Row from 'react-bootstrap/esm/Row'
import big_star from '../assets/big_star.svg'
import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceAPI'

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] })
  const { id } = useParams()
  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, [])

  return (
    <Container className='mt-3'>
      <Row  >
        <Col md={4} >
          <div className='m-auto'>
            <h2 >{device.name}</h2>

            <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
          </div>
        </Col>
        <Col md={4} >
          <Row>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{ background: `url(${big_star}) no-repeat center center`, width: 250, backgroundSize: 250, height: 250, fontSize: 64 }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className='d-flex flex-column align-items-center justify-content-around'
            style={{ width: 300, height: 300, fontSize: 32, border: '2px solid lightgray' }}
          >
            <h3>{device.price}</h3>
            <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>

      <Row className='d-flex flex-column m-3'>
        <h1>Характеристики</h1>
        {device.info.map((info, index) =>
          <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgrey' : 'transparent', padding: 10 }}>
            {info.title} : {info.description}
          </Row>
        )}
      </Row>
    </Container>
  )
}

export default DevicePage