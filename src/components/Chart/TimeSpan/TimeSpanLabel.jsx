/*
 * Copyright (c) 2015 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import React from 'react';
import { number } from 'prop-types';

import { formatDuration } from '../../../utils/duration';

const TimeSpanLabel = ({ begin, end, duration, totalDuration = duration }) => {
    const [nBegin, nEnd] = begin > end ? [end, begin] : [begin, end];
    const start = nBegin != null ? (100 * nBegin) / totalDuration : 0;
    const width =
        nBegin != null && nEnd !== null
            ? (100 * (nEnd - nBegin)) / totalDuration
            : 100;

    const label = `\u0394${formatDuration(duration)}`;

    return (
        <div
            className="span"
            style={{
                left: `${start}%`,
                width: `${width}%`,
            }}
        >
            <div className="value">{label}</div>
        </div>
    );
};

export default TimeSpanLabel;

TimeSpanLabel.propTypes = {
    duration: number.isRequired,
    begin: number,
    end: number,
    totalDuration: number,
};
