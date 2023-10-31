import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      newTaskTitle: '',
      newTaskStatus: 'Atrasada',
    };
  }

  handleTitleChange = (e) => {
    this.setState({ newTaskTitle: e.target.value });
  };

  handleStatusChange = (e) => {
    this.setState({ newTaskStatus: e.target.value });
  };

  handleAddTask = () => {
    const { newTaskTitle, newTaskStatus } = this.state;
    if (newTaskTitle.trim() === '') {
      alert('O título da tarefa não pode estar em branco');
      return;
    }

    const newTask = {
      title: newTaskTitle,
      status: newTaskStatus,
    };

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
      newTaskTitle: '',
    }));
  };

  render() {
    const { tasks, newTaskTitle, newTaskStatus } = this.state;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h1 style={{ display: 'flex', justifyContent: 'center' }}>Lista de Tarefas</h1>

              <div>
                <p style={{ fontSize: '20px' }}>Título da tarefa:</p> 
                <input type="text" value={newTaskTitle} onChange={this.handleTitleChange}/>
              </div>

              <div style={{ marginTop: '10px'}}>
                <p style={{ fontSize: '20px' }}>Status da tarefa:</p>
                <select value={newTaskStatus} onChange={this.handleStatusChange}>
                  <option value="Atrasada">Atrasada</option>
                  <option value="No Prazo">No Prazo</option>
                  <option value="Próximo ao prazo">Próximo ao Prazo</option>
                </select>
              </div>

              <div style={{ marginTop: '10px' }}>
                <button onClick={this.handleAddTask}>Adicionar Tarefa</button>
              </div>

            <ul>
              {tasks.map((task, index) => (
                <li key={index}>
                  <strong>Título:</strong> {task.title}
                  <br />
                  <strong>Status:</strong> {task.status}
                </li>
              ))}
            </ul>
        


      </div>
    );
  }
}

root.render(
  <App />
);