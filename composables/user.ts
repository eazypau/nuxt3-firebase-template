let instance: any;
const userData = {
  id: "",
};

class User {
  constructor() {
    if (instance) {
      return;
    }

    instance = this;
  }

  getUserId() {
    return userData.id;
  }

  setUserId(id: string) {
    userData.id = id;
  }

  reset() {
    userData.id = "";
  }
}

export const userInfo = Object.freeze(new User());
