import React from "react";
import { WorkExperience } from "../../data";
import "./workExperience.css";

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
export function WorkExp() {
    return (
        <div className="WorkExperience">
            {WorkExperience.map((data) => {
                return (
                    <div className="WorkExperience_section">
                        <span className="WorkExperience_duration">
                            {data.duration}
                        </span>
                        <div className="WorkExperience_body">
                            <span style={{ fontWeight: "600" }}>
                                <span> {data.title} </span>
                                <span>{"~ " + data.companyName}</span>
                            </span>
                            <ul>
                                {data.description.map((temp) => {
                                    // console.log(temp.description);
                                    return (
                                        <li
                                            style={{
                                                color: "rgb(131,151,189)",
                                            }}
                                        >
                                            {solve(temp)}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
