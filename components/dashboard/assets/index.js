import AssetUploader from "./assetUploader";
import LinkSelectors from "./linkSelectors";

const index = props => {
  return (
    <React.Fragment>
      <h1>Assets for Affiliates</h1>
      <form class="ga-asset-form">
        <AssetUploader {...props} />
        <LinkSelectors {...props} />
      </form>
    </React.Fragment>
  );
};
export default index;
