const countWordsInInput = (INPUT, QUERY) => {
    const wordCount = {};
    
    INPUT.forEach(word => {
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    });
    
    const result = QUERY.map(word => (wordCount[word] || 0));
    
    return result;
  };
  
  const INPUT = ['xc', 'dz', 'bbb', 'dz'];
  const QUERY = ['bbb', 'ac', 'dz'];
  const output = countWordsInInput(INPUT, QUERY);
  console.log(output);