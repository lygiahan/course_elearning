import React, { Fragment } from 'react'
import {Table} from 'antd'
export default function MyCourse({infoUser}) {
    console.log(infoUser);
    let {chiTietKhoaHocGhiDanh} = infoUser;


    const columns = [
        {
          title:'Mã Khóa Học',
          dataIndex:'maKhoaHoc'
        },
        {
            title:'Tên Khóa Học',
            dataIndex:'tenKhoaHoc'
        }
    ]
    return (
        <Fragment>
            <Table dataSource={chiTietKhoaHocGhiDanh} columns={columns} rowKey={e=>e.taiKhoan}></Table>
        </Fragment>
    )
}
