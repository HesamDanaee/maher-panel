const APIS = (() => {
  const base = process.env.BASE_URL;
  return {
    base,
    register: base + "/register",
    login: base + "/auth/login",
    isActive: base + "/panel/isActive",
    sendSMS: base + "/panel/sendSms",
    verify: base + "/panel/verify",
    completeUser: base + "/panel/completeUser",
    uploadScv: base + "/panel/goods/upload-csv",
    getAllGoods: base + "/panel/goods/getAll",
    goods: base + "/panel/goods/add",
    addGoodsByFile: base + "/panel/goods/addByFile",
  };
})();

export default APIS;
