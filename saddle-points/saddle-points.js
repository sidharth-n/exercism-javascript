export const saddlePoints = (mat) => {
  let temp=[];let result =[];
  for (let i=0;i<mat.length;i++){
  for(let j=0;j<mat[i].length;j++){
  if(mat[i][j]==Math.max(...mat[i])){
  for(let k=0;k<mat.length;k++){
    temp.push(mat[k][j]);
  }
  if(mat[i][j]==Math.min(...temp))result.push({row:(i+1),column:(j+1)})
  temp=[];
}}}
  return result;
};
