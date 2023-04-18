
export const getLocalStorageData = () => {
  const storageValue = localStorage.getItem("todo_list");
  if (storageValue && storageValue !== undefined){
    const lstg_data = localStorage.getItem('todo_list');
    return lstg_data && JSON.parse(lstg_data)
  }
  else{
    return []
  }
} 

export const addDataInLocalStorage = (user_inputs) => {
    localStorage.setItem('todo_list',JSON.stringify(user_inputs));
} 

export const editDataInLocalStorage = (id, task) => {
  let data = JSON.parse(localStorage.getItem("todo_list"))
  /* let edit_data = data.filter((item) => item.id===id)
  edit_data.map((item)=>{
    item.title = task
  item.editing = false
  })
  data.concat(edit_data)
  localStorage.setItem('todo_list',JSON.stringify(data)) */
  
  localStorage.setItem('todo_list',
    JSON.stringify(data.map((todo) => todo.id === id ? {
         ...todo,title:task, editing: !todo.editing
    }: todo)
))
}

export const deleteDataInLocalStorage = (id) => {
    let data = JSON.parse(localStorage.getItem("todo_list"))
    localStorage.setItem('todo_list',JSON.stringify(data.filter(todo=>todo.id!==id)));
}

export const completeTodoInLocalStorage = (id) => {
  let data = JSON.parse(localStorage.getItem("todo_list"))
  localStorage.setItem('todo_list',JSON.stringify(data.map(todo => todo.id === id ? {
    ...todo, completed : !todo.completed} : todo)
))
}