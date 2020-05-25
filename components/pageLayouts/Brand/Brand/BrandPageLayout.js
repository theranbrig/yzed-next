import BrandFooter from './BrandFooter';
import BrandHeader from './BrandHeader';
import BrandMainSection from './BrandMainSection';

const BrandPageLayout = ({ model }) => {
  return (
    <div>
      <BrandHeader />
      <BrandMainSection model={model} />
      <BrandFooter />
    </div>
  );
};

export default BrandPageLayout;
