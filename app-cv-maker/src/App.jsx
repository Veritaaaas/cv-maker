import Resume from "./Resume"
import General_information from "./General_information"
import Education from "./Education"
import Work_experience from "./Work_experience"

function App() {
  return (
    <div className="content">
      <div className="input-container">
        <General_information />
        <Education />
        <Work_experience />
      </div>
      <div className="output-container">
        <Resume />
      </div>
    </div>
  )
}

export default App
