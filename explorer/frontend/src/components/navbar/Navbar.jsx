import React from 'react'
import {NavLink} from 'react-router-dom'
import { Button, notification } from 'antd'
import { InfoOutlined } from '@ant-design/icons'
import { Select } from 'antd'
import './Navbar.css'
import { useDispatch } from 'react-redux'
import { selectNet } from '../../redux/netSlice'

const Navbar = () => {
    const {Option} = Select
    const dispatch = useDispatch()

    const openNotification = () => {
        const args = {
            message: 'Beta',
            description: '사이트는 베타 테스트 중입니다. 버그를 발견하면 개발자에게 보고하세요.',
            duration: 6,
        }
        notification.open(args)
    }

  return (
    <nav className='navbar'>
        <div className='navbar__content wrapper'>
            <div className='navbar__logo'> <NavLink to= '/'> <span className='hbar__logo'>&#8463;</span>explorer</NavLink></div>
            <div className='beta'>
                <Select 
                    className='navbar__net'
                    defaultValue='localnet'
                    style={{width: 150}}
                    onChange={value => dispatch(selectNet(value)) }
                    >
                    <Option value="localnet">localnet</Option>
                    <Option value="mainnet">Mainnet</Option>
                    <Option value="testnet">Testnet</Option>
                </Select>

                <Button type='primary' danger = {true} ghost = {true} size='small' shape='circle' onClick={openNotification} icon = {<InfoOutlined style={{ fontSize: '16px'}} />}></Button>
            </div>
            {/* <Switch id='switcher' className='navbar__switch' onChange={changeTheme}/> */}
        </div>
    </nav>
  )
}

export default Navbar