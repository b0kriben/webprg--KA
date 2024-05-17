function sliding(nums, k) {
	k--;
  return nums.reduce((t,x,i)=>{
   if(i>=k){
     t.push(Math.max(...nums.slice(i-k,i+1)));
   }
   return t;
  },[]);
}