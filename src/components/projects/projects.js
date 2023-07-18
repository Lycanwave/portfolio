import React from "react";
import { Projectsdata } from "../../data";
import codeImage from "../../assets/newCodeImage.svg";
import "./project.css";

function solve(data) {
    return (
        <span>
            {data.map((item) => {
                return (
                    <>
                        {item[0][0] === "#" ? (
                            <b style={{ color: "rgb(133,156,192)" }}>
                                {" "}
                                {item[0].substr(1)}{" "}
                            </b>
                        ) : (
                            item[0]
                        )}
                    </>
                );
            })}
        </span>
    );
}

export function Projects() {
    return (
        <div className="Project">
            {Projectsdata.map((data) => {
                return (
                    <div className="Project_section">
                        <div>
                            <span className="project_duration">
                                {" "}
                                {data.duration}
                            </span>
                        </div>

                        <div className="project_body">
                            <div className="project_body_header">
                                <span style={{ fontWeight: "600" }}>
                                    {data.name}
                                </span>
                                <a
                                    style={{
                                        marginLeft: "10px",
                                        backgroundColor: "white",
                                        borderRadius: "15px",
                                        paddingTop: "6px",
                                        paddingLeft: "3px",
                                        paddingRight: "3px",
                                    }}
                                    href={data.sourceCode}
                                >
                                    <img
                                        width={20}
                                        height={20}
                                        src={codeImage}
                                        alt=""
                                    />
                                </a>
                                {data.deployedLink ? (
                                    <a
                                        style={{
                                            marginLeft: "10px",
                                            color: "white",
                                        }}
                                        href={data.deployedLink}
                                    >
                                        Deployed Link
                                    </a>
                                ) : (
                                    <div></div>
                                )}
                            </div>

                            <div className="project_description">
                                <ul>
                                    {data.description.map((item) => {
                                        return (
                                            <li
                                                style={{
                                                    color: "rgb(133,156,192)",
                                                }}
                                            >
                                                {solve(item)}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            <div
                                className="project_framework"
                                style={{ display: "flex" }}
                            >
                                {data.frameWork.map((item) => {
                                    return (
                                        <div className="Project_frameWork_button">
                                            {item}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <br />
                    </div>
                );
            })}
        </div>
    );
}
