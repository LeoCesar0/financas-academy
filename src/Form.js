import { useState } from "react"

export default function Form({data, setData}){

    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const [paid, setPaid] = useState(false)

    function addNewCard(event){
        event.preventDefault()


        if(name === "" || value === ""){
            return alert("Por favor, preencha um Nome e um Valor")
        }

        const id = Math.floor(Math.random() * 10000)

        setData([...data, {
            id: id,
            name: name,
            value: value,
            paid: paid
        }])

        setName('')
        setValue('')
        setPaid(false)
    }

    return(
        <form className="form">
            <h2 className="form-title title">Adicionar uma conta</h2>

            <div className="form-control">
                <label htmlFor="">Nome da Conta</label>
                <input 
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>

            <div className="form-control">
                <label htmlFor="">Valor da Conta</label>
                <input 
                    type="text"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </div>

            <div className="form-control">
                <label htmlFor="">Pago?</label>
                <input 
                    type="checkbox"
                    value={paid}
                    checked={paid}
                    onChange={(event) => setPaid(event.currentTarget.checked)}
                />
            </div>

            <input 
                type="submit" 
                className="button form-submit" 
                value="Enviar"
                onClick={(event) => addNewCard(event)}
            />

        </form>
    )
}