
import {instance} from '../config'


export const getCourseSer =()=>{
    return instance.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01');
}

export const getCategorySer =()=>{
    return instance.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc');
}

export const filterCourseSer=(madanhmuc)=>{
    return instance.get(`api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${madanhmuc}&MaNhom=GP01`);
}

export const detailCourseSer =(makhoahoc)=>{
    return instance.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${makhoahoc}`);
}

export const searchCourse=(makhoahoc)=>{
    return instance.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${makhoahoc}`);
}

export const getCoursePagiSer = (page)=>{
    return instance.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=10&MaNhom=GP01`)
}