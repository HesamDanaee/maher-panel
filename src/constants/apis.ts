const APIS = (() => {
  const base = process.env.BASE_URL;
  const clientBaseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const authBaseURL = clientBaseURL + "/auth/";
  const panelBaseURL = clientBaseURL + "/panel/";
  const goodsBaseURL = panelBaseURL + "/goods/";
  const customerBaseURL = clientBaseURL + "/customers/";

  return {
    base,
    register: clientBaseURL + "register",
    resetCode: clientBaseURL + "resetPassLink",
    panel: {
      registerUser: panelBaseURL + "registerUser",
      profile: panelBaseURL + "getProfile",
      isActive: panelBaseURL + "isActive",
      isAdmin: panelBaseURL + "isAdmin",
      sendSMS: panelBaseURL + "sendSms",
      verify: panelBaseURL + "verify",
      completeUser: panelBaseURL + "completeUser",
      addCustomer: panelBaseURL + "customers/add",
      goods: {
        csv: goodsBaseURL + "upload-csv",
        goodsList: goodsBaseURL + "getAll",
        add: goodsBaseURL + "add",
        addByFile: goodsBaseURL + "addByFile",
      },
      customer: {
        add: customerBaseURL + "add",
        getCustomerList: customerBaseURL + "getList",
        update: customerBaseURL + "update",
      },
    },
    auth: {
      login: authBaseURL + "login",
      reset: authBaseURL + "forgotPass",
    },
  };
})();

export default APIS;
