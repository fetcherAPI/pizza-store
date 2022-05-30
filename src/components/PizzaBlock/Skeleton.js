import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={466}
    viewBox='0 0 280 466'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='2' y='295' rx='3' ry='3' width='279' height='20' />
    <circle cx='140' cy='135' r='125' />
    <rect x='1' y='331' rx='7' ry='7' width='276' height='68' />
    <rect x='0' y='411' rx='3' ry='3' width='89' height='24' />
    <rect x='168' y='407' rx='21' ry='21' width='109' height='40' />
  </ContentLoader>
);

export default Skeleton;
