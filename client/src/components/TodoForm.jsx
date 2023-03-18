import { useState } from "react";
import { addNewTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(text));
    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
    // console.log(text);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        placeholder="Enter new Todos"
        className="input"
        onChange={onInputChange}
        value={text}
      />
    </form>
  );
};
export default TodoForm;
