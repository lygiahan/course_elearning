import { Space, Spin } from 'antd'
import React from 'react'

export default function Loading() {
    return (
        <div style={{textAlign:'center'}}>
            <Space size="middle" >
                <Spin size="large">

                </Spin>
            </Space>
        </div>
    )
}
