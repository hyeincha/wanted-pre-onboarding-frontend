import styles from "./Todolist.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Todo() {
  return (
    <div className={styles.todos}>
      <div className={styles.todo}>
        <input type="checkbox"></input>
        <p>프리온보딩 사전과제 제출하기</p>
      </div>
      <div className={styles.icon}>
        <EditIcon />
        <DeleteIcon />
      </div>
    </div>
  );
}

export default Todo;
