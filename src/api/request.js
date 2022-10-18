import axios from "axios";

const token = localStorage.getItem("accesstoken");

const headers = { headers: { Authorization: token } };

export const instance = axios.create({
  baseURL: `https://pre-onboarding-selection-task.shop`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const signUp = async (body) => {
  return await instance.post(`/auth/signup`, body);
};

export const signIn = async (body) => {
  return await instance.post(`/auth/signin`, body);
};

export const createTodo = async (todo) => {
  return await instance.post(`/todos`, { todo }, headers);
};

export const getTodo = async () => {
  return await instance.get(`/todos`, headers);
};

export const updateTodo = async (id, todo, isCompleted) => {
  return await instance.put(`/todos/${id}`, { todo, isCompleted }, headers);
};

export const deleteTodo = async (id) => {
  return await instance.delete(`/todos/${id}`, headers);
};
