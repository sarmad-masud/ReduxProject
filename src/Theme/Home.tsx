import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '560px',
  color: '#fff',
  lineHeight: '560px',
  textAlign: 'center',
  background: '#364d79',
 // marginTop: '-19px', 
};

const Home: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <>
    <Carousel afterChange={onChange} autoplay>
      <div>
        <div style={contentStyle}>
          <h1>Welcome to our website</h1>
          <p>This is slide 1</p>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <h1>Discover amazing features</h1>
          <p>This is slide 2</p>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <h1>Stay connected with us</h1>
          <p>This is slide 3</p>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <h1>Explore our products</h1>
          <p>This is slide 4</p>
        </div>
      </div>
    </Carousel>

<section style={{ backgroundColor: '#f0f2f5', padding: '50px 0' }}>
<div className="container">
  <h2>Section 1</h2>
  <p>This is section 1 content.</p>
</div>
</section>

<section style={{ backgroundColor: '#fff', padding: '50px 0' }}>
<div className="container">
  <h2>Section 2</h2>
  <p>This is section 2 content.</p>
</div>
</section>

<section style={{ backgroundColor: '#f0f2f5', padding: '50px 0' }}>
<div className="container">
  <h2>Section 3</h2>
  <p>This is section 3 content.</p>
</div>
</section>

</>
  );
};

export default Home;
