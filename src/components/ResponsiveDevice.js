import React from 'react';
import Responsive from 'react-responsive';

export const Desktop = props => <Responsive {...props} minWidth={1008} />;
export const Tablet = props => <Responsive {...props} minWidth={641} maxWidth={1007} />;
export const Mobile = props => <Responsive {...props} maxWidth={640} />;
