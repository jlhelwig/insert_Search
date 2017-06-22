var someArr = [3,4,5,9,10,1,2];


function insertSort(arr){

    for (i=1; i<=arr.length; i++){
      var temp = arr[i];
      j=i-1;

      while(temp<arr[j] && j >= 0){
        arr[j+1]=arr[j];
        arr[j]=temp;
        --j;
      }
      temp = arr [i];
    }
    console.log(arr);
    return arr;

  }
  insertSort(someArr);
