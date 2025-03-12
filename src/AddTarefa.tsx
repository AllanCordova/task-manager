import { useState, useEffect, useRef } from "react";

type Item = {
  id: number;
  name: string;
};

interface TarefaProp {
  tarefa: (tarefa: Item) => void;
  editandoTarefa: Item | null;
}

const AddTarefa: React.FC<TarefaProp> = ({ tarefa, editandoTarefa }) => {
  const [nome, setNome] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editandoTarefa) {
      setNome(editandoTarefa.name);
      inputRef.current?.focus();
    } else {
      setNome("");
    }
  }, [editandoTarefa]);

  const saveTarefa = () => {
    if (nome.trim() === "") return;
    tarefa({ id: editandoTarefa ? editandoTarefa.id : Date.now(), name: nome });
    setNome("");
  };

  return (
    <div>
      <header className="container text-center">
        <div className="row mt-5">
          <div className="col-sm-12">
            <h1 className="poppins-medium fs-2">Gerenciador de Tarefas</h1>
          </div>
        </div>
      </header>
      <main className="container text-center">
        <div className="row gap-4 mt-5">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <input
              type="text"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              placeholder="Adicionar tarefa"
              ref={inputRef}
              className="form-control"
            />
          </div>
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <button
              className="btn btn-success w-100 poppins-regular"
              onClick={saveTarefa}
            >
              {editandoTarefa ? "Editar" : "Adicionar"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddTarefa;
