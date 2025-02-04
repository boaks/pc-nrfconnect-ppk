/*
 * Copyright (c) 2015 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import { NrfConnectState } from 'pc-nrfconnect-shared';
import { combineReducers } from 'redux';

import app from './appSlice';
import chart from './chartSlice';
import dataLogger from './dataLoggerSlice';
import gains from './gainsSlice';
import resistorCalibration from './resistorCalibrationSlice';
import spikeFilter from './spikeFilterSlice';
import switchingPoints from './switchingPointsSlice';
import trigger from './triggerSlice';
import voltageRegulator from './voltageRegulatorSlice';

type AppState = ReturnType<typeof appReducer>;

export type RootState = NrfConnectState<AppState>;

const appReducer = combineReducers({
    app,
    chart,
    trigger,
    switchingPoints,
    voltageRegulator,
    resistorCalibration,
    gains,
    spikeFilter,
    dataLogger,
});

export default appReducer;
