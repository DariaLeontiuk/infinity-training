import React from 'react';

class MyComponentLifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null, count: 0 };
    this.timerID = null;
  }

  static getDerivedStateFromProps(props, state) {
    return null;
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({ data }))
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });

    this.timerID = setInterval(() => this.tick(), 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.count !== nextState.count;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return this.listRef ? this.listRef.scrollHeight - this.listRef.scrollTop : null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null && this.listRef) {
      this.listRef.scrollTop = this.listRef.scrollHeight - snapshot;
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Data:</h1>
        {this.state.data ? (
          <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
        <p>Count: {this.state.count}</p>
        <div ref={ref => (this.listRef = ref)}>Scrollable content here</div>
      </div>
    );
  }
}

export default MyComponentLifecycle;