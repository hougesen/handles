const argon2 = require('argon2');

class Hashing {
  static async hashString(string) {
    try {
      const hash = await argon2.hash(string);
      return hash;
    } catch (err) {
      console.log('err');
    }
  }

  static async verifyHash(hash, string) {
    return argon2.verify(hash, string) ? true : false;
    /*     try {
      if (await argon2.verify(hash, string)) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log('err');
      return false;
    } */
  }
}

module.exports = Hashing;
