export const PatientState = {
    patients: []
}

export const PatientReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            return { state };
        case 'REMOVE_PATIENT':
            return { state };
        default:
            return { state };
    }
}

				