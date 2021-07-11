import axios from 'axios';

class AccountService {
  static login(email, password) {
    const url = `api/account/login`;
    return axios
      .post(url, { email, password })
      .then((response) => response.data)
      .catch((err) => {
        console.log(err.response.data);
        return err.response.data;
      });
  }

  static createUser(email, password, username) {
    const url = `api/account/newUser`;
    return axios
      .post(url, { email, password, username })
      .then((response) => response.data)
      .catch((err) => {
        console.log(err.response.data);
        return err.response.data;
      });
  }
}

export default AccountService;
