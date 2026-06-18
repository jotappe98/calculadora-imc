import './ImcCalculator.css'
import Button from './Button'
const ImcCalculator = () => {
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
                    />
                </div>

                <div className="action-control">
                    <Button id="calc-btn" text="Calcular"/>
                    <Button id="clear-btn" text="Limpar"/>
                </div>
            </div>
        </form>
        
    </div>
  )
}

export default ImcCalculator