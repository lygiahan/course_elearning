import { Checkbox } from 'antd'
import React from 'react'

export default function SidebarType({item,index}) {
    return (
              <Checkbox  key={index} value={item.maDanMuc}>
                      <span style={{fontSize:18}}>{item.tenDanhMuc}</span>
                </Checkbox>
            
    )
}
