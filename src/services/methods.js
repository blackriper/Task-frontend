
export const formatDate=(fecha)=> {
    var fech;
    let day = fecha.day;
    let month = fecha.month;
    let year = fecha.year;

    if(day < 10){
       fech=`${day}/0${month}/${year}`;
    }else{
        fech=`${day}/${month}/${year}`;
    }
    return fech;
}