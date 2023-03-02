import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import api from '../../services/api';
import './styles.css';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {title, description, value};
        
        try {
            await api.post('incidents', data, {
                headers: {
                    authorization: ongId
                }
            });
            history.push('/profile');
        }
        catch (err) {
            alert('Falha ao cadastar novo caso, Tente Novamente')
        }
    }

    return (
        <div className="new-incident-conteiner">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero" />
                <h1>Cadastrar Novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resover isso.</p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#e02041" />
                    Voltar para Home
                </Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input 
                    placeholder="Titulo do Caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <input 
                    placeholder="Valor em Reais"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}