import { useState } from "react";
import AddTarefa from "./AddTarefa";
import ListTarefas from "./ListTarefas";
import "./index.css";

type Item = {
  id: number;
  name: string;
};

const App = () => {
  const [tarefas, setTarefas] = useState<Item[]>([]);
  const [editandoTarefa, setEditandoTarefa] = useState<Item | null>(null);

  const adicionarOuEditarTarefa = (novaTarefa: Item) => {
    if (editandoTarefa) {
      setTarefas(
        tarefas.map((tarefa) =>
          tarefa.id === editandoTarefa.id
            ? { ...tarefa, name: novaTarefa.name }
            : tarefa
        )
      );
      setEditandoTarefa(null); // Reseta edição
    } else {
      setTarefas([...tarefas, novaTarefa]);
    }
  };

  const removerTarefa = (id: number) => {
    setTarefas(tarefas.filter((it) => it.id !== id));
  };

  const iniciarEdicao = (tarefa: Item) => {
    setEditandoTarefa(tarefa);
  };

  return (
    <div>
      <AddTarefa
        tarefa={adicionarOuEditarTarefa}
        editandoTarefa={editandoTarefa}
      />
      <ListTarefas
        list={tarefas}
        remove={removerTarefa}
        editar={iniciarEdicao}
      />
    </div>
  );
};

export default App;
