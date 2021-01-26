let Name:string = "Jai Venkateswara Technologies";
let EduQual:string = "B TECH MCA MBA BSC MSC"
let DOB:string = "2/6/1988"
let Addr:string = "233/3 Ground floor new thippasandra"
let Mobile: number = 9900367097
let Email:string = "venkatesh.db@gmail.com"
let Exp:string = "1 year"
let Skill:string = "C,CPP all Lang & 1 years"
let Manager:string = "Venkatesh"
let PAN:string = "asu675901f"
console.log(Name)
console.log(EduQual)
console.log(DOB)
console.log(Addr)
console.log(Mobile)
console.log(Email)
console.log(Exp)
console.log(Skill)
console.log(Manager)
console.log(PAN)

function employee(name:string, qualification:string, dob:string, address:string, mobile:number, mailid:string, exp:string, skill:string, manager:string, panno:string){
    console.log(name)
    console.log(qualification)
    console.log(dob)
    console.log(address)
    console.log(mobile)
    console.log(mailid)
    console.log(exp)
    console.log(skill)
    console.log(manager)
    console.log(panno)
}

employee("Jai Venkateswara Technologies", "B TECH MCA MBA BSC MSC", "2/6/1988", "233/3 Ground floor new thippasandra", 08025216666, "venkatesh.db@gmail.com", "1 year", "C,CPP all Lang & 1 years", "Venkatesh", "asu675901f")

function details(types:string, date:string, day:string, time:string, tickets:number, booking_no:string, order_no:number, mailid:string, amount:string, proof_id:string, booking_date:string, persons:number, darshan:string, report_time:string, perfo_time:string, seva:string, book_time:string, acc_type:string, avail:number, no_tickets:number, rate:string){
	console.log(types)
   	console.log(date)
   	console.log(day)
   	console.log(time)
   	console.log(tickets)
   	console.log(booking_no)
   	console.log(order_no)
   	console.log(mailid)
   	console.log(amount)
   	console.log(proof_id)
   	console.log(booking_date)
   	console.log(persons)
   	console.log(darshan)
   	console.log(report_time)
   	console.log(perfo_time)
   	console.log(seva)
   	console.log(book_time)
   	console.log(acc_type)
   	console.log(avail)
   	console.log(no_tickets)
   	console.log(rate)
}
details("Special Entry", "Dec 1st", "Tuesday", "3:30 Am", 2000, "IS151110080016", 010600013554, "venkateshprofessional7@gmail.com", "220.00", "Aadhaar Card 733498928758", "11062015 11:36:46", 1, "Archana", "4:00 AM", "12012015 AM 4:30:00", "Two Small Laddu", "11:36:46", "Rs 500", 350, 1, "50 to 2000")

class ticket_res{
	TransactionID:number;
	PNRNo:number;
	TrainNo_Name:string;
	DoB:string;
	Class:string;
	Quota:string;
	Date_of_Journey:string;
	From:string;
	To:string;
	Boarding_At:string;
	DateOfBoarding:string;
	Reservation_Upto:string;
	Scheduled_Departure:string;
	constructor(id:number, pnr_no:number, train_name:string, dob:string, train_class:string, quota:string, journey_date:string, from_:string, to:string, boarding:string, boarding_date:string, reservation:string, departure:string){
	this.TransactionID = id;
	this.PNRNo = pnr_no;
	this.TrainNo_Name = train_name;
	this.DoB = dob;
	this.Class = train_class;
	this.Quota = quota;
	this.Date_of_Journey = journey_date;
	this.From = from_;
	this.To = to;
	this.Boarding_At = boarding;
	this.DateOfBoarding = boarding_date;
	this.Reservation_Upto = reservation;
	this.Scheduled_Departure = departure;
	}
    display(){
    console.log(this.TransactionID)
    console.log(this.PNRNo)
    console.log(this.TrainNo_Name)
    console.log(this.DoB)
    console.log(this.Class)
    console.log(this.Quota)
    console.log(this.Date_of_Journey)
    console.log(this.From)
    console.log(this.To)
    console.log(this.Boarding_At)
    console.log(this.DateOfBoarding)
    console.log(this.Reservation_Upto)
    console.log(this.Scheduled_Departure)
    }
}
let reservation = new ticket_res(100000380284535, 4115023549, "56213 / TIRUPATI PASSR", "14-Dec-2015", "SLEEPERCLASS", "GENERAL", "04-Jan-2016", "KJM", "TPTY", "KJM", "04-Jan-2016", "TPTY", "21:00 Hrs");
reservation.display();

