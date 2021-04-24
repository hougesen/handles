import axios from "axios";

class TreeService {
  static getTree(treeId) {
    const url = `/api/tree/${treeId}`;
    console.log(url);

    return axios
      .get(url)
      .then(response => response.data)
      .catch(err => {
        console.log(err.response.data);
        return err.response.data;
      });
  }

  static getTreeList(userId) {
    const url = `api/tree/userTree/${userId}`;
    return axios
      .get(url)
      .then(response => response.data)
      .catch(err => {
        console.log(err.response.data);
        return err.response.data;
      });
  }
  static newTree(userId, links) {
    const url = `api/tree/newTree`;
    return axios
      .post(url, { userId, links })
      .then(response => response.data)
      .catch(err => {
        console.log(err.response.data);
        return err.response.data;
      });
  }

  static updateTree(treeId, links) {
    const url = `api/tree/updateTree`;
    return axios
      .put(url, { treeId, links })
      .then(response => response.data)
      .catch(err => {
        console.log(err.response.data);
        return err.response.data;
      });
  }
}

export default TreeService;
