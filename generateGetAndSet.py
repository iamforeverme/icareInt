inputStr = """
	@Id
	Integer id;
	  
	@Constraints.Required
	String name;
	
	@Constraints.Required
	@Column(unique=true)
	String id_card_num;
	
	String telphone;
	
	@Constraints.Required
	String mobile;
	
	@Constraints.Required
	String contacts_name1;
	
	@Constraints.Required
	String contacts_tel1;
	String contacts_name2;
	String contacts_tel2;
	String history;
	String province;
	String city;
	String address;
	String photo_dir;
	Integer age;
	String monitoring_level;
	String note;
	
	@OneToMany(cascade=CascadeType.ALL,mappedBy="protege")
	List<MonitorData> monitorData;
	
	@OneToMany(cascade=CascadeType.ALL,mappedBy="protege")
	List<Location> locations;
"""
strValue = ""
valueList = []
for line in inputStr.splitlines():
	if(";" in line):
		type = line.split()[0]
		value = line.split()[-1].strip(";")
		outputLine =" 	public " + type + " get" +value[0].upper() + value[1:] + "(){\n	    return "+value+";\n	}"
		outputLine =outputLine +	"\n 	public void set" +value[0].upper() + value[1:] + "("+type+" "+value+"){\n	    this."+value+" = "+value+";\n	}"
		print(outputLine)
		valueList.append(value)
		if(value!="id"):
			strValue = strValue+"+\"',"+value + ":'\"+"+value+".toString()\n"

strValue = strValue[4:]
outputLIst ="""
    public String toJSONString() {
	
    return "{ %s
    		+"' }";
}
"""%(strValue)

print(outputLIst)
print(",".join(valueList))
