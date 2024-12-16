function partial(RTP, ...args) {
  return function RTPCustom (...args2) {// кастомизированная RTP
    return RTP(...args2, ...args); // результат
  };
}



function raiseToPower(base, exponent) {
  return Math.pow(base, exponent);
}

const raiseToPowerOf2 = partial(raiseToPower, 2);

console.log(raiseToPowerOf2(3));


const raiseToPowerOf3 = partial(raiseToPower, 3);

console.log(raiseToPowerOf3(5));