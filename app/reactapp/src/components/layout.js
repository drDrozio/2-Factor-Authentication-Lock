import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import MyStats from './MyStats'
import { useState, useEffect } from 'react';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function MyLayout(){

    const [users,setUsers] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/webapp/userregister/",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token c819b74eecd7115b00003389408f38a04fcf7ff9'
        }
        })
        .then( resp => resp.json())
        .then( resp => setUsers(resp))
        .catch( error => console.log(error))
    },[])

    return (
        <div>
            <Layout>
                <Header className="header">
                <div className="logo" />
                    <h1 style={{ color: 'white' }}>2 Factor Authentication Lock</h1>
                </Header>
                <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Face Auth">
                        <Menu.Item key="1">Add User</Menu.Item>
                        <Menu.Item key="2">Update User</Menu.Item>
                        <Menu.Item key="3">Delete User</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="Password">
                        <Menu.Item key="5">Set Password</Menu.Item>
                        <Menu.Item key="6">Change Password</Menu.Item>
                        <Menu.Item key="7">Forgot Password</Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                    <MyStats users={users}/>                    
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        </div>
    )
}
export default MyLayout;