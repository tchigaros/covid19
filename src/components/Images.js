import React from "react";
const images = [
  { id: a1, src: './images/a01n.png', title: 'foo', description: 'bar' },
  { id: a2, src: './images/a02d.png', title: 'foo', description: 'bar' },
  { id: a3, src: './images/a02n.png', title: 'foo', description: 'bar' },
  { id: a4, src: './images/a03d.png', title: 'foo', description: 'bar' },
  { id: a5, src: './images/a03n.png', title: 'foo', description: 'bar' },
  { id: a6, src: './images/a04n.png', title: 'foo', description: 'bar' },
  { id: a7, src: './images/a04d.png', title: 'foo', description: 'bar' },
  { id: a8, src: './images/a05n.png', title: 'foo', description: 'bar' },
  { id: a9, src: './images/a05d.png', title: 'foo', description: 'bar' },
  { id: a10, src: './images/a06n.png', title: 'foo', description: 'bar' },
  { id: a11, src: './images/a06d.png', title: 'foo', description: 'bar' },
  { id: c1, src: './images/c01d.png', title: 'foo', description: 'bar' },
  { id: c2, src: './images/c01n.png', title: 'foo', description: 'bar' },
  { id: c3, src: './images/c02d.png', title: 'foo', description: 'bar' },
  { id: c4, src: './images/c02n.png', title: 'foo', description: 'bar' },
  { id: c5, src: './images/c03d.png', title: 'foo', description: 'bar' },
  { id: c6, src: './images/c03n.png', title: 'foo', description: 'bar' },
  { id: c7, src: './images/c04d.png', title: 'foo', description: 'bar' },
  { id: c8, src: './images/c04n.png', title: 'foo', description: 'bar' },
  { id: d1, src: './images/d01d.png', title: 'foo', description: 'bar' },
  { id: d2, src: './images/d01n.png', title: 'foo', description: 'bar' },
  { id: d3, src: './images/d02d.png', title: 'foo', description: 'bar' },
  { id: d4, src: './images/d02n.png', title: 'foo', description: 'bar' },
  { id: d5, src: './images/d03d.png', title: 'foo', description: 'bar' },
  { id: d6, src: './images/d03n.png', title: 'foo', description: 'bar' },
  { id: f1, src: './images/f01d.png', title: 'foo', description: 'bar' },
  { id: f2, src: './images/f02n.png', title: 'foo', description: 'bar' },
  { id: r1, src: './images/r01d.png', title: 'foo', description: 'bar' },
  { id: r2, src: './images/r01n.png', title: 'foo', description: 'bar' },
  { id: r3, src: './images/r02d.png', title: 'foo', description: 'bar' },
  { id: r4, src: './images/r02n.png', title: 'foo', description: 'bar' },
  { id: r5, src: './images/r03d.png', title: 'foo', description: 'bar' },
  { id: r6, src: './images/r03n.png', title: 'foo', description: 'bar' },
  { id: r7, src: './images/r04d.png', title: 'foo', description: 'bar' },
  { id: r8, src: './images/r04n.png', title: 'foo', description: 'bar' },
  { id: r9, src: './images/r05d.png', title: 'foo', description: 'bar' },
  { id: r10, src: './images/r05n.png', title: 'foo', description: 'bar' },
  { id: r11, src: './images/r06d.png', title: 'foo', description: 'bar' },
  { id: r12, src: './images/r06n.png', title: 'foo', description: 'bar' },
  { id: s1, src: './images/s01d.png', title: 'foo', description: 'bar' },
  { id: s2, src: './images/s01n.png', title: 'foo', description: 'bar' },
  { id: s3, src: './images/s02d.png', title: 'foo', description: 'bar' },
  { id: s4, src: './images/s02n.png', title: 'foo', description: 'bar' },
  { id: s5, src: './images/s03d.png', title: 'foo', description: 'bar' },
  { id: s6, src: './images/s03n.png', title: 'foo', description: 'bar' },
  { id: s7, src: './images/s04d.png', title: 'foo', description: 'bar' },
  { id: s8, src: './images/s04n.png', title: 'foo', description: 'bar' },
  { id: s9, src: './images/s05d.png', title: 'foo', description: 'bar' },
  { id: s10, src: './images/s05n.png', title: 'foo', description: 'bar' },
  { id: s11, src: './images/s06d.png', title: 'foo', description: 'bar' },
  { id: s12, src: './images/s06n.png', title: 'foo', description: 'bar' },
  { id: t1, src: './images/t01d.png', title: 'foo', description: 'bar' },
  { id: t2, src: './images/t01n.png', title: 'foo', description: 'bar' },
  { id: t3, src: './images/t02d.png', title: 'foo', description: 'bar' },
  { id: t4, src: './images/t02n.png', title: 'foo', description: 'bar' },
  { id: t5, src: './images/t03d.png', title: 'foo', description: 'bar' },
  { id: t6, src: './images/t03n.png', title: 'foo', description: 'bar' },
  { id: t7, src: './images/t04d.png', title: 'foo', description: 'bar' },
  { id: t8, src: './images/t04n.png', title: 'foo', description: 'bar' },
  { id: t9, src: './images/t05d.png', title: 'foo', description: 'bar' },
  { id: t10, src: './images/t05n.png', title: 'foo', description: 'bar' },
  { id: u1, src: './images/u01d.png', title: 'foo', description: 'bar' },
  { id: u2, src: './images/u01n.png', title: 'foo', description: 'bar' },
  
];

export default images;

