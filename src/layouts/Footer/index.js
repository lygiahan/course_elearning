import { Col, Layout, Row, Typography } from 'antd'
import React from 'react'
import classes  from './Footer.module.scss';
import {FacebookFilled, InstagramFilled, TwitterCircleFilled, YoutubeFilled} from '@ant-design/icons'
export default function Footer() {
    return (
        <>
                  <Layout.Footer className={classes.footer}>
                        <Row gutter={[30,30]} >
                            <Col xs={24} sm={24} md={6}>
                                 <h2 className={classes.footer__title}>THÔNG TIN</h2>
                                 <Typography.Text style={{fontSize:'1.7rem'}}>HLY la doanh nghiep vua thanh lap mang den cho nhung hoc vien tro thanh ky su gioi nhat den cho toan the gioi</Typography.Text>
                                      <ul className={classes.footer__social__list}>
                                           <li>
                                             <a href="#">
                                                   <TwitterCircleFilled />
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
                                     <li className={classes.footer__category__list__item}>
                                     <a className={classes.footer__category__list__item__link} href="#">Lập trình Backend</a></li>
                                     <li className={classes.footer__category__list__item}>
                                     <a className={classes.footer__category__list__item__link} href="#">Thiết kế web</a></li>
                                     <li className={classes.footer__category__list__item}>
                                     <a className={classes.footer__category__list__item__link} href="#">Lập trình di động</a></li>
                                     <li className={classes.footer__category__list__item}>
                                     <a className={classes.footer__category__list__item__link} href="#">Lập trình Front end</a></li>
                                     <li className={classes.footer__category__list__item}>
                                     <a className={classes.footer__category__list__item__link} href="#">Lập trình Full Stack</a></li>
                                     <li className={classes.footer__category__list__item}>
                                     <a className={classes.footer__category__list__item__link} href="#">Tư duy lập trình</a></li>
                                 </ul>
                            </Col>
                            <Col xs={24} sm={24} md={7}>
                            <h2 className={classes.footer__title}>ĐỊA CHỈ</h2>
                           <div>
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6463073028726!2d106.68072771428736!3d10.838355961012422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529c031531d3b%3A0x1331a4feffc094a1!2zNDk2LzEvMzMgRMawxqFuZyBRdeG6o25nIEjDoG0sIFBoxrDhu51uZyA2LCBHw7IgVuG6pXAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1608657349483!5m2!1svi!2s" width="100%" height="230" frameborder="0"  tabindex="0"></iframe>
                           </div>
                            </Col>
                            <Col xs={24} sm={24}  md={7}>
                            <h2 className={classes.footer__title}>FACE BOOK</h2>
                                 <p>
                                 <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNh%25C3%25A0-ngh%25E1%25BB%2589-Kh%25C3%25A1nh-Linh-KDL-C%25E1%25BB%2595-Th%25E1%25BA%25A1ch-Tuy-Phong-B%25C3%25ACnh-Thu%25E1%25BA%25ADn-104828821448105&tabs=timeline&width=340&height=350px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="230px" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                                 </p>
                            </Col>
                            <hr/>
                             <br></br>
                        </Row>
                        <div className={classes.footer__bottom}>
                             <Typography.Text style={{fontSize:'1.6rem'}}>© {new Date().getFullYear()} Bản quyền thuộc về thiết kế của HLY</Typography.Text>
                        </div>
                  </Layout.Footer>
       </>
    )
}
