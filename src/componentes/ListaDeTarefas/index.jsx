import Tarefa from "../Tarefa"
function ListaDeTarefas(){
    let tarefas=['lavar loucas', 'aniversario do gilberto','pagar as contas']

    function escreveTarefa(tarefa){
        return <Tarefa titulo={tarefa}/>
    }
    return (
        <div style={{backgroundColor:"gray", height:"100vh"}}>
            {tarefas.map((tarefa)=>escreveTarefa(tarefa))}
        </div>
    )
}
export default ListaDeTarefas