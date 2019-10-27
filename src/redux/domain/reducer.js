import {
  DOMAIN_GET_DETAIL,
  DOMAIN_GET_DETAIL_SUCCESS,
  DOMAIN_GET_DETAIL_ERROR
} from "../../constants/actionTypes";

const INIT_STATE = {
  domain: null,
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case DOMAIN_GET_DETAIL:
      return { ...state, loading: false };

    case DOMAIN_GET_DETAIL_SUCCESS:
      return { ...state, loading: true, item: action.payload };

    case DOMAIN_GET_DETAIL_ERROR:
      return { ...state, loading: true, error: action.payload };

    default:
      return { ...state };
  }
};
