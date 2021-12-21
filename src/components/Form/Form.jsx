import React from "react"
import humanAndDogImage from "../../images/guman-and-dog.png"
import Button from "../Button"
import "./form.css"

const Form = (props) => {
  return (
    <div className="form-container">
      <div className="form-header__container">
        <div className="form-top-text">
          <h1>{props.articleText}</h1>
          <p>{props.text}</p>
        </div>
        <div className="form-top-image">
          <img src={humanAndDogImage} />
        </div>
      </div>
      <div className="form-content__container">
        <form>
          <input type="text" placeholder="Vardas" />
          <input type="text" placeholder="El. paštas" />
          <input type="text" placeholder="Tel. numeris" />
          <input type="text" placeholder="Augintinio veislė" />
          <input type="text" placeholder="Augintinio svoris" />
          <input type="text" placeholder="Augintinio amžius" />
          <input type="text" placeholder="Augintinio kailio spalva" />
          <input type="text" placeholder="Ypatingi požymiai" />
        </form>
        <div className="form-submit__container">
          <div className="form-checkbox">
            <div>
              <span>
                <input type="checkbox" />
                Patvirtinu, kad esu susipažinęs su mano asmens duomenų tvarkymu
                <u> Privatumo politikoje </u>nurodytomis sąlygomis
              </span>
            </div>
            <div>
              <span>
                kaip pvz.: maisto netoleravimas, jautrus skrandis, ligos ir pan.
              </span>
            </div>
          </div>
          <div className="form-submit">
            <div>
              <h4>Užpildę anketą laukite veterinarijos gydytojo skambučio</h4>
            </div>
            <Button text="SIŲSTI" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
