import axios from "axios";

const token = localStorage.getItem("accesstoken");

export const instance = axios.create({
  baseURL: `https://pre-onboarding-selection-task.shop`,
  headers: {
    "Content-Type": "application/json",
  },
});

// instance.interceptors.request.use(
//   function (config) {
//     const token = localStorage.getItem("accesstoken");
//     if (token) {
//       config.headers.common["Authorization"] = `Bearer ` + token;
//     }
//     return config;
//   },
//   function (error) {
//     console.log("에러", error);
//     return Promise.reject(error);
//   }
// );

instance.interceptors.response.use(
  function (response) {
    console.log("응답 리스폰스", response);
    return response;
  },
  function (error) {
    console.log("응답 에러", error);
    return Promise.reject(error);
  }
);

export const signUp = async (body) => {
  return await instance.post(`/auth/signup`, body);
};

export const signIn = async (body) => {
  return await instance.post(`/auth/signin`, body);
};

export const createTodo = async (todo) => {
  return await instance.post(`/todos`, {
    headers: {
      Authorization: token,
    },
    body: {
      todo: todo,
    },
  });
};

export const getTodo = async () => {
  return await instance.get(`/todos`, {
    headers: {
      Authorization: token,
    },
  });
};

export const updateTodo = async (id) => {
  return await instance.put(`/todos/${id}`);
};

export const deleteTodo = async (id) => {
  return await instance.delete(`/todos/${id}`);
};
