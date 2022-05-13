import React, { useContext } from 'react'
import { Context } from '..' // возможно ../index.js
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import Button from 'react-bootstrap/Button'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

const NavBar = observer(() => {
    const navigate = useNavigate()
    const { user } = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <NavLink style={{ color: 'white', textDecoration: "none" }} to={SHOP_ROUTE}>MosPolyMerch</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant="outline-light" className='mx-3' onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant="outline-light" onClick={() => logOut()} >Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar