import { useState } from "react";
import "./App.css";
import { Select } from "./components/Select/Select";
import { SelectContent } from "./components/Select/SelectContent";
import { SelectItem } from "./components/Select/SelectItem";
import { SelectTrigger } from "./components/Select/SelectTrigger";
import { SelectValue } from "./components/Select/SelectValue";

const DATA = [
  {
    id: 1,
    name: "Apple",
  },
  {
    id: 2,
    name: "Graphes",
  },
  {
    id: 3,
    name: "Pineapple",
  },
  {
    id: 4,
    name: "Orange",
  },
];

const USERS_DATA = [
  {
    id: 1,
    name: "Anish",
  },
  {
    id: 2,
    name: "Manish",
  },
  {
    id: 3,
    name: "Danish",
  },
  {
    id: 4,
    name: "Ashish",
  },
];

function App() {
  const [selected, setSelected] = useState(null);
  const [ selectedUser, setSelectedUser ] = useState(null);

  const isItemSelected = (item) => {
    if (selected) {
      return item.id === selected.id;
    }

    return false;
  };

  const selectItem = (item) => {
    if (selected) {
      if (selected.id === item.id) {
        setSelected(null);
      } else {
        setSelected(item);
      }
    } else {
      setSelected(item);
    }
  };

  const isUserSelected = (user) => {
    if(selectedUser) {
      return user.id === selectedUser.id;
    }

    return false
  }

  const selectUser = (user) => {
    if(selectedUser) {
      if(selectedUser.id === user.id) {
        setSelectedUser(null);
      } else {
        setSelectedUser(user);
      }
    } else {
      setSelectedUser(user);
    }
  }

  return (
    <>
      <h1 className="">Component Library</h1>
      <div className="flex justify-center my-5">
        <Select
          selectItem={selectItem}
          selectedItem={selected}
          isItemSelected={isItemSelected}
        >
          <SelectTrigger>
            <SelectValue placeholder={"Select a fruit"} accessKey={"name"} />
          </SelectTrigger>
          <SelectContent>
            {DATA.map((item) => {
              return (
                <SelectItem key={item.id} value={item}>
                  {item.name}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-center my-5">
        <Select
          selectItem={selectUser}
          selectedItem={selectedUser}
          isItemSelected={isUserSelected}
        >
          <SelectTrigger>
            <SelectValue placeholder={"Select a user"} accessKey={"name"} />
          </SelectTrigger>
          <SelectContent>
            {USERS_DATA.map((item) => {
              return (
                <SelectItem key={item.id} value={item}>
                  {item.name}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}

export default App;
