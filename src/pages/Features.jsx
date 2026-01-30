import  FeaturesGrid  from "../components/features/FeatureCom";
import SaveTogether from "../components/features/SaveTogether";

function Features() {
  return (
    <div className="bg-[#434c5d] px-[15px] md:px-[60px] py-[10px] md:py-[30px]">
      <FeaturesGrid/>
      <SaveTogether/>
    </div>
  );
}

export default Features;
