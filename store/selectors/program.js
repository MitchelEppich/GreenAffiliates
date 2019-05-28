const program = createSelector => {
  const program = {
    getData: (state, props) => {
      return state.misc.data;
    },
    makeGetDataState: () =>
      createSelector(
        [program.getData],
        data => data
      )
  };

  return program;
};
export default program;
