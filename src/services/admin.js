import { instance } from "../config"



export const getUserSer = ()=>{
    return instance.get('/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01');
}