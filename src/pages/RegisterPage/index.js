import React, { Fragment, useEffect } from "react";
import classes from "./RegisterPage.module.scss";
import { useDispatch } from "react-redux";
import { Typography, Row, Col } from "antd";
import { registerAct } from "../../action/user";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getUserAct } from "../../action/admin";
import Footer from "../../layouts/Footer";
import { Link, useHistory } from "react-router-dom";

export default function RegisterPage() {

  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAct());
  }, []);
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: "GP01",
      email: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .max(15, "Bạn đã nhập quá 15 ký tự")
        .required("Vui lòng nhập đầy đủ"),
      matKhau: Yup.string()
        .max(15, "Bạn đã nhập quá 15 ký tự")
        .required("Vui lòng nhập đầy đủ"),
      hoTen: Yup.string()
        .max(15, "Bạn đã nhập quá 15 ký tự")
        .required("Vui lòng nhập đầy đủ"),
      soDT: Yup.string().required("Vui lòng nhập đầy đủ"),
      email: Yup.string()
        .email("địa chỉ email không hợp lệ")
        .required("Vui lòng nhập đầy đủ"),
    }),
    onSubmit: (value) => {
      dispatch(registerAct(value,history));
    },
  });

  return (
    <Fragment>
      <section className={classes.register}>
        <div style={{ backgroundColor: "#ffffff", padding: "2rem",borderRadius:15 }}>
          <Row>
            <Col md={24}>
              <h1 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                Đăng Ký Tài Khoản
              </h1>
              <p style={{ fontSize: "1.8rem" }}>
                Bạn đã có tài khoản? Đăng nhập{" "}
                <Link
                  style={{ color: "#86ba01", fontWeight: "bold" }}
                  to="/login"
                >
                  tại đây
                </Link>
              </p>
            </Col>
          </Row>
          <hr style={{border:' 1px solid #eeeeee'}}></hr>
          <div className={classes.register_content}>
            <div className={classes.form}>
              <form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col xs={24} sm={24} md={24}>
                    <label htmlFor="taiKhoan">Tài Khoản</label>
                  </Col>
                  <Col xs={24} sm={24} md={24}>
                    <input
                      name="taiKhoan"
                      type="text"
                      placeholder="Tài khoản"
                      onChange={formik.handleChange}
                      value={formik.values.taiKhoan}
                    />
                    {formik.errors.taiKhoan ? (
                      <Typography.Text type="danger">
                        {formik.errors.taiKhoan}
                      </Typography.Text>
                    ) : null}
                  </Col>

                  <Col xs={24} sm={24} md={24}>
                    <label htmlFor="matKhau">Mật Khẩu</label>
                  </Col>
                  <Col xs={24} sm={24} md={24}>
                    <input
                      name="matKhau"
                      type="password"
                      placeholder="Mật khẩu"
                      onChange={formik.handleChange}
                      value={formik.values.matKhau}
                    />
                    {formik.errors.matKhau ? (
                      <Typography.Text>
                        {" "}
                        {formik.errors.matKhau}
                      </Typography.Text>
                    ) : null}
                  </Col>

                  <Col xs={24} sm={24} md={24}>
                    <label htmlFor="hoTen">Họ Tên</label>
                  </Col>
                  <Col xs={24} sm={24} md={24}>
                    <input
                      name="hoTen"
                      type="text"
                      placeholder="Họ Tên"
                      onChange={formik.handleChange}
                      value={formik.values.hoTen}
                    />
                    {formik.errors.hoTen ? (
                      <Typography.Text type="danger">
                        {formik.errors.hoTen}
                      </Typography.Text>
                    ) : null}
                  </Col>

                  <Col xs={24} sm={24} md={24}>
                    <label htmlFor="soDT">Số Điện Thoại</label>
                  </Col>
                  <Col xs={24} sm={24} md={24}>
                    <input
                      name="soDT"
                      type="text"
                      placeholder="Số điện thoại"
                      onChange={formik.handleChange}
                      value={formik.values.soDT}
                    />
                    {formik.errors.soDT ? (
                      <Typography.Text type="danger">
                        {formik.errors.soDT}
                      </Typography.Text>
                    ) : null}
                  </Col>

                  <Col xs={24} sm={24} md={24}>
                    <label htmlFor="maNhom">Mã Nhóm</label>
                  </Col>
                  <Col xs={24} sm={24} md={24}>
                    <select
                      value={formik.values.maNhom}
                      name="maNhom"
                      onChange={formik.handleChange}
                    >
                      <option value="GP01">GP01</option>
                      <option value="GP02">GP02</option>
                      <option value="GP03">GP03</option>
                      <option value="GP04">GP04</option>
                      <option value="GP05">GP05</option>
                      <option value="GP06">GP06</option>
                      <option value="GP07">GP07</option>
                      <option value="GP08">GP08</option>
                      <option value="GP09">GP09</option>
                    </select>
                  </Col>

                  <Col xs={24} sm={24} md={24}>
                    <label htmlFor="email">Email</label>
                  </Col>
                  <Col xs={24} sm={24} md={24}>
                    <input
                      name="email"
                      type="text"
                      placeholder="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email ? (
                      <Typography.Text type="danger">
                        {formik.errors.email}
                      </Typography.Text>
                    ) : null}
                  </Col>

                  <Col xs={24} sm={24} md={24} className={classes.form__btn}>
                    <button type="submit" className={classes.form__btn__add}>
                      <Typography.Text>Đăng Ký</Typography.Text>
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
