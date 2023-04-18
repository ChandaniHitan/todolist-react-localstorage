//Get data from local storage
export const getLocalStorageData = () => {
  const storageValue = localStorage.getItem("todo_list");
  if (storageValue && storageValue !== undefined) {
    const localStorage_data = localStorage.getItem("todo_list");
    return localStorage_data && JSON.parse(localStorage_data);
  } else {
    return [];
  }
};

//Sets data in local storage
export const addDataInLocalStorage = (user_inputs) => {
  localStorage.setItem("todo_list", JSON.stringify(user_inputs));
};

//Edit data in local storage
export const editDataInLocalStorage = (id, task) => {
  let localStorage_data = JSON.parse(localStorage.getItem("todo_list"));
  localStorage.setItem(
    "todo_list",
    JSON.stringify(
      localStorage_data.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              title: task,
              editing: !todo.editing,
            }
          : todo
      )
    )
  );
};

//Delete data in local storage
export const deleteDataInLocalStorage = (id) => {
  let localStorage_data = JSON.parse(localStorage.getItem("todo_list"));
  localStorage.setItem(
    "todo_list",
    JSON.stringify(localStorage_data.filter((todo) => todo.id !== id))
  );
};

//Set completed task in local storage
export const completeTodoInLocalStorage = (id) => {
  let localStorage_data = JSON.parse(localStorage.getItem("todo_list"));
  localStorage.setItem(
    "todo_list",
    JSON.stringify(
      localStorage_data.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    )
  );
};
