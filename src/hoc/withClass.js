const withClass = props => (
  <div className={props.className}> {props.children}</div>
);

export default withClass;
