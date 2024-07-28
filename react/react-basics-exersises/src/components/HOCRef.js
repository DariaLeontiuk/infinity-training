import React from 'react';

const withForwardedRef = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      const { forwardedRef, ...rest } = this.props;
      return <WrappedComponent ref={forwardedRef} {...rest} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <HOC {...props} forwardedRef={ref} />;
  });
};


class Input extends React.Component {
  focus() {
    this.input.focus();
  }

  render() {
    return <input ref={(input) => (this.input = input)} />;
  }
}


const InputWithForwardedRef = withForwardedRef(Input);


class HOCRef extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <InputWithForwardedRef ref={this.inputRef} />
        <button onClick={this.focusInput}>Focus Input</button>
      </div>
    );
  }
}

export default HOCRef