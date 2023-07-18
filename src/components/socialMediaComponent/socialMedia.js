/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { SocialMedia } from "../../data";
import arrow from "../../assets/right_arrow.png";
import "./socialMedia.css";

export function SocialMediaComponent() {
    return (
        <div className="socialMediaComponent">
            <div className="socialMediaComponent_name">
                <h1
                    className="socialMediaComponent_name_header"
                    // style={{ backgroundColor: "red" }}
                >
                    Rohit Kumar
                </h1>
                <div className="socialMediaComponent_resume_container">
                    <a
                        className="socialMediaComponent_resume"
                        // style={{ backgroundColor: "red" }}
                        href="https://drive.google.com/file/d/1cTfvWfCAc32uxBVI8UBOw1-VNffI1Xh5/view"
                    >
                        <span>View Resume</span>
                        <img
                            className="socialMediaComponent_arrow"
                            width={20}
                            height={20}
                            src={arrow}
                            alt=""
                        />
                    </a>
                </div>
            </div>

            <div className="socialMediaComponent_logos">
                {SocialMedia.map((data) => {
                    return (
                        <a href={data.link} target="_blank" rel="noreferrer">
                            <div className="socialMediaComponent_logo">
                                <img
                                    title={data.name}
                                    style={{
                                        marginLeft: data.marginLeft,
                                        // filter: " invert(67%) sepia(5%) saturate(2164%) hue-rotate(178deg) brightness(92%) contrast(83%)",
                                    }}
                                    width={data.logo_width}
                                    height={data.logo_height}
                                    src={data.logo}
                                />
                                {/* <span>{data.name}</span> */}
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
