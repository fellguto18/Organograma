import './Lista.css'

const Lista = (props) =>{
    return(
       <div className='lista'>
            <label>{props.label}</label>
            <select onChange={e => props.aoAlterado(e.target.value)} value={props.valor} required={props.obrigatorio}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
       </div>
    )
}

export default Lista;