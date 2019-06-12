import { combineReducers } from 'redux';
import app from '../containers/App/reducer';
import signUp from '../containers/SignUpForm/state/reducer';
import login from '../containers/LoginForm/state/reducers';
import navbar from '../containers/Navbar/state/reducers';
import schoolcreate from '../containers/AddSchoolForm/state/reducers';
import schoolupdate from '../containers/UpdateSchoolForm/state/reducers';
import listschools from '../containers/ListSchools/state/reducers';
import userProfiles from '../containers/EditProfileForm/state/reducers';

const rootReducer = combineReducers({
  app,
  signUp,
  login,
  navbar,
  schoolcreate,
  schoolupdate,
  listschools,
  userProfiles,
});

export default rootReducer;
