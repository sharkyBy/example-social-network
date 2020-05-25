const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const DIALOG_ADD_USER = 'DIALOG-ADD-USER';
const DIALOG_UPDATE_USER = 'DIALOG-UPDATE-USER';

let store = {
  _state: {
    header: {
      logo: "logo",
    },
    sidebar: {
      nav: [
        { name: "Profile", path: "/profile" },
        { name: "Message", path: "/message" },
        { name: "News", path: "/news" },
        { name: "Music", path: "/music" },
        { name: "Setting", path: "/setting" },
      ],
    },
    main: {
      post: [
        { id: 1, post: "Hi. How may I help you?", like: 4, dislike: 1 },
        {
          id: 2,
          post: "Hello. I would like a cup of freshly brewed coffee, please.",
          like: 9,
          dislike: 0,
        },
        { id: 3, post: "Regular or decaf?", like: 2, dislike: 0 },
        { id: 4, post: "Decaf, please", like: 0, dislike: 0 },
      ],
      newPostText: "",
    },
    dialog: {
      users: [
        { name: "User 1" },
        { name: "User 2" },
        { name: "User 3" },
        { name: "User 4" },
        { name: "User 5" },
        { name: "User 6" },
      ],
      newUser: "",

      messages: [
        { id: "1", message: "Hi, how are you?" },
        { id: "2", message: "I am fine" },
        { id: "3", message: "You need help?" },
        { id: "4", message: "No, i am did not help" },
      ],
    },
  },
  _reRenderTree() {
    console.log("my first store");
  },

  getState() {
    return this._state;
  },
  //функция по переррендеру страницы
  subscribe(observer) {
    this._reRenderTree = observer;
  },

  dispatch(action) {
    // Функция добавления поста

    switch (action.type) {
      case ADD_POST:
        let newPost = {
          id: 5,
          post: this._state.main.newPostText,
          like: 0,
          dislike: 0,
        };
        this._state.main.post.push(newPost);
        this._state.main.newPostText = ""; // очищаем поле ввода
        this._reRenderTree();
        break;

      case UPDATE_POST:
        this._state.main.newPostText = action.newText;
        this._reRenderTree();
        break;
      case DIALOG_ADD_USER:
        let newUser = {
          name: this._state.dialog.newUser,
        };
        this._state.dialog.users.push(newUser);
        this._state.dialog.newUser = "";
        this._reRenderTree();
        break;

      case DIALOG_UPDATE_USER:
        this._state.dialog.newUser = action.newUser;
        this._reRenderTree();
        break;
        
      default:
        alert(" Нет такого типа в объекте 'action'");
    }
  },
};

//Функции для создания объектов action, в которых хранится инфа об идентификации вызываемого метода
export const addPostActionCreator = () => ({ type:ADD_POST });

export const updatePostActionCreator = (text) => ({ 
  type: UPDATE_POST,
  newText:text,
});

export const dialogAddUserActionCreator = () => ({ type:DIALOG_ADD_USER });

export const dialogUpdateUserActionCreator = (name) => ({ 
  type: DIALOG_UPDATE_USER,
  newUser:name,
  })


export default store;
window.store = store;
