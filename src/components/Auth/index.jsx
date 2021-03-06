// export {default} from './Auth'

import { connect } from "react-redux";
import Auth from "./Auth";

import { handleAuth } from "../../redux/Auth/authActions";

const MDTP = (dispatch) => ({
    hamdleSubmit: () =>
    dispatch(handleAuth()),
});
export default connect(null, MDTP)(Auth);
