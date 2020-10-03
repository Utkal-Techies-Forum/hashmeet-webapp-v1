
import AuthRepository from '~/repositories/AuthRepository'
import UserRepository from "~/repositories/UserRepository";

export default ($axios) => ({
  auth: AuthRepository($axios),
  user: UserRepository($axios),
});
