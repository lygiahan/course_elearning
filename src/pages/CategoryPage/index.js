import React, { useEffect, useState } from "react";
import classes from "./Category.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Row, Typography } from "antd";
import { getCourseAct, getCoursePagi } from "../../action/course";
import SidebarAuthor from "../../component/SidebarAuthor";
import { Checkbox, Col } from "antd";
import { ListCourse } from "../../containers/ListCourse";
import CategoryListAll from "../../component/CategoryListAll";
import axios from "axios";
import Pagination from "../../component/Paginati";
import Paginati from "../../component/Paginati";

const { Header, Footer, Sider, Content } = Layout;

export default function CategoryPage() {
  const dispatch = useDispatch();
  const stateCourse = useSelector((state) => state.CourseReducer);
  const [curentPage, setCurentPage] = useState(1);
  console.log(stateCourse);

  useEffect(() => {
    dispatch(getCourseAct());
  }, []);

  let newSetSidebar = [
    ...new Set(stateCourse.courses.map((item) => item.nguoiTao.hoTen)),
  ];
  function onChange(value) {
    console.log(`checked = ${value}`);
  }

  useEffect(() => {
    dispatch(getCoursePagi(curentPage));
  }, [curentPage]);

  const onChangePage = page => {
    console.log(page);
     setCurentPage(page)
  };

  return (
    <div style={{ backgroundColor: "#F4F4F4", padding: "5rem" }}>
      <Layout className={classes.layout}>
        <Sider className={classes.layout_sidebar} width={300}>
          <div>
            <Typography.Title level={3} style={{ textTransform: "uppercase" }}>
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
          <div>
            <Typography.Title level={3} style={{ textTransform: "uppercase" }}>
              Loại khóa học
            </Typography.Title>
          </div>
        </Sider>
        <Content style={{ backgroundColor: "#eeeeee" }}>
          <section className={classes.categoryPage}>
             <h2>Tat ca san pham</h2>
            <Row gutter={[16,16]}>
              {stateCourse.paginateCourse.map((course, index) => {
                return (
                  <Col md={8}>
                     <CategoryListAll course={course} index={index} />
                  </Col>
                );
              })}
            </Row>
            {/* <Pagination onChange={onChangePage} curentPage={curentPage}/> */}
            <Paginati onChange={onChangePage} curentPage={curentPage}/>
          </section>
        </Content>
      </Layout>
    </div>
  );
}
