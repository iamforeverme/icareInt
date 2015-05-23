package models;

import java.util.*;

import javax.persistence.*;

import play.db.ebean.*;
import play.data.format.*;
import play.data.validation.*;

@Entity
@Table(name="staff")  
public class Staff extends Model {

  /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

/**
	 * 
	 */

	@Id
	Integer id;
	
	@Constraints.Required
	String staff_id;
	
	@Constraints.Required
	String Name;
	
	@Constraints.Required
	String id_card_num;
	
	@Constraints.Required
	String password;
	
	String gender;
	
	Integer age;
	
	@Constraints.Required
	String tel;
	
	
	@OneToMany(cascade=CascadeType.ALL,mappedBy="staff")
	List<Warning> warns;
	
	
 	public Integer getId(){
	    return id;
	}
 	public void setId(Integer id){
	    this.id = id;
	}
 	public String getStaff_id(){
	    return staff_id;
	}
 	public void setStaff_id(String staff_id){
	    this.staff_id = staff_id;
	}
 	public String getName(){
	    return Name;
	}
 	public void setName(String Name){
	    this.Name = Name;
	}
 	public String getId_card_num(){
	    return id_card_num;
	}
 	public void setId_card_num(String id_card_num){
	    this.id_card_num = id_card_num;
	}
 	public String getPassword(){
	    return password;
	}
 	public void setPassword(String password){
	    this.password = password;
	}
 	public String getGender(){
	    return gender;
	}
 	public void setGender(String gender){
	    this.gender = gender;
	}
 	public Integer getAge(){
	    return age;
	}
 	public void setAge(Integer age){
	    this.age = age;
	}
 	public String getTel(){
	    return tel;
	}
 	public void setTel(String tel){
	    this.tel = tel;
	}
 	public String toString()
 	{
 		return this.id.toString();
 	}

    public String toJSONString() {
	
    return "{ staff_id:'"+staff_id.toString()
		+"',Name:'"+Name.toString()
		+"',id_card_num:'"+id_card_num.toString()
		+"',password:'"+password.toString()
		+"',gender:'"+gender.toString()
		+"',age:'"+age.toString()
		+"',tel:'"+tel.toString()
		    		+"' }";
		}

  
}