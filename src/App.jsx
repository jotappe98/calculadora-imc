import './App.css'
import ImcCalculator from './components/ImcCalculator'
import { useState } from 'react'
import {data} from './data/data'
import ImcTable from './components/ImcTable'
import Loading from "./components/Loading";
import { LOADING_TOTAL_TIME } from "./components/Loading";

function App() {

  const calcImc = (e, height, weight) => {
  e.preventDefault()

  if (!height || !weight) return;

  setLoading(true);

  const weightFloat = +weight.replace(",", ".");
  const heightFloat = +height.replace(",", ".");

  const imcResult = (
    weightFloat /
    (heightFloat * heightFloat)
  ).toFixed(1);

  setTimeout(() => {
    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

     setLoading(false);
}, LOADING_TOTAL_TIME);


    if(!info) return;
  
}

const resetCalc = (e) => {
  e.preventDefault()
  setImc("")
  setInfo("")
  setInfoClass("")
}


  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")
  const [loading, setLoading] = useState(false)

  

  return (
    <div className="container">  
        {loading ? (
          <Loading />
        ) : !imc ? (
          <ImcCalculator calcImc={calcImc}/>
        ) : (
          <ImcTable
            data={data}
            imc={imc}
            info={info}
            infoClass={infoClass}
            resetCalc={resetCalc}
          />
        )}
    </div>
  )
}

export default App
