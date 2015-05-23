package models;

import java.util.*;
import javax.persistence.*;

import play.db.ebean.*;
import play.data.format.*;
import play.data.validation.*;

@Entity
@Table(name="protege")  
public class Protege extends Model {

  /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

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
	
	@OneToMany(cascade=CascadeType.ALL,mappedBy="protege")
	List<MonitorData> monitorData;
	
	@OneToMany(cascade=CascadeType.ALL,mappedBy="protege")
	List<Location> locations;
	
	public List<MonitorData> getMonitorData()
	{
		return monitorData;
	}
	public void setMonitorData( List<MonitorData> data)
	{
		this.monitorData = data;
	}
 	public Integer getId(){
	    return id;
	}
 	public void setId(Integer id){
	    this.id = id;
	}
 	public String getName(){
	    return name;
	}
 	public void setName(String name){
	    this.name = name;
	}
 	public String getId_card_num(){
	    return id_card_num;
	}
 	public void setId_card_num(String id_card_num){
	    this.id_card_num = id_card_num;
	}
 	public String getTelphone(){
	    return telphone;
	}
 	public void setTelphone(String telphone){
	    this.telphone = telphone;
	}
 	public String getMobile(){
	    return mobile;
	}
 	public void setMobile(String mobile){
	    this.mobile = mobile;
	}
 	public String getContacts_name1(){
	    return contacts_name1;
	}
 	public void setContacts_name1(String contacts_name1){
	    this.contacts_name1 = contacts_name1;
	}
 	public String getContacts_tel1(){
	    return contacts_tel1;
	}
 	public void setContacts_tel1(String contacts_tel1){
	    this.contacts_tel1 = contacts_tel1;
	}
 	public String getContacts_name2(){
	    return contacts_name2;
	}
 	public void setContacts_name2(String contacts_name2){
	    this.contacts_name2 = contacts_name2;
	}
 	public String getContacts_tel2(){
	    return contacts_tel2;
	}
 	public void setContacts_tel2(String contacts_tel2){
	    this.contacts_tel2 = contacts_tel2;
	}
 	public String getHistory(){
	    return history;
	}
 	public void setHistory(String history){
	    this.history = history;
	}
 	public String getProvince(){
	    return province;
	}
 	public void setProvince(String province){
	    this.province = province;
	}
 	public String getCity(){
	    return city;
	}
 	public void setCity(String city){
	    this.city = city;
	}
 	public String getAddress(){
	    return address;
	}
 	public void setAddress(String address){
	    this.address = address;
	}
 	public String getPhoto_dir(){
	    return photo_dir;
	}
 	public void setPhoto_dir(String photo_dir){
	    this.photo_dir = photo_dir;
	}
 	public Integer getAge(){
	    return age;
	}
 	public void setAge(Integer age){
	    this.age = age;
	}
 	public String getMonitoring_level(){
	    return monitoring_level;
	}
 	public void setMonitoring_level(String monitoring_level){
	    this.monitoring_level = monitoring_level;
	}
 	public String toString()
 	{
 		return this.id.toString();
 	}

    public String toJSONString() {
	
    return "{ name:'"+name.toString()
			+"',id_card_num:'"+id_card_num.toString()
			+"',telphone:'"+telphone.toString()
			+"',mobile:'"+mobile.toString()
			+"',contacts_name1:'"+contacts_name1.toString()
			+"',contacts_tel1:'"+contacts_tel1.toString()
			+"',contacts_name2:'"+contacts_name2.toString()
			+"',contacts_tel2:'"+contacts_tel2.toString()
			+"',history:'"+history.toString()
			+"',province:'"+province.toString()
			+"',city:'"+city.toString()
			+"',address:'"+address.toString()
			+"',photo_dir:'"+photo_dir.toString()
			+"',age:'"+age.toString()
			+"',monitoring_level:'"+monitoring_level.toString()
    		+"' }";
    }

  
}