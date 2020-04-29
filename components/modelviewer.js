import Head from 'next/head';
import Layout from '../components/layout';

export default function ModelViewer() {
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
        style={{
          width: '500px',
          height: '300px',
          margin: '0 auto',
          zIndex: '0',
          maxWidth: '80%',
        }}
        src='https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/march11_gltf_look5_v1.gltf'
        alt='A 3D model of an astronaut'
        auto-rotate
        camera-controls
        className='model-viewer'></model-viewer>
      <style jsx>{``}</style>
    </div>
  );
}
