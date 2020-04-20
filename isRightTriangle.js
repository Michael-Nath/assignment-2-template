const isRightTriangle = (a, b, c) => (inequality(a,b,c) && inequality(a,c,b) && inequality(b,c,a))

const inequality = (s1,s2,s3) => s1 + s2 > s3

module.exports = isRightTriangle;
