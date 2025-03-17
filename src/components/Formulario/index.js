import './Formulario.css'
import '../CampoTexto'
import CampoTexto from '../CampoTexto'
import Lista from '../Lista'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) =>{
    const[nome, setNome] = useState('');
    const[cargo, setCargo] = useState('');
    const[imagem, setImagem] = useState('');
    const[time, setTime] = useState('');
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log("Form foi enviado =>", nome, cargo, imagem, time)
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }
    return(
        <section className='formulario '>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                 />
                 <CampoTexto 
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)}
                    obrigatorio={true} label='Cargo' 
                    placeholder='Digite seu cargo'                    />
                <CampoTexto
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)} 
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem'
                />
                <Lista 
                    obrigatorio={true}  
                    label='Time' 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}
export default Formulario;