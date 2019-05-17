import React from 'react';

interface labeledValue {
  label: string;
}
const Hw = () => <h1>hello ts!</h1>;

const func = function(l: labeledValue) {
  console.log(l.label);
};
func({ label: 'Mikey is winning' });
export default Hw;
