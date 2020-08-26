import React, { useState } from "react"
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { v4 } from "uuid"

const TodoForm = ({ AddTodos }) => {
  const [todoString, setTodoString] = useState("")
  const handleSubmit = (e) => {
    //   preventing default behaviour
    e.preventDefault()

    // null check
    if (todoString === "") {
      return alert("Enter any todo!")
    }

    // coonsructing object
    const todo = {
      todoString,
      id: v4(),
    }

    // adding todo in Local storage
    AddTodos(todo)
    // setting back to initialstate
    setTodoString("")
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter a Todo..."
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="success">Add</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  )
}

export default TodoForm
