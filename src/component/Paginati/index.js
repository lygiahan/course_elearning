import { Pagination } from 'antd'
import React from 'react'

export default function Paginati({onChange,curentPage}) {
    console.log(onChange,curentPage);
    return (
        <Pagination style={{textAlign:'center'}} current={curentPage} onChange={onChange} total={30} />
    )
}
