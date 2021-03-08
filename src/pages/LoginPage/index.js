import React, { Fragment } from "react";
import { Typography, Row, Col } from "antd";
import classes from "./LoginPage.module.scss";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginAct } from "../../action/user";
import Footer from "../../layouts/Footer";
export default function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (value) => {
      dispatch(loginAct(value, history));
    },
  });

  return (
    <Fragment>
      <section className={classes.login}>
        <div style={{ backgroundColor: "#ffffff", padding: "2rem",borderRadius:15  }}>
          <Row>
            <Col md={24}>
              <h1 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                Đăng Nhập Tài Khoản
              </h1>
              <p style={{ fontSize: "1.8rem" }}>
                Bạn chưa có tài khoản? Đăng ký{" "}
                <Link
                  style={{ color: "#86ba01", fontWeight: "bold" }}
                  to="/register"
                >
                  tại đây
                </Link>
              </p>
            </Col>
          </Row>
          <hr style={{border:' 1px solid #eeeeee'}}></hr>
          <div className={classes.login_content}>
            <div className={classes.form}>
              <form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col xs={24} sm={24} md={24}>
                    <label htmlFor="taiKhoan">
                      <Typography.Text>Tài Khoản</Typography.Text>
                    </label>
                  </Col>
                  <Col xs={24} sm={24} md={24}>
                    <input
                      name="taiKhoan"
                      type="text"
                      placeholder={'Tài khoản'}
                      onChange={formik.handleChange}
                      value={formik.values.taiKhoan}
                    />
                  </Col>

                  <Col xs={24} sm={24} md={24} className={classes.text__mk}>
                    <label htmlFor="matKhau">
                      <Typography.Text>Mật Khẩu</Typography.Text>
                    </label>
                  </Col>
                  <Col xs={24} sm={24} md={24}>
                    <input
                      name="matKhau"
                      placeholder="Mật khẩu"
                      type="password"
                      onChange={formik.handleChange}
                      value={formik.values.matKhau}
                    />
                  </Col>
                  <Col xs={24} sm={24} md={24} className={classes.btnadd}>
                    <button type="submit" className={classes.form__btnadd}>
                      <Typography.Text>Đăng Nhập</Typography.Text>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}
