import { Navbar } from './Navbar';
import { Layout, theme } from 'antd';
import UserDashboard from '../Components/UserDashboard';
const { Content, Footer } = Layout;


export const Theme = () => {


    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    return (
        <Layout>
        <Navbar/>

            <Content style={{ padding: '40px 48px' }}>

                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}

                >
                    <UserDashboard />

                </div>
            </Content>

        </Layout>

    )
}
