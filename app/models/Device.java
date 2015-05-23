package models;

import java.util.*;

import javax.persistence.*;

import play.db.ebean.*;
import play.data.format.*;
import play.data.validation.*;

@Entity
@Table(name="device")  
public class Device extends Model {

  /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	Integer id;
	  
	@Constraints.Required
	String mac;
	  
	String version;
	 
	@OneToMany(cascade=CascadeType.ALL,mappedBy="device")
	List<Location> locations;
	
	@OneToMany(cascade=CascadeType.ALL,mappedBy="device")
	List<CommandToDevice> commands;
	
	String type;
	
 	public Integer getId(){
	    return id;
	}
 	public void setId(Integer id){
	    this.id = id;
	}
 	public String getMac(){
	    return mac;
	}
 	public void setMac(String mac){
	    this.mac = mac;
	}
 	public String getVersion(){
	    return version;
	}
 	public void setVersion(String version){
	    this.version = version;
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
    	
        return "{ mac:'"+mac
        		+"',version:'"+version
        		+"',type:'"+type
        		+"' }";
}
  
}