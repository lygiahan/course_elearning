import { Checkbox, Col, Row } from "antd";
import React from "react";
import classes from "./SidebarAuthor.module.scss";

export default function SidebarAuthor({ course,index }) {


  return (               
    <div className={classes.sidebarAuthor}>    
                <Checkbox  key={index} value={course}>
                      <span style={{fontSize:18}}>{course}</span>
                </Checkbox>
            
    </div>
  );
}
