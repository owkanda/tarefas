import React, { useEffect, useState } from 'react';

function App() {
    const [tarefas, setTarefas] = useState([]); 
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [tarefasResponse, usuariosResponse] = await Promise.all([
                    fetch('https://jsonplaceholder.typicode.com/todos'),
                    fetch('https://jsonplaceholder.typicode.com/users')
                ]);
                const tarefasData = await tarefasResponse.json();
                const usuariosData = await usuariosResponse.json();
                setTarefas(tarefasData);
                setUsuarios(usuariosData);
            } catch (error) {
                console.error('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', error);
            }
        };
        fetchData();
    }, []);

    const usuariosMap = {};
    usuarios.forEach(usuario => {
        usuariosMap[usuario.id] = usuario.name;
    });

    function Concluir(id) {
        setTarefas(tarefasAnteriores =>
            tarefasAnteriores.map(tarefa =>
                tarefa.id === id ? { ...tarefa, completed: !tarefa.completed } : tarefa
            )
        );
    }
    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <div className="tarefas-completas">
                <h2>Tarefas Completas</h2>
                <ul>
                    {tarefas
                        .filter(tarefa => tarefa.completed)
                        .map(tarefa => (
                                <li key={tarefa.id} style={{ textDecoration: 'line-through' }}>
                                {usuariosMap[tarefa.userId]}: {tarefa.title}
                            </li>
                        ))}
                </ul>
            </div>

            <div className="tarefas-pendentes">
                <h2>Tarefas Pendentes</h2>
                <ul>
                    {tarefas
                        .filter(tarefa => !tarefa.completed)
                        .map(tarefa => (
                            <li key={tarefa.id} onClick={() => Concluir(tarefa.id)}>
                                {usuariosMap[tarefa.userId]}: {tarefa.title}
                            </li>
                        ))}
                </ul>
            </div>

        </div>
    );
}

export default App;