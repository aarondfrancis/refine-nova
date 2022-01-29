let uid = 1;

export default {
  beforeCreate() {
    this.uid = uid.toString();
    uid = uid + 1;
  },
};
