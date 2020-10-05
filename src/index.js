module.exports = function toReadable (number) {
    let arrNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
      let arrNumber2 = [0, 1, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      if (number < 20) {
          return arrNumber[number];
      };
  
  
      if (number < 100) {
         let num = (number + '').split('');
           if (num[1] == 0) {
             return arrNumber2[num[0]];
           } else {
         return arrNumber2[num[0]] + ' ' + arrNumber[num[1]];
          }
      };
  
  
      if (number < 1000) {
          let num2 = (number + '').split('');
          if (num2[1] == 0 && num2[2] == 0) {
              return arrNumber[num2[0]] + ' hundred';
          } else if (num2[1] == 0) {
              return arrNumber[num2[0]] + ' hundred ' + arrNumber[num2[2]];
          } else if (num2[1] == 1) {
              return arrNumber[num2[0]] + ' hundred ' + arrNumber[num2[1].toString()+num2[2]];
          } else if (num2[2]== 0) {
              return arrNumber[num2[0]] + ' hundred ' + arrNumber2[num2[1]];
          } else {
          return arrNumber[num2[0]] + ' hundred ' + arrNumber2[num2[1]] + ' ' + arrNumber[num2[2]];
          };
      };
  };
  