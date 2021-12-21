import React from "react"
import dogImg from "../../images/dog.png"
import "./header.css"

const Header = (props) => {
  return (
    <header className="header-content__container">
      <div className="header-image__container">
        <img className="header-img" src={dogImg} />
      </div>
      <div className="header-text__container">
        <h1 className="header-text__article">{props.questionText}</h1>
        <h3> {props.articleText}</h3>
        <p>{props.text}</p>
      </div>
    </header>
  )
}

export default Header
