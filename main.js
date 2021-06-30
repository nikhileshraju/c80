var student_array = [];
function submit(){
var display_array=[];
for (var i=1;i<=4;i++){
var student_name =document.getElementById("name_of_the_student_"+i).value;
student_array.push(student_name);
console.log(student_name);
}
console.log(student_array);
for(var n=0;n<student_array.length;n++){
display_array.push("<h4>NAME -"+student_array[n]+"</h4>");
console.log(display_array);
}
document.getElementById("display_name_with_commas").innerHTML = display_array;
var remove_commas = display_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}
function sorting(){
student_array.sort();
console.log(student_array);
var display_sort_array = []
for(var n=0;n<student_array.length;n++){
    display_sort_array.push("<h4>NAME -"+student_array[n]+"</h4>");
}
    console.log(display_sort_array);
    var remove_commas_sort = display_sort_array.join(" ");
console.log(remove_commas_sort);
document.getElementById("display_name_without_commas").innerHTML = remove_commas_sort;
}
function new_update(){
document.getElementById("display_name_without_commas").innerHTML = "<h1>"+student_array+"</h1>";
console.log(student_array)
}