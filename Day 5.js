<script>
class banking{
	constructor(name, date, time, atmno, cardno, branchname, transaction_no, code, withdrawal, accno, mod, balance, website){
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
	document.write(this.Bank_Name)
	document.write(this.Date)
	document.write(this.Time)
	document.write(this.ATM_No)
	document.write(this.CARD_No)
	document.write(this.BRANCH_NAME)
	document.write(this.Txn_No)
	document.write(this.Response_code)
	document.write(this.Withdrawal)
	document.write(this.From_acc)
	document.write(this.Mod_RS)
	document.write(this.Available_Bal_Rs)
	document.write(this.Website)
    }
}
let sbi_card = new banking("SBI Bank", "29/05/14", "19:48", "SJNBL48", "xxxx xxxxx xxxx 0516", "Bangalore Main Branch", 2907, 072, "500.00", "xxxxxxxxxx05 xx01", "0.00", "1000.00", "www.statebankofindia.com")
sbi_card.display()

arr_reserve = [TransactionID, PNRNo, TrainNo_Name ,DoB, Class ,Quota ,Date_of_Journey ,From ,To ,Boarding_At ,DateOfBoarding, Reservation_Upto ,Scheduled_Departure]
for (let i = 0; i < arr_reserve.length; i++)
{
    document.writeln(arr_reserve[i])	
}    

function appearance(Weight, Height, Eyecolour, Gender, Address, Phone, Mobile, State, Country){
	if (Country == "India"){
		if (State == "andhrapradesh")
		{
	document.writeln(Weight, Height, Eyecolour, Gender, Address, Phone, Mobile, State)
    document.writeln(Height)
    document.writeln(Eyecolour)
    document.writeln(Gender)
    document.writeln(Address)
    document.writeln(Phone)
    document.writeln(Mobile)
    document.writeln(State)
    }
    else{
    return "Not valid"
    }
}
}
appearance("55", "5.8", "brown", "male", "#6/96,rajampet,kadapa", "975545445", "8553577745", "andhrapradesh", "Bhutan")
appearance("55", "5.8", "brown", "male", "#6/96,rajampet,kadapa", "975545445", "8553577745", "andhrapradesh", "India")

function patient_hospital(name, id, phone, billno, age, dob, gender, fasting, address, roomno, date_time, entry_date, respond_date_time){
    document.write(Patient_Name)
    document.write(ID)
    document.write(Patient_phone)
    document.write(Billno)
    document.write(Age)
    document.write(Date_of_Birth)
    document.write(Gender)
    document.write(Fasting)
    document.write(Patient_Address)
    document.write(Room_No)
    document.write(Date_of_time_Collected_blood)
    document.write(Enter_date)
    document.write(Date_and_Time_Respond)
}
function medical(callback){
	callback("Sathish Patient", 10567890890, 044222738, 56725, 34, "15/05/1991", "Male", "Yes", "7f,kaveri road, velur.", 105, "08/09/15 and 08:15", "08/09/15", "08/09/15 and  09:16")
}
medical(patient_hospital)

v_guard_ups = ["v-guard600", "230v ac", "50hz", "230v ac", "sealed maintenance free", "12volt 7Ah", "12 to 20 mints", "5 to 6 hours", "6.1 kg"]
for (let i = 0; i < v_guard_ups.length; i++)
{
	document.write(v_guard_ups[i])
}

function ups_specification(ups_model, input, freq, output, type, capacity, backup, time, ups_weight){
    document.write(model, ip_voltage, frequency, op_voltage, battery_type, battery_capacity, battery_backup, recharge_time, weight)
}

function specification(callback){
	callback("v-guard600", "230v ac", "50hz", "230v ac", "sealed maintenance free", "12volt 7Ah", "12 to 20 mints", "5 to 6 hours", "6.1 kg")
}

specification(ups_specification)

function visiting_card_details(name, email, number, comp_name, Designation, Address){
    document.write(name)
    document.write(email)
    document.write(number)
    document.write(comp_name)
    document.write(Designation)
    document.write(Address)    
}

function card(callback){
	callback("naresh", "naresh.jvt@gmail.com", "+91 9944860792", "jvt", "programmer", "230/3 2nd floor hal3rd stage new thippasandra bangalore-560075")
}

card(visiting_card_details)

function net_bank(site, uname, pwd, number, status, payment_mode, bank, b_username, b_password, trans_no, payment_stat){
    document.write(website, tnebusername, password, consumer_number, Billing_status, mode_of_payment, choose_bank, bank_username, bank_password, Transaction_no, payment_status)
}

function electric_bill_(callback){
	callback("www.tnebnet.org", "agilan", 1234567, 23456123, "paid/unpaid", "netbanking", "sbi", "kumar007", 1234567, "18cv21828578437", "successful")
}
electric_bill_(net_bank)

function clothes(brand, code, color, size, material, occasion, pattern, sleeve, necktype, fit, gender, arrival, price, effective_price){
	document.write(Brand)
    document.write(Product_Code)
    document.write(Color)
    document.write(Size)
    document.write(Material)
    document.write(Occasion)
    document.write(Pattern)
    document.write(Sleeve)
    document.write(Neck_Type)
    document.write(Fit)
    document.write(Gender)
    document.write(Estimated_Arrival)
    document.write(Price)
    document.write(Effective_Price)
}

function hoodie_tshirt(callback){
	callback("Scott International", "APPSCOTT-INTERNSWIT610835D77A441", "Black", "S", "Cotton", "Casual", "Solid", "Full Sleeves", "Hooded", "Slim", "Men", "9 days", "Rs 824", "Rs 453 after cashback")
}

hoodie_tshirt(clothes)

function bank_stat(name, date, time, atmno, cardno, branchname, transaction_no, code, withdrawal, accno, mod, balance, website){
	document.write(Bank_Name)
	document.write(Date)
	document.write(Time)
	document.write(ATM_No)
	document.write(CARD_No)
	document.write(BRANCH_NAME)
	document.write(Txn_No)
	document.write(Response_code)
	document.write(Withdrawal)
	document.write(From_acc)
	document.write(Mod_RS)
	document.write(Available_Bal_Rs)
	document.write(Website)
}

function net_banking(callback){
	callback("SBI Bank", "29/05/14", "19:48", "SJNBL48", "xxxx xxxxx xxxx 0516", "Bangalore Main Branch", 2907, 072, "500.00", "xxxxxxxxxx05 xx01", "0.00", "1000.00", "www.statebankofindia.com")
}

net_banking(bank_stat)

</script>
