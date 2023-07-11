import { useContext } from "react";
import axios from "axios";
const REGISTER_USER_BASE_URL = "http://sphinx-architecture-1754966512.ap-south-1.elb.amazonaws.com:8080/api/auth/register";
const SIGNIN_USER_BASE_URL = "http://sphinx-architecture-1754966512.ap-south-1.elb.amazonaws.com:8080/api/auth/login";
const REGISTER_ORG_BASE_URL = "http://sphinx-architecture-1754966512.ap-south-1.elb.amazonaws.com:8080/organization/";
const FIND_USER_BY_NAME_URL = "http://sphinx-architecture-1754966512.ap-south-1.elb.amazonaws.com:8080/api/auth/user/";

class AuthServices {
  registerUser(user) {
    return axios.post(REGISTER_USER_BASE_URL, user);
  }

  logInuser(user) {
    return axios.post(SIGNIN_USER_BASE_URL, user);
  }

  /*
  this api only for multi-tenant
  registerOrganization(organization) {
    return axios.post(REGISTER_ORG_BASE_URL, organization);
  }
  */

  findUserByName(username) {
    return axios.get(FIND_USER_BY_NAME_URL + username);
  }
}
export default new AuthServices();
