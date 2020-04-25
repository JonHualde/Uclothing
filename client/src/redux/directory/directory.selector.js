import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectShopItem = createSelector(
    [selectDirectory],
    (directory) => directory.sections
);

