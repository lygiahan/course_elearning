import { Tabs, Typography } from 'antd'
import React from 'react';
import FormInfo from '../FormInfo';
import MyCourse from '../MyCourse';

let {TabPane} = Tabs;
export default function TabUser({infoUser}) {
    return (
        <Tabs defaultActiveKey="1" centered >
            <TabPane tab={<Typography.Title level={5}>Thông Tin</Typography.Title>} key="1">
                 <FormInfo infoUser={infoUser}/>
            </TabPane>
            <TabPane tab={<Typography.Title level={5}>Khóa Học Của Bạn</Typography.Title>} key="2">
                   <MyCourse infoUser={infoUser}/>
            </TabPane>
           
        </Tabs>
    )
}
