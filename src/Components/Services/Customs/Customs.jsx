import CustomsChoose from "./CustomsChoose";
import CustomsFAQ from "./CustomsFAQ";
import CustomsHandling from "./CustomsHandling";
import CustomsHome from "./CustomsHome";
import CustomsIntro from "./CustomsIntro";
import CustomsWhoWeServe from "./CustomsWhoWeServe";

const Customs = () => {
  return (
    <div>
      <CustomsHome />
      <CustomsIntro />
      <CustomsHandling />
      <CustomsChoose />
      <CustomsWhoWeServe />
      <CustomsFAQ />
    </div>
  );
};

export default Customs;
