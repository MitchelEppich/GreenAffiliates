const index = props => {
  let options = props.menuOptions.map((option, i) => (
    <div key={i}>{option.name}</div>
  ));
  return <div>{options}</div>;
};
export default index;
