package models;


import javax.persistence.*;

import play.db.ebean.*;
import play.data.validation.*;

@Entity
@Table(name="command_to_device")  
public class CommandToDevice extends Model {
  /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	Integer id;
	
	@Constraints.Required
	String parameters;
	
	@ManyToOne
	SignalType signalType;
	
	@ManyToOne
	Device device;
	
 	public Integer getId(){
	    return id;
	}
 	public void setId(Integer id){
	    this.id = id;
	}
 	public String getParameters(){
	    return parameters;
	}
 	public void setParameters(String parameters){
	    this.parameters = parameters;
	}
 	public SignalType getSignalType(){
	    return signalType;
	}
 	public void setSignalType(SignalType signalType){
	    this.signalType = signalType;
	}
 	public Device getDevice(){
	    return device;
	}
 	public void setDevice(Device device){
	    this.device = device;
	}

    public String toJSONString() {
	
    return "{ parameters:'"+parameters.toString()
		+"',signalType:'"+signalType.toString()
		+"',device:'"+device.toString()
		
		    		+"' }";
	}
	
	
}