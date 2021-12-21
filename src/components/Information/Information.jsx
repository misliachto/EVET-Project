import React from "react"
import "./information.css"
import { imageItems } from "./InformationImages"
import InformationBottom from "./InformationBottom"

const Information = (props) => {
  return (
    <>
      <div className="information-content__container">
        <div className="information-content-top__container">
          <div className="information-content-top-text">
            <h1>{props.articleText}</h1>
            <p>{props.articleInformation}</p>
          </div>
          <div className="information-content-images__container">
            {imageItems.map((item) => {
              return (
                <div key={item.id} className="information-content-image">
                  <img src={item.src} />
                  <p>{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="information-content-bottom__container">
          <InformationBottom />
        </div>
      </div>
      <div className="bottom-underline" />
    </>
  )
}

export default Information
