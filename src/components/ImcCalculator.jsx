import './ImcCalculator.css'
import Button from './Button'
import {useState} from 'react'

const ImcCalculator = () => {

    const [height,setHeight] = useState("")
    const [weight,setWeight] = useState("")

    const clearForm = (e) => {
        e.preventDefault()
        setHeight("")
        setWeight("")
    }

    const imcCalc = (e) => {
        e.preventDefault()
        let imc = weight / (height * height)
        console.log(`Seu IMC é:${imc.toFixed(2)}`);
        
    }

    const validateDigits = (text) => {
        return text.replace(/[^0-9.]/g, '');
    }
    const handleHeightChange = (e) => {
        const updatedValue = validateDigits(e.target.value);
        setHeight(updatedValue);
    }

    const handleWeightChange = (e) => {
        const updatedValue = validateDigits(e.target.value);
        setWeight(updatedValue);
    }

  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura</label>
                    <input 
                        type="text" 
                        name="height" 
                        id="height" 
                        placeholder="Exemplo: 1.80" 
                        required
                        onChange={handleHeightChange}
                        value={height}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="weight">Peso</label>
                    <input 
                        type="text" 
                        name="weight" 
                        id="weight" 
                        placeholder="Exemplo: 70.5" 
                        required
                        onChange={handleWeightChange}
                        value={weight}
                    />
                </div>

                <div className="action-control">
                    <Button id="calc-btn" text="Calcular" action={imcCalc}/>
                    <Button id="clear-btn" text="Limpar" action={clearForm}/>
                </div>
            </div>
        </form>
        
    </div>
  )
}

export default ImcCalculator