import BrandFooter from './BrandFooter';
import BrandHeader from './BrandHeader';
import BrandMainSection from './BrandMainSection';
import BrandAbout from './BrandAbout';
import { Element } from 'react-scroll';

const BrandPageLayout = ({ model }) => {
  return (
    <div>
      <Element name='introduction'>
        <BrandHeader />
      </Element>
      <Element name='model'>
        <BrandMainSection model={model} />
      </Element>
      <Element name='about'>
        <BrandAbout />
      </Element>
      <Element>
        <BrandFooter />
      </Element>
    </div>
  );
};

export default BrandPageLayout;
