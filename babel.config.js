module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins:[
    ['import',{
      libraryName: 'vant',
      libraryDirectry: 'es',
      style: true
    }, 'vant']
  ]
}
