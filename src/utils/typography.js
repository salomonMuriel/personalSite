import Typography from "typography";

const typography = new Typography({
    baseFontSize: "16px",
    baseLineHeight: 1.5,
    headerFontFamily: ['Work Sans', 'sans-serif'],
    bodyFontFamily: ['Quattrocento Sans','sans-serif']
  });
  
  // Insert styles directly into the <head>
  typography.injectStyles();
  

export default typography;