<script>

company_details = [ "JVT", "B TECH MCA MBA BSC MSC", "2/6/1988", "233/3 Ground floor new thippasandra", "08025216666"]

document.writeln(company_details[0])
document.writeln(company_details[1])
document.writeln(company_details[2])
document.writeln(company_details[3])
document.writeln(company_details[4])
document.writeln(company_details[5])
document.writeln(company_details[6])
document.writeln(company_details[7])
document.writeln(company_details[8])

class int_det{
 constructor(accountno, userid, ipaddress){
 this.accno = accountno
 this.uid = userid
 this.ipaddr = ipaddress
 }

 display( ){
 document.writeln(this.accno)
 document.writeln(this.uid)
 document.writeln(this.ipaddr)
 }
}

class internet{
 constructor(total_data, up_speed, down_speed){
 this.data_down = total_data
 this.upload = up_speed
 this.download = down_speed
 }
 
 display(){
 document.writeln(this.data_down)
 document.writeln(this.upload)
 document.writeln(this.download)
 }
}

let int = new int_det ("1135497", "11128550", "10.245.97.123")
int.display()

let data = new internet ("21.26 GB", "32.06 mbps", "30.05 mbps")
int.display()

class sys_prop{
 constructor(rating, processor, ram, type, name, description, edition){
 this.Rating = rating
 this.Processor = processor
 this.RAM = ram
 this.System_type = type
 this.System_name = name
 this.System_description = description
 this.Edition = edition
}
 display(){
 document.writeln(this.Rating)
 document.writeln(this.Processor)
 document.writeln(this.RAM)
 document.writeln(this.System_type)
 document.writeln(this.System_name)
 document.writeln(this.System_description)
 document.writeln(this.Edition)
 }
}

let new_pc = new sys_prop("4.5", "4.00 GB", "64-Bit Operating System", "BALU PC", "Workgroup", "Windows 7 Ultimate")
new_pc.display()

function bank_stat(Bank_Name, Date, Time, ATM_No, CARD_No, BRANCH ){
  document.writeln(Bank_Name, Date, Time, ATM_No, CARD_No, BRANCH)
}

bank_stat("SBI Bank", "29/05/14", "19:48", "1234", "xxxx xxxxx xxxx 0516", "Bangalore Main Branch" )
bank_stat("ICICI Bank", "02/10/17", "10:20", "4321", "xxxx xxxxx xxxx 8362", "Mysore Main Branch" )

class booking{
constructor(type, date, day, time, tickets, book_no, name, order_no, mailid, amount, proof, book_id, no_of_persons, seva, report_time, perfo_time, book_time, accom_time, avail, no_of_ticket, rate){
	this.TicketType = type
	this.DarshanDate = date
	this.Day = day
	this.Time = time
	this.PerSlotTickets = tickets
	this.BookingNo = book_no
	this.NameofthePilgrim = name
	this.OrderNo = order_no
	this.Email = mailid
	this.Amountinfigures = amount
	this.ProofofID = proof
	this.BookedDate_Time = book_id
	this.No_of_Persons = no_of_persons
	this.Seva_Darshan =  seva
	this.ReportingTime = report_time
	this.Perfo_Date_Time = perfo_time
	this.Privi_Seva = seva
	this.BookedTime = book_time
	this.AccomType = accom_time
	this.Available = avail
	this.No_of_Tickets = no_of_ticket
	this.Rate = rate
}
display(){
	document.writeln(this.TicketType)
   	document.writeln(this.DarshanDate)
   	document.writeln(this.Day)
   	document.writeln(this.Time)
   	document.writeln(this.PerSlotTickets)
   	document.writeln(this.NameofthePilgrim)
   	document.writeln(this.OrderNo)
   	document.writeln(this.Email)
   	document.writeln(this.Amountinfigures)
   	document.writeln(this.ProofofID)
   	document.writeln(this.BookedDate_Time)
   	document.writeln(this.No_of_Persons)
   	document.writeln(this.Seva_Darshan)
   	document.writeln(this.ReportingTime)
   	document.writeln(this.Perfo_Date_Time)
   	document.writeln(this.Privi_Seva)
   	document.writeln(this.BookedTime)
   	document.writeln(this.AccomType)
   	document.writeln(this.Available)
   	document.writeln(this.No_of_Tickets)
   	document.writeln(this.Rate)
}
}
let tirupati = new booking("Special Entry", "Dec 1st", "Tuesday", "3:30 Am", 2000, "IS151110080016", "venkatesh", "010600013554", "venkateshprofessional7@gmail.com", "220.00", "Aadhaar Card 733498928758", "11062015 11:36:46", 1, "Archana", "4:00 AM", "12012015 AM 4:30:00", "Two Small Laddu", "11:36:46", "Rs 500", 350, 1, "50 to 2000")
tirupati.display()

let tirumala = {
	TicketType : "Special Entry",
	DarshanDate : "Dec 1st",
	Day : "Tuesday",
	Time : "3:30 Am",
	PerSlotTickets : 2000,
	BookingNo : "IS151110080016",
	NameofthePilgrim : "venkatesh",
	OrderNo : "010600013554",
	Email : "venkateshprofessional7@gmail.com",
	Amountinfigures : "220.00",
	ProofofID : "Aadhaar Card 733498928758",
	BookedDate_Time : "11062015 11:36:46",
	No_of_Persons : 1,
	Seva_Darshan : "Archana" ,
	ReportingTime : "4:00 AM",
	Perfo_Date_Time : "12012015 AM 4:30:00",
	Privi_Seva : "Two Small Laddu",
	BookedTime : "11:36:46",
	AccomType : "Rs 500",
	Available : 350,
	No_of_Tickets : 1,
	Rate : "50 to 2000",
    display_some(){
    document.writeln(this.NameofthePilgrim)
    document.writeln(this.Day)
   	document.writeln(this.Time)
    document.writeln(this.TicketType)
    document.writeln(this.PerSlotTickets)
    document.writeln(this.BookingNo)
    document.writeln(this.OrderNo)
    document.writeln(this.Email)
    document.writeln(this.Amountinfigures)
    document.writeln(this.ProofofID)
    document.writeln(this.No_of_Persons)
    document.writeln(this.Seva_Darshan)
    document.writeln(this.ReportingTime)
    document.writeln(this.Perfo_Date_Time)
    document.writeln(this.Privi_Seva)
    document.writeln(this.Perfo_Date_Time)
    document.writeln(this.BookedTime)
    document.writeln(this.AccomType)
    document.writeln(this.Available)
    document.writeln(this.No_of_Tickets)
    document.writeln(this.Rate)
    }
}
tirumala.display_some()
tirumala.method = function(){
	document.writeln(this.TicketType)
   	document.writeln(this.DarshanDate)
   	document.writeln(this.OrderNo)
   	document.writeln(this.Email)
   	document.writeln(this.Amountinfigures)
    document.writeln(this.ProofofID)
    document.writeln(this.No_of_Persons)
    document.writeln(this.Seva_Darshan)
    document.writeln(this.ReportingTime)
    document.writeln(this.Perfo_Date_Time)
    document.writeln(this.Privi_Seva)
    document.writeln(this.Perfo_Date_Time)
    document.writeln(this.BookedTime)
    document.writeln(this.AccomType)
    document.writeln(this.Available)
    document.writeln(this.No_of_Tickets)
    document.writeln(this.Rate)

}
tirumala.method()

array = ["Special Entry", "Dec 1st", "Tuesday", "3:30 Am", "2000", "IS151110080016", "venkatesh", "010600013554", "venkateshprofessional7@gmail.com", "220.00", "Aadhaar Card 733498928758", "11062015 11:36:46", "1", "Archana", "4:00 AM", "12012015 AM 4:30:00", "Two Small Laddu", "11:36:46", "Rs 500", "350", "1", "50 to 2000"]
document.writeln(array[0])
document.writeln(array[1])
document.writeln(array[2])
document.writeln(array[3])
document.writeln(array[4])
document.writeln(array[5])
document.writeln(array[6])
document.writeln(array[7])
document.writeln(array[8])
document.writeln(array[9])
document.writeln(array[10])
document.writeln(array[11])
document.writeln(array[12])
document.writeln(array[13])
document.writeln(array[14])
document.writeln(array[15])
document.writeln(array[16])
document.writeln(array[17])

class vehicle{
constructor(type, col, engine_no, chassis_no, company){
	 this.Vehicletype = type
     this.Colour = col
     this.Enginenumber = engine_no
     this.Chassisnumber = chassis_no
     this.Company = company 
	}
display(){
	document.writeln(this.Vehicletype)
    document.writeln(this.Colour)
    document.writeln(this.Enginenumber)
    document.writeln(this.Chassisnumber)
    document.writeln(this.Company)
	}
}
var veh_info = new vehicle("light motor vehicle - car", "red", "kp98gtyihh457797", "tc5678898335r45", "BMW")
veh_info.display()

let vehi = {
	Vehicletype : "light motor vehicle - car",
    Colour : "red",
    Enginenumber : "kp98gtyihh457797",
    Chassisnumber : "tc5678898335r45",
    Company : "BMW",
    display(){
    document.writeln(this.Vehicletype)
    document.writeln(this.Colour)
    document.writeln(this.Enginenumber)
    document.writeln(this.Chassisnumber)
    document.writeln(this.Company)
    }
}
vehi.display()

class personal_dets{
	constructor(name, birth_day, birth_time, birth_place, native, marital_status, religion, community, caste, sub_sect, mother_tongue, gothram, star, height, complexion, qualification, university, blood_group){
	this.Name = name
	this.Dob = birth_day
	this.Time_Of_Birth = birth_time
	this.Place_Of_Birth = birth_place
	this.Nativity = native
	this.Martial_Status = marital_status
	this.Religion = religion
	this.Community = community
	this.Caste = caste
	this.Sub_Sect = sub_sect
	this.Mother_Tongue = mother_tongue
    this.Gothram = gothram
	this.Star = star
	this.Height = height
	this.Complexion = complexion
	this.Qualification = qualification
	this.University = university
	this.Blood_Group = blood_group
    }
    display_all(){
    document.writeln(this.Name)
    document.writeln(this.Dob)
    document.writeln(this.Time_Of_Birth)
    document.writeln(this.Place_Of_Birth)
    document.writeln(this.Nativity)
    document.writeln(this.Martial_Status)
    document.writeln(this.Religion)
    document.writeln(this.Community)
    document.writeln(this.Caste)
    document.writeln(this.Sub_Sect)
    document.writeln(this.Mother_Tongue)
    document.writeln(this.Gothram)
    document.writeln(this.Star)
    document.writeln(this.Height)
    document.writeln(this.Complexion)
    document.writeln(this.Qualification)
    document.writeln(this.University)
    document.writeln(this.Blood_Group)
    }
}
var about = new personal_dets("Naga Lalitha Kumari Bezawada", "18-02-1989", "7.30-8PM", "Samalkota", "Rajahmundry", "UnMarried", "Hindu", "Telugu", "Balija", "Krishna Balija", "Telugu", "Mathala", "Pushyami 3,4P", "5'11", "Medium", "B.Tech(CS)", "KIET,Kakinada", "B+ve")
about.display_all()

let personal_details = {
	Name : "Naga Lalitha Kumari Bezawada",
	Dob : "18-02-1989",
	Time_Of_Birth : "7.30-8PM",
	Place_Of_Birth : "Samalkota",
	Nativity : "Rajahmundry",
	Martial_Status : "UnMarried",
	Religion : "Hindu",
	Community : "Telugu",
	Caste : "Balija",
	Sub_Sect : "Krishna Balija",
	Mother_Tongue : "Telugu",
    Gothram : "Mathala",
	Star : "Pushyami 3,4P",
	Height : "5'11",
	Complexion : "Medium",
	Qualification : "B.Tech(CS)",
	University : "KIET,Kakinada",
	Blood_Group : "B+ve",
    display(){
    document.writeln(this.Name)
    document.writeln(this.Dob)
    document.writeln(this.Time_Of_Birth)
    document.writeln(this.Place_Of_Birth)
    document.writeln(this.Nativity)
    document.writeln(this.Martial_Status)
    document.writeln(this.Religion)
    document.writeln(this.Community)
    document.writeln(this.Caste)
    document.writeln(this.Sub_Sect)
    document.writeln(this.Mother_Tongue)
    document.writeln(this.Gothram)
    document.writeln(this.Star)
    document.writeln(this.Height)
    document.writeln(this.Complexion)
    document.writeln(this.Qualification)
    document.writeln(this.University)
    document.writeln(this.Blood_Group)    
    }
}
personal_details.display()

personal_details.method = function(){
    document.writeln(this.Name)
    document.writeln(this.Dob)
    document.writeln(this.Time_Of_Birth)
    document.writeln(this.Place_Of_Birth)
    document.writeln(this.Nativity)
    document.writeln(this.Martial_Status)
    document.writeln(this.Religion)
    document.writeln(this.Community)
    document.writeln(this.Caste)
    document.writeln(this.Sub_Sect)
    document.writeln(this.Mother_Tongue)
    document.writeln(this.Gothram)
    document.writeln(this.Star)
    document.writeln(this.Height)
    document.writeln(this.Complexion)
    document.writeln(this.Qualification)
    document.writeln(this.University)
    document.writeln(this.Blood_Group)    
}
personal_details.method()

class ticket_res{
	constructor(id, pnr_no, train_name, dob, train_class, quota, journey_date, from, to, boarding, boarding_date, reservation, departure){
	this.TransactionID = id
	this.PNRNo = pnr_no
	this.TrainNo_Name = train_name
	this.DoB = dob
	this.Class = train_class
	this.Quota = quota
	this.Date_of_Journey = journey_date
	this.From = from
	this.To = to
	this.Boarding_At = boarding
	this.DateOfBoarding = boarding_date
	this.Reservation_Upto = reservation
	this.Scheduled_Departure = departure
	}
    display(){
    document.writeln(this.TransactionID)
    document.writeln(this.PNRNo)
    document.writeln(this.TrainNo_Name)
    document.writeln(this.DoB)
    document.writeln(this.Class)
    document.writeln(this.Quota)
    document.writeln(this.Date_of_Journey)
    document.writeln(this.From)
    document.writeln(this.To)
    document.writeln(this.Boarding_At)
    document.writeln(this.DateOfBoarding)
    document.writeln(this.Reservation_Upto)
    document.writeln(this.Scheduled_Departure)
    }
}
let reservation = new ticket_res(100000380284535, 4115023549, "56213 / TIRUPATI PASSR", "14-Dec-2015", "SLEEPERCLASS", "GENERAL", "04-Jan-2016", "KJM", "TPTY", "KJM", "04-Jan-2016", "TPTY", "21:00 Hrs")

reservation.method = function(){
    document.writeln(this.TransactionID)
    document.writeln(this.PNRNo)
    document.writeln(this.TrainNo_Name)
    document.writeln(this.DoB)
    document.writeln(this.Class)
    document.writeln(this.Quota)
    document.writeln(this.Date_of_Journey)
    document.writeln(this.From)
    document.writeln(this.To)
    document.writeln(this.Boarding_At)
    document.writeln(this.DateOfBoarding)
    document.writeln(this.Reservation_Upto)
    document.writeln(this.Scheduled_Departure)
}
reservation.method()

let id_proof = {
               Lastname : "kumar",
               Firstname : "Pavan",
               Middlename : "Bijjavaram",
               Dlicenseno : "ka50201500006939",
               state : "Karnataka",
               country : "India",
               type : "around India",
               Employeetype : "software engineer",
               Dob : "12-07-1992",
               Cityob : "rajampet",
               display(){
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
               }
}


//array data structure
let arr = ["kumar","Pavan", "Bijjavaram", "ka50201500006939", "Karnataka", "India", "around India", "software engineer", "12-07-1992", "rajampet"]
document.writeln(arr[0])
document.writeln(arr[1])
document.writeln(arr[2])
document.writeln(arr[3])
document.writeln(arr[4])
document.writeln(arr[5])
document.writeln(arr[6])
document.writeln(arr[7])
document.writeln(arr[8])
document.writeln(arr[9])
document.writeln(arr[10])

let venkatesh = {
   company : "jv technologies",
   exp : 14,
   location : "bangalore",
   verifytrainer(){
   document.write(this.company)
   document.write(this.exp)
   document.write(this.location)
   }
}
venkatesh.verifytrainer()

class patient_details{
	constructor(name, id, phone, billno, age, dob, gender, fasting, address, roomno, date_time, entry_date, respond_date_time){
    this.Patient_Name = name
    this.ID = id
    this.Patient_phone = phone
    this.Billno = billno
    this.Age = age
    this.Date_of_Birth = dob
    this.Gender = gender
    this.Fasting = fasting
    this.Patient_Address = address
    this.Room_No = roomno
    this.Date_of_time_Collected_blood = date_time
    this.Enter_date = entry_date
    this.Date_and_Time_Respond = respond_date_time
    }
    display(){
    document.write(this.Patient_Name)
    document.write(this.ID)
    document.write(this.Patient_phone)
    document.write(this.Billno)
    document.write(this.Age)
    document.write(this.Date_of_Birth)
    document.write(this.Gender)
    document.write(this.Fasting)
    document.write(this.Patient_Address)
    document.write(this.Room_No)
    document.write(this.Date_of_time_Collected_blood)
    document.write(this.Enter_date)
    document.write(this.Date_and_Time_Respond)
    }
}
let patient = new patient_details("Sathish Patient", 10567890890, 044222738, 56725, 34, "15/05/1991", "Male", "Yes", "7f,kaveri road, velur.", 105, "08/09/15 and 08:15", "08/09/15", "08/09/15 and  09:16")
patient.display()

let hospital = {
    Patient_Name : "Sathish Patient",
    ID : 10567890890,
    Patient_phone : 044222738,
    Billno : 56725,
    Age : 34,
    Date_of_Birth : "15/05/1991",
    Gender : "Male",
    Fasting : "Yes",
    Patient_Address : "7f,kaveri road, velur.",
    Room_No : 105,
    Date_of_time_Collected_blood : "08/09/15 and 08:15",
    Enter_date : "08/09/15",
    Date_and_Time_Respond : "08/09/15 and  09:16",
	display(){
    document.write(this.Patient_Name)
    document.write(this.ID)
    document.write(this.Patient_phone)
    document.write(this.Billno)
    document.write(this.Age)
    document.write(this.Date_of_Birth)
    document.write(this.Gender)
    document.write(this.Fasting)
    document.write(this.Patient_Address)
    document.write(this.Room_No)
    document.write(this.Date_of_time_Collected_blood)
    document.write(this.Enter_date)
    document.write(this.Date_and_Time_Respond)    
    }
}
hospital.display()

class ups_specs{
	constructor(ups_model, input, freq, output, type, capacity, backup, time, ups_weight){
	this.model = ups_model
	this.ip_voltage = input
	this.frequency = freq
	this.op_voltage = output
	this.battery_type = type
	this.battery_capacity = capacity
	this.battery_backup = backup
	this.recharge_time = time
	this.weight = ups_weight    
    }
    display(){
    document.write(this.model)
    document.write(this.ip_voltage)
    document.write(this.frequency)
    document.write(this.op_voltage)
    document.write(this.battery_type)
    document.write(this.battery_capacity)
    document.write(this.battery_backup)
    document.write(this.recharge_time)
    document.write(this.weight)
    }
}
let exide = new ups_specs("exide-digital600", "230v ac", "50hz", "230v ac", "sealed maintenance free", "12volt 7Ah", "12 to 20 mints", "5 to 6 hours", "6.1 kg")
exide.display()

let v_guard = {
	model : "v-guard600",
	ip_voltage : "230v ac",
	frequency : "50hz",
	op_voltage : "230v ac",
	battery_type : "sealed maintenance free",
	battery_capacity : "12volt 7Ah",
	battery_backup : "12 to 20 mints",
	recharge_time : "5 to 6 hours",
	weight : "6.1 kg",
    display(){
    document.write(this.model)
    document.write(this.ip_voltage)
    document.write(this.frequency)
    document.write(this.op_voltage)
    document.write(this.battery_type)
    document.write(this.battery_capacity)
    document.write(this.battery_backup)
    document.write(this.recharge_time)
    document.write(this.weight)    
    }
}
v_guard.display()

</script>
