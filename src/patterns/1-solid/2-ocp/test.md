how implement OCP in react
To implement the Open-Closed Principle (OCP) in a React application, you can create components that are open for extension but closed for modification. This means that the component should be designed in a way that allows new features to be added without modifying the existing component code. One way to achieve this is to use a higher-order component (HOC) that wraps the original component and provides additional functionality. Another approach is to use a render prop pattern that allows the component to be extended by providing a function that determines how it should be rendered. Additionally, you can use composition over inheritance to build flexible and reusable components.




Cakra Danu Sedayu
give me example in typescript
Here's an example of how you might implement the Open-Closed Principle in a React component using TypeScript:

Copy code
interface Props {
  color: string;
}

class Button extends React.Component<Props> {
  render() {
    return <button style={{ backgroundColor: this.props.color }}>Click me!</button>;
  }
}

const withLoadingIndicator = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoadingIndicator extends React.Component<P & { isLoading: boolean }> {
    render() {
      return this.props.isLoading ? (
        <div>Loading...</div>
      ) : (
        <Component {...this.props as P} />
      );
    }
  };

const ColoredButton = withLoadingIndicator(Button);

// Usage
<ColoredButton color="blue" isLoading={true} />
In this example, the Button component is closed for modification because it doesn't need to know about the loading indicator functionality that is being added. Instead, this functionality is being added through the withLoadingIndicator higher-order component (HOC) that wraps the Button component and provides the additional feature. This way, you can reuse the same button component and reuse it with different HOCs, changing its behavior without changing the component itself.