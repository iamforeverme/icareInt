package models;

import java.sql.Timestamp;

import javax.persistence.*;

import play.db.ebean.*;
import play.data.validation.*;

@Entity
@Table(name="location")  
public class Location extends Model {
  /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	Integer id;
	
	String roomNum;
	
	String bedNum;
	
	String buildNum;
	
	@Constraints.Required
	Timestamp startDate;
	
	Timestamp endDate;
	  
	@ManyToOne
	Protege protege;
	
	@ManyToOne
	Device device;
	
	public Integer getId(){
	    return id;
	}
 	public void setId(Integer id){
	    this.id = id;
	}
 	public String getRoomNum(){
	    return roomNum;
	}
 	public void setRoomNum(String roomNum){
	    this.roomNum = roomNum;
	}
 	public String getBedNum(){
	    return bedNum;
	}
 	public void setBedNum(String bedNum){
	    this.bedNum = bedNum;
	}
 	public String getBuildNum(){
	    return buildNum;
	}
 	public void setBuildNum(String buildNum){
	    this.buildNum = buildNum;
	}
 	public Timestamp getStartDate(){
	    return startDate;
	}
 	public void setStartDate(Timestamp startDate){
	    this.startDate = startDate;
	}
 	public Timestamp getEndDate(){
	    return endDate;
	}
 	public void setEndDate(Timestamp endDate){
	    this.endDate = endDate;
	}
 	public Protege getProtege(){
	    return protege;
	}
 	public void setProtege(Protege protege){
	    this.protege = protege;
	}
 	public Device getDevice(){
	    return device;
	}
 	public void setDevice(Device device){
	    this.device = device;
	}

    public String toJSONString() {
	
    return "{ roomNum:'"+roomNum.toString()
		+"',bedNum:'"+bedNum.toString()
		+"',buildNum:'"+buildNum.toString()
		+"',startDate:'"+startDate.toString()
		+"',endDate:'"+endDate.toString()
		+"',protege:'"+protege.toString()
		+"',device:'"+device.toString()
		
		    		+"' }";
		}

  
}