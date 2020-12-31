import { List, Typography ,Avatar} from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';

export default function PopoverCart(props) {
    return (
        <div style={{width:'300px'}}>
            <Typography.Title level={5} >{props.stateCart.length} Khóa học:</Typography.Title>
            <List
                dataSource={props.stateCart}
                bordered
                renderItem={item => (
                <List.Item>
                <List.Item.Meta
                avatar={<Avatar size={40} shape="square" src={item.hinhAnh} />}
                title={<Link to={`/detail/${item.maKhoaHoc}`}>{item.tenKhoaHoc}</Link>}
                description= {item.moTa.slice(0,30)+ '...'}
                />
            </List.Item>
    )}
  />
        </div>
    )
}
