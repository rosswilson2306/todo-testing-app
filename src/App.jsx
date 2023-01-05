import './App.css'

import AddTodo from './components/molecules/add-todo.component';
import Todo from './components/molecules/todo.component';
import Summary from './components/molecules/summary.component';

function App() {

  return (
    <main className="px-5 pt-10 h-screen font-sans">
      <AddTodo />
      <div className="p-2 min-h-[80%] justify-between flex flex-col rounded-lg bg-primary-100">
        <div>
          <Todo />
          <Todo />
        </div>
        <div>
          <Summary />
        </div>
      </div>
    </main>
  )
}

export default App
