import axios from "axios";

export const instance = axios.create({
  baseURL: `https://pre-onboarding-selection-task.shop/`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(function (config) {
  // 로컬스토리지에 토큰 있으면 실어서 보내라
  //   if (accessToken && refreshToken) {
  //     config.headers.common["Authorization"] = `${accessToken}`;
  //     config.headers.common["Refresh-Token"] = `${refreshToken}`;
  //     config.headers.common["oauth"] = `${oauth}`;
  //   }
  //   return config;
  // },
  // function (error) {
  // console.log(error)
  //   return Promise.reject(error);
});

export const signUp = async (body) => {
  return await instance.post(`auth/signup`, body);
};

export const signIn = async (body) => {
  return await instance.post(`auth/signin`, body);
};

export const createTodo = async (body) => {
  return await instance.post(`todos`, body);
};

export const getTodo = async () => {
  return await instance.get(`todos`);
};

export const updateTodo = async (id) => {
  return await instance.put(`todos/${id}`);
};

export const deleteTodo = async (id) => {
  return await instance.delete(`todos/${id}`);
};

// API 주소: https://pre-onboarding-selection-task.shop/
// 스펙
// 1) Auth
// 1-1) SignUp
// 요청
// URL: /auth/signup
// Method: POST
// Headers:
// Content-Type: application/json
// Body:
// email: string
// password: string
// 응답 예시
// {
//   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwic3ViIjo0LCJpYXQiOjE2NTk5MDQyMTUsImV4cCI6MTY2MDUwOTAxNX0.DyUCCsIGxIl8i_sGFCa3uQcyEDb9dChjbl40h3JWJNc"
// }
// 1-2) SignIn
// 요청
// URL: /auth/signin
// Method: POST
// Headers:
// Content-Type: application/json
// Body:
// email: string
// password: string
// 응답 예시
// {
//   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwic3ViIjo0LCJpYXQiOjE2NTk5MDQyMTUsImV4cCI6MTY2MDUwOTAxNX0.DyUCCsIGxIl8i_sGFCa3uQcyEDb9dChjbl40h3JWJNc"
// }
// 2) Todo
// 2-1) createTodo
// 요청
// URL: /todos
// Method: POST
// Headers:
// Authorization: Bearer access_token
// Content-Type: application/json
// Body:
// todo: string
// 응답 예시
// status: 201 Created
// {
//   "id": 1,
//   "todo": "과제하기",
//   "isCompleted": false
//   "userId": 1,
// }
// 2-2) getTodos
// 요청
// URL: /todos
// Method: GET
// Headers:
// Authorization: Bearer access_token
// 응답 예시
// status: 200 OK
// [
//   {
//     "id": 1,
//     "todo": "todo2",
//     "isCompleted": false,
//     "userId": 1
//   },
//   {
//     "id": 2,
//     "todo": "todo3",
//     "isCompleted": false,
//     "userId": 1
//   }
// ]
// 2-3) updateTodo
// 요청
// URL: /todos/:id
// Method: PUT
// Headers:
// Authorization: Bearer access_token
// Content-Type: application/json
// Body:
// todo: string
// isCompleted: boolean
// 응답 예시
// status: 200 OK
// {
//   "id": 1,
//   "todo": "Hello World",
//   "isCompleted": true,
//   "userId": 2
// }
// 2-4) deleteTodo
// 요청
// URL: /todos/:id
// Method: DELETE
// Headers:
// Authorization: Bearer access_token
// 응답 예시
// status: 204 No Content
// body: 없음
