import React, { useEffect } from "react";
import {
  Layout,
  Carousel,
  Row,
  Col,
  List,
  Avatar,
  Button,
  Typography,
} from "antd";
import classes from "./HomePage.module.scss";
import Footer from "../../layouts/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryCourseAct, getCourseAct } from "../../action/course";
import { ListCourse } from "../../containers/ListCourse";
import FilterCourse from "../../containers/FilterCourse";
import Logo from "../../component/Logo";
import Slider from "react-slick";
import Loading from "../../component/Loading";
import { Link } from "react-router-dom";

const { Content } = Layout;

export default function HomePage() {
  const dispatch = useDispatch();
  const stateCourse = useSelector((state) => state.CourseReducer);
  let { loading, filtercourse } = stateCourse;
  useEffect(() => {
    dispatch(getCourseAct());
  }, []);
  useEffect(() => {
    dispatch(getCategoryCourseAct());
  }, []);
  const getCourseAll = () => {
    dispatch(getCourseAct());
  };

  return (
    <Layout>
      <Content className={classes.main}>
        <section className={classes.hero}>
          <Carousel>
            <div className={classes.carousel__item}>
              <Row className={classes.carousel__item__one}>
                <Col xs={24} sm={12} md={16}>
                  <div className={classes.carousel__item__one__content}>
                    <Typography.Title
                      className={classes.carousel__item__one__t1}
                      level={5}
                    >
                      Vuejs
                    </Typography.Title>
                    <Typography.Title
                      className={classes.carousel__item__one__t2}
                      level={2}
                    >
                      Khóa Học Chất Lượng Miễn Phí Hàng Đầu
                    </Typography.Title>
                    <Typography.Text
                      className={classes.carousel__item__one__text}
                      style={{ display: "block" }}
                    >
                      Miễn phí khóa khọc cho tất cả{" "}
                    </Typography.Text>
                    <Button
                      shape="round"
                      className={classes.carousel__item__one__btn}
                    >
                      <Link to="#">Xem Thêm</Link>
                    </Button>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <div className={classes.carousel__img}>
                    <img src="./images/banner4.jpg" />
                  </div>
                </Col>
              </Row>
            </div>

            {/* <div className={classes.carousel__item}>
                <Row className={classes.carousel__item__two}>
                        <Col md={12}>
                        
                        </Col>
                        <Col md={12}>
                           <img  src="./images/banner3.jpg"/>
                        </Col>
                    </Row>
                </div> */}
          </Carousel>
        </section>

        <section className={classes.hero__bottom}>
          <Row gutter={[30, 30]}>
            <Col xs={24} sm={12} md={6}>
              <List.Item className={classes.hero__bottom__list}>
                <List.Item.Meta
                  avatar={<Avatar size={50} src="./images/policy1.png" />}
                  title={
                    <a className={classes.hero__bottom__list__link} href="#">
                      Miễn phí khóa học
                    </a>
                  }
                />
              </List.Item>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <List.Item className={classes.hero__bottom__list}>
                <List.Item.Meta
                  avatar={<Avatar size={50} src="./images/policy2.png" />}
                  title={<a href="#">Giảm Giá </a>}
                />
              </List.Item>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <List.Item className={classes.hero__bottom__list}>
                <List.Item.Meta
                  avatar={<Avatar size={50} src="./images/policy3.png" />}
                  title={<a href="#">Truy cập trọn đời</a>}
                />
              </List.Item>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <List.Item className={classes.hero__bottom__list}>
                <List.Item.Meta
                  avatar={<Avatar size={50} src="./images/policy4.png" />}
                  title={<a href="#">Hỗ trợ 24/24</a>}
                />
              </List.Item>
            </Col>
          </Row>
        </section>
        <section className={classes.course}>
          <div className={classes.course__head}>
            <h2>Tất Cả Khóa Học</h2>
          </div>
          <div className={classes.course__category}>
            <Button
              shape="round"
              onClick={() => getCourseAll()}
              style={{ backgroundColor: "#86ba09", color: "#fff" }}
            >
              Tất cả
            </Button>
            {filtercourse.map((item, index) => {
              return <FilterCourse item={item} key={index} />;
            })}
          </div>
          <div className={classes.course__content}>
            {loading ? <Loading /> : <ListCourse />}
          </div>
        </section>
        <section className={classes.client}>
          <Carousel>
            <div className={classes.client__item}>
              <div className={classes.client__item__img}>
                <Avatar size={64} src="./images/client1.jpg" shape="circle" />
              </div>
              <div className={classes.client__item__body}>
                <h2 className={classes.client__item__author}>Thiên</h2>
                <p className={classes.client__item__nghenghiep}>Designer</p>
                <p className={classes.client__item__des}>
                  Hly là một ứng dụng tuyệt vời, dành cho tất cả mọi người đều
                  có thể học được
                </p>
              </div>
            </div>
            <div className={classes.client__item}>
              <div className={classes.client__item__img}>
                <Avatar size={64} src="./images/client2.jpg" shape="circle" />
              </div>
              <div className={classes.client__item__body}>
                <h5 className={classes.client__item__author}>HanLy</h5>
                <p className={classes.client__item__nghenghiep}>student</p>
                <p className={classes.client__item__des}>
                  Hly là một ứng dụng tuyệt vời, dành cho tất cả mọi người đều
                  có thể học được
                </p>
              </div>
            </div>
          </Carousel>
        </section>

        {/* <section className={classes.newCourse}>
                  <Row gutter={[30,30]}>

                     <Col xs={24} sm={24} md={12}>
                       <div>
                            <h2 className={classes.newCourse__head}>Lượt Xem Nhiều</h2>
                        </div>
                        <List
                          itemLayout="horizontal"
                          bordered
                          dataSource={luotXemNhieu(courses)}
                          renderItem={item=>(
                            <List.Item>
                               <List.Item.Meta
                                avatar={<Avatar  size={80} shape="square" src={item.hinhAnh}/>}
                                title={<a href="#">'{item.tenKhoaHoc}</a>}
                                description={item.moTa.slice(0,50)+ '...'}
                              />
                            </List.Item>
                          )}>                          
                        </List>
                    </Col>
                    
                      <Col xs={24} sm={24} md={12}>
                         <div>
                            <h2 className={classes.newCourse__head}>Ghi Danh Nhiều Nhất</h2>
                        </div>
                        <Slider>
                        <List
                          itemLayout="horizontal"
                          bordered
                          dataSource={soLuongHocVien()}
                          renderItem={item=>(
                            <List.Item>
                               <List.Item.Meta
                                avatar={<Avatar  size={80} shape="square" src={item.hinhAnh}/>}
                                title={<a href="#">'{item.tenKhoaHoc}</a>}
                                description={item.moTa.slice(0,50)+ '...'}
                              />
                            </List.Item>
                          )}
                        >
                           
                        </List>
                        </Slider>
                    </Col>
                  
                  </Row>
             </section> */}
        <section className={classes.logo}>
          <h2>Đối Tác</h2>
          <Logo />
        </section>
      </Content>
      <Footer />
    </Layout>
  );
}
