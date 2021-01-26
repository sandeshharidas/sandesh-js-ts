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
const reservation = new ticket_res(100000380284535, 4115023549, "56213 / TIRUPATI PASSR", "14-Dec-2015", "SLEEPERCLASS", "GENERAL", "04-Jan-2016", "KJM", "TPTY", "KJM", "04-Jan-2016", "TPTY", "21:00 Hrs");
reservation.display();

class banking{
	Bank_Name:string
	Date:string
	Time:string
	ATM_No:string
	CARD_No:string
	BRANCH_NAME:string
	Txn_No:number
	Response_code:number
	Withdrawal:string
	From_acc:string
	Mod_RS:string
	Available_Bal_Rs:string
	Website:string
	constructor(name:string, date:string, time:string, atmno:string, cardno:string, branchname:string, transaction_no:number, code:number, withdrawal:string, accno:string, mod:string, balance:string, website:string){
	this.Bank_Name = name
	this.Date = date
	this.Time = time
	this.ATM_No = atmno
	this.CARD_No = cardno
	this.BRANCH_NAME = branchname
	this.Txn_No = transaction_no
	this.Response_code = code
	this.Withdrawal = withdrawal
	this.From_acc = accno
	this.Mod_RS = mod
	this.Available_Bal_Rs = balance
	this.Website = website    
    }
    display(){
	console.log(this.Bank_Name)
	console.log(this.Date)
	console.log(this.Time)
	console.log(this.ATM_No)
	console.log(this.CARD_No)
	console.log(this.BRANCH_NAME)
	console.log(this.Txn_No)
	console.log(this.Response_code)
	console.log(this.Withdrawal)
	console.log(this.From_acc)
	console.log(this.Mod_RS)
	console.log(this.Available_Bal_Rs)
	console.log(this.Website)
    }
}

class bill_netbank extends banking{
	website:string
	tnebusername:string
	password:number
	consumer_number:number
	Billing_status:string
	mode_of_payment:string
	choose_bank:string
	bank_username:string
	bank_password:number
	Transaction_no:string
	payment_status:string
	constructor(site:string, uname:string, pwd:number, number_:number, status:string, payment_mode:string, bank:string, b_username:string, b_password:number, trans_no:string, payment_stat:string){
	super("SBI Bank", "29/05/14", "19:48", "SJNBL48", "xxxx xxxxx xxxx 0516", "Bangalore Main Branch", 2907, 72, "500.00", "xxxxxxxxxx05 xx01", "0.00", "1000.00", "www.statebankofindia.com")
    this.website = site
	this.tnebusername = uname
	this.password = pwd
	this.consumer_number = number_
	this.Billing_status = status
	this.mode_of_payment = payment_mode
	this.choose_bank = bank
	this.bank_username = b_username
	this.bank_password = b_password
	this.Transaction_no = trans_no
	this.payment_status = payment_stat
    }
    display1(){
    console.log(this.website)  
    console.log(this.tnebusername)
    console.log(this.password)
    console.log(this.consumer_number)
    console.log(this.Billing_status)
    console.log(this.mode_of_payment)
    console.log(this.choose_bank)
    console.log(this.bank_username)
    console.log(this.bank_password)
    console.log(this.Transaction_no)
    console.log(this.payment_status)
    }
}

const sbi = new bill_netbank("www.tnebnet.org", "agilan", 1234567, 23456123, "paid/unpaid", "netbanking", "sbi", "kumar007", 1234567, "18cv21828578437", "successful")
sbi.display()
sbi.display1()

class vehicle{
	Vehicletype:string
	Colour:string
	Enginenumber:string
	Chassisnumber:string
	Company:string
	constructor(type_:string, col:string, engine_no:string, chassis_no:string, company:string){
	 this.Vehicletype = type_
     this.Colour = col
     this.Enginenumber = engine_no
     this.Chassisnumber = chassis_no
     this.Company = company 
	}
display2(){
	console.log(this.Vehicletype)
    console.log(this.Colour)
    console.log(this.Enginenumber)
    console.log(this.Chassisnumber)
    console.log(this.Company)
	}
}

class RC extends vehicle{
	Registration_Number:string
	Owner_Name:string
	S_W_Do:string
	Permanent_Address:string
	Temporary_Address:string
	Dealer:string
	Classis_No:number
	Engine_No:string
	Class_of_Vehicle:string
	Makers_Name:string
	No_of_Cylinder:number
	Weight_KG:number
	Wheel_Base:number
	Seating_Capacity:number
	Fuel:string
	Cubic_cylinder:number
	constructor(number:string, name:string, sonof:string, paddress:string, taddress:string, dealer:string, chassis:number, engine:string, vehicleclass:string, maker:string, cylinder:number, weight:number, base:number, capacity:number, fuel:string, cc:number){
	super("light motor vehicle - car", "red", "kp98gtyihh457797", "tc5678898335r45", "BMW")
    this.Registration_Number = number
    this.Owner_Name = name
    this.S_W_Do = sonof
    this.Permanent_Address = paddress
    this.Temporary_Address = taddress
    this.Dealer =  dealer
    this.Classis_No = chassis
    this.Engine_No = engine
    this.Class_of_Vehicle = vehicleclass
    this.Makers_Name = maker
    this.No_of_Cylinder = cylinder
    this.Weight_KG = weight
    this.Wheel_Base = base
    this.Seating_Capacity = capacity
    this.Fuel = fuel
    this.Cubic_cylinder = cc
    }
    display1(){
	console.log(this.Registration_Number)
    console.log(this.Owner_Name)
    console.log(this.S_W_Do)
    console.log(this.Permanent_Address)
    console.log(this.Temporary_Address)
    console.log(this.Dealer)
    console.log(this.Classis_No)
    console.log(this.Engine_No)
    console.log(this.Class_of_Vehicle)
    console.log(this.Makers_Name)
    console.log(this.No_of_Cylinder)
    console.log(this.Weight_KG)
    console.log(this.Wheel_Base)
    console.log(this.Seating_Capacity)
    console.log(this.Fuel)
    console.log(this.Cubic_cylinder)
	}
}
const registration = new RC("TN 22 CY 2917", "Sachin", "Sirinivasan", "Mysore", "Bangalore", "Murugan Vehicles& Services Limited", 5793603, "0G3N72505757", "LMV (CAR)", "Maruthi SuzUKI India LTD", 3, 740, 2360, 5, "Petrol", 796)
registration.display1()
registration.display2()

class tv_specs{
	Model:string
	LED_lighting:string
	Sizes:string
	Type_of_240_Hz:string
	Wireless_HDMI:string
	USB:string
	Built_in_videoservice:string
	price_RS:number
	constructor(model:string, lighting:string, size:string, type_:string, wireless:string, usb:string, built:string, price:number){
    this.Model = model
	this.LED_lighting = lighting
	this.Sizes = size
	this.Type_of_240_Hz = type_
	this.Wireless_HDMI = wireless
	this.USB = usb
	this.Built_in_videoservice = built
	this.price_RS = price
    }
    display(){
    console.log(this.Model)
    console.log(this.LED_lighting)
    console.log(this.Sizes)
    console.log(this.Type_of_240_Hz)
    console.log(this.Wireless_HDMI)
    console.log(this.USB)
    console.log(this.Built_in_videoservice)
    console.log(this.price_RS)
    }
}

class laptop_specs extends tv_specs{
	Model:string
	Os :string
	Processor :string
	RAM :string
	Screen :string
	Resolution :string
	Weight :string
	Storage :string
	Graphics :string
	Networking :string
	Battery_life:string
	Cost_RS:number
	constructor(model:string, os:string, processor:string, ram:string, screen:string, resolution:string, weight:string, storage:string, graphics:string, networking:string, battery:string, cost:number){
    super("LG55LHX", "Backlight w/Local Dimming", "55 inches", "scanning Backlight (240 HZ effect)", "yes", "USB 2.0 (pictures, music,videos)", "youtube", 55000)
    this.Model = model
	this.Os = os
	this.Processor = processor 
	this.RAM = ram
	this.Screen = screen
	this.Resolution = resolution
	this.Weight = weight
	this.Storage = storage
	this.Graphics = graphics
	this.Networking = networking
	this.Battery_life = battery 
	this.Cost_RS = cost
    }
    display(){
	console.log(this.Model)
    console.log(this.Os)
    console.log(this.Processor)
    console.log(this.RAM)
    console.log(this.Screen)
    console.log(this.Resolution)
    console.log(this.Weight)
    console.log(this.Storage)
    console.log(this.Graphics)
    console.log(this.Networking)
    console.log(this.Battery_life)
    console.log(this.Cost_RS)
    }
}
const p = new laptop_specs("LGp430", "Windows 7 home base, Premium or professional", "Second Generation Intel Core i3,i5 or i7  processor", "upto 8GB", "14.0 inch HD-LCD -backlit", "1366*768", "4.28 pound", "320GB", "Intel HD Graphics", "802.11 b/g/n,bluetooth 3.0", "6-cell Battery", 50000)
p.display()
