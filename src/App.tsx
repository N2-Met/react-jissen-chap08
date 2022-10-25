import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";

export const App = () => {
  //取得したユーザ情報
  const [users, setUsers] = useState([]);

  //画面表示時にユーザ情報取得
  useEffect(() => {
    axios.get("https://example.com/users"), then((res) => {
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
