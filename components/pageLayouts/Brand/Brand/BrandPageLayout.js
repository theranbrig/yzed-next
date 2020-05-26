import BrandFooter from './BrandFooter';
import BrandHeader from './BrandHeader';
import BrandMainSection from './BrandMainSection';
import BrandAbout from './BrandAbout';

const BrandPageLayout = ({ model }) => {
  return (
    <div>
      <BrandHeader />
      <BrandMainSection model={model} />
      <BrandAbout />
      <BrandFooter />
    </div>
  );
};

export default BrandPageLayout;
