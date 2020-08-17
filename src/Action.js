export const category = 'CATEGORY';
export const year = 'YEAR';
export const companyDictonary = 'COMPANY_DICTONARY';


export const fetchArchieveByCategory = (type, dispatch) => {
    return dispatch({type: category, payload: { type }});
};

export const fetchArchieveByYear = (fromYear, toYear, dispatch) => {
    return dispatch({type: year, payload: { fromYear, toYear }});
}
export const fetchArchieveByCompanyDictonary = (fromKey, toKey, dispatch) => {
    return dispatch({type: category, payload: { fromKey, toKey }});
}