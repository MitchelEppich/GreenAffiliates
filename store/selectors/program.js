const program = createSelector => {
  const program = {
    getData: (state, props) => {
      return state.misc.data;
    },
    getCompanies: (state, props) => {
      return state.misc.companyDirectory;
    },
    makeGetDataState: () =>
      createSelector(
        [program.getData],
        data => data
      ),
    makeGetCompanies: () =>
      createSelector(
        [program.getCompanies],
        companyDirectory => companyDirectory
      )
  };

  return program;
};
export default program;
