import { Statistic, Row, Col, Button } from 'antd';
import { List, Card } from 'antd';
// import { useState } from 'react';

function MyStats(props){

    // const data = [
    //     {
    //         title: 'Title 1',
    //     },
    //     {
    //         title: 'Title 2',
    //     },
    //     {
    //         title: 'Title 3',
    //     },
    //     {
    //         title: 'Title 4',
    //     },
    //     {
    //         title: 'Title 5',
    //     },
    //     {
    //         title: 'Title 6',
    //     },
    //     ];

    return (
        <div>
            <Row gutter={16}>
                <Col span={12}>
                <Statistic title="Users" value={props.users.length} />
                </Col>
                <Col span={12}>
                <div>
                    <Button type="primary">Master</Button>

            <List
                    grid={{
                    gutter: 16,xs: 1,sm: 2,md: 4,lg: 4,xl: 6,xxl: 3,
                    }}
                    dataSource={props.users}
                    renderItem={item => (
                        item && (
                            <List.Item>
                                <Card title={item.name}></Card>
                            </List.Item>
                        )
                    )}
                />    
                    <br />
                    <br />
                    <Button type="primary">Known</Button>
                    <br />
                </div>
                <Button style={{ marginTop: 16 }} type="primary">
                    Configure
                </Button>
                </Col>
                <Col span={12}>
                <Statistic title="Active Users" value={2} loading />
                </Col>
            </Row>
        </div>
    )
}
export default MyStats;