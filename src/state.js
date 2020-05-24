let reRenderTree = () => {
  
} 

export const staticData = {
  header: {
    logo:'logo',    
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
    newPostText:"",
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
    messages: [
      { id: "1", message: "Hi, how are you?" },
      { id: "2", message: "I am fine" },
      { id: "3", message: "You need help?" },
      { id: "4", message: "No, i am did not help" },
    ],
  },
};

// Функция добавления поста 
export const addPost = () => {  
  let newPost = {
    id:5,
    post: staticData.main.newPostText,
    like:0,
    dislike:0
  };
  staticData.main.post.push(newPost);
  staticData.main.newPostText=""                 // очищаем поле ввода
  reRenderTree();
};

//функцмя обновления почта
export const updatePost = (updateTextArea) => {
  
  staticData.main.newPostText = updateTextArea;
  reRenderTree();
};

//функция по переррендеру страницы

export const subscribe = (observer) => {
  reRenderTree = observer;
}


 
