import {
  DOMAIN_GET_DETAIL,
  DOMAIN_GET_DETAIL_SUCCESS,
  DOMAIN_GET_DETAIL_ERROR,
  DOMAIN_SAVE
} from "../../constants/actionTypes";

export const getDomainDetail = domain => ({
  type: DOMAIN_GET_DETAIL,
  payload: domain
});

export const getDomainDetailSuccess = data => ({
  type: DOMAIN_GET_DETAIL_SUCCESS,
  payload: data
});

export const getDomainDetailError = error => ({
  type: DOMAIN_GET_DETAIL_ERROR,
  payload: error
});

export const saveDomain = domain => ({
  type: DOMAIN_SAVE,
  payload: domain
});
