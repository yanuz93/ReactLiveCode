import createStore from "unistore";

export const store = createStore({
  email: "",
  name: "",
  is_login: false,
  api_key: "",
  values: [],
  avatar: ""
});

export const actions = store => ({
  setEmail: (state, value) => {
    return { email: value };
  },
  setName: (state, value) => {
    return { name: value };
  },
  setLogin: (state, value) => {
    return { is_login: value };
  },
  setKeyword: (state, value) => {
    return { keyword: value };
  },
  setValue: (state, value) => {
    return { values: value };
  },
  setSearch: (state, value) => {
    return { search: value };
  },
  setAvatar: (state, value) => {
    return { avatar: value };
  }
});
