import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import { login, registration } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '..'

// import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)

            } else {
                data = await registration(email, password)
            }

            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите вашу электропочту'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш пароль'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />


                    <Row className="d-flex justify-content-between mt-3 px-3 px-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                            </div>
                        }
                        <Button
                            className='mt-3'
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                    </Row>
                </Form>


            </Card>
        </Container>
    )
})

export default Auth