<script>

var Name = "Naga Lalitha Kumari Bezawada"
var Dob = "18-02-1989"
var Time_Of_Birth = "7.30-8PM"
var Place_Of_Birth = "Samalkota"
var Nativity = "Rajahmundry"
var Martial_Status = "UnMarried"
var Religion = "Hindu"
var Community = "Telugu"
var Caste = "Balija"
var Sub_Sect = "Krishna Balija"
var Mother_Tongue = "Telugu"
var Gothram = "Mathala"
var Star = "Pushyami 3,4P"
var Height = "5'11"
var Complexion = "Medium"
var Qualification = "B.Tech(CS)"
var University = "KIET,Kakinada"
var Blood_Group = "B+ve"

function personal(){
	Name = "Naga Lalitha Kumari Bezawada"
	Dob = "18-02-1989"
	Time_Of_Birth = "7.30-8PM"
	Place_Of_Birth = "Samalkota"
	Nativity = "Rajahmundry"
	Martial_Status = "UnMarried"
	Religion = "Hindu"
	Community = "Telugu"
	Caste = "Balija"
	Sub_Sect = "Krishna Balija"
	Mother_Tongue = "Telugu"
   	Gothram = "Mathala"
	Star = "Pushyami 3,4P"
	Height = "5'11"
	Complexion = "Medium"
	Qualification = "B.Tech(CS)"
	University = "KIET,Kakinada"
	Blood_Group = "B+ve"
    document.writeln(Name)
    document.writeln(Dob)
    document.writeln(Time_Of_Birth)
    document.writeln(Place_Of_Birth)
    document.writeln(Nativity)
    document.writeln(Martial_Status)
    document.writeln(Religion)
    document.writeln(Community)
    document.writeln(Caste)
    document.writeln(Sub_Sect)
    document.writeln(Mother_Tongue)
    document.writeln(Gothram)
    document.writeln(Star)
    document.writeln(Height)
    document.writeln(Complexion)
    document.writeln(Qualification)
    document.writeln(University)
    document.writeln(Blood_Group)
}
personal()

var TransactionID = 100000380284535
var PNRNo = 4115023549
var TrainNo_Name = "56213 / TIRUPATI PASSR"
var DoB = "14-Dec-2015"
var Class = "SLEEPERCLASS"
var Quota = "GENERAL"
var Date_of_Journey = "04-Jan-2016"
var From = "KJM"
var To = "TPTY"
var Boarding_At = "KJM"
var DateOfBoarding = "04-Jan-2016"
var Reservation_Upto = "TPTY"
var Scheduled_Departure = "21:00 Hrs" 
document.writeln(TransactionID)
document.writeln(PNRNo)
document.writeln(TrainNo_Name)
document.writeln(DoB)
document.writeln(Class)
document.writeln(Quota)
document.writeln(Date_of_Journey)
document.writeln(From)
document.writeln(To)
document.writeln(Boarding_At)
document.writeln(DateOfBoarding)
document.writeln(Reservation_Upto)
document.writeln(Scheduled_Departure)

function ticket(id, pnr_no, train_name, dob, train_class, quota, journey_date, from, to, boarding, boarding_date, reservation, departure){
	TransactionID = id
	PNRNo = pnr_no
	TrainNo_Name = train_name
	DoB = dob
	Class = train_class
	Quota = quota
	Date_of_Journey = journey_date
	From = from
	To = to
	Boarding_At = boarding
	DateOfBoarding = boarding_date
	Reservation_Upto = reservation
	Scheduled_Departure =  departure
    document.writeln(TransactionID)
    document.writeln(PNRNo)
    document.writeln(TrainNo_Name)
    document.writeln(DoB)
    document.writeln(Class)
    document.writeln(Quota)
    document.writeln(Date_of_Journey)
    document.writeln(From)
    document.writeln(To)
    document.writeln(Boarding_At)
    document.writeln(DateOfBoarding)
    document.writeln(Reservation_Upto)
    document.writeln(Scheduled_Departure)
}
ticket(100000380284535, 4115023549, "56213 / TIRUPATI PASSR", "14-Dec-2015", "SLEEPERCLASS", "GENERAL", "04-Jan-2016", "KJM", "TPTY", "KJM", "04-Jan-2016", "TPTY", "21:00 Hrs")

var Lastname = "kumar"
var Firstname = "Pavan"
var Middlename = "Bijjavaram"
var Dlicenseno = "ka50201500006939"
var state = "Karnataka"
var country = "India"
var type = "around India"
var Employeetype = "software engineer"
var Dofb = "12-07-1992"
var Cityob = "rajampet"
document.writeln(Lastname)
document.writeln(Firstname)
document.writeln(Middlename)
document.writeln(Dlicenseno)
document.writeln(state)
document.writeln(country)
document.writeln(type)
document.writeln(Employeetype)
document.writeln(Dofb)
document.writeln(Cityob)

function id(lastname, firstname, middlename, licenseno, state, country, type, employee_type, dob, birthcity){
	Lastname = lastname
	Firstname = firstname
	Middlename = middlename
	Dlicenseno = licenseno
	State = state
	Country = country
	Type = type
	Employeetype = employee_type
	Dofb = dob
	Cityob = birthcity
document.writeln(Lastname)
document.writeln(Firstname)
document.writeln(Middlename)
document.writeln(Dlicenseno)
document.writeln(State)
document.writeln(Country)
document.writeln(Type)
document.writeln(Employeetype)
document.writeln(Dofb)
document.writeln(Cityob)
}

id("kumar", "Pavan", "Bijjavaram", "ka50201500006939", "Karnataka", "India", "around India", "software engineer", "12-07-1992", "rajampet")

class software{
	constructor(name, qualification, dob, address, number, mobile, mailid, exp, skill, manager, panno){
	this.Name = name
	this.EduQual = qualification
	this.DOB = dob
	this.Addr = address
	this.Number = number
	this.Mobile = mobile
	this.Email = mailid
	this.Exp = exp
	this.Skill = skill
	this.Manager = manager
	this.PAN = panno    
    }
    display(){
	document.write(this.Name)
	document.write(this.EduQual)
	document.write(this.DOB)
	document.write(this.Addr)
	document.write(this.Number)
	document.write(this.Mobile)
	document.write(this.Email)
	document.write(this.Exp)
	document.write(this.Skill)
	document.write(this.Manager)
	document.write(this.PAN)
    }
}
let venkatesh_jvt = new software()
venkatesh_jvt.display()

</script>
