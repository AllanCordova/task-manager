type Item = {
  id: number;
  name: string;
};

interface TarefasProps {
  list: Item[];
  remove: (id: number) => void;
  editar: (tarefa: Item) => void;
}

const ListTarefas: React.FC<TarefasProps> = ({ list, remove, editar }) => {
  return (
    <div className="container text-center">
      <div className="row mt-5">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <ul className="list-group">
            {list.map((it) => (
              <li
                className="d-flex justify-content-center align-items-center list-group-item"
                key={it.id}
              >
                <button className="btn btn-light" onClick={() => editar(it)}>
                  <i className="bi bi-pencil-fill"></i>
                </button>
                <span className="poppins-light flex-grow-1">{it.name}</span>
                <button
                  onClick={() => remove(it.id)}
                  className="btn btn-danger"
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListTarefas;
