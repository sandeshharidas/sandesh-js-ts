<script>

var Name = "Jai Venkateswara Technologies"
var EduQual = "B TECH MCA MBA BSC MSC"
var DOB = "2/6/1988"
var Addr = "233/3 Ground floor new thippasandra"
var Number = 08025216666
var Mobile = 9900367097
var Email = "venkatesh.db@gmail.com"
var Exp = "1 year"
var Skill = "C,CPP all Lang & 1 years"
var Manager = "Venkatesh"
var PAN = "asu675901f"
document.write(Name)
document.write(EduQual)
document.write(DOB)
document.write(Addr)
document.write(Number)
document.write(Mobile)
document.write(Email)
document.write(Exp)
document.write(Skill)
document.write(Manager)
document.write(PAN)

function employee(name, qualification, dob, address, number, mobile, mailid, exp, skill, manager, panno){
	Name = name
	EduQual = qualification
	DOB = dob
	Addr = address
	Number = number
	Mobile = mobile
	Email = mailid
	Exp = exp
	Skill = skill
	Manager = manager
	PAN = panno
	document.write(Name)
	document.write(EduQual)
	document.write(DOB)
	document.write(Addr)
	document.write(Number)
	document.write(Mobile)
	document.write(Email)
	document.write(Exp)
	document.write(Skill)
	document.write(Manager)
	document.write(PAN)
}

function bank_stat(Bank_Name, Date, Time, ATM_No, CARD_No, BRANCH ){
  document.writeln(Bank_Name, Date, Time, ATM_No, CARD_No, BRANCH)
}

bank_stat("SBI Bank", "29/05/14", "19:48", "1234", "xxxx xxxxx xxxx 0516", "Bangalore Main Branch" )
bank_stat("ICICI Bank", "02/10/17", "10:20", "4321", "xxxx xxxxx xxxx 8362", "Mysore Main Branch" )



var TicketType = "Special Entry"
var DarshanDate = "Dec 1st"
var Day = "Tuesday"
var Time = "3:30 Am"
var PerSlotTickets = 2000
var BookingNo = "IS151110080016"
var NameofthePilgrim = "venkatesh"
var OrderNo = 010600013554
var Email = "venkateshprofessional7@gmail.com"
var Amountinfigures = "220.00"
var ProofofID = "Aadhaar Card 733498928758"
var BookedDate_Time = "11062015 11:36:46"
var No_of_Persons = 1
var Seva_Darshan = "Archana" 
var ReportingTime = "4:00 AM"
var Perfo_Date_Time = "12012015 AM 4:30:00"
var Privi_Seva = "Two Small Laddu"
var BookedTime = "11:36:46"
var AccomType = "Rs 500"
var Available = 350
var No_of_Tickets = 1
var Rate = "50 to 2000"
document.writeln(TicketType)
document.writeln(DarshanDate)
document.writeln(Day)
document.writeln(Time)
document.writeln(PerSlotTickets)
document.writeln(NameofthePilgrim)
document.writeln(OrderNo)
document.writeln(Email)
document.writeln(Amountinfigures)
document.writeln(ProofofID)
document.writeln(BookedDate_Time)
document.writeln(No_of_Persons)
document.writeln(Seva_Darshan)
document.writeln(ReportingTime)
document.writeln(Perfo_Date_Time)
document.writeln(Privi_Seva)
document.writeln(BookedTime)
document.writeln(AccomType)
document.writeln(Available)
document.writeln(No_of_Tickets)
document.writeln(Rate)

function details(type, date, day, time, tickets, booking_no, name, order_no, mailid, amount, proof_id, booking_date, persons, darshan, report_time, perfo_time, seva, book_time, acc_time, avail, no_tickets, rate){
	TicketType = type
	DarshanDate = date
	DarshanDay = day
	DarshanTime = time
	PerSlotTickets = tickets
	BookingNo = booking_no
	NameofthePilgrim = name
	OrderNo = order_no
	Email = mailid
	Amountinfigures = amount
	ProofofID = proof_id
	BookedDate_Time = booking_date
	No_of_Persons = persons
	Seva_Darshan =  darshan
	ReportingTime = report_time
	Perfo_Date_Time = perfo_time
	Privi_Seva = seva
	BookedTime = book_time
	AccomType = acc_time
	Available = avail
	No_of_Tickets = no_tickets
	Rate = rate
	document.writeln(TicketType)
   	document.writeln(DarshanDate)
   	document.writeln(DarshanDay)
   	document.writeln(DarshanTime)
   	document.writeln(PerSlotTickets)
   	document.writeln(NameofthePilgrim)
   	document.writeln(OrderNo)
   	document.writeln(Email)
   	document.writeln(Amountinfigures)
   	document.writeln(ProofofID)
   	document.writeln(BookedDate_Time)
   	document.writeln(No_of_Persons)
   	document.writeln(Seva_Darshan)
   	document.writeln(ReportingTime)
   	document.writeln(Perfo_Date_Time)
   	document.writeln(Privi_Seva)
   	document.writeln(BookedTime)
   	document.writeln(AccomType)
   	document.writeln(Available)
   	document.writeln(No_of_Tickets)
   	document.writeln(Rate)
}
details("Special Entry", "Dec 1st", "Tuesday", "3:30 Am", 2000, "IS151110080016", "venkatesh", 010600013554, "venkateshprofessional7@gmail.com", "220.00", "Aadhaar Card 733498928758", "11062015 11:36:46", "Archana", "4:00 AM", "12012015 AM 4:30:00", "Two Small Laddu", "11:36:46", "Rs 500", "50 to 2000")
var Vehicletype = "light motor vehicle - car"
var Colour = "red"
var Enginenumber = "kp98gtyihh457797"
var Chassisnumber = "tc5678898335r45"
var Company = "BMW"
document.writeln(Vehicletype)
document.writeln(Colour)
document.writeln(Enginenumber)
document.writeln(Chassisnumber)
document.writeln(Company)

function vehicleinfo(type, col, engine_no, chassis_no, company){
	 Vehicletype = type
     Colour = col
     Enginenumber = engine_no
     Chassisnumber = chassis_no
     Company = company
     document.writeln(this.Vehicletype)
     document.writeln(this.Colour)
     document.writeln(this.Enginenumber)
     document.writeln(this.Chassisnumber)
     document.writeln(this.Company)
}
vehicleinfo("light motor vehicle - car", "red", "kp98gtyihh457797", "tc5678898335r45", "BMW")

</script>
