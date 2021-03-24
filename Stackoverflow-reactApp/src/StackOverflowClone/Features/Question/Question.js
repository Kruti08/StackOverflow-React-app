import React from 'react'
import img_s from "./stack.png"
import './Question.css'
import { Link } from 'react-router-dom'

const Question = props => {
  //  console.log(props.data)
    return (
        <div className="main_div" style={{ display: "flex" }} align="left">
            <div className="stats_div" style={{ display: "block", flex: "10%", textAlign: "center", color: "#6a737c" }}>
                <div>
                    <div>{props.data.view_count}</div>
                    <div style={{ fontSize: "11px" }}>votes</div>
                </div>
                <div style={{ background: "#48a868", width: "65px", height: "60px", marginLeft: "10px", color: "#fff", borderRadius: "4%" }}>
                    <div style={{ paddingTop: "10px" }}>{props.data.answer_count}</div>
                    <div style={{ fontSize: "14px" }}>answers</div>
                </div>
                <div style={{ color: "#f48024", fontSize: "11px", paddingTop: "5px" }}>
                    <span>{props.data.view_count} </span>views
             </div>
            </div>
            <div style={{ flex: "90%", marginLeft: "10px" }}>
                <div style={{ color: "#0077cc" }}>
                    {props.data.title}
                </div>
                <div >
                    {/* {props.data.body} */}
                </div>
                <div style={{ display: "flex" }}>
                    {props.data.tags.map(function (item, i) {
                        return (
                            <p style={{ color: "#39739d", marginLeft: "5px", background: "#e1ecf4", fontSize: "12px" }} > {item} </p>
                        )
                    })
                    }

                </div>

                <Link to={`/user/${props.data.owner.user_id}`}>
                    <div style={{ textAlign: "right" }}>
                        <img src={props.data.owner.profile_image} style={{ width: "45px" }}
                            alt="Modi"
                        ></img>
                        {props.data.owner.display_name}
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Question
