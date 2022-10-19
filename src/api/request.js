import axios from "axios";

const token = localStorage.getItem("accesstoken");

export const instance = axios.create({
  baseURL: `https://pre-onboarding-selection-task.shop`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(function (config) {
  if (token) config.headers.Authorization = token;
  return config;
});

export const signUp = async (body) => {
  return await instance.post(`/auth/signup`, body);
};

export const signIn = async (body) => {
  return await instance.post(`/auth/signin`, body);
};

export const createTodo = async (todo) => {
  return await instance.post(`/todos`, { todo });
};

export const getTodo = async () => {
  return await instance.get(`/todos`);
};

export const updateTodo = async (id, todo, isCompleted) => {
  return await instance.put(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodo = async (id) => {
  return await instance.delete(`/todos/${id}`);
};
