import React, { useReducer } from 'react';
import { PatientState, PatientReducer } from '../../reducer/PatientReducer';

const PatientManagement = () => {

    const [state, dispatch] = useReducer(PatientState, PatientReducer);
    console.log(state)
    return (
        <div>
            <h2>State Management:{state.patients.length}</h2>
        </div>
    );
};

export default PatientManagement;