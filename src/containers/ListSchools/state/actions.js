import {
    FETCH_MORE_SCHOOLS_SUCCESS,
    FETCH_SCHOOLS,
    FETCH_SCHOOLS_FAILURE,
    FETCH_SCHOOLs_SUCCESS,
    FETCH_SCHOOLS_SUCCESS
} from './types';
import api from '../../../utils/api';
import { SCHOOL_FETCH } from '../../UpdateSchoolForm/state/types';

export const fetchSchools = () => ({
    type: FETCH_SCHOOLS,
});

export const fetchSchoolsSuccess = () => ({
    type: FETCH_SCHOOLS_SUCCESS,
    payload: school,
});

export const fetchSchoolsFailure = () => ({
    type: FETCH_SCHOOLS_FAILURE,
    errors,
})