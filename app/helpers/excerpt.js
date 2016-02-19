import Ember from 'ember';

export function excerpt(text) {
  if (text.length === 1) {
    let string = text[0];
    if(string.length > 200) {
      let shorter = string.substring(0, 200);
      return `${shorter}...`;
    }else{
      return string;
    }
  }
  // return text.substring(0, 150);
  // if(text.length > 150) {
  //   let shorter = text.substring(0, 150);
  //   return new Ember.Handlebars.SafeString(`${shorter}...`);
  // }
}

export default Ember.Helper.helper(excerpt);
