/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        body: '#EE3E2F',
        primary: '#151618',
        button : '#000',
        background : '#F8F8F8',
        hover : '#8B8B8B',
        btn : '#565557',
      

      
    
  },
  backgroundImage: {
    'hero-pattern': "url('/image/53fccd16c7e5417599758241152fb7f8.webp')",
    'hero-male':"url('/image/8f34c3da720b4007b306afedd9337260.webp')",
    'team-one':"url('/image/2e2a49_dd367b07e33c4bf1b9777f2fe08cd512_mv2_d_2598_2205_s_2.webp')",
    'team-two':"url('/image/2e2a49_3a098004e4d6421985ef27877c26bb38_mv2_d_2598_2205_s_2.webp')",
    'team-tree':"url('/image/2e2a49_0beae01326244da9936b9bdec997e578_mv2_d_2598_2205_s_2.webp')",
    'course-one':"url('/image/1.webp')",
    'course-two':"url('/image/2.webp')",
    'course-tree':"url('/image/3.webp')",
    'course-four':"url('/image/4.webp')",
    'course-five':"url('/image/5.webp')",
    'course-six':"url('/image/6.webp')",
    'course-seven':"url('/image/10.webp')"
 
  },
  screens: {
    xs:'320px',
    sm:'375px',
    sml:'500px',
    md:'667px',
    mdl : '786px',
    lg:'960px',
    lgl:'1024px',
    xl:'1280px',
    xxl:  '1536px',
  },




    },
  },
  plugins: [],
}
