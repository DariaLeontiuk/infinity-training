import React from 'react';

function withExtraProp(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <WrappedComponent extraProp="This is an extra prop" {...this.props} />;
    }
  };
}

function Display(props) {
  return (
    <div>
      <h1>{props.message}</h1>
      <p>{props.extraProp}</p>
    </div>
  );
}

const DisplayWithExtraProp = withExtraProp(Display);

export default DisplayWithExtraProp