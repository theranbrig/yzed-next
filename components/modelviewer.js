import Head from 'next/head';
import Layout from './layout';

const ModelViewer = ({ model }) => {
  return (
    <div className='container'>
      <Head>
        <script
          type='module'
          src='https://unpkg.com/@google/model-viewer/dist/model-viewer.js'></script>
        <script
          noModule
          src='https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js'></script>
      </Head>
      <model-viewer
        src={
          model
            ? model.glbFile
            : 'https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/march11_gltf_look5_v1.gltf'
        }
        alt={model ? model.name : 'YZED Silver Skirt'}
        ar
        autoplay
        ios-src={
          model
            ? model.usdzFile
            : 'https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/march11_gltf_look5_v1.usdz'
        }
        auto-rotate
        camera-controls
        poster='/icons/logo.svg'></model-viewer>
      <style jsx global>{`
        model-viewer {
          width: 500px;
          height: 300px;
          margin: 0 auto;
          z-index: 0;
          background: white;
        }
      `}</style>
    </div>
  );
};

export default ModelViewer;
