import React, { Component } from "react";

// const withClassHOC = (WrappedComponent, className) => {
//   return props => (
//     <div className={className}>
//       <WrappedComponent {...props}></WrappedComponent>
//     </div>
//   );
// };

const withClassHOC = (WrappedComponent, className) => {
  const WithClassHOC = class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent
            {...this.props}
            ref={this.props.forwardedRef}></WrappedComponent>
        </div>
      );
    }
  };
  return React.forwardRef((props, ref) => {
    return <WithClassHOC {...props} forwardedRef={ref}></WithClassHOC>;
  });
};

export default withClassHOC;
