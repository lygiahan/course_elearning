import React, { useEffect, useState } from "react";
import classes from "./Category.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Row, Typography, Card, Button } from "antd";
import { EyeOutlined, StarFilled, TeamOutlined } from "@ant-design/icons";

import {
  checkAuthorAct,
  checkTypeCourseAct,
  getCategoryCourseAct,
  getCourseAct,
  getCoursePagi,
} from "../../action/course";
import SidebarAuthor from "../../component/SidebarAuthor";
import { Checkbox, Col } from "antd";
import CategoryListAll from "../../component/CategoryListAll";
import axios from "axios";
import Footer from "../../layouts/Footer";
import Paginati from "../../component/Paginati";
import Loading from "../../component/Loading";
import SidebarType from "../../component/SidebarType";
import { addCart } from "../../action/cart";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default function CourseAllPage() {
  const dispatch = useDispatch();
  const stateCourse = useSelector((state) => state.CourseReducer);
  const [curentPage, setCurentPage] = useState(1);

  let newSetSidebar = [
    ...new Set(stateCourse.courses.map((item) => item.nguoiTao.hoTen)),
  ];
  function onChange(value) {
    dispatch(checkAuthorAct(value));
  }

  function onChangeType(value) {
    if (value.target.checked) {
      dispatch(checkTypeCourseAct(value.target.value));
    }
  }

  const onChangePage = (page) => {
    setCurentPage(page);
  };

  useEffect(() => {
    dispatch(getCoursePagi(curentPage));
  }, [curentPage]);

  useEffect(() => {
    dispatch(getCourseAct());
  }, []);

  useEffect(() => {
    dispatch(getCategoryCourseAct());
  }, []);

  const addToCard = (data) => {
    dispatch(addCart(data));
  };

  if (stateCourse.loadingpaginate) {
    return <Loading />;
  }
  let local = JSON.parse(localStorage.getItem('recentCourse'));
  return (
    <>
      <div style={{ backgroundColor: "#F4F4F4", padding: "5rem" }}>
        <Layout className={classes.layout}>
          <Sider className={classes.layout_sidebar} width={300}>
            <div className={classes.layout_sidebar_content}>
            <Typography.Title
                  level={3}
                  style={{ textTransform: "uppercase" }}
                >
                  Loại khóa học
                </Typography.Title>

                <Row>
               
                  <Col md={24}>
                    <Checkbox key={1} onChange={onChangeType} value={"BackEnd"}>
                      <span style={{ fontSize: 18 }}>
                        {"Lập trình Backend"}
                      </span>
                    </Checkbox>
                  </Col>
                  <Col md={24}>
                    <Checkbox key={2} onChange={onChangeType} value={"Design"}>
                      <span style={{ fontSize: 18 }}>{"Thiết kế web"}</span>
                    </Checkbox>
                  </Col>
                  <Col md={24}>
                    <Checkbox key={3} onChange={onChangeType} value={"DiDong"}>
                      <span style={{ fontSize: 18 }}>
                        {"Lập trình di động"}
                      </span>
                    </Checkbox>
                  </Col>
                  <Col md={24}>
                    <Checkbox
                      key={4}
                      onChange={onChangeType}
                      value={"FrontEnd"}
                    >
                      <span style={{ fontSize: 18 }}>
                        {"Lập trình Frontend"}
                      </span>
                    </Checkbox>
                  </Col>
                  <Col md={24}>
                    <Checkbox
                      key={5}
                      onChange={onChangeType}
                      value={"FullStack"}
                    >
                      <span style={{ fontSize: 18 }}>
                        {"Lập trình FullStack"}
                      </span>
                    </Checkbox>
                  </Col>
                  <Col md={24}>
                    <Checkbox key={6} onChange={onChangeType} value={"TuDuy"}>
                      <span style={{ fontSize: 18 }}>{"Lập trình Tư Duy"}</span>
                    </Checkbox>
                  </Col>
                </Row>
                <hr style={{ margin: "1.5rem 0", border: "1px solid #eee" }}></hr>

              <Typography.Title
                level={3}
                style={{ textTransform: "uppercase" }}
              >
                Tác giả
              </Typography.Title>
              <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
                <Row>
                  {newSetSidebar.map((course, index) => {
                    return (
                      <Col
                        md={24}
                        className={
                          course
                            ? classes.sidebarAuthor_true
                            : classes.sidebarAuthor_false
                        }
                      >
                        <SidebarAuthor course={course} index={index} />
                      </Col>
                    );
                  })}
                </Row>
              </Checkbox.Group>
             
            </div>
          </Sider>

          <Content style={{ backgroundColor: "#eeeeee" }}>
            <section className={classes.categoryPage}>
              <Typography.Title
                style={{ marginBottom: 30 }}
                underline
                level={2}
              >
                TẤT CẢ SẢN PHẨM
              </Typography.Title>
              <Row gutter={[16, 16]}>

                {stateCourse.paginateCourse.length>0?stateCourse.paginateCourse.map((course, index) => {
                  return (
                    <Col col={8} sm={12} md={8}>
                      <CategoryListAll course={course} index={index} />
                    </Col>
                  );
                }):<Typography.Title level={2} >Không tìm thấy khóa học nào</Typography.Title>}
              </Row>
              {/* <Pagination onChange={onChangePage} curentPage={curentPage}/> */}
              <Paginati onChange={onChangePage} curentPage={curentPage} />
            </section>
          </Content>
        </Layout>
        <section className={classes.course_seen}>
          <Typography.Title level={2}>Khóa học đã xem</Typography.Title>
          <hr style={{ margin: "1rem 0", border: "1px solid #eee" }}></hr>
          <Row gutter={[16,16]}>
            {local ? local.map((recent, index) => {
              return (
                <Col md={6} key={index}>
                  <Link to={`detail/${recent.maKhoaHoc}`}>
                    <Card
                      className={classes.course}
                      bordered={false}
                      hoverable
                      cover={
                        <img
                          style={{
                            height: 180,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                            objectFit: "cover",
                          }}
                          src={recent.hinhAnh}
                        />
                      }
                    >
                      <Card.Meta
                        className={classes.course__detail}
                        title={
                          <h2 className={classes.course__title}>
                            {recent.tenKhoaHoc}
                          </h2>
                        }
                        description={
                          <div className={classes.course__detail__body}>
                            <p>{recent.moTa.slice(0, 50) + "..."}</p>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: 0,
                              }}
                            >
                              <p>
                                <EyeOutlined /> {recent.luotXem}
                              </p>
                              <p>
                                <TeamOutlined /> ({recent.soLuongHocVien})
                              </p>
                            </div>
                            <div
                              className={classes.course__detail__body__detail}
                            >
                              <ul className={classes.icon__list}>
                                <li>
                                  <StarFilled />
                                </li>
                                <li>
                                  <StarFilled />
                                </li>
                                <li>
                                  <StarFilled />
                                </li>
                                <li>
                                  <StarFilled />
                                </li>
                                <li>
                                  <StarFilled />
                                </li>
                              </ul>
                              <div
                                style={{ padding: "0" }}
                                className={classes.detail__mobi}
                              >
                                <span>
                                  <Typography.Text delete>
                                    2.000.000đ
                                  </Typography.Text>
                                </span>
                                <span style={{ marginLeft: 8 }}>
                                  <Typography.Text mark strong>
                                    Miễn phí
                                  </Typography.Text>
                                </span>
                              </div>
                            </div>
                            <div className={classes.course__detail__btn}>
                              <Link to="/category/All">
                                <Button
                                  onClick={() => addToCard(recent)}
                                  className={classes.course__detail__btnadd}
                                >
                                  Thêm
                                </Button>
                              </Link>
                            </div>
                          </div>
                        }
                      ></Card.Meta>
                    </Card>
                  </Link>
                </Col>
              );
            }):[]}
          </Row>
        </section>
      </div>
      <Footer />
    </>
  );
}
