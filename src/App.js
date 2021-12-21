import "./App.css"
import Form from "./components/Form/Form"
import Header from "./components/Header/Header"
import Information from "./components/Information/Information"

function App() {
  return (
    <div className="main-content__container">
      <Header
        questionText="Ar jūsų augintinio mityba visavertė?"
        articleText="Registruokitės į nemokamą konsultaciją"
        text="Pavasaris ne tik džiugina ilgėjančiomis dienomis, bet ir siūlo pasirūpinti sveikata. Per žiemą išsekęs organizmas siunčia pirmuosius signalus apie vitaminų, mikroelementų ir maisto medžiagų stygių. Įprasta tokiu metu peržvelgti savo mitybos racioną ir jį papildyti naudingų daržovių bei maisto papildų. Kaip dažnai tyrinėjate savo augintinio mitybą?"
      />
      <Information
        articleText="Pagrindinės nevisavertės mitybos priežastys"
        articleInformation="Įprasta manyti, kad nevisavertę keturkojo mitybą lemia prastas maistas, bet tai ne visada tiesa. Dažniausiai svarbūs vienas ar keli iš šių faktorių:"
      />
      <Form
        articleText="Anketa"
        text="veterinaro konsultacijai dėl subalantuosos augintinio mitybos"
      />
    </div>
  )
}

export default App
