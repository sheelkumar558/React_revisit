export const ADD_TODO = "ADD_TODO";
export const SORT = "SORT";
export const FILTER = "FILTER";
export const DELETE_TODO = "DELETE_TODO";
export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data, // {data}
  };
};

export const getData = () => async (dispatch) => {
  let data = await fetch("http://localhost:8000/todos").then((x) => x.json());
  dispatch(addTodo(data));
};

export const sort = (by) => ({
  type: SORT,
  payload: by,
});

export const filterFun = (text) => ({
  type: FILTER,
  payload: text,
});

export const deleteFun = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
