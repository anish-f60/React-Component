import { useState } from "react";
import "./App.css";
import { Select } from "./components/Select/Select";
import { SelectContent } from "./components/Select/SelectContent";
import { SelectItem } from "./components/Select/SelectItem";
import { SelectTrigger } from "./components/Select/SelectTrigger";
import { SelectValue } from "./components/Select/SelectValue";
import { SelectLabel } from "./components/Select/SelectLabel";
import Comments from "./components/Comments/Comments";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import DropdownMenuTrigger from "./components/DropdownMenu/DropdownMenuTrigger";
import DropdownMenuContent from "./components/DropdownMenu/DropdownMenuContent";
import DropdownMenuItem from "./components/DropdownMenu/DropdownMenuItem";
import PasswordStrength from "./components/PasswordStrength/PasswordStrength";
import Tooltip from "./components/Tooltip/Tooltip";
import TooltipTrigger from "./components/Tooltip/TooltipTrigger";
import TooltipContent from "./components/Tooltip/TooltipContent";

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
    username: "Anish",
  },
  {
    id: 2,
    username: "Manish",
  },
  {
    id: 3,
    username: "Danish",
  },
  {
    id: 4,
    username: "Ashish",
  },
];

function App() {
  const [selected, setSelected] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchUser, setSearchUser] = useState("");
  const [searchFruit, setSearchFruit] = useState("");

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
    if (selectedUser) {
      return user.id === selectedUser.id;
    }

    return false;
  };

  const selectUser = (user) => {
    if (selectedUser) {
      if (selectedUser.id === user.id) {
        setSelectedUser(null);
      } else {
        setSelectedUser(user);
      }
    } else {
      setSelectedUser(user);
    }
  };

  const handleSearchFruit = (searchInput) => {
    setSearchFruit(searchInput);
  };

  const handleSearchUser = (searchInput) => {
    setSearchUser(searchInput);
  };

  return (
    <>
      {/* <h1 className="">Component Library</h1>
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
            <SelectLabel handleSearch={handleSearchFruit}>Fruits</SelectLabel>
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
            <SelectValue placeholder={"Select a user"} accessKey={"username"} />
          </SelectTrigger>
          <SelectContent>
            <SelectLabel handleSearch={handleSearchUser}>Users</SelectLabel>
            {USERS_DATA.map((item) => {
              return (
                <SelectItem key={item.id} value={item}>
                  {item.username}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div> */}
      {/* <Comments /> */}
      {/* <div className="flex  gap-4 justify-between items-center h-screen w-full">
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>
              ajd jakhjdkah jkdsahjkd ashjkdsah jksahj sajk hsajk hsjka dskah
              jkash jkdsah jkdsa jh
            </DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
            <DropdownMenuItem>2</DropdownMenuItem>
            <DropdownMenuItem>3</DropdownMenuItem>
            <DropdownMenuItem>4</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}
      {/* <PasswordStrength /> */}
      <div className="flex justify-center items-center my-5">
        <Tooltip>
          <TooltipTrigger>Hover over me</TooltipTrigger>
          <TooltipContent>
            Hello there dash jsah jskah jksah jksa jsjka!
          </TooltipContent>
        </Tooltip>
      </div>
    </>
  );
}

export default App;
