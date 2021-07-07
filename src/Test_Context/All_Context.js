import React, {Fragment} from 'react';
import Counter from "./Counter";
import NumberProvider from "./NumberProvider";
import NumberContext from "./NumberContext";

function All_ConText() {
  return (
    <Fragment>
    {/* Provider cung cấp data cho các compnent khác sử dụng */}
      <NumberProvider> 
        <NumberContext.Consumer>
            {/* khái báo một cái object có chứa key =number và updateNumber() từ file NumberProvider */}
          {({ number, updateNumber,minusNumber }) => (
            <div>
              <h2>{number}</h2>
              <button onClick={updateNumber}>Update Number</button>
              <button onClick={minusNumber}>Minus Number</button>
            </div>
          )}
        </NumberContext.Consumer>
        <Counter>{({ count }) => <h1>{count}</h1>}</Counter>
    </NumberProvider>

    </Fragment>
  );
}

export default All_ConText;
