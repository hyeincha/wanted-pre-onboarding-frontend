import TodoList from "../components/todos/Todolist";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Todopage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accesstoken")) navigate("/");
  }, [navigate]);

  return <TodoList />;
}

export default Todopage;
