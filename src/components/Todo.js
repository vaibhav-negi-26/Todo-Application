import React from "react"
import { ListGroup, ListGroupItem } from "reactstrap"
import { FaCheckCircle } from "react-icons/fa"

const Todo = ({ todos, markComplete }) => {
  return (
    <ListGroup>
      {todos.map((todo, index) => {
        return (
          <ListGroupItem key={index}>
            {todo.todoString}
            <span className="float-right" onClick={() => markComplete(todo.id)}>
              <FaCheckCircle />
            </span>
          </ListGroupItem>
        )
      })}
    </ListGroup>
  )
}

export default Todo
