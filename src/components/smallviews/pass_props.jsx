import React from 'react';

export default props => Component => () => React.cloneElement(<Component />, props);
