import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <>
      <div className="error-area ptb-100">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="error-content">
              <h1>
                <span className="a">4</span> <span className="red">0</span>{' '}
                <span className="b">4</span>
              </h1>
              <h3 className="mb-4">Էջը չի գտնվել</h3>

              <Link href="/" className="default-btn two">
                <span>Վերադառնալ գլխավոր էջ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;
