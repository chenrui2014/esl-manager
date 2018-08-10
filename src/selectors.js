export const getIsLogin = (state) => state.loginStatus.loginPending || false;
export const getUser = (state) => state.loginStatus.loginPending || {};