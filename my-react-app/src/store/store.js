import { configureStore } from '@reduxjs/toolkit';
import { dataPlaceholder } from './slice/data';
import { modal } from './slice/modal';

const store = configureStore({
    reducer: {
        dataPlaceholder,
        modal,
    },
});

export { store };
