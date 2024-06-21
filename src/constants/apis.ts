const APIS = (() => {
  const base = process.env.BASE_URL;
  const clientBaseURL = process.env.NEXT_PUBLIC_BASE_URL;

  return {
    base,
    register: clientBaseURL + "/register",
    login: clientBaseURL + "/auth/login",
    reset: clientBaseURL + "/auth/forgotPass",
    resetCode: clientBaseURL + "/resetPassLink",
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
