package models;

import java.util.List;

import javax.persistence.*;

import play.db.ebean.*;
import play.data.validation.*;

@Entity
@Table(name="signal_type")  
public class SignalType extends Model {
  /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	Integer id;
	  
	@Constraints.Required
	String type;
  
	
	@OneToMany(cascade=CascadeType.ALL,mappedBy="signalType")
	List<MonitorData> monitorData;
	
	@OneToMany(cascade=CascadeType.ALL,mappedBy="signalType")
	List<CommandToDevice> commands;
	
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
 	public String getType(){
	    return type;
	}
 	public void setType(String type){
	    this.type = type;
	}
 	public String toString()
 	{
 		return this.id.toString();
 	}
    public String toJSONString() {
	
    return "{ type:'"+type.toString()

    		+"' }";
    }
}