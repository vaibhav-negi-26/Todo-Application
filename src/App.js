import React, { useState, useEffect } from "react"
import TodoForm from "./components/TodoForm"
import Todo from "./components/Todo"
import { Container, Col, Row } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

const App = () => {
  const [todos, setTodos] = useState([])

  // this one works before any component loads up
  useEffect(() => {
    const localTodo = localStorage.getItem("todos")
    if (localTodo) {
      setTodos(JSON.parse(localTodo))
    }
  }, [])

  const AddTodos = (Todo) => {
    setTodos([...todos, Todo])
  }

  // this one keeps a watch on todo for any change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const markComplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <Container fluid>
      <h1>
        TODO Application with{" "}
        <span
          style={{
            color: "#61DBFB",
            fontWeight: "bold",
          }}>
          React Hooks
        </span>{" "}
        and localStorage
      </h1>
      <Row>
        <Col sm="6" className=" mt-5">
          <Todo todos={todos} markComplete={markComplete} />
        </Col>
        <Col sm="6" className=" mt-5">
          <TodoForm AddTodos={AddTodos} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
