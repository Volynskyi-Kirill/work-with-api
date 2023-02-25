import { configureStore } from '@reduxjs/toolkit';
import { dataPlaceholder } from './slice/data';

const store = configureStore({
    reducer: {
        dataPlaceholder,
    },
});

export { store };
