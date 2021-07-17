var data1=[1, "Daeho"]
var data2=[2, "DoDo"]
var data3=[3, "JaMong"]

var hashTable = [0,0,0,0,0,0,0,0,0,0];

var insert_num=0;
var insert_data="No Data";

var key=0;
function Put_Data1(){
  insert_num=[data1[0]];
  insert_data=[data1[1]];
  MakeKey(insert_num);
  addData(key, insert_data)
};
function Put_Data2(){
  insert_num=[data2[0]];
  insert_data=[data2[1]];
  MakeKey(insert_num);
  addData(key, insert_data)
};
function Put_Data3(){
  insert_num=[data3[0]];
  insert_data=[data3[1]];
  MakeKey(insert_num);
  addData(key, insert_data)
};

function MakeKey(insert_num){
  key=insert_num-1;
};

function addData(key, insert_data){
 var address = key;
 hashTable[address]=insert_data;
};
