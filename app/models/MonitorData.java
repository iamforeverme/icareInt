package models;


import java.sql.Timestamp;
import java.util.List;

import javax.persistence.*;

import play.db.ebean.*;
import play.data.validation.*;

@Entity
@Table(name="monitor_data")  
public class MonitorData extends Model {
  /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	Integer id;
	
	
	  
	@ManyToOne
	Protege protege;
	
	@ManyToOne
	SignalType signalType;
	
	@OneToMany(cascade=CascadeType.ALL,mappedBy="data")
	List<Warning> warns;
	
	@Constraints.Required
	Timestamp rec_time;
	
	
	
 	public Integer getId(){
	    return id;
	}
 	public void setId(Integer id){
	    this.id = id;
	}
 	public Protege getProtege(){
	    return protege;
	}
 	public void setProtege(Protege protege){
	    this.protege = protege;
	}
 	public SignalType getSignalType(){
	    return signalType;
	}
 	public void setSignalType(SignalType signalType){
	    this.signalType = signalType;
	}
 	public Timestamp getRec_time(){
	    return rec_time;
	}
 	public void setRec_time(Timestamp rec_time){
	    this.rec_time = rec_time;
	}

 	public String toString()
 	{
 		return this.id.toString();
 	}
 	
    public String toJSONString() {
	
    return "{ protege:'"+protege.toString()
		+"',signalType:'"+signalType.toString()
		+"',rec_time:'"+rec_time.toString()
		
		    		+"' }";
	}
}