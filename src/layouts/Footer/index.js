import { Col, Layout, Row, Typography } from "antd";
import React from "react";
import classes from "./Footer.module.scss";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Footer() {
  const stateCate = useSelector((state) => state.CourseReducer);


  
  return (
    <>
      <Layout.Footer className={classes.footer}>
        <Row gutter={[30, 30]}>
          <Col xs={24} sm={24} md={6}>
            <h2 className={classes.footer__title}>THÔNG TIN</h2>
            <Typography.Text style={{ fontSize: "1.7rem", color: "white" }}>
              HLY la doanh nghiep vua thanh lap mang den cho nhung hoc vien tro
              thanh ky su gioi nhat den cho toan the gioi
            </Typography.Text>
            <ul className={classes.footer__social__list}>
              <li>
                <a href="#">
                  <TwitterCircleFilled style={{ color: "white" }} />
                </a>
              </li>
              <li>
                <a href="#">
                  <YoutubeFilled />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramFilled />
                </a>
              </li>
              <li>
                <a href="#">
                  <FacebookFilled />
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={4}>
            <h2 className={classes.footer__title}>THỂ LOẠI</h2>
            <ul className={classes.footer__category__list}>
              {stateCate.filtercourse.map((item, index) => {
                return (
                  <Link
                  key={index}
                    style={{
                      color: "white",
                      fontFamily: "Roboto,serif",
                      fontSize: "1.8rem",
                    }}
                    to={`/category/${item.maDanhMuc}`}
                  >
                    <li className={classes.footer__category__list__item}>
                      {item.tenDanhMuc}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </Col>
          <Col xs={24} sm={24} md={7}>
            <h2 className={classes.footer__title}>CHÍNH SÁCH</h2>
            <ul className={classes.footer__category__list}>
              {stateCate.filtercourse.map((item, index) => {
                return (
                  <Link
                  key={index}
                    style={{
                      color: "white",
                      fontFamily: "Roboto,serif",
                      fontSize: "1.8rem",
                    }}
                    to={`/category/${item.maDanhMuc}`}
                  >
                    <li className={classes.footer__category__list__item}>
                      {item.tenDanhMuc}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </Col>
          <Col xs={24} sm={24} md={7}>
            <h2 className={classes.footer__title}>THEO DÕI CHÚNG TÔI</h2>
            
             <a href="https://www.facebook.com/giahan086">
               <img style={{width:'100%',height:'240px'}} src="./images/fllow.PNG"/>
             </a>
          </Col>
          <hr />
          <br></br>
        </Row>
        <div className={classes.footer__bottom}>
          <Typography.Text style={{ fontSize: "1.6rem", color: "white" }}>
            © {new Date().getFullYear()} Bản quyền thuộc về thiết kế của HLY
          </Typography.Text>
        </div>
      </Layout.Footer>
    </>
  );
}
