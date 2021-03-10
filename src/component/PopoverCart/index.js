import { List, Typography, Avatar, Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ghiDanh } from "../../action/user";
import { ToastCompo } from "../ToastCompo";

export default function PopoverCart(props) {
    const dispatch = useDispatch();
      const stateCart = useSelector(state => state.CartReducer);
      const stateUser = useSelector(state => state.UserReducer);
    
      let {loadingGhiDanh} = stateUser;
  

      const userAddCart =()=>{
        return  stateCart.map((item)=>{
           let tk =JSON.parse(localStorage.getItem('tk'));
           let local = localStorage.getItem('userlogin');
           let data={maKhoaHoc:item.maKhoaHoc,taiKhoan:tk};
                if(!local ){
                   ToastCompo('fail','Vui Lòng Đăng Nhập Để Ghi Danh');
                }
                else{
                   dispatch(ghiDanh(data));
                }
           })
   }
  return (
    <div style={{ width: "300px", }}>
      <div style={{overflow:'auto',height:200}}>
      <Typography.Title level={5}>
        {props.stateCart.length} Khóa học:
      </Typography.Title>
      <List
        dataSource={props.stateCart}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size={40} shape="square" src={item.hinhAnh} />}
              title={
                <Link to={`/detail/${item.maKhoaHoc}`}>{item.tenKhoaHoc}</Link>
              }
              description={
                <div>
                  {item.moTa.slice(0, 30) + "..."}
                  <div
                    style={{ padding: "0" }}
                  >
                    <span>
                      <Typography.Text delete>2.000.000đ</Typography.Text>
                    </span>
                    <span style={{ marginLeft: 8 }}>
                      <Typography.Text mark strong>
                        Miễn phí
                      </Typography.Text>
                    </span>
                  </div>{" "}
                </div>
              }
            />
          </List.Item>
        )}
      />
      </div>
      <hr></hr>
      <h2>Tổng tiền tạm tính: 0.00đ</h2>
      <Button type="primary"
       style={{border:'none',fontSize:'18px',width:'100%',backgroundColor:'#86ba01'}}
       onClick={()=>userAddCart()}
       loading={loadingGhiDanh}>Tiến hành thanh toán</Button>
    </div>
  );
}
