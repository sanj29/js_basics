let day ="Thu"

switch (day){

    case "Mon":
    case "Tue":
    case "Wed":
    case "Thu":
    case "Fri":           
        console.log("On "+day +" wake at 6am");
        break;

    case "Sun":
    case "Sat":
        console.log("On "+day +" wake at 9am");
        break;

    default:
        console.log("Wrong day");
}