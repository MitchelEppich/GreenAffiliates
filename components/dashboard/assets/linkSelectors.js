const index = props => {
  return (
    <React.Fragment>
      <label htmlFor="gaMainLink">Main Link for Promotion</label>
      <input id="gaMainLink" type="url" placeholder="" />
      <label htmlFor="gaSecondaryLink">Secondary Link for Promotion</label>
      <input id="gaSecondaryLink" type="url" placeholder="" />
      <label htmlFor="gaThirdLink">Third Link for Promotion</label>
      <input id="gaThirdLink" type="url" placeholder="" />
      <label htmlFor="gaFourthLink">Fourth Link for Promotion</label>
      <input id="gaFourthLink" type="url" placeholder="" />
      <input class="ga-btn ga-send-btn" type="submit" value="Save Assets" />
    </React.Fragment>
  );
};

export default index;
