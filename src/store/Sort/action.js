export const SORT_PHONES = 'SORT_PHONES';

export const SORT_PHONES_ACTION = {
    type: SORT_PHONES,
    payload: null
};

export function sortPhonesActionCreator(phones){
    SORT_PHONES_ACTION.payload = phones;
    return SORT_PHONES_ACTION;
}