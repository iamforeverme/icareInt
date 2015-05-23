package models;


import java.sql.Timestamp;

import javax.persistence.*;

import play.db.ebean.*;
import play.data.validation.*;

@Entity
@Table(name="warning")  
public class Warning extends Model {
  /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	Integer id;
	
	@Constraints.Required
	Timestamp startTime;
	
	Timestamp completeTime;
	
	String solution;
	
	@ManyToOne
	Staff staff;
	
	@ManyToOne
	MonitorData data;
	
	@ManyToOne
	WarningType warningType;
	
	public Integer getId(){
	    return id;
	}
 	public void setId(Integer id){
	    this.id = id;
	}
 	public Timestamp getStartTime(){
	    return startTime;
	}
 	public void setStartTime(Timestamp startTime){
	    this.startTime = startTime;
	}
 	public Timestamp getCompleteTime(){
	    return completeTime;
	}
 	public void setCompleteTime(Timestamp completeTime){
	    this.completeTime = completeTime;
	}
 	public String getSolution(){
	    return solution;
	}
 	public void setSolution(String solution){
	    this.solution = solution;
	}
 	public Staff getStaff(){
	    return staff;
	}
 	public void setStaff(Staff staff){
	    this.staff = staff;
	}
 	public MonitorData getData(){
	    return data;
	}
 	public void setData(MonitorData data){
	    this.data = data;
	}
 	public WarningType getWarningType(){
	    return warningType;
	}
 	public void setWarningType(WarningType warningType){
	    this.warningType = warningType;
	}

    public String toJSONString() {
	
    return "{ startTime:'"+startTime.toString()
	+"',completeTime:'"+completeTime.toString()
	+"',solution:'"+solution.toString()
	+"',staff:'"+staff.toString()
	+"',data:'"+data.toString()
	+"',warningType:'"+warningType.toString()
	
	    		+"' }";
	}
	
}