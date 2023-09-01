import { useState } from "react"
import "./App.css"
import ConjuntosArmas from "./components/Armas/ConjuntoArmas/ConjuntoArmas"
import ConjuntosFerramentasBase from "./components/FerramentasBase/ConjuntoFerramentasBase/ConjuntoFerramentasBase"
import ConjuntoVarasDePesca from "./components/VarasDePesca/ConjuntoVarasDePesca/ConjuntoVarasDePesca"

function App() {

  const [ activeTab, setActiveTab ] = useState("Tab 1")

  function handleChangeTab(tabName) {
    setActiveTab(tabName)
  }

  function renderTabContent() {
    switch(activeTab) {
      case "Tab 1":
        return <ConjuntosArmas tipoitem="espadas" />
      case "Tab 2":
        return <ConjuntosArmas tipoitem="adagas" />
      case "Tab 3":
        return <ConjuntosArmas tipoitem="clavas" />
      case "Tab 4":
        return <ConjuntosFerramentasBase tipoitem="enxadas" />
      case "Tab 5":
        return <ConjuntosFerramentasBase tipoitem="picaretas" />
      case "Tab 6":
        return <ConjuntosFerramentasBase tipoitem="machados" />
      case "Tab 7":
        return <ConjuntosFerramentasBase tipoitem="regadores" />
      case "Tab 8":
        return <ConjuntosFerramentasBase tipoitem="lixeiras" />  
      case "Tab 9":
        return <ConjuntoVarasDePesca tipoitem="varas-de-pesca" />  
    }
  }

  return (
    <>
      <h1>Lista de Armas e Ferramentas - Stardew Valley</h1>
      
      <section className="knockout_table">
        
        <div className="tabs">
          <button
            className={ activeTab === "Tab 1" ? "active" : "" }
            onClick={() => handleChangeTab("Tab 1")}
          >
            Espadas
          </button>
          <button
            className={ activeTab === "Tab 2" ? "active" : "" }
            onClick={() => handleChangeTab("Tab 2")}
          >
            Adagas
          </button>
          <button
            className={ activeTab === "Tab 3" ? "active" : "" }
            onClick={() => handleChangeTab("Tab 3")}
          >
            Clavas
          </button>
          <button
            className={ activeTab === "Tab 4" ? "active" : "" }
            onClick={() => handleChangeTab("Tab 4")}
          >
            Enxadas
          </button>
          <button
            className={ activeTab === "Tab 5" ? "active" : "" }
            onClick={() => handleChangeTab("Tab 5")}
          >
            Picaretas
          </button>
          <button
            className={ activeTab === "Tab 6" ? "active" : "" }
            onClick={() => handleChangeTab("Tab 6")}
          >
            Machados
          </button>
          <button
            className={ activeTab === "Tab 7" ? "active" : "" }
            onClick={() => handleChangeTab("Tab 7")}
          >
            Regadores
          </button>
          <button
            className={ activeTab === "Tab 8" ? "active" : "" }
            onClick={() => handleChangeTab("Tab 8")}
          >
            Lixeiras
          </button>
          <button
            className={ activeTab === "Tab 9" ? "active" : "" }
            onClick={() => handleChangeTab("Tab 9")}
          >
            Varas de Pesca
          </button>
        </div>

        <div className="tab_content">
          { renderTabContent() }
        </div>

      </section>

    </>
  )
}

export default App