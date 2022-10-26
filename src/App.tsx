import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";

type User = {
  id: number;
  name: string;
  age: number;
  personalColor: string;
}

export const App = () => {
  //取得したユーザ情報
  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState<User[]>([]);

  //画面表示時にユーザ情報取得
  useEffect(() => {
    // axios.get("https://example.com/users"). then((res) => {
      axios.get<User[]>("https://example.com/users"). then((res) => {
      setUsers(res.data);
    })
  }, []);

  return (
    <div>
      {users.map(user => (
        <ListItem id={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
};
